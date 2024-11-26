import React from 'react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import AboutThreeThumb from '../../public/assets/images/thumbs/44.png';

const MoreAbout2 = () => {
    return (
        <>
            <section className="more-about bg-white padding-y-120">
                <div className="container container-two">
                    <div className="row gy-4">

                    <div className="col-lg-6">
                    <div className="about-thumb">
                                <img src={AboutThreeThumb} alt="About Image"/> {/* Using the imported image */}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <SectionHeading
                                    headingClass="style-left"  
                                    subtitle="Transforming Aspirations into Achievements"
                                    subtitleClass="bg-gray-100" 
                                    title="Celebrating Success as the Best Real Estate Company in Hyderabad" 
                                    renderDesc={true}
                                    desc="The success stories of our clients showcase why Mannetha Infra is recognized as the best real estate company in Hyderabad. Our commitment to turning dreams into reality highlights our role as a leading name among top real estate companies in Hyderabad. By delivering outstanding results and fostering positive relationships, we reinforce our reputation as the go-to for best properties to buy in Hyderabad. Discover how Mannetha Infra has transformed aspirations into achievements and why we continue to be celebrated as one of the top real estate companies Hyderabad and best real estate agents in Hyderabad."
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
                      
                    </div>
                </div>
            </section>   
        </>
    );
};

export default MoreAbout2;
