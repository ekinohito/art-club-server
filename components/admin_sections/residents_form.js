import {Field, Form, Formik} from "formik";
import React, {useState} from "react";
import uploader from "../../utils/uploader";
import FileUpload from "../file_upload";
import TableView from "../../containers/table_view";
import {useGetResidents} from "../../hooks/requests/useResidents";

export default function ResidentsForm() {
    let [file, setFile] = useState(null)
    let { residents, mutate } = useGetResidents()
    return <>
        <h3>Residents</h3>
        <Formik
            initialValues={{
                name: '',
                href: '',
            }}
            onSubmit={async (values) => {
                let file_data = await uploader(file)
                let response = await fetch('/api/data/residents', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'json/application;charset=utf-8'
                    },
                    body: JSON.stringify({...values, iconName: file_data.link})
                });
                await mutate()
            }}
        >
            <Form>
                <label htmlFor="name">Name</label>
                <Field id="name" name="name" placeholder="Jane" />
                <label htmlFor="href">Href</label>
                <Field id="href" name="href" placeholder="Doe" />
                <FileUpload setFile={setFile}/>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
        <TableView api="/api/data/residents" mutate={mutate}>{residents}</TableView>
    </>
}