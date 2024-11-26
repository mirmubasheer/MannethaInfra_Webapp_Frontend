// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import './Business.css';

// function BusinessForm({ onClose }) {
//   const [form, setForm] = useState({});
//   const [submissionStatus, setSubmissionStatus] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState('');
  
//   const modalRef = useRef();

//   const handleForm = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleCategoryChange = (e) => {
//     const selectedValue = e.target.value;
//     setSelectedCategory(selectedValue);

//     // Handle the case for "Other" category
//     if (selectedValue === 'Other') {
//       setForm({
//         ...form,
//         category: '',
//         otherCategory: '',
//       });
//     } else {
//       setForm({
//         ...form,
//         category: selectedValue,
//         otherCategory: undefined, // or you could remove this line if it's not needed
//       });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setSubmissionStatus(null);
  
//     // Prepare form data
//     const formData = {
//       ...form,
//       subject: "Business Form Submitted",
//     };
  
//     try {
//       const response = await axios.post("https://mannetha-backendtest.onrender.com/auth/business", formData, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
  
//       // Debugging: Log the full response object
//       console.log("Response received:", response);
  
//       // Check for success: Accept both 200 and 201 status codes
//       if (response.status === 200 || response.status === 201) {
//         if (response.data && response.data.message === "Email sent successfully") {
//           setSubmissionStatus("success");
//           setTimeout(() => {
//             window.location.href = "https://mannethainfra.com/Home/";
//           }, 1000);
//         } else {
//           console.log("Unexpected response message:", response.data.message);
//           setSubmissionStatus("error");
//         }
//       } else {
//         console.log("Response status not 200 or 201:", response.status);
//         setSubmissionStatus("error");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       setSubmissionStatus("error");
//     } finally {
//       setIsLoading(false);
//     }
//   };
  
  

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (modalRef.current && !modalRef.current.contains(event.target)) {
//         onClose();
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
    
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [onClose]);

//   return (
//     <div className="backdrop">
//       <form onSubmit={handleSubmit} className="modalContainer" ref={modalRef}>
//         <button className="closeButton" onClick={onClose} type="button">
//           X
//         </button>

//         <h4>Business Form</h4>
//         <input
//           type="text"
//           placeholder="Your name"
//           maxLength="30"
//           name="businessName"
//           onChange={handleForm}
//           required
//         />
//         <input
//           type="email"
//           placeholder="Your email"
//           name="businessEmail"
//           maxLength="30"
//           pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
//           title="Please enter a valid email address"
//           onChange={handleForm}
//           required
//         />
//         <input
//           type="tel"
//           placeholder="Your mobile number"
//           name="businessPhone"
//           maxLength="10"
//           pattern="\d{10}"
//           title="Please enter a 10-digit mobile number"
//           onChange={handleForm}
//           required
//         />
//         <select
//           className="selectCategory" 
//           name="businessCategory"
//           value={selectedCategory}
//           onChange={handleCategoryChange}
//           required
//         >
//           <option value="">Select Business Category</option>
//           <option value="Hiring">Hiring</option>
//           <option value="Training">Training</option>
//           <option value="Marketing">Marketing</option>
//           <option value="Sales">Sales</option>
//           <option value="Branding">Branding</option>
//           <option value="Other">Other</option>
//         </select>
//         {selectedCategory === 'Other' && (
//           <input
//             type="text"
//             placeholder="Enter Other Category"
//             className="otherInput"
//             name="otherCategory" // Update name to store the value separately
//             onChange={handleForm}
//             required
//           />
//         )}
//         <button type="submit" className="submitButton" disabled={isLoading}>
//           {isLoading ? "Submitting..." : "Submit"}
//         </button>
//         <div className="loadingContainer">
//           {isLoading && (
//             <>
//               <div className="loadingIcon"></div>
//               <p className="loadingMessage">Please Wait...</p>
//             </>
//           )}
//         </div>
//         {submissionStatus === "success" && (
//           <p className="successMessage">
//             Your details have been successfully received.
//           </p>
//         )}
//         {submissionStatus === "error" && (
//           <p className="errorMessage">
//             There was an error submitting your details. Please try again.
//           </p>
//         )}
//       </form>
//     </div>
//   );
// }

// export default BusinessForm;




import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Business.css';

function BusinessForm({ onClose }) {
  const [form, setForm] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  
  const modalRef = useRef();

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleCategoryChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedCategory(selectedValue);

    // Handle the case for "Other" category
    if (selectedValue === 'Other') {
      setForm({
        ...form,
        category: '',
        otherCategory: '',
      });
    } else {
      setForm({
        ...form,
        category: selectedValue,
        otherCategory: undefined, // or you could remove this line if it's not needed
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmissionStatus(null);
  
    // Prepare form data
    const formData = {
      ...form,
      subject: "Business Form Submitted",
    };
  
    try {
      const response = await axios.post(
        "https://api.mannethainfra.com/emailform",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      // Debugging: Log the full response object
      console.log("Response received:", response);
  
      // If the response status is 2xx, treat it as success
      if (response.status >= 200 && response.status < 300) {
        setSubmissionStatus("success");
  
        setTimeout(() => {
          window.location.href = "https://mannethainfra.com/home";
        }, 1000);
      } else {
        console.log("Response status not in 2xx range:", response.status);
        setSubmissionStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionStatus("error");
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
      <form onSubmit={handleSubmit} className="modalContainer" ref={modalRef}>
        <button className="closeButton" onClick={onClose} type="button">
          X
        </button>

        <h4>Business Form</h4>
        <input
          type="text"
          placeholder="Your name"
          maxLength="30"
          name="name"
          onChange={handleForm}
          required
        />
        <input
          type="email"
          placeholder="Your email"
          name="email"
          maxLength="30"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          title="Please enter a valid email address"
          onChange={handleForm}
          required
        />
        <input
          type="tel"
          placeholder="Your mobile number"
          name="mobilenumber"
          maxLength="10"
          pattern="\d{10}"
          title="Please enter a 10-digit mobile number"
          onChange={handleForm}
          required
        />
        <select
          className="selectCategory" 
          name="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
          required
        >
          <option value="">Select Business Category</option>
          <option value="Hiring">Hiring</option>
          <option value="Training">Training</option>
          <option value="Marketing">Marketing</option>
          <option value="Sales">Sales</option>
          <option value="Branding">Branding</option>
          <option value="Other">Other</option>
        </select>
        {selectedCategory === 'Other' && (
          <input
            type="text"
            placeholder="Enter Other Category"
            className="otherInput"
            name="otherCategory" // Update name to store the value separately
            onChange={handleForm}
            required
          />
        )}
        <button type="submit" className="submitButton" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit"}
        </button>
        <div className="loadingContainer">
          {isLoading && (
            <>
              <div className="loadingIcon"></div>
              <p className="loadingMessage">Please Wait...</p>
            </>
          )}
        </div>
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
      </form>
    </div>
  );
}

export default BusinessForm;
