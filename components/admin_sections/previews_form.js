import {Field, Form, Formik} from "formik";
import React, {useState} from "react";
import uploader from "../../utils/uploader";
import FileUpload from "../file_upload";
import {useGetPreviews} from "../../hooks/requests/usePreviews";
import TableView from "../../containers/table_view";
import InputString from "../input_string";

export default function PreviewsForm() {
    let [file, setFile] = useState(null)
    let { previews, mutate } = useGetPreviews()
    return <>
        <h3>Фотоальбомы</h3>
        <Formik
            initialValues={{
                text: '',
                link: '',
            }}
            onSubmit={async (values) => {
                let file_data = await uploader(file)
                let response = await fetch('/api/data/previews', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'json/application;charset=utf-8'
                    },
                    body: JSON.stringify({...values, preview: file_data.link})
                });
                await mutate()
            }}
        >
            <Form>
                <InputString name="text" placeholder="Название фотоальбома"/>
                <InputString name="link" placeholder="Ссылка на вк альбома"/>
                <FileUpload setFile={setFile}/>
                <button className="btn btn-primary" type="submit">Submit</button>
            </Form>
        </Formik>
        <TableView api="/api/data/previews" mutate={mutate}>{previews}</TableView>
    </>
}