import {Field, Form, Formik} from "formik";
import React, {useState} from "react";
import uploader from "../../utils/uploader";
import FileUpload from "../file_upload";

export default function LoginForm() {
    return <>
        <h3>Login</h3>
        <Formik
            initialValues={{
                username: '',
                password: '',
            }}
            onSubmit={async (values) => {
                let response = await fetch('/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'json/application;charset=utf-8'
                    },
                    body: JSON.stringify(values)
                });
            }}
        >
            <Form>
                <label htmlFor="username">Username</label>
                <Field id="username" name="username" placeholder="admin" />
                <label htmlFor="password">Password</label>
                <Field id="password" name="password" placeholder="admin" />
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    </>
}