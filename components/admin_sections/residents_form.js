import {Field, Form, Formik} from "formik";
import React, {useState} from "react";
import uploader from "../../utils/uploader";
import FileUpload from "../file_upload";
import TableView from "../../containers/table_view";
import {useGetResidents} from "../../hooks/requests/useResidents";
import InputString from "../input_string";

export default function ResidentsForm() {
    let [file, setFile] = useState(null)
    let { residents, mutate } = useGetResidents()
    return <>
        <h3>Резиденты</h3>
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
                <InputString name="name" placeholder="Имя"/>
                <InputString name="href" placeholder="Ссылка на вк"/>
                <FileUpload setFile={setFile}/>
                <button className="btn btn-primary" type="submit">Submit</button>
            </Form>
        </Formik>
        <TableView api="/api/data/residents" mutate={mutate}>{residents}</TableView>
    </>
}