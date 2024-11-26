

import React, { useState, useEffect } from 'react';

const UpdateImageUpload = ({ label, onImageChange, multiple, existingImages }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Initialize images with existing images
        const imageObjects = existingImages.map(image => ({
            file: null,
            preview: image // Assuming the URL is directly provided
        }));
        setImages(imageObjects);
    }, [existingImages]);

    const handleImageChange = (event) => {
        const files = Array.from(event.target.files);
        const imageObjects = files.map(file => ({
            file,
            preview: URL.createObjectURL(file)
        }));
        setImages(prevImages => [...prevImages, ...imageObjects]);
        onImageChange([...images, ...imageObjects]);
    };

    const handleRemoveImage = (index) => {
        const updatedImages = images.filter((_, i) => i !== index);
        if (images[index] && images[index].preview) {
            URL.revokeObjectURL(images[index].preview);
        }
        setImages(updatedImages);
        onImageChange(updatedImages);
    };

    useEffect(() => {
        return () => {
            images.forEach(image => {
                if (image.preview) {
                    URL.revokeObjectURL(image.preview);
                }
            });
        };
    }, [images]);

    return (
        <div className="image-uploader">
            <label htmlFor="ImageUploadLabel" className="image-uploader__label">
                <span className="d-none">{label}</span>
            </label>
            <input
                type="file"
                className="image-uploader__input"
                id="ImageUploadLabel"
                multiple={multiple}
                onChange={handleImageChange}
            />
            {images.length > 0 ? (
                <div className="uploaded-images">
                    {images.map((image, index) => (
                        <div key={index} className="uploaded-image">
                            <button
                                type="button"
                                className="uploaded-image__remove"
                                onClick={() => handleRemoveImage(index)}
                            >
                                <i className="fas fa-times"></i>
                            </button>
                            <img src={`https://api.mannethainfra.com/uploads/${image.preview}`} alt="Uploaded" />
                        </div>
                    ))}
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

export default UpdateImageUpload;
