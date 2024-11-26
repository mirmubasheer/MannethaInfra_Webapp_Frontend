import React from 'react';
import FooterBottom from './FooterBottom';
import FooterServiceItem from './footer/FooterServiceItem';
import FooterUsefulItem from './footer/FooterUsefulItem';
import FooterLogoDesc from './footer/FooterLogoDesc';
import FooterInfo from './footer/FooterInfo';
import SocialList from './SocialList';
// import SubscribeBox from './footer/SubscribeBox';

const FooterTwo = () => {
    return (
        <>
            {/* ==================== Footer Two Start Here ==================== */}
            <footer className="footer footer-two padding-y-120">
                <div className="container container-two">
                    <div className="row gy-5">
                        <div className="col-xl-4 col-lg-6">
                            
                            <div className="footer-item">

                                <FooterLogoDesc/>
                            </div>
                                
                                <h6 className="footer-item__title mt-4 mt-lg-2">Let's Work Together</h6>
                              
                            <div className="footer-item">
                                <FooterInfo/>
                                
                            </div>
                         
                          
                        </div>
                        {/* <div className="col-xl-1 d-xl-block d-none"></div> */}

                        <div className="col-xl-3 ">
                            <FooterUsefulItem/>
                        </div>
                        
                        <div className="col-xl-3 ">
                            <FooterServiceItem/>
                        </div>
                        <div className="col-xl-2 col-sm-6">
                            <SocialList/>
                        </div>
                        {/* <div className="col-xl-1 d-xl-block d-none"></div> */}
                        {/* <div className="col-xl-3 col-sm-6">
                            <div className="footer-item">
                                <h6 className="footer-item__title">Subscribe </h6>
                                <p className="footer-item__desc">It is a long established fact that  reader will be Elite Property </p>

                                <SubscribeBox/>

                                
                               
                            </div>
                        </div> */}
                    </div>
                </div>
            </footer>

            {/* bottom Footer */}
            <FooterBottom footerClass=""/>
            {/* ==================== Footer Two End Here ==================== */}
        </>
    );
};

export default FooterTwo;