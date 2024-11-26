import React from 'react';
import Header from '../common/Header';
// import FooterTwo from '../common/FooterTwo';
import Footer from '../common/Footer';
import Breadcrumb from '../common/Breadcrumb';
import PropertyPageSection from '../components/PropertyPageSection';
import Cta from '../components/Cta';
import PageTitle from '../common/PageTitle';
import OffCanvas from '../common/OffCanvas';
import MobileMenu from '../common/MobileMenu';

const Property = () => {
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
                pageTitle="Projects"
                // pageName="Projects"
            />

            {/* Property Page Section */}
            <PropertyPageSection/>

            {/* Cta */}
            {/* <Cta ctaClass=""/> */}

            {/* Footer */}
            {/* <FooterTwo/> */}
            <Footer/>

        </main>   
        </>
    );
};

export default Property;