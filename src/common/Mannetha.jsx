import React from 'react';
import LogoImg from '../../public/assets/images/logo/mannetha.png';
import { Link } from 'react-router-dom';

const Mannetha = () => {
    return (
        <>
            <Link to="/" className="link">
                <img 
                    src={LogoImg} 
                    alt="Logo" 
                    style={{ width: '150px', height: 'auto' }} 
                />
            </Link>
        </>
    );
};

export default Mannetha;
