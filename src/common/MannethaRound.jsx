import React from 'react';
import LogoRound from '../../public/assets/images/logo/image.png';
import { Link } from 'react-router-dom';

const MannethaRound = () => {
    return (
        <>
            <Link to="/" className="link">
                <img 
                    src={LogoRound} 
                    alt="Logo" 
                    style={{ width: '120px', height: 'auto' }} 
                />
            </Link>
        </>
    );
};

export default MannethaRound;
