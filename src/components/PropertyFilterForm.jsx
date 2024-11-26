import React, { useContext } from 'react';
import { PropertyFilterContext } from '../contextApi/PropertyFilterContext';
import ListGridButtons from '../common/ListGridButtons';


const PropertyFilterForm = () => {

    const {dataStatus, handleDataStatusChange, dataType, handleDataTypeChange, dataLocation, handleDataLocationChange} = useContext(PropertyFilterContext); 

    return (
        <>
            <form action="#">
                <div className="row gy-4 ">

                    <div className="col-lg-2 col-md-3 col-sm-6 col-xs-6">
                        <div className="select-has-icon">
                            <select className="form-select common-input common-input--withLeftIcon pill text-gray-800" onChange={handleDataStatusChange} value={dataStatus}>
                                <option value="Status" disabled defaultValue>Status</option>
                                <option value="All">All</option>
                                <option value="Buy">Buy</option>
                                <option value="Rent">Rent</option>
                            </select>
                            <span className="input-icon input-icon--left text-gradient">
                                <img src="assets/images/icons/status.svg" alt=""/>
                            </span>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                        <div className="select-has-icon">
                            <select className="form-select common-input common-input--withLeftIcon pill text-gray-800" onChange={handleDataTypeChange} value={dataType}>
                                <option value="Type" disabled defaultValue>Type</option>
                                <option value="All">All</option>
                                <option value="Apartments">Apartments</option>
                                <option value="Commercial">Commercial Spaces</option>
                                <option value="FarmLands">FarmLands</option>
                                <option value="OpenPlots">Open Plots</option>
                                <option value="Villa">Villa</option>
                                <option value="VillaPlots">Villa Plots</option>

                            </select>
                            <span className="input-icon input-icon--left text-gradient">
                                <img src="assets/images/icons/type.svg" alt=""/>
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-3 col-sm-6 col-xs-6">
                        <div className="select-has-icon">
                            <select className="form-select common-input common-input--withLeftIcon pill text-gray-800" onChange={handleDataLocationChange} value={dataLocation}>
                                
                                <option value="All" disabled defaultValue> City</option>
                                <option value="Visakhapatnam" data-location="Visakhapatnam">Madhurawada -Visakhapatnam</option>
                                <option value="R R District" data-location="R R District">Maheshwaram Mandal, R R District</option>
                                <option value="Hyderabad" data-location="Hyderabad">Kondapur - Hyderabad</option>
                                {/* <option value="Korea" data-location="Korea">Korea</option>
                                <option value="Singapore" data-location="Singapore">Singapore</option>
                                <option value="Germany" data-location="Germany">Germany</option>
                                <option value="Thailand" data-location="Thailand">Thailand</option> */}
                            </select>
                            <span className="input-icon input-icon--left text-gradient">
                                <img src="assets/images/icons/location.svg" alt=""/>
                            </span>
                        </div>
                    </div>
                    {/* <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                        <div className="position-relative">
                            <input type="text" className="common-input common-input--withLeftIcon pill text-gray-800" placeholder="Advanced Filter"/>
                            <span className="input-icon input-icon--left text-gradient">
                                <img src="assets/images/icons/filter.svg" alt=""/>
                            </span>
                        </div>
                    </div> */}
                      {/* List Grid Layout buttons */}
                      <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                      <ListGridButtons/>
                      </div>
                </div>
            </form>   
        </>
    );
};

export default PropertyFilterForm;