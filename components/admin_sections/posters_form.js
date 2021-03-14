import {Field, Form, Formik} from "formik";
import React, {useState} from "react";
import uploader from "../../utils/uploader";
import FileUpload from "../file_upload";
import TableView from "../../containers/table_view";
import {useGetPosters} from "../../hooks/requests/usePosters";

export default function PostersForm() {
    let [file, setFile] = useState(null)
    let { posters, mutate } = useGetPosters()
    return <>
        <h3>Posters</h3>
        <Formik
            initialValues={{
                name: '',
                date: '',
                description: ''
            }}
            onSubmit={async (values) => {
                let file_data = await uploader(file)
                let response = await fetch('/api/data/posters', {
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
                <label htmlFor="date">Date</label>
                <Field id="date" name="date" placeholder="Doe" />
                <label htmlFor="description">Description</label>
                <Field id="description" name="description" placeholder="Doe" />
                <FileUpload setFile={setFile}/>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
        <TableView api="/api/data/posters" mutate={mutate}>{posters}</TableView>
    </>
}