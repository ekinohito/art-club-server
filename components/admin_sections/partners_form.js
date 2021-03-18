import {Field, Form, Formik} from "formik";
import React, {useState} from "react";
import uploader from "../../utils/uploader";
import FileUpload from "../file_upload";
import {useGetPartners} from "../../hooks/requests/usePartners";
import Partner from "../partner";
import TableView from "../../containers/table_view";
import InputString from "../input_string";

export default function PartnersForm() {
    let [file, setFile] = useState(null)
    let { partners, mutate } = useGetPartners()
    return <>
        <h3>Наши друзья</h3>
        <Formik
            initialValues={{
                title: '',
                link: '',
            }}
            onSubmit={async (values) => {
                let file_data = await uploader(file)
                let response = await fetch('/api/data/partners', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'json/application;charset=utf-8'
                    },
                    body: JSON.stringify({...values, image: file_data.link})
                });
                await mutate()
            }}
        >
            <Form>
                <InputString name="title" placeholder="Подпись"/>
                <InputString name="link" placeholder="Ссылка на партнера"/>
                <FileUpload setFile={setFile}/>
                <button className="btn btn-primary" type="submit">Submit</button>
            </Form>
        </Formik>
        <TableView api="/api/data/partners" mutate={mutate}>{partners}</TableView>
    </>
}