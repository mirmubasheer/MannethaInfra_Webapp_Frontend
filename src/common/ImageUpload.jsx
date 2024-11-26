// import React, { useState } from 'react';

// const ImageUpload = () => {
    
//     const [images, setImages] = useState([]);

//     const handleImageChange = (event) => {
//         const selectedImages = Array.from(event.target.files);
//         setImages(prevImage => [...prevImage, ...selectedImages]);
//     };

//     // Remove Uploaded Image Code
//     const handleRemoveImage = (index) => {
//         const updatedImages  = [...images]; 
//         updatedImages.splice(index, 1); 
//         setImages(updatedImages); 
//     }

//   return (
//     <div className="image-uploader">
//         <label htmlFor="ImageUploadLabel" className="image-uploader__label"> 
//             <span className="d-none">Upload Image</span> 
//         </label>

//         <input type="file" className='image-uploader__input' id='ImageUploadLabel' multiple onChange={handleImageChange} />
//         {
//             images.length > 0 ? (
//                 <div className="uploaded-images d-flex flex-wrap gap-3">
//                     {
//                         images.map((image, index) => (
//                             <div className="uploaded-image" key={index}>
//                                 <button type="button" className='uploaded-image__remove' onClick={()=> handleRemoveImage(index)}>
//                                     <i className="fas fa-times"></i>
//                                 </button>

//                                 <img src={URL.createObjectURL(image)} alt={`Image ${index}`} />
//                             </div>
//                         ))
//                     }
//                 </div>
//             ) : (
//                 <div className="upload-text">
//                     <span className="upload-text__icon">
//                         <i className="fas fa-cloud-upload-alt"></i>
//                     </span>
//                     <span className='upload-text__text'>Drag &amp; Drop files here or click to browse</span>
//                 </div>
//             )
//         }
//     </div>
//   );
// };

// export default ImageUpload;



// import React, { useState, useEffect } from 'react';

// const ImageUpload = ({ label, onImageChange }) => {
//     const [image, setImage] = useState(null);

//     const handleImageChange = (event) => {
//         const selectedImage = event.target.files[0];
//         if (selectedImage) {
//             const imageObj = {
//                 file: selectedImage,
//                 preview: URL.createObjectURL(selectedImage)
//             };
//             setImage(imageObj);
//             onImageChange(imageObj); // Pass image up to parent
//         }
//     };

//     const handleRemoveImage = () => {
//         if (image) {
//             URL.revokeObjectURL(image.preview); // Clean up the URL
//             setImage(null);
//             onImageChange(null); // Notify parent to clear image
//         }
//     };

//     useEffect(() => {
//         return () => {
//             if (image) {
//                 URL.revokeObjectURL(image.preview);
//             }
//         };
//     }, [image]);

//     return (
//         <div className="image-uploader">
//             <label htmlFor="ImageUploadLabel" className="image-uploader__label">
//                 <span className="d-none">{label}</span>
//             </label>
//             <input
//                 type="file"
//                 className="image-uploader__input"
//                 id="ImageUploadLabel"
//                 onChange={handleImageChange}
//             />
//             {image ? (
//                 <div className="uploaded-image">
//                     <button
//                         type="button"
//                         className="uploaded-image__remove"
//                         onClick={handleRemoveImage}
//                     >
//                         <i className="fas fa-times"></i>
//                     </button>
//                     <img src={image.preview} alt="Uploaded" />
//                 </div>
//             ) : (
//                 <div className="upload-text">
//                     <span className="upload-text__icon">
//                         <i className="fas fa-cloud-upload-alt"></i>
//                     </span>
//                     <span className="upload-text__text">
//                         Drag &amp; Drop files here or click to browse
//                     </span>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ImageUpload;

import React, { useState, useEffect } from 'react';

const ImageUpload = ({ label, onImageChange }) => {
    const [image, setImage] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0]; // Only the first file is taken
        if (file) {
            const imageObject = {
                file,
                preview: URL.createObjectURL(file)
            };
            setImage(imageObject);
            onImageChange(file); // Pass the actual file to the parent component
        }
    };

    const handleRemoveImage = () => {
        if (image) {
            URL.revokeObjectURL(image.preview);
            setImage(null);
            onImageChange(null); // Pass null when image is removed
        }
    };

    useEffect(() => {
        return () => {
            if (image) {
                URL.revokeObjectURL(image.preview);
            }
        };
    }, [image]);

    return (
        <div className="image-uploader">
            <label htmlFor="ImageUploadLabel" className="image-uploader__label">
                <span className="d-none">{label}</span>
            </label>
            <input
                type="file"
                className="image-uploader__input"
                id="ImageUploadLabel"
                onChange={handleFileChange}
            />
            {image ? (
                <div className="uploaded-image">
                    <button
                        type="button"
                        className="uploaded-image__remove"
                        onClick={handleRemoveImage}
                    >
                        <i className="fas fa-times"></i>
                    </button>
                    <img src={image.preview} alt="Uploaded" />
                </div>
            ) : (
                <div className="upload-text">
                    <span className="upload-text__icon">
                        <i className="fas fa-cloud-upload-alt"></i>
                    </span>
                    <span className="upload-text__text">
                        Drag &amp; Drop files here or click to browse
                    </span>
                </div>
            )}
        </div>
    );
};

export default ImageUpload;
