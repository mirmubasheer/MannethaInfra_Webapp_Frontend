import React, { useState } from 'react';
import axios from 'axios';

const AddBuilder = () => {
    const [formData, setFormData] = useState({
        builderName: '',
        about: '',
        officeAddress: '',
        builderLogo: null
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            builderLogo: e.target.files[0]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formDataToSubmit = new FormData();
        formDataToSubmit.append('builderName', formData.builderName);
        formDataToSubmit.append('about', formData.about);
        formDataToSubmit.append('officeAddress', formData.officeAddress);

        if (formData.builderLogo) {
            formDataToSubmit.append('builderLogo', formData.builderLogo);
        }

        try {
            const response = await axios.post('https://api.mannethainfra.com/builder', formDataToSubmit, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log('Builder added successfully:', response.data);
            alert('Builder added successfully!');
        } catch (error) {
            console.error('Error adding builder:', error);
            alert('Error adding builder. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <div className="card-item" id="addBuilder">
                <div className="card common-card">
                    <div className="card-header">
                        <h6 className="title mb-0">Add Builder Information</h6>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="row gy-4">
                                <div className="col-sm-12">
                                    <label htmlFor="builderName" className="form-label">Builder Name</label>
                                    <input 
                                        type="text" 
                                        className="common-input" 
                                        id="builderName" 
                                        placeholder="Builder Name" 
                                        required 
                                        value={formData.builderName} 
                                        onChange={handleChange} 
                                    />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="about" className="form-label">About</label>
                                    <textarea 
                                        className="common-input" 
                                        id="about" 
                                        placeholder="About the Builder" 
                                        required 
                                        value={formData.about} 
                                        onChange={handleChange} 
                                    ></textarea>
                                </div>
                                <div className="col-sm-12">
                                    <label htmlFor="officeAddress" className="form-label">Office Address</label>
                                    <input 
                                        type="text" 
                                        className="common-input" 
                                        id="officeAddress" 
                                        placeholder="Office Address" 
                                        required 
                                        value={formData.officeAddress} 
                                        onChange={handleChange} 
                                    />
                                </div>
                                <div className="col-sm-12">
                                    <label htmlFor="builderLogo" className="form-label">Builder Logo</label>
                                    <input 
                                        type="file" 
                                        className="common-input" 
                                        id="builderLogo" 
                                        accept="image/*" 
                                        onChange={handleFileChange} 
                                    />
                                </div>
                                <div className="col-sm-12">
                                    <button 
                                        type="submit" 
                                        className="btn btn-main w-100"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Submitting...' : 'Submit Builder'}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>   
        </>
    );
};

export default AddBuilder;
