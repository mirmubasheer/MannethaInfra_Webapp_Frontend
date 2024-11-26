// import React from 'react';

// import ListingBasicInformation from '../common/ListingBasicInformation';
// import ListingPropertyGallery from '../common/ListingPropertyGallery';
// import ListingPropertyInformation from './ListingPropertyInformation';
// import ListingContactDetails from '../common/ListingContactDetails';

// const AddListingForm = () => {
//     return (
//         <>
//             <form action="#">
//                 <ListingBasicInformation/>
//                 <ListingPropertyGallery/>
//                 <ListingPropertyInformation/>
//                 <ListingContactDetails/>
//                 <button type="submit" className="btn btn-main w-100">Submit Property</button>
//             </form>
//         </>
//     );
// };

// export default AddListingForm;




// import React, { useState } from 'react';
// import axios from 'axios';

// import ListingBasicInformation from '../common/ListingBasicInformation';
// import ListingPropertyGallery from '../common/ListingPropertyGallery';
// import ListingPropertyInformation from './ListingPropertyInformation';
// import ListingContactDetails from '../common/ListingContactDetails';

// const AddListingForm = () => {
//     const [formData, setFormData] = useState({
//         propertyTitle: '',
//         Description: '',
//         Type: '',
//         Price: '',
//         Area: '',
//         Rooms: '',
//         PropertyId: '',
//         AreaSize: '',
//         SizePrefix: '',
//         LandArea: '',
//         Bedrooms: '',
//         Bathrooms: '',
//         Garages: '',
//         YearBuild: '',
//         amenity: [],
//         // Contact Details
//         Name: '',
//         Email: '',
//         Phone: ''
//     });
//     const [images, setImages] = useState([]);

//     const handleChange = (e) => {
//         const { id, value } = e.target;
//         setFormData({ ...formData, [id]: value });
//     };

//     const handleAmenityChange = (amenity) => {
//         const updatedAmenities = formData.amenity.includes(amenity)
//             ? formData.amenity.filter((item) => item !== amenity)
//             : [...formData.amenity, amenity];
//         setFormData({ ...formData, amenity: updatedAmenities });
//     };

//     const handleImageChange = (newImages) => {
//         setImages(newImages);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const formDataObj = new FormData();
//         Object.keys(formData).forEach(key => {
//             if (Array.isArray(formData[key])) {
//                 formData[key].forEach((item) => {
//                     formDataObj.append(key, item);
//                 });
//             } else {
//                 formDataObj.append(key, formData[key]);
//             }
//         });

//         images.forEach((image, index) => {
//             formDataObj.append(`image${index}`, image);
//         });

//         try {
//             const response = await axios.post('http://localhost:5000/projects', formDataObj, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });
//             console.log('Success:', response.data);
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <ListingBasicInformation formData={formData} handleChange={handleChange} />
//             <ListingPropertyGallery handleImageChange={handleImageChange} />
//             <ListingPropertyInformation formData={formData} handleChange={handleChange} handleAmenityChange={handleAmenityChange} />
//             <ListingContactDetails formData={formData} handleChange={handleChange} />
//             <button type="submit" className="btn btn-main w-100">Submit Property</button>
//         </form>
//     );
// };

// export default AddListingForm;




import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for react-toastify

import ListingBasicInformation from '../common/ListingBasicInformation';
import ListingPropertyGallery from '../common/ListingPropertyGallery';
import ListingPropertyInformation from './ListingPropertyInformation';
// import ListingContactDetails from '../common/ListingContactDetails';

const AddListingForm = () => {
    const [formData, setFormData] = useState({
        propertyTitle: '',
        Description: '',
        Type: '',
        Price: '',
        Location: '',
        Rooms: '',
        AreaSize: '',
        LandArea: '',
        Bedrooms: '',
        Bathrooms: '',
        amenity: [],
        // Contact Details
        // Name: '',
        // Email: '',
        // Phone: '',
        image: null
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleAmenityChange = (amenity) => {
        const updatedAmenities = formData.amenity.includes(amenity)
            ? formData.amenity.filter((item) => item !== amenity)
            : [...formData.amenity, amenity];
        setFormData({ ...formData, amenity: updatedAmenities });
    };

    const handleFileChange = (file) => {
        setFormData({
            ...formData,
            image: file // Set the file object here
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataObj = new FormData();
        Object.keys(formData).forEach(key => {
            if (Array.isArray(formData[key])) {
                formData[key].forEach((item) => {
                    formDataObj.append(key, item);
                });
            } else {
                formDataObj.append(key, formData[key]);
            }
        });

        if (formData.image) {
            formDataObj.append('image', formData.image.file); // Append the file properly
        }
        try {
            const response = await axios.post('https://api.mannethainfra.com/projects', formDataObj, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            toast.success('Project added successfully!');
            console.log('Success:', response.data);
        } catch (error) {
            toast.error('Error adding project. Please try again.');
            console.error('Error:', error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <ListingBasicInformation formData={formData} handleChange={handleChange} />
                <ListingPropertyGallery onImageChange={handleFileChange} />
                <ListingPropertyInformation formData={formData} handleChange={handleChange} handleAmenityChange={handleAmenityChange}/>
                {/* <ListingContactDetails formData={formData} handleChange={handleChange} /> */}
                <button type="submit" className="btn btn-main w-100">Submit Property</button>
            </form>

            {/* ToastContainer to display messages */}
            <ToastContainer />
        </>
    );
};

export default AddListingForm;
