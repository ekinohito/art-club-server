import {Field, Form, Formik} from "formik";
import React from "react";
import {useGetQuotes} from "../../hooks/requests/useQuotes";
import TableView from "../../containers/table_view";

export default function QuotesForm() {
    let { quotes, mutate } = useGetQuotes()
    return <>
        <h3>Quotes</h3>
        <Formik
            initialValues={{
                text: '',
            }}
            onSubmit={async (values) => {
                let response = await fetch('/api/data/quotes', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'json/application;charset=utf-8'
                    },
                    body: JSON.stringify(values)
                });
                await mutate()
            }}
        >
            <Form>
                <label htmlFor="text">Text</label>
                <Field id="text" name="text" placeholder="ya s'yel deda" />
                <button type="submit">Submit</button>
            </Form>
        </Formik>
        <TableView symbols={100} api="/api/data/quotes" mutate={mutate}>{quotes}</TableView>
    </>
}