import {Field, Form, Formik} from "formik";
import React, {useState} from "react";
import uploader from "../../utils/uploader";
import FileUpload from "../file_upload";
import {useUser} from "../../context/user";

export default function LoginForm() {
    const {login} = useUser();
    return <>
        <h3>Login</h3>
        <Formik
            initialValues={{
                username: '',
                password: '',
            }}
            onSubmit={async (values) => {
                login(values.username, values.password);
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