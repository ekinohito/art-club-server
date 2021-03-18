import {Field, Form, Formik} from "formik";
import React from "react";
import {useGetQuotes} from "../../hooks/requests/useQuotes";
import TableView from "../../containers/table_view";
import InputString from "../input_string";

export default function QuotesForm() {
    let { quotes, mutate } = useGetQuotes()
    return <>
        <h3>Цитаты</h3>
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
                <InputString name="text" placeholder="Текст цитаты"/>
                <button className="btn btn-primary" type="submit">Submit</button>
            </Form>
        </Formik>
        <TableView symbols={100} api="/api/data/quotes" mutate={mutate}>{quotes}</TableView>
    </>
}