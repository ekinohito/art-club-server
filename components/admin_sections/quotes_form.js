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
                await mutate()
            }}
        >
            <Form>
                <label htmlFor="quote">Quote</label>
                <Field id="quote" name="quote" placeholder="ya s'yel deda" />
                <button type="submit">Submit</button>
            </Form>
        </Formik>
        <TableView symbols={100}>{quotes?.map(value => {return {quote: value}})}</TableView>
    </>
}