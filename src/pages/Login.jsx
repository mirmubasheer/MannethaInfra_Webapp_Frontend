import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Breadcrumb from '../common/Breadcrumb';
import Cta from '../components/Cta';
// import LoginRegister from '../components/LoginRegister';
import PageTitle from '../common/PageTitle';
import LoginSection from '../components/LoginSection';
import MobileMenu from '../common/MobileMenu';
import OffCanvas from '../common/OffCanvas';


const Login = () => {
    return (
        <>
        <PageTitle title="Mannetha Infra" />
        <OffCanvas/>
        <MobileMenu/>
        <main className="body-bg">
            
            {/* Header */}
            <Header 
                headerClass="light-header has-border" 
                logoBlack={true}
                // logoWhite={true}
                headerMenusClass="mx-auto"
                btnClass="btn btn-outline-main btn-outline-main-light d-lg-block d-none"
                btnLink="/contact"
                btnText="Visit Us"
                spanClass="icon-right text-gradient" 
                showHeaderBtn={true}
                showOffCanvasBtn={false}
                offCanvasBtnClass=""
                showContactNumber={false}
            />

            {/* BreadCrumb */}
            <Breadcrumb 
                pageTitle="Login"
                pageName="Login"
            />

            <LoginSection/>
            
            {/* Cta */}
            <Cta ctaClass=""/>

            {/* Footer */}
            <Footer/>

        </main>   
        </>
    );
};

export default Login;