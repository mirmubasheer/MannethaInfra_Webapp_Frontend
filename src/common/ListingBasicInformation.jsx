import React from 'react';

const ListingBasicInformation = ({ formData, handleChange }) => {
    return (
        <div className="card-item" id="basicInformation">
            <div className="card common-card">
                <div className="card-header">
                    <h6 className="title mb-0">Property Basic Information</h6>
                </div>
                <div className="card-body">
                    <div className="row gy-4">
                        <div className="col-sm-12">
                            <label htmlFor="propertyTitle" className="form-label">Property Title</label>
                            <input
                                type="text"
                                className="common-input"
                                id="propertyTitle"
                                placeholder="Property Title"
                                value={formData.propertyTitle}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col-12">
                            <label htmlFor="Description" className="form-label">Description</label>
                            <textarea
                                className="common-input"
                                id="Description"
                                placeholder="Your Description"
                                value={formData.Description}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col-sm-6 col-xs-6">
                            <label htmlFor="Type" className="form-label">Type</label>
                            <div className="select-has-icon icon-black">
                                <select
                                    className="select common-input"
                                    id="Type"
                                    value={formData.Type}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled>Select Type</option>
                                    <option value="Apartment">Apartment</option>
                                    <option value="Villas">Villas</option>
                                    <option value="Farmlands">Farmlands</option>
                                    <option value="Resorts">Resorts</option>
                                    <option value="Commercial Spaces">Commercial Spaces</option>

                                </select>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xs-6">
                            <label htmlFor="Price" className="form-label">Price</label>
                            <input
                                type="number"
                                className="common-input"
                                id="Price"
                                placeholder="Rupees"
                                value={formData.Price}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-sm-6 col-xs-6">
                            <label htmlFor="Area" className="form-label">Location</label>
                            <input
                                type="text"
                                className="common-input"
                                id="Location"
                                placeholder="Location"
                                value={formData.Area}
                                onChange={handleChange}
                            />
                        </div>
                        {/* <div className="col-sm-12">
                            <label htmlFor="Rooms" className="form-label">Rooms</label>
                            <div className="select-has-icon icon-black">
                                <select
                                    className="select common-input"
                                    id="Rooms"
                                    value={formData.Rooms}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>Select Rooms</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                   
                                </select>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingBasicInformation;
