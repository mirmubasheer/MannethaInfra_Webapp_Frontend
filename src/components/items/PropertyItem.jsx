// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { PropertyFilterContext } from '../../contextApi/PropertyFilterContext';
// import { slugURL } from '../../utility/Utility';

// const PropertyItem = ({ property, itemClass, iconsClass, btnClass, badgeText, badgeClass, btnRenderBottom, btnRenderRight}) => {

//     const { thumb, price, day, title, desc, locationIcon, location, amenities,  btnText, dataSort, dataStatuses, dataTypes, dataLocations } = property; 

//     // Details Slug
//     const propertyURL = slugURL({url: 'property', slug: title}); 

//     // For Random Badge
//     const renderBadge = Math.random() < .5;

//     // **************** Data Filter Search Code Start ****************
//     const {selectedSort, dataStatus, dataType, dataLocation} = useContext(PropertyFilterContext); 

//     const shouldHideSort = selectedSort !== 'All' && selectedSort !== property["dataSort"];
//     const shouldHideStatus = dataStatus !== 'All' && dataStatus !== property["dataStatuses"];
//     const shouldHideType = dataType !== 'All' && dataType !== property["dataTypes"];
//     const shouldHideLocation = dataLocation !== 'All' && dataLocation !== property["dataLocations"];

//     if (shouldHideSort || shouldHideStatus || shouldHideType || shouldHideLocation) {
//         itemClass += " d-none";
//     } 
//     // **************** Data Filter Search Code End ****************
    
//     return (
//         <>
//             <div className={`property-item ${itemClass}`} 
//                 datastatus={dataStatuses} 
//                 datatype={dataTypes} 
//                 datalocation={dataLocations}
//                 datasort={dataSort}
//             >
//                 <div className="property-item__thumb">
//                     <Link to={propertyURL} state={{ thumb, title, desc, price}} className="link">
//                         <img src={thumb} alt="" className="cover-img"/>
//                     </Link> 
//                     {
//                         renderBadge && (
//                             <span className={badgeClass}>{badgeText}</span>
//                         )
//                     }
//                 </div>
//                 <div className="property-item__content">    
//                     <h6 className="property-item__price">{price}
//                         <span className="day">{day}</span> 
//                     </h6>
//                     <h6 className="property-item__title"> 
//                         <Link to={propertyURL} state={{ thumb, title, desc, price}} className="link">{title}</Link> 
//                     </h6>
//                     <p className="property-item__location d-flex gap-2"> 
//                         <span className={`icon ${iconsClass}`}> {locationIcon}</span>
//                         {location}
//                     </p>
//                     <div className="property-item__bottom flx-between gap-2">
//                         <ul className="amenities-list flx-align">
//                             {
//                                 amenities.map((amenity, amenityIndex) => {
//                                     return (
//                                         <li className="amenities-list__item flx-align" key={amenityIndex}>
//                                             <span className={`icon ${iconsClass}`}>{amenity.icon}</span>
//                                             <span className="text">{amenity.text}</span>
//                                         </li>
//                                     )
//                                 })
//                             }
//                         </ul>
//                         {
//                             btnRenderRight && (
//                                 <Link to={propertyURL} state={{ thumb, title, desc, price}} className={`simple-btn ${btnClass}`}>
//                                     {btnText}
//                                     <span className="icon-right"> <i className="fas fa-arrow-right"></i> </span> 
//                                 </Link>
//                             )
//                         }
//                     </div>

//                     {
//                         btnRenderBottom &&
//                         (
//                             <Link to={propertyURL} state={{ thumb, title, desc, price}} className={`simple-btn ${btnClass}`}>
//                                 {btnText}
//                                 <span className="icon-right"> <i className="fas fa-arrow-right"></i> </span> 
//                             </Link>
//                         )
//                     }
//                 </div>
//             </div>   
//         </>
//     );
// };

// export default PropertyItem;


// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { PropertyFilterContext } from '../../contextApi/PropertyFilterContext';
// import { slugURL } from '../../utility/Utility';

// const PropertyItem = ({ 
//     property, 
//     itemClass, 
//     iconsClass, 
//     btnClass, 
//     badgeText, 
//     badgeClass, 
//     btnRenderBottom, 
//     btnRenderRight 
// }) => {
//     const { thumb, price, day, title, desc, locationIcon, location, amenities, btnText, dataSort, dataStatuses, dataTypes, dataLocations } = property;

//     // Generate property URL slug
//     const propertyURL = slugURL({ url: 'property', slug: title });

