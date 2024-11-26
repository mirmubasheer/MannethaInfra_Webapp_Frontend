import React from 'react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import AboutThreeThumb from '../../public/assets/images/thumbs/33.png';; // Importing the image

const MoreAbout1 = () => {
    return (
        <>
            <section className="more-about bg-white padding-y-120">
                <div className="container container-two">
                    <div className="row gy-4">
                        <div className="col-lg-6">
                            <div className="about-content">
                                <SectionHeading
                                    headingClass="style-left"  
                                    subtitle="Our Commitment to Excellence"
                                    subtitleClass="bg-gray-100" 
                                    title="Delivering Unmatched Quality as the Best Real Estate Company in Hyderabad" 
                                    renderDesc={true}
                                    desc="At Mannetha Infra, our commitment to being the best real estate company in Hyderabad is reflected in every aspect of our work. We prioritize exceeding client expectations through meticulous quality assurance and transparent communication. As one of the top real estate companies Hyderabad, we understand the importance of delivering on our promises and ensuring satisfaction. Our focus on providing the best real estate agents in Hyderabad and offering best real estate services in Hyderabad sets us apart from the competition. Whether you are looking for new plot ventures in Hyderabad or the finest real estate firms in Hyderabad, our dedication to excellence ensures that we consistently achieve remarkable results."
                                    renderButton={false}
                                    buttonClass="btn-main"
                                    buttonText="View More"
                                    textAlign="justify" 
                                />
                                {/* <div className="about-button">
                                    <Button
                                        btnLink="/more-about" 
                                        btnClass="btn btn-outline-main bg-white" 
                                        btnText="Learn More" 
                                        spanClass="icon-right" 
                                        iconClass="fas fa-arrow-right" 
                                    />
                                </div> */}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-thumb">
                                <img src={AboutThreeThumb} alt="About Image"/> {/* Using the imported image */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>   
        </>
    );
};

export default MoreAbout1;
