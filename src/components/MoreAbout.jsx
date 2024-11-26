import React from 'react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { aboutCheckLists } from '../data/HomeThreeData/HomeThreeData'; // Assuming the same data is used
import CountUp from 'react-countup';

import AboutThreeThumb from '../../public/assets/images/thumbs/11.png'; // Assuming the same image is used

const MoreAbout = () => {
    return (
        <>
            <section className="about-three bg-white padding-y-120">
                <div className="container container-two">
                    <div className="row gy-4">
                        <div className="col-lg-6" style={{ order: 2, display: 'flex', justifyContent: 'flex-end' }}>
                            <div className="about-three-thumb">
                                <div className="about-three-thumb__inner">
                                    <img src={AboutThreeThumb} alt="" style={{ maxWidth: '100%', height: 'auto' }}/>
                                    <div className="project-content">
                                        {/* <div className="project-content__inner">
                                            <h2 className="project-content__number">
                                                <CountUp end={parseInt(10)} duration={6} delay={0.2} />k
                                            </h2>
                                            <span className="project-content__text font-12">Complete project</span>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" style={{ order: 1 }}>
                            <div className="about-content">
                                <SectionHeading
                                    headingClass="style-left"  
                                    subtitle="Why Choose Us"
                                    subtitleClass="bg-gray-100" 
                                    title="Our Distinctive Edge as the Best Real Estate Company in Hyderabad" 
                                    renderDesc={true}
                                    desc="Choosing Mannetha Infra means partnering with the best real estate company in Hyderabad. Our distinctive edge includes: Innovative Design: We use cutting-edge technology and design principles to craft the most desirable spaces, ensuring we stand out among real estate ventures in Hyderabad. Client-Centric Approach: We tailor our services to meet the specific needs of our clients, positioning ourselves as a top choice among real estate agencies in Hyderabad and best property dealers in Hyderabad. Sustainable Practices: We integrate eco-friendly materials and methods into our projects, aligning with the values of best real estate marketing agencies in Hyderabad. Uncompromising Quality: Our commitment to the highest standards of quality ensures that we remain at the forefront of top ten real estate companies in Hyderabad. Our approach guarantees that our clients receive the best residential properties in Hyderabad."
                                    renderButton={false}
                                    buttonClass="btn-main"
                                    buttonText="View More"
                                    textAlign="justify" 
                                />
{/* 
                                <ul className="check-list style-two">
                                    {
                                        aboutCheckLists.map((aboutCheckList, index) => {
                                            return (
                                                <li className="check-list__item d-flex align-items-center" key={index}>
                                                    <span className="icon">{aboutCheckList.icon}</span>
                                                    <span className="text fw-semibold">{aboutCheckList.text}</span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul> */}   
                                {/* <div className="about-button">
                                    <Button
                                        btnLink="#" 
                                        btnClass="btn btn-outline-main bg-white" 
                                        btnText="Learn More" 
                                        spanClass="icon-right" 
                                        iconClass="fas fa-arrow-right" 
                                    />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>   
        </>
    );
};

export default MoreAbout;