//     // Get filter context values
//     const { selectedSort, dataStatus, dataType, dataLocation } = useContext(PropertyFilterContext);

//     // Determine visibility based on filters
//     const shouldHideSort = selectedSort !== 'All' && selectedSort !== property["dataSort"];
//     const shouldHideStatus = dataStatus !== 'All' && dataStatus !== property["dataStatuses"];
//     const shouldHideType = dataType !== 'All' && dataType !== property["dataTypes"];
//     const shouldHideLocation = dataLocation !== 'All' && dataLocation !== property["dataLocations"];

//     if (shouldHideSort || shouldHideStatus || shouldHideType || shouldHideLocation) {
//         itemClass += " d-none";
//     }

//     return (
//         <div className={`property-item ${itemClass}`} 
//             datastatus={dataStatuses} 
//             datatype={dataTypes} 
//             datalocation={dataLocations}
//             datasort={dataSort}
//         >
//             <div className="property-item__thumb">
//                 <Link to={propertyURL} state={{ thumb, title, desc, price }} className="link">
//                     <img src={thumb} alt={title} className="cover-img" />
//                 </Link>
//                 {/* Always render the badge if badgeText is provided */}
//                 {badgeText && <span className={badgeClass}>{badgeText}</span>}
//             </div>
//             <div className="property-item__content">
//                 <h6 className="property-item__price">{price}
//                     <span className="day">{day}</span>
//                 </h6>
//                 <h6 className="property-item__title">
//                     <Link to={propertyURL} state={{ thumb, title, desc, price }} className="link">{title}</Link>
//                 </h6>
//                 <p className="property-item__location d-flex gap-2">
//                     <span className={`icon ${iconsClass}`}>{locationIcon}</span>
//                     {location}
//                 </p>
//                 <div className="property-item__bottom flx-between gap-2">
//                     <ul className="amenities-list flx-align">
//                         {amenities.map((amenity, index) => (
//                             <li className="amenities-list__item flx-align" key={index}>
//                                 <span className={`icon ${iconsClass}`}>{amenity.icon}</span>
//                                 <span className="text">{amenity.text}</span>
//                             </li>
//                         ))}
//                     </ul>
//                     {btnRenderRight && (
//                         <Link to={propertyURL} state={{ thumb, title, desc, price }} className={`simple-btn ${btnClass}`}>
//                             {btnText}
//                             <span className="icon-right"><i className="fas fa-arrow-right"></i></span>
//                         </Link>
//                     )}
//                 </div>
//                 {btnRenderBottom && (
//                     <Link to={propertyURL} state={{ thumb, title, desc, price }} className={`simple-btn ${btnClass}`}>
//                         {btnText}
//                         <span className="icon-right"><i className="fas fa-arrow-right"></i></span>
//                     </Link>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default PropertyItem;


// import React, { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { PropertyFilterContext } from '../../contextApi/PropertyFilterContext';
// import { slugURL } from '../../utility/Utility';

// const PropertyItem = ({ 
//     property, 
//     itemClass, 
//     iconsClass, 
//     btnClass, 
//     badgeText, 
//     badgeClass, 
//     btnRenderBottom, 
//     btnRenderRight 
// }) => {
//     const { id, thumb, price, day, title, desc, locationIcon, location, amenities, btnText, dataSort, dataStatuses, dataTypes, dataLocations } = property;

//     const navigate = useNavigate(); // Hook for programmatic navigation

//     // Generate property URL slug
//     const propertyURL = slugURL({ url: 'property', slug: title });
//     const fullPropertyURL = window.location.origin + `/property/` +id;


//     // Debugging lines
//     // console.log('Full Property URL:', fullPropertyURL);

//     // Get filter context values
//     const { selectedSort, dataStatus, dataType, dataLocation } = useContext(PropertyFilterContext);

//     // Determine visibility based on filters
//     const shouldHideSort = selectedSort !== 'All' && selectedSort !== property["dataSort"];
//     const shouldHideStatus = dataStatus !== 'All' && dataStatus !== property["dataStatuses"];
//     const shouldHideType = dataType !== 'All' && dataType !== property["dataTypes"];
//     const shouldHideLocation = dataLocation !== 'All' && dataLocation !== property["dataLocations"];

//     if (shouldHideSort || shouldHideStatus || shouldHideType || shouldHideLocation) {
//         itemClass += " d-none";
//     }

