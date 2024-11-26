import React from 'react';
import SectionHeading from '../common/SectionHeading';
import PropertyItem from './items/PropertyItem';
import axios from 'axios';
// import { properties } from '../data/HomeOneData/HomeOneData';
import Button from '../common/Button';
import { useState, useEffect } from 'react';

const Property = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await axios.get('https://api.mannethainfra.com/projects'); // Replace with your API URL
                setProperties(response.data);
            } catch (error) {
                console.error("Error fetching properties", error);
            }
        };
        fetchProperties();
    }, []);

    return (
        <>
            {/* ============================ property Start ==================== */}
            <section className="property padding-y-120">
                <div className="container container-two">

                    <SectionHeading 
                        headingClass="style-left style-dark flx-between align-items-end gap-3"  
                        subtitle="Explore Our Signature Properties"
                        subtitleClass="" 
                        title="Discover the wide range of premium properties that Mannetha Infra offers across the Telugu States." 
                        renderDesc={false}
                        desc=""
                        renderButton={true}
                        buttonLink="/property"
                        buttonClass="btn-main"
                        buttonText="View More"
                    />

                    <div className="row gy-4 property-item-wrapper">
                        {
                            properties.slice(0, 3).map((property, index) => {
                                return (
                                    <div className="col-lg-4 col-sm-6" key={index}>
                                        <PropertyItem
                                            itemClass=""
                                            btnClass=""
                                            property={property}
                                            badgeText={property.dataTypes}
                                            badgeClass="property-item__badge"
                                            iconsClass="text-gradient"
                                            btnRenderBottom={false}
                                            btnRenderRight={true}
                                        />
                                    </div> 
                                )
                            })
                        }
                    </div>

                    <div className="text-center property__btn">
                        <Button 
                            btnLink="/property" 
                            btnClass="btn-main" 
                            btnText="See More " 
                            spanClass="icon-right" 
                            iconClass="fas fa-arrow-right" 
                        />
                    </div>
                </div>
            </section>
            {/* ============================ property End ==================== */}   
        </>
    );
};

export default Property;