
// import React from 'react';
// import PropertyItem from './items/PropertyItem';
// import { properties } from '../data/HomeOneData/HomeOneData';
// import Pagination from '../common/Pagination';
// import PropertyFilterBottom from './PropertyFilterBottom';
// import PropertyFilterForm from './PropertyFilterForm';

// const PropertyPageSection = () => {
//     return (
//         <>
//             <section className="property bg-gray-100 padding-y-120">
//                 <div className="container container-two">

//                    {/* Property Filter */}
//                     <div className="property-filter">
//                         <PropertyFilterForm/>
//                         <PropertyFilterBottom/>
//                     </div>  

//                     <div className="list-grid-item-wrapper property-item-wrapper show-two-item row gy-4">
//                         {
//                             properties.map((property, index) => {
//                                 return (
//                                     <div className="col-lg-4 col-sm-6" key={index}>
//                                         <PropertyItem 
//                                             itemClass="property-item style-two style-shaped"
//                                             btnClass="text-gradient fw-semibold"
//                                             property={property}
//                                             badgeText={property.dataTypes}
//                                             badgeClass="property-item__badge"
//                                             iconsClass="text-gradient"
//                                             btnRenderBottom={true}
//                                             btnRenderRight={false}
//                                         />
//                                     </div> 
//                                 )
//                             })
//                         }
//                     </div>

//                     {/* Pagination */}
//                     <Pagination/>

//                 </div>
//             </section>   
//         </>
//     );
// };

// export default PropertyPageSection;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import PropertyItem from './items/PropertyItem';
// import Pagination from '../common/Pagination';
// import PropertyFilterBottom from './PropertyFilterBottom';
// import PropertyFilterForm from './PropertyFilterForm';

// const PropertyPageSection = () => {
//     const [properties, setProperties] = useState([]);

//     useEffect(() => {
//         // Fetch the property data using Axios
//         const fetchProperties = async () => {
//             try {
//                 const response = await axios.get('https://api.mannethainfra.com/projects'); // Replace with your API URL
//                 setProperties(response.data);
//             } catch (error) {
//                 console.error("Error fetching properties", error);
//             }
//         };
//         fetchProperties();
//     }, []);

//     return (
//         <section className="property bg-gray-100 padding-y-120">
//             <div className="container container-two">
//                 {/* Property Filter */}
//                 <div className="property-filter">
//                     <PropertyFilterForm />
//                     <PropertyFilterBottom />
//                 </div>

//                 <div className="list-grid-item-wrapper property-item-wrapper show-two-item row gy-4">
//                     {properties.map((property, index) => (
//                         <div className="col-lg-4 col-sm-6" key={index}>
//                             <PropertyItem 
//                                 itemClass="property-item style-two style-shaped"
//                                 btnClass="text-gradient fw-semibold"
//                                 property={property}
//                                 badgeText={property.Type}
//                                 badgeClass="property-item__badge"
//                                 iconsClass="text-gradient"
//                                 btnRenderBottom={true}
//                                 btnRenderRight={false}
//                             />
//                         </div>
//                     ))}
//                 </div>

//                 {/* Pagination */}
//                 <Pagination />
//             </div>
//         </section>
//     );
// };

// export default PropertyPageSection;




import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropertyItem from './items/PropertyItem';
import Pagination from '../common/Pagination';
import PropertyFilterBottom from './PropertyFilterBottom';
import PropertyFilterForm from './PropertyFilterForm';

const PropertyPageSection = () => {
    const [properties, setProperties] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [propertiesPerPage] = useState(6); // Number of properties per page

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

    // Get the current properties to display based on the current page
    const indexOfLastProperty = currentPage * propertiesPerPage;
    const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
    const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <section className="property bg-gray-100 padding-y-120">
            <div className="container container-two">
                {/* Property Filter */}
                <div className="property-filter">
                    <PropertyFilterForm />
                    <PropertyFilterBottom />
                </div>

                <div className="list-grid-item-wrapper property-item-wrapper show-two-item row gy-4">
                    {currentProperties.map((property, index) => (
                        <div className="col-lg-4 col-sm-6" key={index}>
                            <PropertyItem 
                                itemClass="property-item style-two style-shaped"
                                btnClass="text-gradient fw-semibold"
                                property={property}
                                badgeText={property}
                                badgeClass="property-item__badge"
                                iconsClass="text-gradient"
                                btnRenderBottom={true}
                                btnRenderRight={false}
                            />
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <Pagination 
                    propertiesPerPage={propertiesPerPage}
                    totalProperties={properties.length}
                    paginate={paginate}
                    currentPage={currentPage}
                />
            </div>
        </section>
    );
};

export default PropertyPageSection;

