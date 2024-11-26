import React from 'react';
import Header from '../common/Header';
// import FooterTwo from '../common/FooterTwo';
import Breadcrumb from '../common/Breadcrumb';
// import Cta from '../components/Cta';
import Footer from '../common/Footer';
import BlogClassicSection from '../components/BlogClassicSection';
import PageTitle from '../common/PageTitle';
import OffCanvas from '../common/OffCanvas';
import MobileMenu from '../common/MobileMenu';

const BlogClassic = () => {
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
                pageTitle="Blog Classic"
                // pageName="Blog Classic"
            />

            <BlogClassicSection/> 

            {/* Cta */}
            {/* <Cta ctaClass=""/> */}

            {/* Footer */}
            {/* <FooterTwo/> */}
            <Footer/>
        </>
    );
};

export default BlogClassic;