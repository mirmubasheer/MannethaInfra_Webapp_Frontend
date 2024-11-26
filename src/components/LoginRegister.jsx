// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useFormik } from "formik";
// import * as yup from "yup";
// import { ToastContainer, toast } from 'react-toastify';

// import LoginRegisterThumb from '../../public/assets/images/thumbs/login-img.avif';

// const LoginRegister = ({ titleText, passwordCol, btnText, showForgotRemember, showTermCondition, haveAccountText, haveAccountLink, haveAccountLinkText }) => {

//     const [showPassword, setShowPassword] = useState(false);
//     const handleShowPassword = () => {
//         setShowPassword(!showPassword)
//     }

//     // Navigate to Account Page
//     const navigate = useNavigate(); 

//     // **************************** Form Validation Start ************************ 
//     const formik = useFormik({
//         initialValues: {
//           username: "",
//           email: "",
//           password: "",
//         },
//         // Validate by Yup
//         validationSchema: yup.object({
//             username: yup.string().min(3, "Too Short! Must be at least 3 characters long").required(),
//             email: yup.string().email("Your Email is not valid! Provide valid email").required(),
//             password: yup
//                 .string()
//                 .min(5, 'Password must be 5 characters long')
//                 .matches(/[0-9]/, 'Password requires a number')
//                 .matches(/[a-z]/, 'Password requires a lowercase letter')
//                 .matches(/[A-Z]/, 'Password requires an uppercase letter')
//                 .matches(/[^\w]/, 'Password requires a symbol')
//                 .required('Password is required'),
//         }),
    
//         onSubmit: (values, { resetForm }) => {
//             // Navigate with form data
//             navigate('/account', { state: { userData: values } });
            
//             resetForm({ values: "" });
//             toast.success("Congratulations! You Have Submitted Successfully.", {
//                 theme: "colored",
//             });
//             console.log('You Logged in Successfully');
//         },
//     });

//     // Render Errors Code Start
//     const renderUsernameError = formik.touched.username && formik.errors.username && (
//         <span className="text-danger">{formik.errors.username}</span>
//     );
//     const renderEmailError = formik.touched.email && formik.errors.email && (
//         <span className="text-danger">{formik.errors.email}</span>
//     );
//     const renderPasswordError = formik.touched.password && formik.errors.password && (
//         <span className="text-danger">{formik.errors.password}</span>
//     );
//     // Render Errors Code End
//     // **************************** Form Validation End ************************ 
    
//     return (
//         <>
//         <ToastContainer/>
//             <section className="loginRegister padding-y-120">
//                 <div className="container container-two">
//                     <div className="loginRegister-box card common-card">
//                         <div className="card-body">
//                             <div className="row gy-4">
//                                 <div className="col-lg-6">
//                                     <div className="loginRegister-thumb rounded overflow-hidden me-lg-2 d-flex h-100">
//                                         <img src={LoginRegisterThumb} alt=""/>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-6">
//                                     <div className="loginRegister-content">
//                                         <form onSubmit={formik.handleSubmit} method="POST">
//                                             <h3 className="loginRegister__title text-poppins">{titleText} to Mannetha Infra</h3>
//                                             <p className="loginRegister__desc mb-4 font-18">Sign up to Mannetha Infra's Admin Panel and take control of your real estate projects with ease and efficiency. Manage, monitor, and drive success from one powerful platform.</p>

//                                             <div className="row gy-lg-4 gy-3">
//                                                 <div className="col-sm-6 col-xs-6">
//                                                     <label htmlFor="username" className="form-label">Username</label>
//                                                     <input 
//                                                         type="text" 
//                                                         placeholder="User Name"
//                                                         name='username'
//                                                         id='username'
//                                                         onChange={formik.handleChange}
//                                                         onBlur={formik.handleBlur}
//                                                         value={formik.values.username}
//                                                         className={`common-input ${
//                                                             formik.touched.username && formik.errors.username ? "is-invalid" : ""
//                                                         }`}
//                                                     />
//                                                     {renderUsernameError}
//                                                 </div>
//                                                 <div className="col-sm-6 col-xs-6">
//                                                     <label htmlFor="Email" className="form-label">Email</label>
//                                                     <input 
//                                                         type="email" 
//                                                         placeholder="Email"
//                                                         name='email'
//                                                         id='Email'
//                                                         onChange={formik.handleChange}
//                                                         onBlur={formik.handleBlur}
//                                                         value={formik.values.email}
//                                                         className={`common-input ${
//                                                             formik.touched.email && formik.errors.email ? "is-invalid" : ""
//                                                         }`}
//                                                     />
//                                                     {renderEmailError}
//                                                 </div>
//                                                 <div className={passwordCol}>
//                                                     <label htmlFor="your-password" className="form-label">Password</label>
//                                                     <div className="position-relative">
//                                                         <input 
//                                                             type={`${showPassword ? 'text': 'password'}`}
//                                                             placeholder="Password"
//                                                             name='password'
//                                                             id='your-password'
//                                                             onChange={formik.handleChange}
//                                                             onBlur={formik.handleBlur}
//                                                             value={formik.values.password}
//                                                             className={`common-input ${
//                                                                 formik.touched.password && formik.errors.password ? "is-invalid" : ""
//                                                             }`}
//                                                         />
//                                                         <span className={`password-show-hide ${showPassword ? 'fas fa-eye ': 'fas fa-eye-slash'} `} onClick={()=>handleShowPassword()}> </span>
//                                                     </div>
//                                                     {renderPasswordError}
//                                                 </div>
                                                
