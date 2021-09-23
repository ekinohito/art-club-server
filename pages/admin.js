import React from 'react';
import QuotesForm from "../components/admin_sections/quotes_form";
import PreviewsForm from "../components/admin_sections/previews_form";
import PartnersForm from "../components/admin_sections/partners_form";
import ResidentsForm from "../components/admin_sections/residents_form";
import PostersForm from "../components/admin_sections/posters_form";
import LoginForm from "../components/admin_sections/login_form";
import RegistrationForm from "../components/admin_sections/registration_form";
import {UserProvider, useUser} from "../context/user";
import Page from "../containers/page";

const AdminLayout = () => {
    const {user, logout} = useUser();

    return (
        <Page title="Admin Club">
            <div className="container">
                {
                    user
                        ?
                        <>
                            <div className="d-flex justify-content-end">
                                <button className="btn btn-outline-danger" onClick={logout}>
                                    Выйти
                                </button>
                            </div>
                            <QuotesForm/>
                            <PreviewsForm/>
                            <PartnersForm/>
                            <ResidentsForm/>
                            <PostersForm/>

                        </>
                        :
                        <>

                            <LoginForm/>
                            <RegistrationForm/>
                        </>
                }
            </div>
        </Page>
    )
}

export default function Admin() {

    return (
        <UserProvider>
            <AdminLayout/>
        </UserProvider>

    )
}