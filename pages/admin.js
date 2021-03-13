import React from 'react';
import QuotesForm from "../components/admin_sections/quotes_form";
import PreviewsForm from "../components/admin_sections/previews_form";
import PartnersForm from "../components/admin_sections/partners_form";
import ResidentsForm from "../components/admin_sections/residents_form";

export default function Admin() {
    return (
        <div className="d-flex flex-column overflow-hidden">
            <QuotesForm/>
            <PreviewsForm/>
            <PartnersForm/>
            <ResidentsForm/>
            http://images.fineartamerica.com/images-medium-large/surprised-cat-eric-hacke.jpg
        </div>
    )
}