//     // Share URLs
//     const whatsappURL = `https://wa.me/?text=${encodeURIComponent(fullPropertyURL)}`;
//     const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullPropertyURL)}`;
//     const twitterURL = `https://twitter.com/intent/tweet?url=${encodeURIComponent(fullPropertyURL)}&text=${encodeURIComponent(id)}`;
//     const gmailURL = `mailto:?subject=${encodeURIComponent(id)}&body=${encodeURIComponent(fullPropertyURL)}`;
//     const instagramURL = `https://www.instagram.com/?url=${encodeURIComponent(fullPropertyURL)}`;

//     // Debugging lines
//     // console.log('WhatsApp URL:', whatsappURL);
//     // console.log('Facebook URL:', facebookURL);
//     // console.log('Twitter URL:', twitterURL);
//     // console.log('Gmail URL:', gmailURL);
//     // console.log('Instagram URL:', instagramURL);

//     // State to handle dropdown visibility
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//     const toggleDropdown = () => {
//         setIsDropdownOpen(!isDropdownOpen);
//     };

//     // Navigate function with logging
//     const handleNavigation = (id) => {
//         console.log(`Navigating to /property/${id}`);
//         navigate(`/property/${id}`);
//     };

//     return (
//         <div className={`property-item ${itemClass}`} 
//             datastatus={dataStatuses} 
//             datatype={dataTypes} 
//             datalocation={dataLocations}
//             datasort={dataSort}
//         >
//             <div className="property-item__thumb">
//                 <div onClick={() => handleNavigation(id)} className="link">
//                     <img src={thumb} alt={title} className="cover-img" />
//                 </div>
//                 {badgeText && <span className={badgeClass}>{badgeText}</span>}
//             </div>
//             <div className="property-item__content">
//                 <h6 className="property-item__price">
//                     {price}
//                     <span className="day">{day}</span>
//                 </h6>
//                 <h6 className="property-item__title">
//                     <div onClick={() => handleNavigation(id)} className="link">{title}</div>
//                 </h6>
//                 <p 
//                 className="property-item__location d-flex gap-2" 
//                 style={{ color: 'black' , fontWeight:400 }}  
//                   >
//                 <span className={`icon ${iconsClass}`}>{locationIcon}</span>
//                 {location}
//                 </p>


//                 {/* Bottom Section with Right Arrow Button and Share Button */}
//                 <div className="property-item__bottom d-flex justify-content-between align-items-center">
//                     <ul className="amenities-list d-flex align-items-center">
//                         {amenities.map((amenity, index) => (
//                             <li className="amenities-list__item d-flex align-items-center" key={index}>
//                                 <span className={`icon ${iconsClass}`}>{amenity.icon}</span>
//                                 <span className="text" style={{ color: 'black', fontWeight:400  }}  >{amenity.text}</span>
//                             </li>
//                         ))}
//                     </ul>

//                     <div className="d-flex align-items-center">
//                         {btnRenderRight && (
//                             <div onClick={() => handleNavigation(id)} className={`simple-btn ${btnClass}`}>
//                                 {btnText}
//                                 <span className="icon-right"><i className="fas fa-arrow-right"></i></span>
//                             </div>
//                         )}

//                         {/* Share Button with Dropdown */}
//                         <div className="property-item__share" style={{ marginLeft: '10px', position: 'relative', display: 'inline-block' }}>
//                             <button 
//                                 style={{
//                                     backgroundColor: '#F58920',
//                                     color: 'white',
//                                     border: 'none',
//                                     borderRadius: '5px',
//                                     padding: '8px 12px',
//                                     display: 'inline-flex',
//                                     alignItems: 'center',
//                                     cursor: 'pointer',
//                                 }}
//                                 onClick={toggleDropdown}
//                             >
//                                 <i className="fas fa-share-alt" style={{ marginRight: '5px' }}></i> 
//                             </button>

//                             {isDropdownOpen && (
//                                 <div style={{
//                                     position: 'absolute',
//                                     top: '100%',
//                                     left: 0,
//                                     backgroundColor: '#fff',
//                                     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//                                     borderRadius: '5px',
//                                     padding: '10px',
//                                     zIndex: 1,
//                                 }}>
//                                     <button 
//                                         style={{
//                                             backgroundColor: '#F58920',
//                                             color: 'white',
//                                             border: 'none',
//                                             borderRadius: '5px',
//                                             padding: '8px 12px',
//                                             display: 'inline-flex',
//                                             alignItems: 'center',
//                                             cursor: 'pointer',
//                                             marginRight: '5px',
//                                             marginBottom: '5px'
//                                         }}
//                                         onClick={() => window.open(whatsappURL, '_blank')}
//                                     >
//                                         <i className="fab fa-whatsapp" style={{ marginRight: '5px' }}></i> 
//                                     </button>

