import {Field, Form, Formik} from "formik";
import React, {useState} from "react";
import uploader from "../../utils/uploader";
import FileUpload from "../file_upload";
import InputString from "../input_string";

export default function RegistrationForm() {
    return <>
        <h3>Registration</h3>
        <Formik
            initialValues={{
                username: '',
                password: '',
            }}
            onSubmit={async (values) => {
                let response = await fetch('/api/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'json/application;charset=utf-8'
                    },
                    body: JSON.stringify(values)
                });
            }}
        >
            <Form>
                <InputString name="username" placeholder="username"/>
                <InputString name="password" placeholder="password"/>
                <button className="btn btn-primary" type="submit">Submit</button>
            </Form>
        </Formik>
    </>
}