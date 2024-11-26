import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Breadcrumb from '../common/Breadcrumb';
import Cta from '../components/Cta';
import ProjectDetailsSection from '../components/ProjectDetailsSection';
import { useParams } from 'react-router-dom';
import PageTitle from '../common/PageTitle';
import OffCanvas from '../common/OffCanvas';
import MobileMenu from '../common/MobileMenu';

const ProjectDetails = () => {

    const {title} = useParams(); 

    return (
        <>
        <PageTitle title="Mannetha Infra - Project Details" />
        <OffCanvas/>
        <MobileMenu/>
        <main className="body-bg">
            
            {/* Header */}
            <Header 
                headerClass="light-header has-border" 
                logoBlack={false}
                logoWhite={true}
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
                pageTitle="Property Details"
                pageName={title}
            />

            {/* Project Details Section */}
            <ProjectDetailsSection/>

            {/* Cta */}
            <Cta ctaClass=""/>

            {/* Footer */}
            <Footer/>

        </main>   
        </>
    );
};

export default ProjectDetails;