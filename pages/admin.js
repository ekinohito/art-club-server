import React from 'react';
import {useState} from 'react'
import {Formik, Form, Field} from "formik";

export default function Gallery() {
    let [file, setFile] = useState(null)
    return (
        <div className="d-flex flex-column overflow-hidden">
            <h3>Quotes</h3>
            <Formik
                initialValues={{
                    quote: '',
                }}
                onSubmit={async (values) => {
                    let response = await fetch('/api/quotes', {
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

            <h3>Partners</h3>
            <Formik
                initialValues={{
                    title: '',
                    link: '',
                    image: '',
                }}
                onSubmit={async (values) => {
                    let data = new FormData()
                    data.append('file', file)
                    let file_upload = await fetch('/api/upload', {
                        method: 'POST',
                        body: data
                    })
                    let response = await fetch('/api/partners', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'json/application;charset=utf-8'
                        },
                        body: JSON.stringify(values)
                    });
                }}
            >
                <Form>
                    <label htmlFor="title">Title</label>
                    <Field id="title" name="title" placeholder="Jane" />

                    <label htmlFor="link">Link</label>
                    <Field id="link" name="link" placeholder="Doe" />

                    <label htmlFor="image">Image</label>
                    <Field id="image" name="image" placeholder="Doe" />
                    <input id="file" name="file" type="file" onChange={(event) => {
                        setFile(event.currentTarget.files[0]);
                    }} />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>http://images.fineartamerica.com/images-medium-large/surprised-cat-eric-hacke.jpg
        </div>
    )
}