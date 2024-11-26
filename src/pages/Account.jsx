import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Breadcrumb from '../common/Breadcrumb';
import Cta from '../components/Cta';
import AccountSection from '../components/AccountSection';
import PageTitle from '../common/PageTitle';
import MobileMenu from '../common/MobileMenu';
import OffCanvas from '../common/OffCanvas';


const Account = () => {
    return (
        <>
        <PageTitle title="Mannetha Infra - Account Page" />
        <OffCanvas/>
        <MobileMenu/>
        <main className="body-bg">
            
            {/* Header */}
            <Header 
                headerClass="body-bg" 
                logoBlack={true}
                logoWhite={false}
                headerMenusClass="mx-auto"
                btnClass="btn btn-outline-main btn-outline-main-dark d-lg-block d-none"
                btnLink="/add-new-listing"
                btnText="Add Listing"
                spanClass="icon-right text-gradient" 
                showHeaderBtn={true}
                showOffCanvasBtn={false}
                offCanvasBtnClass=""
                showContactNumber={false}
            />

            {/* BreadCrumb */}
            <Breadcrumb 
                pageTitle="Account"
                pageName="Account"
            />

            {/* Account Section */}
            <AccountSection/>    

            {/* Cta */}
            <Cta ctaClass=""/>

            {/* Footer */}
            <Footer/>

        </main>   
        </>
    );
};

export default Account;