//                                     <button 
//                                         style={{
//                                             backgroundColor: '#F58920',
//                                             color: 'white',
//                                             border: 'none',
//                                             borderRadius: '5px',
//                                             padding: '8px 12px',
//                                             display: 'inline-flex',
//                                             alignItems: 'center',
//                                             cursor: 'pointer',
//                                             marginRight: '5px',
//                                             marginBottom: '5px'
//                                         }}
//                                         onClick={() => window.open(facebookURL, '_blank')}
//                                     >
//                                         <i className="fab fa-facebook-f" style={{ marginRight: '5px' }}></i> 
//                                     </button>

//                                     <button 
//                                         style={{
//                                             backgroundColor: '#F58920',
//                                             color: 'white',
//                                             border: 'none',
//                                             borderRadius: '5px',
//                                             padding: '8px 12px',
//                                             display: 'inline-flex',
//                                             alignItems: 'center',
//                                             cursor: 'pointer',
//                                             marginRight: '5px',
//                                             marginBottom: '5px'
//                                         }}
//                                         onClick={() => window.open(twitterURL, '_blank')}
//                                     >
//                                         <i className="fab fa-twitter" style={{ marginRight: '5px' }}></i>
//                                     </button>

//                                     <button 
//                                         style={{
//                                             backgroundColor: '#F58920',
//                                             color: 'white',
//                                             border: 'none',
//                                             borderRadius: '5px',
//                                             padding: '8px 12px',
//                                             display: 'inline-flex',
//                                             alignItems: 'center',
//                                             cursor: 'pointer',
//                                             marginRight: '5px',
//                                             marginBottom: '5px'
//                                         }}
//                                         onClick={() => window.open(gmailURL, '_blank')}
//                                     >
//                                         <i className="fas fa-envelope" style={{ marginRight: '5px' }}></i>
//                                     </button>

//                                     <button 
//                                         style={{
//                                             backgroundColor: '#F58920',
//                                             color: 'white',
//                                             border: 'none',
//                                             borderRadius: '5px',
//                                             padding: '8px 12px',
//                                             display: 'inline-flex',
//                                             alignItems: 'center',
//                                             cursor: 'pointer',
//                                             marginBottom: '5px'
//                                         }}
//                                         onClick={() => window.open(instagramURL, '_blank')}
//                                     >
//                                         <i className="fab fa-instagram" style={{ marginRight: '5px' }}></i>
//                                     </button>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//                 {btnRenderBottom && (
//                     <div onClick={() => handleNavigation(id)} className={`simple-btn ${btnClass}`}>
//                         {btnText}
//                         <span className="icon-right"><i className="fas fa-arrow-right"></i></span>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default PropertyItem;





// import React, { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { PropertyFilterContext } from '../../contextApi/PropertyFilterContext';
// import { slugURL } from '../../utility/Utility';

// const PropertyItem = ({ 
//     property, 
//     itemClass, 
//     iconsClass, 
//     btnClass, 
//     badgeText, 
//     badgeClass, 
//     btnRenderBottom, 
//     btnRenderRight 
// }) => {
//     const { id, thumb, price, day, title, desc, locationIcon, location, amenities, btnText, dataSort, dataStatuses, dataTypes, dataLocations } = property;

//     const navigate = useNavigate();
//     const propertyURL = slugURL({ url: 'property', slug: title });
//     const fullPropertyURL = `${window.location.origin}/property/${id}`;

//     const { selectedSort, dataStatus, dataType, dataLocation } = useContext(PropertyFilterContext);

//     // Determine visibility based on filters
//     const shouldHide = 
//         (selectedSort !== 'All' && selectedSort !== dataSort) ||
//         (dataStatus !== 'All' && dataStatus !== dataStatuses) ||
//         (dataType !== 'All' && dataType !== dataTypes) ||
//         (dataLocation !== 'All' && dataLocation !== dataLocations);

//     if (shouldHide) itemClass += " d-none";

//     // Share URLs
//     const shareURLs = {
//         whatsapp: `https://wa.me/?text=${encodeURIComponent(fullPropertyURL)}`,
//         facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullPropertyURL)}`,
//         twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(fullPropertyURL)}&text=${encodeURIComponent(id)}`,
//         gmail: `mailto:?subject=${encodeURIComponent(id)}&body=${encodeURIComponent(fullPropertyURL)}`,
//         instagram: `https://www.instagram.com/?url=${encodeURIComponent(fullPropertyURL)}`
//     };

