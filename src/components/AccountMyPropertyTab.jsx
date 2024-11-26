// import React from 'react';
// import Pagination from '../common/Pagination';
// import { propertyTables } from '../data/OthersPageData/OthersPageData';
// import { Link } from 'react-router-dom';

// const AccountMyPropertyTab = () => {
//     return (
//         <>
//             <div className="overflow-auto">
//                 <div className="card common-card min-w-maxContent">
//                     <div className="card-body">
//                         <table className="table style-two">
//                             <thead>
//                                 <tr>
//                                 <th>My Properties</th>
//                                 <th>Date Added</th>
//                                 <th>Actions</th>
//                                 <th>Delete</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {
//                                     propertyTables.map((propertyTable, propertyTableIndex) => {
//                                         return (
//                                             <tr key={propertyTableIndex}>
//                                                 <td>
//                                                     <div className="d-flex align-items-center gap-3">
//                                                         <div className="cart-item__thumb">
//                                                             <img src={propertyTable.thumb} alt=""/>
//                                                         </div>
//                                                         <div className="cart-item__content">
//                                                             <h6 className="cart-item__title fw-500 font-18"> <Link to="/property" className="link">3 Rooms Manhattan</Link></h6>
//                                                         <p className="property-item__location d-flex gap-2 font-14"> 
//                                                             <span className="icon text-gradient"> {propertyTable.locationIcon}</span> 
//                                                             {propertyTable.location}
//                                                          </p>
//                                                             <span className="cart-item__price">Price: <span className="fw-500 text-heading">{propertyTable.price}</span></span>
//                                                         </div>
//                                                     </div>
//                                                 </td>
//                                                 <td> <span className="date">{new Date().toLocaleDateString()}</span> </td>
//                                                 <td>
//                                                     <button type="button" className="rounded-btn edit-btn  text-info bg-info m-auto bg-opacity-10 flex-shrink-0">
//                                                         {propertyTable.editIcon}
//                                                     </button>
//                                                 </td>
//                                                 <td>
//                                                     <button type="button" className="rounded-btn delete-btn  text-danger bg-danger bg-opacity-10 flex-shrink-0">
//                                                         {propertyTable.deleteIcon}
//                                                     </button>
//                                                 </td>
//                                             </tr>
//                                         )
//                                     })
//                                 }
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//             <Pagination/>
//         </>
//     );
// };

// export default AccountMyPropertyTab;




import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AccountMyPropertyTab = () => {
    const [properties, setProperties] = useState([]);

    // Fetch properties on component mount
    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await axios.get('https://api.mannethainfra.com/projects'); // Replace with your API
                setProperties(response.data);
            } catch (error) {
                console.error("Error fetching properties:", error);
            }
        };
        fetchProperties();
    }, []);

    // Handle property deletion
    const handleDelete = async (propertyId) => {
        if (window.confirm("Are you sure you want to delete this property?")) {
            try {
                await axios.delete(`https://api.mannethainfra.com/projects/${propertyId}`);
                // Remove the deleted property from the state
                setProperties(properties.filter(property => property._id !== propertyId));
                alert("Property deleted successfully.");
            } catch (error) {
                console.error("Error deleting property:", error);
                alert("Failed to delete the property.");
            }
        }
    };

    return (
        <>
            <div className="overflow-auto">
                <div className="card common-card min-w-maxContent">
                    <div className="card-body">
                        <table className="table style-two">
                            <thead>
                                <tr>
                                    <th>Property Name</th>
                                    <th>Type</th>
                                    <th>Price</th>
                                    {/* <th>Rooms</th> */}
                                    <th>Actions</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    properties.map((property, index) => (
                                        <tr key={index}>
                                            {/* Property Title */}
                                            <td>
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="cart-item__content">
                                                        <h6 className="cart-item__title fw-500 font-18">
                                                            <Link to={`/property/${property._id}`} className="link">
                                                                {property.propertyTitle}
                                                            </Link>
                                                        </h6>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* Type */}
                                            <td>{property.Type}</td>

                                            {/* Price */}
                                            <td>{property.Price || 'N/A'}/-</td>

                                            {/* Rooms */}
                                            {/* <td>{property.Rooms || 'N/A'}</td> */}

                                           {/* Edit Action */}
                                            <td>
                                                <Link to={`/edit-property/${property._id}`}>
                                                    <button type="button" className="edit-btn text-info bg-info m-auto bg-opacity-10 flex-shrink-0">
                                                        Edit
                                                    </button>
                                                </Link>
                                            </td>


                                            {/* Delete Action */}
                                            <td>
                                                <button
                                                    type="button"
                                                    className=" delete-btn text-danger bg-danger bg-opacity-10 flex-shrink-0"
                                                    onClick={() => handleDelete(property._id)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* <Pagination /> */}
        </>
    );
};

export default AccountMyPropertyTab;
