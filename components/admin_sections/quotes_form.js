import {Field, Form, Formik} from "formik";
import React from "react";

export default function QuotesForm() {
    return <>
        <h3>Quotes</h3>
        <Formik
            initialValues={{
                quote: '',
            }}
            onSubmit={async (values) => {
                let response = await fetch('/api/data/quotes', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'text/html;charset=utf-8'
                    },
                    body: values.quote
                });
            }}
        >
            <Form>
                <label htmlFor="quote">Quote</label>
                <Field id="quote" name="quote" placeholder="ya s'yel deda" />
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    </>
}