import React from 'react';
import CtaThumb from '../../public/assets/images/thumbs/cta-img.png';
import NewsletterForm from '../common/NewsletterForm';

const Cta = (props) => {
    return (
        <section className={`cta padding-b-120 ${props.ctaClass}`}>
            <div className="container container-two">
                <div className="cta-box flx-between gap-2">
                    <div className="cta-content">
                        <h2 className="cta-content__title">Connect with <span className="text-gradient">Our Specialists </span> </h2>
                        <p className="cta-content__desc">Need personalized guidance on your next property investment or home project? Our certified specialists at Mannetha Infra are here to provide tailored assistance and expert advice to turn your vision into reality.</p>

                        <NewsletterForm formClass="max-w-unset" inputClass="bg-danger" iconClass="text-gradient"/>
                        
                    </div>
                    <div className="cta-content__thumb d-xl-block d-none">
                        <img src={CtaThumb} alt="Cta Image"/>
                    </div>
                </div>
            </div>
        </section>   
    );
};

export default Cta;