//                                                 {
//                                                     showForgotRemember && (
//                                                         <div className="col-12">
//                                                             <div className="form-group py-2 flx-between">
//                                                                 <div className="common-check mb-0">
//                                                                     <input className="form-check-input" type="checkbox" value="" id="remember"/>
//                                                                     <label className="form-check-label" htmlFor="remember">Remember me </label>
//                                                                 </div>
//                                                                 <Link to="#" className="forgot-password text-decoration-underline text-main text-poppins font-14">Forgot Password?</Link>
//                                                             </div>
//                                                         </div>
//                                                     )
//                                                 }

//                                                 {
//                                                     showTermCondition && (
//                                                         <div className="col-12 py-2">
//                                                             <div className="common-check">
//                                                                 <input className="form-check-input" type="checkbox" value="" id="remember"/>
//                                                                 <div className="form-check-label">
//                                                                     <label className="" htmlFor="remember"> I agree with Licences Info,</label>
//                                                                     <a href="#" className="text-decoration-underline text-main">Terms of Service</a>
//                                                                     <label className="" htmlFor="remember"> , Privacy Policy </label>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     )
//                                                 }

//                                                 <div className="col-12">
//                                                     <button type="submit" className="btn btn-main w-100">
//                                                         {btnText} 
//                                                         <span className="icon-right"> <i className="far fa-paper-plane"></i> </span> 
//                                                     </button>
//                                                 </div>

//                                                 <div className="col-sm-12 mb-0">
//                                                     <div className="have-account text-center">
//                                                         <p className="text">{haveAccountText} 
//                                                             <Link to={haveAccountLink} className="link text-main text-decoration-underline font-14 text-poppins">{haveAccountLinkText}</Link>
//                                                         </p>
//                                                     </div>
//                                                 </div>

//                                             </div>
//                                         </form>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>   
//         </>
//     );
// };

// export default LoginRegister;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import * as yup from "yup";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import styles for react-toastify

import LoginRegisterThumb from '../../public/assets/images/thumbs/login-img.avif';

