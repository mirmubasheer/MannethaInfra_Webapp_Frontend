import React from 'react';
import { addAmenities } from '../data/OthersPageData/OthersPageData';

const ListingPropertyInformation = ({ formData, handleChange, handleAmenityChange }) => {
    return (
        <>
            <div className="card-item" id="propertyInformation">
                <div className="card common-card">
                    <div className="card-header">
                        <h6 className="title mb-0">Details Information</h6>
                    </div>
                    <div className="card-body">
                        <div className="row gy-4">
                            <div className="col-xl-3 col-sm-6 col-xs-6">
                                <label htmlFor="AreaSize" className="form-label">Area Size</label>
                                <input 
                                    type="text" 
                                    className="common-input" 
                                    id="AreaSize" 
                                    placeholder="Area Size"
                                    value={formData.AreaSize} 
                                    onChange={handleChange} 
                                />
                            </div>
                      
                            {/* <div className="col-xl-3 col-sm-6 col-xs-6">
                                <label htmlFor="LandArea" className="form-label">Land Area</label>
                                <input 
                                    type="text" 
                                    className="common-input" 
                                    id="LandArea" 
                                    placeholder="Land Area"
                                    value={formData.LandArea} 
                                    onChange={handleChange} 
                                />
                            </div> */}
                            <div className="col-xl-3 col-sm-6 col-xs-6">
                                <label htmlFor="Bedrooms" className="form-label">Bedrooms</label>
                                <input 
                                    type="text" 
                                    className="common-input" 
                                    id="Bedrooms" 
                                    placeholder="Bedrooms"
                                    value={formData.Bedrooms} 
                                    onChange={handleChange} 
                                />
                            </div>
                            <div className="col-xl-3 col-sm-6 col-xs-6">
                                <label htmlFor="Bathrooms" className="form-label">Bathrooms</label>
                                <input 
                                    type="text" 
                                    className="common-input" 
                                    id="Bathrooms" 
                                    placeholder="Bathrooms"
                                    value={formData.Bathrooms} 
                                    onChange={handleChange} 
                                />
                            </div>
                          
                          
                            <div className="col-12">
                                <h6 className="checkboxes__title mt-4 fw-500 font-18">Amenities</h6>
                                <div className="row gy-3 checkboxes">
                                    {
                                        addAmenities.reduce((prevValue, currValue, ItemIndex) => {
                                            // Dividing amenities into groups
                                            if (ItemIndex % 1 === 0) {
                                                prevValue.push([]);
                                            }
                                            prevValue[prevValue.length - 1].push(currValue);
                                            return prevValue;
                                        }, []).map((amenityGroup, groupIndex) => (
                                            <div className="col-md-4 col-sm-6 col-xs-6" key={groupIndex}>
                                                {
                                                    amenityGroup.map((amenity, amenityIndex) => (
                                                        <div className="common-check" key={amenityIndex}>
                                                            <input 
                                                                className="form-check-input" 
                                                                type="checkbox" 
                                                                id={amenity.text} 
                                                                checked={formData.amenity.includes(amenity.text)}
                                                                onChange={() => handleAmenityChange(amenity.text)}  // Changed here to pass the amenity text
                                                            />
                                                            <label className="form-check-label" htmlFor={amenity.text}> 
                                                                {amenity.text} 
                                                            </label>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    );
};

export default ListingPropertyInformation;
