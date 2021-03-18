import {Field, Form, Formik} from "formik";
import React from "react";
import {useUser} from "../../context/user";
import InputString from "../input_string";

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
                <InputString name="username" placeholder="username"/>
                <InputString name="password" placeholder="password"/>
                <button className="btn btn-primary" type="submit">Submit</button>
            </Form>
        </Formik>
    </>
}