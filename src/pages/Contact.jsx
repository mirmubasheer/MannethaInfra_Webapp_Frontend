import React from 'react';
import Header from '../common/Header';
// import FooterTwo from '../common/FooterTwo';
import Footer from '../common/Footer';
import Breadcrumb from '../common/Breadcrumb';
// import Cta from '../components/Cta';
import ContactTop from '../components/ContactTop';
import ContactUsSection from '../components/ContactUsSection';
import PageTitle from '../common/PageTitle';
import { HelmetProvider } from 'react-helmet-async';
import OffCanvas from '../common/OffCanvas';
import MobileMenu from '../common/MobileMenu';

const Contact = () => {
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
                    pageTitle="Contact Us"
                    // pageName="Contact Us"
                />

                {/* Contact Top */}
                <ContactTop/>

                <div className="contact-map address-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1952020.2428360526!2d79.5380599115993!3d17.14394601100891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3944a9dee2bc19%3A0x1d83af96b3bcff84!2sKalyani%20Grand%20-%20Unit%20of%20Kalyani%20Mess!5e0!3m2!1sen!2sin!4v1724679786773!5m2!1sen!2sin"></iframe>
                </div>

                {/* Contact Us Section */}
                <ContactUsSection/>

                {/* Cta */}
                {/* <Cta ctaClass=""/> */}

                {/* Footer */}
                {/* <FooterTwo/> */}
                <Footer/>

            </main>   
        </>
    );
};

export default Contact;
