import {Field, Form, Formik} from "formik";
import React, {useState} from "react";
import uploader from "../../utils/uploader";
import FileUpload from "../file_upload";
import {useGetPartners} from "../../hooks/requests/usePartners";
import Partner from "../partner";
import TableView from "../../containers/table_view";

export default function PartnersForm() {
    let [file, setFile] = useState(null)
    let { partners, mutate } = useGetPartners()
    return <>
        <h3>Partners</h3>
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
                <label htmlFor="title">Title</label>
                <Field id="title" name="title" placeholder="Jane" />
                <label htmlFor="link">Link</label>
                <Field id="link" name="link" placeholder="Doe" />
                <FileUpload setFile={setFile}/>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
        <TableView api="/api/data/partners" mutate={mutate}>{partners}</TableView>
    </>
}