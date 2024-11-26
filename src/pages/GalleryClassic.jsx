import React from 'react';
import Header from '../common/Header';
import FooterTwo from '../common/FooterTwo';
import Breadcrumb from '../common/Breadcrumb';
import Cta from '../components/Cta';
import GalleryClassicSection from '../components/GalleryClassicSection';
import PageTitle from '../common/PageTitle';

const GalleryClassic = () => {
    return (
        <>
        <PageTitle title="Mannetha Infra - Gallery Classic" />

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
                pageTitle="Gallery Classic"
                pageName="Gallery Classic"
            />

            <GalleryClassicSection/> 

            {/* Cta */}
            <Cta ctaClass=""/>

            {/* Footer */}
            <FooterTwo/>
        </>
    );
};

export default GalleryClassic;