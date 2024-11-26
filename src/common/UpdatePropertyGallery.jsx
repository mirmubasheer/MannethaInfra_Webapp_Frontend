import React from 'react';
import UpdateImageUpload from './UpdateImageUpload'

const UpdatePropertyGallery = ({ formData, onImageChange }) => {
    const handleImageChange = (newImages) => {
        onImageChange(newImages);
    };

    return (
        <div className="card-item" id="propertyGallery">
            <div className="card common-card">
                <div className="card-header">
                    <h6 className="title mb-0">Property Gallery</h6>
                </div>
                <div className="card-body">
                    <UpdateImageUpload
                        label="Upload Property Images"
                        onImageChange={handleImageChange}
                        multiple
                        existingImages={formData.images}
                    />
                </div>
            </div>
        </div>
    );
};

export default UpdatePropertyGallery;
