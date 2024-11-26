import React from 'react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { aboutCheckLists } from '../data/HomeThreeData/HomeThreeData';
import CountUp from 'react-countup';

import AboutThreeThumb from '../../public/assets/images/thumbs/22.png';

const AboutThree = () => {
    return (
        <>
            <section className="about-three bg-white padding-y-120">
                <div className="container container-two">
                    <div className="row gy-4">
                        <div className="col-lg-6">
                            <div className="about-three-thumb">
                                <div className="about-three-thumb__inner">
                                    <img src={AboutThreeThumb} alt=""/>
                                    {/* <div className="project-content">
                                        <div className="project-content__inner">
                                            <h2 className="project-content__number">
                                                <CountUp end={parseInt(10)} duration={6} delay={0.2} />k                                            </h2>
                                            <span className="project-content__text font-12">Complete project</span>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">

                                <SectionHeading
                                    headingClass="style-left"  
                                    subtitle="About Us"
                                    subtitleClass="bg-gray-100" 
                                    title="Leading the Way as the Best Real Estate Company in Hyderabad" 
                                    renderDesc={true}
                                    desc="Mannetha Infra is recognized as the best real estate company in Hyderabad, a title we proudly hold through our dedication to superior quality and innovation. As the best real estate company in Hyderabad and a leader among top real estate companies in Hyderabad, we are committed to delivering outstanding real estate ventures. Our reputation as one of the best real estate companies in Hyderabad is built on our ability to meet the diverse needs of our clients through exceptional service and unparalleled expertise. We are passionate about creating luxurious spaces that elevate living standards and offer the best properties to buy in Hyderabad. Our commitment goes beyond transactions; we aim to build lasting relationships by understanding and exceeding our clients' expectations. With a portfolio of premium residential and commercial properties, Mannetha Infra continues to set benchmarks in the real estate industry, reflecting our core values of quality, integrity, and excellence."
                                    renderButton={false}
                                    buttonClass="btn-main"
                                    buttonText="View More"
                                    textAlign="justify" 
                                />

                                {/* <ul className="check-list style-two">
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
                                        btnLink="/about-us" 
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

export default AboutThree;