import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Channel.css';

function ChannelPartner({ onClose }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    message: '',
    subject: 'Channel Partner Form Submitted', // Static subject
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const modalRef = useRef(); // Create a ref for the modal container

  const handleForm = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmissionStatus(null); // Reset submission status before the request

    try {
        const response = await axios.post(
            "https://api.mannethainfra.com/emailform",
            form,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        if (response.status >= 200 && response.status < 300) {
            setSubmissionStatus("success"); // Set to success on successful submission
            setForm({ // Reset the form fields
                name: '',
                email: '',
                mobileNumber: '',
                message: '',
                subject: 'Channel Partner Form Submitted',
            });
            setTimeout(() => {
                window.location.href = "https://mannethainfra.com/home"; 
            }, 1000);
        } else {
            setSubmissionStatus("error"); // Handle non-200 responses
        }
    } catch (error) {
        console.error("Error submitting form:", error);
        setSubmissionStatus("error"); // Set to error if there's an issue
    } finally {
        setIsLoading(false);
    }
};


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="backdrop">
      <div className="modalContainer" ref={modalRef}>
        <button className="closeButton" onClick={onClose} type="button">
          X
        </button>
        <h4>Channel Partner Enrollment Form</h4>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your name"
            name="name"
            value={form.name} // Bind form field
            maxLength="30"
            onChange={handleForm}
            required
          />
          <input
            type="email"
            placeholder="Your email"
            name="email"
            value={form.email} // Bind form field
            maxLength="30"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            title="Please enter a valid email address (e.g., text@text.com)"
            onChange={handleForm}
            required
          />
          <input
            type="tel"
            placeholder="Your mobile number"
            name="mobileNumber"
            value={form.mobileNumber} // Bind form field
            maxLength="15"
            pattern="\d+"
            title="Please enter a valid mobile number"
            onChange={handleForm}
            required
          />
          <textarea
            placeholder="Type your message here"
            rows="4"
            name="message"
            value={form.message} // Bind form field
            maxLength="100"
            onChange={handleForm}
            required
          />
          <button type="submit" className="submitButton" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>

        {isLoading && (
          <div className="loadingContainer">
            <div className="loadingIcon"></div>
            <p className="loadingMessage">Please Wait...</p>
          </div>
        )}

        {/* Show only the success or error message */}
        {submissionStatus === "success" && (
          <p className="successMessage">
            Your details have been successfully received.
          </p>
        )}
        {submissionStatus === "error" && (
          <p className="errorMessage">
            There was an error submitting your details. Please try again.
          </p>
        )}
      </div>
    </div>
  );
}

export default ChannelPartner;
