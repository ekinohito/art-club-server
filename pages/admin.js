import React from 'react';
import QuotesForm from "../components/admin_sections/quotes_form";
import PreviewsForm from "../components/admin_sections/previews_form";
import PartnersForm from "../components/admin_sections/partners_form";
import ResidentsForm from "../components/admin_sections/residents_form";
import PostersForm from "../components/admin_sections/posters_form";
import LoginForm from "../components/admin_sections/login_form";
import RegistrationForm from "../components/admin_sections/registration_form";

export default function Admin() {
    return (
        <div className="d-flex flex-column overflow-hidden">
            <LoginForm/>
            <QuotesForm/>
            <PreviewsForm/>
            <PartnersForm/>
            <ResidentsForm/>
            <PostersForm/>
            <RegistrationForm/>
            http://images.fineartamerica.com/images-medium-large/surprised-cat-eric-hacke.jpg
        </div>
    )
}