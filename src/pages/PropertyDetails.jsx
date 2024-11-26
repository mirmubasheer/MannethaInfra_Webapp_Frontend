// import React from 'react';
// import Header from '../common/Header';
// import Breadcrumb from '../common/Breadcrumb';
// // import Cta from '../components/Cta';
// import PropertyDetailsSection from '../components/PropertyDetailsSection';
// import { useParams } from 'react-router-dom';
// import PageTitle from '../common/PageTitle';
// import { properties } from '../data/HomeOneData/HomeOneData';
// // import FooterTwo from '../common/FooterTwo';
// import Footer from '../common/Footer';
// import MobileMenu from '../common/MobileMenu';
// import OffCanvas from '../common/OffCanvas';


// const PropertyDetails = () => {

//     const {id} = useParams(); 

//         // Find the property based on the id
//     const property = properties.find(prop => prop.id === parseInt(id));

//     if (!property) {
//         return <div>Property not found</div>;
//     }


//     console.log(id);
//     console.log(property);



    
//     return (
//         <>
//         <PageTitle title="Mannetha Infra" />
//         <OffCanvas/>
//         <MobileMenu/>
//             {/* Header */}
//             <Header 
//                 headerClass="light-header has-border" 
//                 logoBlack={true}
//                 // logoWhite={true}
//                 headerMenusClass="mx-auto"
//                 btnClass="btn btn-outline-main btn-outline-main-light d-lg-block d-none"
//                 btnLink="/contact"
//                 btnText="Visit Us"
//                 spanClass="icon-right text-gradient" 
//                 showHeaderBtn={true}
//                 showOffCanvasBtn={false}
//                 offCanvasBtnClass=""
//                 showContactNumber={false}
//             />

//             {/* BreadCrumb */}
//             <Breadcrumb 
//                 pageTitle="Project Details"
//                 // pageName={property.title}
//             />

//             {/* Property Details Section */}
//             <PropertyDetailsSection property={property} />

//             {/* Cta */}
//             {/* <Cta ctaClass=""/> */}

//             {/* Footer */}
//             {/* <FooterTwo/> */}
//             <Footer/>
//         </>
//     );
// };

// export default PropertyDetails;


import React, { useEffect, useState } from 'react';
import Header from '../common/Header';
import Breadcrumb from '../common/Breadcrumb';
import PropertyDetailsSection from '../components/PropertyDetailsSection';
import PageTitle from '../common/PageTitle';
import Footer from '../common/Footer';
import MobileMenu from '../common/MobileMenu';
import OffCanvas from '../common/OffCanvas';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PropertyDetails = () => {
    const { id } = useParams();
    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const response = await axios.get(`https://api.mannethainfra.com/projects/${id}`);
                setProperty(response.data);
                setLoading(false);
            } catch (err) {
                setError('Property not found');
                setLoading(false);
            }
        };

        fetchProperty();
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <PageTitle title="Mannetha Infra" />
            <OffCanvas />
            <MobileMenu />
            {/* Header */}
            <Header
                headerClass="light-header has-border"
                logoBlack={true}
                headerMenusClass="mx-auto"
                btnClass="btn btn-outline-main btn-outline-main-light d-lg-block d-none"
                btnLink="/contact"
                btnText="Visit Us"
                spanClass="icon-right text-gradient"
                showHeaderBtn={true}
                showOffCanvasBtn={false}
            />

            {/* Breadcrumb */}
            <Breadcrumb pageTitle="Project Details" />

            {/* Property Details Section */}
            <PropertyDetailsSection property={property} />

            {/* Footer */}
            <Footer />
        </>
    );
};

export default PropertyDetails;
