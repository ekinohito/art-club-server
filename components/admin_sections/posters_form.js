import {Field, Form, Formik} from "formik";
import React, {useState} from "react";
import uploader from "../../utils/uploader";
import FileUpload from "../file_upload";
import TableView from "../../containers/table_view";
import {useGetPosters} from "../../hooks/requests/usePosters";
import InputString from "../input_string";

export default function PostersForm() {
    let [file, setFile] = useState(null)
    let { posters, mutate } = useGetPosters()
    return <>
        <h3>Афиши</h3>
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

                <InputString name="name" placeholder="Название мероприятия"/>
                <InputString name="date" placeholder="Дата мероприятия"/>
                <InputString name="description" placeholder="Описание мероприятия"/>
                <FileUpload setFile={setFile}/>
                <button className="btn btn-primary" type="submit">Submit</button>
            </Form>
        </Formik>
        <TableView api="/api/data/posters" mutate={mutate}>{posters}</TableView>
    </>
}