import React from 'react';
import Header from '../common/Header';
// import FooterTwo from '../common/FooterTwo';
import Footer from '../common/Footer';
import Breadcrumb from '../common/Breadcrumb';
// import Cta from '../components/Cta';
import AboutThree from '../components/AboutThree';
import PropertyTypeThree from '../components/PropertyTypeThree';
import Team from '../components/Team';
import PageTitle from '../common/PageTitle';
import MoreAbout from '../components/MoreAbout';
import MoreAbout1 from '../components/MoreAbout1';
import MoreAbout2 from '../components/MoreAbout2';
import MobileMenu from '../common/MobileMenu';
import OffCanvas from '../common/OffCanvas';

const AboutUs = () => {
    return (
        <>
            <PageTitle title="Mannetha Infra" />
            <OffCanvas/>
            <MobileMenu/>
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
                pageTitle="About Us"
                // pageName="About Us"
            />

            <AboutThree/>    

            <MoreAbout/>
            <Team/>

            <MoreAbout1/>

            <MoreAbout2/>
            <PropertyTypeThree/> 
    
            {/* <Cta ctaClass=""/> */}

            {/* Footer */}
            {/* <FooterTwo/> */}
            <Footer/>
        </>
    );
};

export default AboutUs;