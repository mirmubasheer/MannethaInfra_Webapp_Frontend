import React from 'react';
import { Link } from 'react-router-dom';

import Mannetha from '../../public/assets/images/logo/mannetha.png';

const LogoWhite = () => {
    return (
        <>
            <Link to="/" className="mobile-menu__logo">
                <img src={Mannetha} alt="Logo"/>
            </Link>   
        </>
    );
};

export default LogoWhite;