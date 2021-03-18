import React from 'react';
import Head from "next/head";

export default function Page({children, title="Art Club"}) {
    return (
        <div className="d-flex flex-column overflow-hidden">
            <Head>
                <title>{title}</title>
                <link rel="shortcut icon" href="/assets/icons/logo.png" />
            </Head>
            {children}
        </div>
    )
}