//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

//     const handleNavigation = () => {
//         navigate(`/property/${id}`);
//     };

//     const shareButtonStyles = {
//         backgroundColor: '#F58920',
//         color: 'white',
//         border: 'none',
//         borderRadius: '5px',
//         padding: '8px 12px',
//         display: 'inline-flex',
//         alignItems: 'center',
//         cursor: 'pointer',
//         marginRight: '5px',
//         marginBottom: '5px',
//     };

//     const renderShareButton = (iconClass, url) => (
//         <button style={shareButtonStyles} onClick={() => window.open(url, '_blank')}>
//             <i className={iconClass} style={{ marginRight: '5px' }}></i>
//         </button>
//     );

//     return (
//         <div 
//             className={`property-item ${itemClass}`} 
//             datastatus={dataStatuses} 
//             datatype={dataTypes} 
//             datalocation={dataLocations} 
//             datasort={dataSort}
//         >
//             <div className="property-item__thumb" onClick={handleNavigation(property._id)}>
//                 <img src={thumb} alt={title} className="cover-img" />
//                 {badgeText && <span className={badgeClass}>{badgeText}</span>}
//             </div>
//             <div className="property-item__content">
//                 <h6 className="property-item__price">{price}<span className="day">{day}</span></h6>
//                 <h6 className="property-item__title" onClick={handleNavigation(property._id)}>{title}</h6>
//                 <p className="property-item__location d-flex gap-2" style={{ color: 'black', fontWeight: 400 }}>
//                     <span className={`icon ${iconsClass}`}>{locationIcon}</span>{location}
//                 </p>

//                 <div className="property-item__bottom d-flex justify-content-between align-items-center">
//                     <ul className="amenities-list d-flex align-items-center">
//                         {amenities.map((amenity, index) => (
//                             <li key={index} className="amenities-list__item d-flex align-items-center">
//                                 <span className={`icon ${iconsClass}`}>{amenity.icon}</span>
//                                 <span style={{ color: 'black', fontWeight: 400 }}>{amenity.text}</span>
//                             </li>
//                         ))}
//                     </ul>

//                     <div className="d-flex align-items-center">
//                         {btnRenderRight && (
//                             <div onClick={handleNavigation(property._id)} className={`simple-btn ${btnClass}`}>
//                                 {btnText}<span className="icon-right"><i className="fas fa-arrow-right"></i></span>
//                             </div>
//                         )}

//                         {/* Share Button with Dropdown */}
//                         <div className="property-item__share" style={{ marginLeft: '10px', position: 'relative' }}>
//                             <button style={shareButtonStyles} onClick={toggleDropdown}>
//                                 <i className="fas fa-share-alt" style={{ marginRight: '5px' }}></i>
//                             </button>

//                             {isDropdownOpen && (
//                                 <div style={{
//                                     position: 'absolute',
//                                     top: '100%',
//                                     left: 0,
//                                     backgroundColor: '#fff',
//                                     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//                                     borderRadius: '5px',
//                                     padding: '10px',
//                                     zIndex: 1
//                                 }}>
//                                     {renderShareButton('fab fa-whatsapp', shareURLs.whatsapp)}
//                                     {renderShareButton('fab fa-facebook-f', shareURLs.facebook)}
//                                     {renderShareButton('fab fa-twitter', shareURLs.twitter)}
//                                     {renderShareButton('fas fa-envelope', shareURLs.gmail)}
//                                     {renderShareButton('fab fa-instagram', shareURLs.instagram)}
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>

