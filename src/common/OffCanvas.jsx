import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LogoWhite from './LogoWhite';
import { OffCanvasContext } from '../contextApi/OffCanvasContext';
import { ScrollHideContext } from '../contextApi/ScrollHideContext';
import { offCanvasInfos } from '../data/CommonData/CommonData';
// import SearchBox from './SearchBox';
import SocialList from './SocialList';

const OffCanvas = () => {

    const { offCanvas, handleOffCanvasClose } = useContext(OffCanvasContext);  
    
    const { handleScrollHideLgClose } = useContext(ScrollHideContext); 
    
    return (
        <>
            <div className={`side-overlay ${offCanvas ? 'show' : '' }`} onClick={()=> {handleOffCanvasClose(); handleScrollHideLgClose(); }}></div>

            {/* ==================== Right Offcanvas Start Here ==================== */}
            <div className={`common-offcanvas d-lg-block d-none ${offCanvas ? 'active' : '' }`} >
                <div className="flx-between">
                    <LogoWhite/>
                    <button type="button" className="close-button d-flex position-relative top-0 end-0" onClick={()=> {handleOffCanvasClose(); handleScrollHideLgClose();}}> 
                        <i className="las la-times"></i> 
                    </button>
                </div>

                {/* <SearchBox/> */}

                <ul className="address-list mt-5">
                    {
                        offCanvasInfos.map((offCanvasInfo, index) => {
                            return (
                                <li className="address-list__item" key={index}>
                                    <span className="address-list__icon"> { offCanvasInfo.icon } </span>
                                    <div className="address-list__content">
                                        {
                                            Array.isArray(offCanvasInfo.link) ? (
                                                offCanvasInfo.link.map((link, linkIndex) => (
                                                    <Link to={`${link}${offCanvasInfo.text[linkIndex]}`} className="address-list__text" key={linkIndex}>
                                                        {offCanvasInfo.text[linkIndex]}
                                                    </Link>
                                                ))
                                            ) : (
                                                <p className="address-list__text">{offCanvasInfo.text}</p>
                                            )
                                        }
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>

                <div className="google-map mt-3" style={{ height: '300px' }}> {/* Set the desired height */}
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1952020.2428360526!2d79.5380599115993!3d17.14394601100891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3944a9dee2bc19%3A0x1d83af96b3bcff84!2sKalyani%20Grand%20-%20Unit%20of%20Kalyani%20Mess!5e0!3m2!1sen!2sin!4v1724679786773!5m2!1sen!2sin" 
                        loading="lazy" 
                        className="w-100 h-50"
                    >
                    </iframe>
                </div>

                <SocialList/>
                
            </div>
            {/* ==================== Right Offcanvas End Here ==================== */}
        </>
    );
};

export default OffCanvas;