const LoginRegister = ({ titleText, passwordCol, btnText, showForgotRemember, showTermCondition, haveAccountText, haveAccountLink, haveAccountLinkText }) => {

    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    // Navigate to Account Page
    const navigate = useNavigate(); 

    // **************************** Form Validation Start ************************ 
    const formik = useFormik({
        initialValues: {
          username: "",
          email: "",
          password: "",
        },
        // Validate by Yup
        validationSchema: yup.object({
            username: yup.string().min(3, "Too Short! Must be at least 3 characters long").required(),
            email: yup.string().email("Your Email is not valid! Provide valid email").required(),
            password: yup
                .string()
                .min(5, 'Password must be 5 characters long')
                .matches(/[0-9]/, 'Password requires a number')
                .matches(/[a-z]/, 'Password requires a lowercase letter')
                .matches(/[A-Z]/, 'Password requires an uppercase letter')
                .matches(/[^\w]/, 'Password requires a symbol')
                .required('Password is required'),
        }),
    
        onSubmit: async (values, { resetForm }) => {
            try {
                // Send data to server using Axios
                const response = await axios.post('https://api.mannethainfra.com/auth/signup', {
                    username: values.username,
                    email: values.email,
                    password: values.password
                });

                if (response.status === 201 || response.status === 200) {
                    // Success message
                    toast.success("Signup successful!", {
                        theme: "colored",
                    });

                    // Navigate with form data
                    navigate('/login', { state: { userData: values } });
                    resetForm();
                }
            } catch (error) {
                // Handle the error
                if (error.response) {
                    toast.error(`Error: ${error.response.data.message}`, {
                        theme: "colored",
                    });
                } else {
                    toast.error("Signup failed! Please try again later.", {
                        theme: "colored",
                    });
                }
            }
        },
    });

    // Render Errors Code Start
    const renderUsernameError = formik.touched.username && formik.errors.username && (
        <span className="text-danger">{formik.errors.username}</span>
    );
    const renderEmailError = formik.touched.email && formik.errors.email && (
        <span className="text-danger">{formik.errors.email}</span>
    );
    const renderPasswordError = formik.touched.password && formik.errors.password && (
        <span className="text-danger">{formik.errors.password}</span>
    );
    // Render Errors Code End
    // **************************** Form Validation End ************************ 
    
    return (
        <>
        <ToastContainer/>
            <section className="loginRegister padding-y-120">
                <div className="container container-two">
                    <div className="loginRegister-box card common-card">
                        <div className="card-body">
                            <div className="row gy-4">
                                <div className="col-lg-6">
                                    <div className="loginRegister-thumb rounded overflow-hidden me-lg-2 d-flex h-100">
                                        <img src={LoginRegisterThumb} alt=""/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="loginRegister-content">
                                        <form onSubmit={formik.handleSubmit} method="POST">
                                            <h3 className="loginRegister__title text-poppins">{titleText} to Mannetha Infra</h3>
                                            <p className="loginRegister__desc mb-4 font-18">Sign up to Mannetha Infra's Admin Panel and take control of your real estate projects with ease and efficiency. Manage, monitor, and drive success from one powerful platform.</p>

                                            <div className="row gy-lg-4 gy-3">
                                                <div className="col-sm-6 col-xs-6">
                                                    <label htmlFor="username" className="form-label">Username</label>
                                                    <input 
                                                        type="text" 
                                                        placeholder="User Name"
                                                        name='username'
                                                        id='username'
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.username}
                                                        className={`common-input ${
                                                            formik.touched.username && formik.errors.username ? "is-invalid" : ""
                                                        }`}
                                                    />
                                                    {renderUsernameError}
                                                </div>
                                                <div className="col-sm-6 col-xs-6">
                                                    <label htmlFor="Email" className="form-label">Email</label>
                                                    <input 
                                                        type="email" 
                                                        placeholder="Email"
                                                        name='email'
                                                        id='Email'
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.email}
                                                        className={`common-input ${
                                                            formik.touched.email && formik.errors.email ? "is-invalid" : ""
                                                        }`}
                                                    />
                                                    {renderEmailError}
                                                </div>
                                                <div className={passwordCol}>
                                                    <label htmlFor="your-password" className="form-label">Password</label>
                                                    <div className="position-relative">
                                                        <input 
                                                            type={`${showPassword ? 'text': 'password'}`}
                                                            placeholder="Password"
                                                            name='password'
                                                            id='your-password'
                                                            onChange={formik.handleChange}
                                                            onBlur={formik.handleBlur}
                                                            value={formik.values.password}
                                                            className={`common-input ${
                                                                formik.touched.password && formik.errors.password ? "is-invalid" : ""
                                                            }`}
                                                        />
                                                        <span className={`password-show-hide ${showPassword ? 'fas fa-eye ': 'fas fa-eye-slash'} `} onClick={()=>handleShowPassword()}> </span>
                                                    </div>
                                                    {renderPasswordError}
                                                </div>
                                                
                                                {
                                                    showForgotRemember && (
                                                        <div className="col-12">
                                                            <div className="form-group py-2 flx-between">
                                                                <div className="common-check mb-0">
                                                                    <input className="form-check-input" type="checkbox" value="" id="remember"/>
                                                                    <label className="form-check-label" htmlFor="remember">Remember me </label>
                                                                </div>
                                                                <Link to="#" className="forgot-password text-decoration-underline text-main text-poppins font-14">Forgot Password?</Link>
                                                            </div>
                                                        </div>
                                                    )
                                                }

                                                {
                                                    showTermCondition && (
                                                        <div className="col-12 py-2">
                                                            <div className="common-check">
                                                                <input className="form-check-input" type="checkbox" value="" id="remember"/>
                                                                <div className="form-check-label">
                                                                    <label className="" htmlFor="remember"> I agree with Licences Info,</label>
                                                                    <a href="#" className="text-decoration-underline text-main">Terms of Service</a>
                                                                    <label className="" htmlFor="remember"> , Privacy Policy </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                }

                                                <div className="col-12">
                                                    <button type="submit" className="btn btn-main w-100">
                                                        {btnText} 
                                                        <span className="icon-right"> <i className="far fa-paper-plane"></i> </span> 
                                                    </button>
                                                </div>

                                                <div className="col-sm-12 mb-0">
                                                    <div className="have-account text-center">
                                                        <p className="text">{haveAccountText} 
                                                            <Link to={haveAccountLink} className="link text-main text-decoration-underline font-14 text-poppins">{haveAccountLinkText}</Link>
                                                        </p>
                                                    </div>
                                                </div>

                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>   
        </>
    );
};

export default LoginRegister;
