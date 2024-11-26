import React from 'react';
import houseThumb from '../../public/assets/images/thumbs/TUMBNAIL.png';
import CommonSidebar from '../common/CommonSidebar';

// Import amenities icons
import amenitiesIcon1 from '/assets/images/icons/amenities1.svg';
import amenitiesIcon2 from '/assets/images/icons/amenities2.svg';
import amenitiesIcon3 from '/assets/images/icons/amenities3.svg';
import amenitiesIcon4 from '/assets/images/icons/amenities4.svg';
import amenitiesIcon5 from '/assets/images/icons/amenities5.svg';
import amenitiesIcon6 from '/assets/images/icons/amenities6.svg';
import amenitiesIcon7 from '/assets/images/icons/office-building.svg';
import travel from '/assets/images/icons/travel.png';
import rupee from '/assets/images/icons/rupee.png';


const PropertyDetailsSection = ({ property }) => {

    // If no property is available, show an error message
    if (!property) {
        return (
            <section className="property-details padding-y-120">
                <div className="container">
                    <h3>Property not found</h3>
                </div>
            </section>
        );
    }

    

    // Destructure the necessary data from the property object
    const { propertyTitle, Description, image, Type, Price, Bedrooms, Bathrooms, AreaSize, Location, amenity = [] } = property;
    const projectHighlightIcons = [
        amenitiesIcon1, 
        amenitiesIcon2, 
        amenitiesIcon3, 
        amenitiesIcon4, 
        amenitiesIcon5, 
        amenitiesIcon6, 
        amenitiesIcon7,
        travel,
        rupee
    ];
    return (
        <section className="property-details padding-y-120">
            <div className="container container-two">
                <div className="row gy-4">
                    <div className="col-lg-8">
                        <div className="property-details__thumb">
                            {/* Display the property image */}
                            <img 
                                src={`https://api.mannethainfra.com/uploads/${image}`} 
                                alt={propertyTitle} 
                                className="cover-img" 
                            />
                        </div>

                        <h3 className="property-details__title mt-lg-5 mb-4">{propertyTitle}</h3>
                        <p className="property-details__desc mb-3"style={{ color:'black' }}>{Description.slice(0, 1000)}</p>

                        <div className="property-details-wrapper">



                                 {/* Project Highlights Section */}
                                 <div className="property-details-item">
                            <h6 className="property-details-item__title">Project Highlights</h6>
                            <div className="property-details-item__content">
                                <div className="row gy-2">
                                    <div className="col-sm-6">
                                        <ul className="check-list">
                                            <li className="d-flex align-items-center gap-3" style={{ marginBottom: '30px' }}>
                                                <span className="icon">
                                                    <img src={projectHighlightIcons[5]} alt="Type Icon" />
                                                </span>
                                                <span className="text" style={{color:'black'}}>: {Type}</span>
                                            </li>
                                            <li className="d-flex align-items-center gap-3" style={{ marginBottom: '30px' }}>
                                                <span className="icon">
                                                    <img src={projectHighlightIcons[8]} alt="Price Icon" />
                                                </span>
                                                <span className="text" style={{color:'black'}}>: {Price}/-</span>
                                            </li>
                                            
                                            <li className="d-flex align-items-center gap-3" style={{ marginBottom: '30px' }}>
                                                
                                                <span className="icon">
                                                    <img src={projectHighlightIcons[7]} alt="Location Icon" />
                                                </span>
                                                <span className="text" style={{color:'black'}}> : {Location}</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-6">
                                        <ul className="check-list">
                                            <li className="d-flex align-items-center gap-3" style={{ marginBottom: '30px' }}>
                                                <span className="icon">
                                                    <img src={projectHighlightIcons[1]} alt="Bedrooms Icon" />
                                                </span>
                                                <span className="text" style={{color:'black'}}>: {Bedrooms}</span>
                                            </li>
                                            <li className="d-flex align-items-center gap-3" style={{ marginBottom: '30px' }}>
                                                <span className="icon">
                                                    <img src={projectHighlightIcons[2]} alt="Bathrooms Icon" />
                                                </span>
                                                <span className="text" style={{color:'black'}}>: {Bathrooms}</span>
                                            </li>
                                            <li className="d-flex align-items-center gap-3" style={{ marginBottom: '30px' }}>
                                                <span className="icon">
                                                    <img src={projectHighlightIcons[4]} alt="Area Icon" />
                                                </span>
                                                <span className="text" style={{color:'black'}}>: {AreaSize} Sq.Ft</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                            {/* Amenities Section */}
                            <div className="property-details-item">
                                <h6 className="property-details-item__title">Amenities</h6>
                                <div className="property-details-item__content">
                                    <div className="row gy-4">
                                        {
                                            amenity.map((amenityItem, index) => (
                                                <div className="col-sm-4 col-6" key={index}>
                                                    <div className="amenities-content d-flex align-items-center">
                                                        {/* Display amenity icon */}
                                                        <span className="icon"><i className="fas fa-check"></i></span>
                                                        <div className="amenities-content__inner">
                                                            <h6 className="amenities-content__title mb-0 font-16">{amenityItem}</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>

                       


                            {/* Intro Video Section */}
                            <div className="property-details-item">
                                <h6 className="property-details-item__title">Intro Video</h6>
                                <div className="property-details-item__content">
                                    <div className="house-content position-relative">
                                        <img src={houseThumb} alt="House Thumb" />
                                        <a href="https://www.youtube.com/watch?v=jbWBsZs3ouQ" target='_blank' rel="noopener noreferrer" className="popup-video-link video-popup__button style-two">
                                            <i className="fas fa-play text-gradient"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Sidebar */}
                    <div className="col-lg-4">
                        <CommonSidebar />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PropertyDetailsSection;


















// import React from 'react';
// import { projectsData } from '../data/OthersPageData/OthersPageData';
// import { Link } from 'react-router-dom';
// import houseThumb from '../../public/assets/images/thumbs/TUMBNAIL.png';
// import CommonSidebar from '../common/CommonSidebar';
// import { amenitiesDataByProjectId } from '../data/OthersPageData/OthersPageData'; // Adjust path if needed

// const PropertyDetailsSection = ({ property }) => {
//     // Find the current project by its ID
//     const currentProject = projectsData.find(project => project.projectId === property.id);

//     // Handle case where project data is not found
//     if (!currentProject) {
//         return (
//             <section className="property-details padding-y-120">
//                 <div className="container">
//                     <h3>Project data not found</h3>
//                 </div>
//             </section>
//         );
//     }

//     // Get amenities based on the project ID
//     const amenities = amenitiesDataByProjectId[property.id] || [];

//     return (
//         <>
//         {/* ============================ Property Details Section Start =============== */}
//         <section className="property-details padding-y-120">
//             <div className="container container-two">
//                 <div className="row gy-4">
//                     <div className="col-lg-8">
//                         <div className="property-details__thumb">
//                             <img src={property.image} alt="Image" className="cover-img"/>
//                         </div>

//                         <h3 className="property-details__title mt-lg-5 mb-4">{property.Title}</h3>
//                         <p className="property-details__desc mb-3">{property.desc.slice(0, 1000)}</p>

//                         <div className="property-details-wrapper">
//                             <div className="property-details-item">
//                                 <h6 className="property-details-item__title">Amenities</h6>
//                                 <div className="property-details-item__content">
//                                     <div className="row gy-4">
//                                         {
//                                             amenities.map((amenity, index) => (
//                                                 <div className="col-sm-4 col-6" key={index}>
//                                                     <div className="amenities-content d-flex align-items-center">
//                                                         <span className="amenities-content__icon">
//                                                             <img src={amenity.icon} alt=""/>
//                                                         </span>
//                                                         <div className="amenities-content__inner">
//                                                             <span className="amenities-content__text">{amenity.text}</span>
//                                                             <h6 className="amenities-content__title mb-0 font-16">{amenity.title}</h6>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             ))
//                                         }
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="property-details-item">
//                                 <h6 className="property-details-item__title">Project Highlights</h6>
//                                 <div className="property-details-item__content">
//                                     <div className="row gy-2">
//                                         <div className="col-sm-6">
//                                             <ul className="check-list">
//                                                 {
//                                                     currentProject.featureLists.map((featureList, featureListIndex) => {
//                                                         if (featureListIndex % 2 === 0) {
//                                                             return (
//                                                                 <li className="check-list__item d-flex align-items-center" key={featureListIndex}>
//                                                                     <span className="icon">{featureList.icon}</span>
//                                                                     <span className="text">{featureList.text}</span>
//                                                                 </li>
//                                                             )
//                                                         }
//                                                         return null;
//                                                     })
//                                                 }
//                                             </ul>
//                                         </div>
//                                         <div className="col-sm-6">
//                                             <ul className="check-list">
//                                                 {
//                                                     currentProject.featureLists.map((featureList, featureListIndex) => {
//                                                         if (featureListIndex % 2 !== 0) {
//                                                             return (
//                                                                 <li className="check-list__item d-flex align-items-center" key={featureListIndex}>
//                                                                     <span className="icon">{featureList.icon}</span>
//                                                                     <span className="text">{featureList.text}</span>
//                                                                 </li>
//                                                             )
//                                                         }
//                                                         return null;
//                                                     })
//                                                 }
//                                             </ul>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="property-details-item">
//                                 <h6 className="property-details-item__title">Address</h6>
//                                 <div className="property-details-item__content">
//                                     <div className="row gy-4">
//                                         {
//                                             currentProject.addressContents.map((addressContent, addressContentIndex) => (
//                                                 <div className="col-12" key={addressContentIndex}>
//                                                     <div className="address-content flex gap-5 align-items-center">
//                                                         <span className="address-content__text font-15">{addressContent.text}</span>
//                                                         <h6 className="address-content__title font-15 mb-0">{addressContent.title}</h6>
//                                                     </div>
//                                                 </div>
//                                             ))
//                                         }
//                                     </div>
//                                 </div>
//                             </div> 

//                             <div className="property-details-item">
//                                 <h6 className="property-details-item__title">Intro Video</h6>
//                                 <div className="property-details-item__content">
//                                     <div className="house-content position-relative">
//                                         <img src={houseThumb} alt="House Thumb"/>
//                                         <Link to="https://www.youtube.com/watch?v=jbWBsZs3ouQ" target='_blank' className="popup-video-link video-popup__button style-two">
//                                             <i className="fas fa-play text-gradient"></i>
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-4">
//                         <CommonSidebar />
//                     </div>
//                 </div>
//             </div>
//         </section>
//         {/* ============================ Property Details Section End =============== */}
//         </>
//     );
// }

// export default PropertyDetailsSection;







// import React from 'react';
// import { addressContents, featureLists, propertyDetailsAmenities } from '../data/OthersPageData/OthersPageData';
// import { Link } from 'react-router-dom';

// import houseThumb from '../../public/assets/images/thumbs/house.png';
// import CommonSidebar from '../common/CommonSidebar';

// const PropertyDetailsSection = ({ property }) => {


//     return (
//         <>
//         {/* ============================ Property Details Section Start =============== */}
//         <section className="property-details padding-y-120">
//             <div className="container container-two">
//                 <div className="row gy-4">
//                     <div className="col-lg-8">
//                         <div className="property-details__thumb">
//                             <img src={property.thumb} alt="Image" className="cover-img"/>
//                         </div>

//                         <h3 className="property-details__title mt-lg-5 mb-4">{property.title}</h3>
//                         <p className="property-details__desc mb-3">{property.desc.slice(0, 178)}</p>
//                         <p className="property-details__desc">{property.desc.slice(179, 400)}</p>

//                         <div className="property-details-wrapper">
//                             <div className="property-details-item">
//                                 <h6 className="property-details-item__title">Preview</h6>
//                                 <div className="property-details-item__content">
//                                     <div className="row gy-4 gy-lg-5">
//                                         {
//                                             propertyDetailsAmenities.map((amenity, amenityIndex) => {
//                                                 return (
//                                                     <div className="col-sm-4 col-6" key={amenityIndex}>
//                                                         <div className="amenities-content d-flex align-items-center">
//                                                             <span className="amenities-content__icon">
//                                                                 <img src={amenity.icon} alt=""/>
//                                                             </span>
//                                                             <div className="amenities-content__inner">
//                                                                 <span className="amenities-content__text">{amenity.text}</span>
//                                                                 <h6 className="amenities-content__title mb-0 font-16">{amenity.title}</h6>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 )
//                                             })
//                                         }
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="property-details-item">
//                                 <h6 className="property-details-item__title">Features</h6>
//                                 <div className="property-details-item__content">
//                                     <div className="row gy-2">
//                                         <div className="col-sm-6">
//                                             <ul className="check-list">
//                                                 {
//                                                     featureLists.map((featureList, featureListIndex) => {
//                                                         if (featureListIndex % 2 === 0) {
//                                                             return (
//                                                                 <li className="check-list__item d-flex align-items-center" key={featureListIndex}>
//                                                                     <span className="icon">{featureList.icon}</span>
//                                                                     <span className="text">{featureList.text}</span>
//                                                                 </li>
//                                                             )
//                                                         }
//                                                         return null;
//                                                     })
//                                                 }
//                                             </ul>
//                                         </div>
//                                         <div className="col-sm-6">
//                                             <ul className="check-list">
//                                                 {
//                                                     featureLists.map((featureList, featureListIndex) => {
//                                                         if (featureListIndex % 2 !== 0) {
//                                                             return (
//                                                                 <li className="check-list__item d-flex align-items-center" key={featureListIndex}>
//                                                                     <span className="icon">{featureList.icon}</span>
//                                                                     <span className="text">{featureList.text}</span>
//                                                                 </li>
//                                                             )
//                                                         }
//                                                         return null;
//                                                     })
//                                                 }
//                                             </ul>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="property-details-item">
//                                 <h6 className="property-details-item__title">Address</h6>
//                                 {/* Uncomment if you have address contents to display
//                                 <div className="property-details-item__content">
//                                     <div className="row gy-4">
//                                         {
//                                             addressContents.map((addressContent, addressContentIndex) => {
//                                                 return (
//                                                     <div className="col-6" key={addressContentIndex}>
//                                                         <div className="address-content d-flex gap-4 align-items-center">
//                                                             <span className="address-content__text font-18">{addressContent.text}</span>
//                                                             <h6 className="address-content__title font-15 mb-0">{addressContent.title}</h6>
//                                                         </div>
//                                                     </div>
//                                                 )
//                                             })
//                                         }
//                                     </div>
//                                     <div className="address-map">
//                                         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1150112.1628856962!2d44.64619029447154!3d23.086651461779507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sbd!4v1707037970965!5m2!1sen!2sbd" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
//                                     </div>
//                                 </div> */}
//                             </div> 
//                             <div className="property-details-item">
//                                 <h6 className="property-details-item__title">House</h6>
//                                 <div className="property-details-item__content">
//                                     <div className="house-content position-relative">
//                                         <img src={houseThumb} alt="House Thumb"/>
//                                         <Link to="https://www.youtube.com/watch?v=pPl3ZZdTP3g" className="popup-video-link video-popup__button style-two">
//                                             <i className="fas fa-play text-gradient"></i>
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-4">
//                         <CommonSidebar renderSearch={false} renderProperties={true} renderTags={false}/>
//                     </div>
//                 </div>
//             </div>
//         </section>
//         {/* ============================ Property Details Section End =============== */}
//         </>
//     );
// };

// export default PropertyDetailsSection;



// import React from 'react';
// import { addressContents, featureLists, propertyDetailsAmenities } from '../data/OthersPageData/OthersPageData';
// import { Link, useLocation } from 'react-router-dom';

// import houseThumb from '../../public/assets/images/thumbs/house.png';
// import CommonSidebar from '../common/CommonSidebar';

// const PropertyDetailsSection = ({title}) => {
//     const location = useLocation();
//     const property = location.state || {}; // Default to an empty object

//     const {
//         thumb = houseThumb, // Provide a default image if thumb is not available
//         title = 'Default Title',
//         desc = 'No description available.',
//     } = property;

//     return (
//         <>
//             {/* ============================ Property Details Section Start =============== */}
//             <section className="property-details padding-y-120">
//                 <div className="container container-two">
//                     <div className="row gy-4">
//                         <div className="col-lg-8">

//                             <div className="property-details__thumb">
//                                 <img src={thumb} alt="Property Image" className="cover-img"/>
//                             </div>

//                             <h3 className="property-details__title mt-lg-5 mb-4">{title}</h3>
//                             <p className="property-details__desc mb-3">{desc.slice(0, 178)}</p>
//                             <p className="property-details__desc">{desc.slice(179, 400)}</p>

//                             <div className="property-details-wrapper">
//                                 <div className="property-details-item">
//                                     <h6 className="property-details-item__title">Preview</h6>
//                                     <div className="property-details-item__content">
//                                         <div className="row gy-4 gy-lg-5">
//                                             {
//                                                 propertyDetailsAmenities.map((amenity, amenityIndex) => (
//                                                     <div className="col-sm-4 col-6" key={amenityIndex}>
//                                                         <div className="amenities-content d-flex align-items-center">
//                                                             <span className="amenities-content__icon">
//                                                                 <img src={amenity.icon} alt="Amenity Icon"/>
//                                                             </span>
//                                                             <div className="amenities-content__inner">
//                                                                 <span className="amenities-content__text">{amenity.text}</span>
//                                                                 <h6 className="amenities-content__title mb-0 font-16">{amenity.title}</h6>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 ))
//                                             }
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="property-details-item">
//                                     <h6 className="property-details-item__title">Features</h6>
//                                     <div className="property-details-item__content">
//                                         <div className="row gy-2">
//                                             <div className="col-sm-6">
//                                                 <ul className="check-list">
//                                                     {
//                                                         featureLists.map((featureList, featureListIndex) => {
//                                                             if (featureListIndex % 2 === 0) {
//                                                                 return (
//                                                                     <li className="check-list__item d-flex align-items-center" key={featureListIndex}>
//                                                                         <span className="icon">{featureList.icon}</span>
//                                                                         <span className="text">{featureList.text}</span>
//                                                                     </li>
//                                                                 )
//                                                             }
//                                                             return null;
//                                                         })
//                                                     }
//                                                 </ul>
//                                             </div>
//                                             <div className="col-sm-6">
//                                                 <ul className="check-list">
//                                                     {
//                                                         featureLists.map((featureList, featureListIndex) => {
//                                                             if (featureListIndex % 2 !== 0) {
//                                                                 return (
//                                                                     <li className="check-list__item d-flex align-items-center" key={featureListIndex}>
//                                                                         <span className="icon">{featureList.icon}</span>
//                                                                         <span className="text">{featureList.text}</span>
//                                                                     </li>
//                                                                 )
//                                                             }
//                                                             return null;
//                                                         })
//                                                     }
//                                                 </ul>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="property-details-item">
//                                     <h6 className="property-details-item__title">Address</h6>
//                                     {/* Uncomment and use if addressContents data is available */}
//                                     {/* <div className="property-details-item__content">
//                                         <div className="row gy-4">
//                                             {
//                                                 addressContents.map((addressContent, addressContentIndex) => (
//                                                     <div className="col-6" key={addressContentIndex}>
//                                                         <div className="address-content d-flex gap-4 align-items-center">
//                                                             <span className="address-content__text font-18">{addressContent.text}</span>
//                                                             <h6 className="address-content__title font-15 mb-0">{addressContent.title}</h6>
//                                                         </div>
//                                                     </div>
//                                                 ))
//                                             }
//                                         </div>
//                                         <div className="address-map">
//                                             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1150112.1628856962!2d44.64619029447154!3d23.086651461779507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sbd!4v1707037970965!5m2!1sen!2sbd" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
//                                         </div>
//                                     </div> */}
//                                 </div>

//                                 <div className="property-details-item">
//                                     <h6 className="property-details-item__title">House</h6>
//                                     <div className="property-details-item__content">
//                                         <div className="house-content position-relative">
//                                             <img src={houseThumb} alt="House Thumb"/>
//                                             <Link to="https://www.youtube.com/watch?v=pPl3ZZdTP3g" className="popup-video-link video-popup__button style-two">
//                                                 <i className="fas fa-play text-gradient"></i>
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-4">
//                             <CommonSidebar renderSearch={false} renderProperties={true} renderTags={false}/>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             {/* ============================ Property Details Section End =============== */}
//         </>
//     );
// };

// export default PropertyDetailsSection;
