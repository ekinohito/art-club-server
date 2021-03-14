import {Field, Form, Formik} from "formik";
import React, {useState} from "react";
import uploader from "../../utils/uploader";
import FileUpload from "../file_upload";
import {useGetPreviews} from "../../hooks/requests/usePreviews";
import TableView from "../../containers/table_view";

export default function PreviewsForm() {
    let [file, setFile] = useState(null)
    let { previews, mutate } = useGetPreviews()
    return <>
        <h3>Previews</h3>
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
                <label htmlFor="text">Text</label>
                <Field id="text" name="text" placeholder="Jane" />
                <label htmlFor="link">Link</label>
                <Field id="link" name="link" placeholder="Doe" />
                <FileUpload setFile={setFile}/>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
        <TableView api="/api/data/previews" mutate={mutate}>{previews}</TableView>
    </>
}