//                 {btnRenderBottom && (
//                     <div onClick={handleNavigation(property._id)} className={`simple-btn ${btnClass}`}>
//                         {btnText}<span className="icon-right"><i className="fas fa-arrow-right"></i></span>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default PropertyItem;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PropertyItem = ({ 
    property, 
    itemClass, 
    iconsClass, 
    btnClass, 
    badgeClass, 
    btnRenderBottom, 
    btnRenderRight 
}) => {
    const navigate = useNavigate();

    // Check if `property` is defined and contains valid data
    if (!property || !property._id) {
        return <div>Loading...</div>; // You could add a better fallback or loading state
    }

    // Share URLs
    const fullPropertyURL = `${window.location.origin}/property/${property._id}`;
    const shareURLs = {
        whatsapp: `https://wa.me/?text=${encodeURIComponent(fullPropertyURL)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullPropertyURL)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(fullPropertyURL)}&text=${encodeURIComponent(property.propertyTitle)}`,
        gmail: `mailto:?subject=${encodeURIComponent(property.propertyTitle)}&body=${encodeURIComponent(fullPropertyURL)}`,
        instagram: `https://www.instagram.com/?url=${encodeURIComponent(fullPropertyURL)}`
    };

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    const handleNavigation = (id) => {
        navigate(`/property/${id}`);
    };

    const shareButtonStyles = {
        backgroundColor: '#F58920',
        color: 'white',
        borderRadius: '5px',
        padding: '10px',
        display: 'inline-flex',
        alignItems: 'center',
        cursor: 'pointer',
        marginRight: '5px',
        marginBottom: '5px',
        position: 'relative', 
        zIndex: 3 
    };
    

    const renderShareButton = (iconClass, url) => (
        <button style={shareButtonStyles} onClick={() => window.open(url, '_blank')}>
            <i className={iconClass} style={{ marginRight: '5px' }}></i>
        </button>
    );
// console.log(property.Bathrooms)
// console.log(property.Bedrooms)


    return (
        <div className={`property-item ${itemClass}`}>
            <div className="property-item__thumb" onClick={() => handleNavigation(property._id)}>
                <img 
                    src={`https://api.mannethainfra.com/uploads/${property.image}`} 
                    alt={property.propertyTitle} 
                    className="cover-img" 
                />
                {property.Type && <span className={badgeClass}>{property.Type}</span>}
            </div>
            <div className="property-item__content">
                <h6 className="property-item__title" onClick={() => handleNavigation(property._id)}>
                    {property.propertyTitle}
                </h6>
                <h6 className="property-item__price">₹ {property.Price}/- Per Sq.ft </h6>

                <p className="property-item__areaSize">
                     {property.AreaSize}
                </p>
                <div className="property-details d-flex justify-content-between" style={{ marginRight: '100px' }}>
                <p className="d-flex align-items-center"  style={{ color: 'black', fontWeight: 400 }}>
                    <i className={`${iconsClass} fas fa-bed`} style={{ marginRight: '5px' }}></i> 
                    {property.Bedrooms} Beds
                </p>
                <p className="d-flex align-items-center" style={{ color: 'black', fontWeight: 400 }}>
                    <i className={`${iconsClass} fas fa-bath`} style={{ marginRight: '5px'}}></i> 
                    {property.Bathrooms} Bath
                </p>
                </div>
          
                {/* <div className="property-details" style={{ marginTop: '10px' }}>
                    <p className="property-item__location d-flex gap-2" style={{ color: 'black', fontWeight: 400 }}>
                        <i className={`${iconsClass} fas fa-map-marker-alt`} style={{ marginTop: '5px' }}></i> 
                        {property.Location}
                    </p>
                </div> */}

                {/* Share Button with Dropdown */}
                <div className="property-item__share d-flex justify-content-between" style={{ marginTop:'10px', position: 'relative' }}>

                <div className="property-details" style={{ marginTop: '5px' }}>
                    <p className="property-item__location d-flex gap-2" style={{ color: 'black', fontWeight: 400 }}>
                        <i className={`${iconsClass} fas fa-map-marker-alt`} style={{ marginTop: '5px' }}></i> 
                        {property.Location}
                    </p>
                </div>
                    <button style={shareButtonStyles} onClick={toggleDropdown}>
                        <i className="fas fa-share-alt" style={{ marginRight: '5px' }}></i> 
                    </button>

                    {isDropdownOpen && (
                        <div style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            backgroundColor: '#fff',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            borderRadius: '5px',
                            padding: '5px',
                            zIndex: 1
                        }}>
                            {renderShareButton('fab fa-whatsapp', shareURLs.whatsapp)}
                            {renderShareButton('fab fa-facebook-f', shareURLs.facebook)}
                            {renderShareButton('fab fa-twitter', shareURLs.twitter)}
                            {renderShareButton('fas fa-envelope', shareURLs.gmail)}
                            {renderShareButton('fab fa-instagram', shareURLs.instagram)}
                        </div>
                    )}

               
                </div>

                {btnRenderBottom && (
                    <div onClick={() => handleNavigation(property._id)} className={`simple-btn ${btnClass}`}>
                        View Details<span className="icon-right"><i className="fas fa-arrow-right"></i></span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PropertyItem;
