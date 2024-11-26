import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BuilderList = () => {
    const [builders, setBuilders] = useState([]);

    // Fetch builders on component mount
    useEffect(() => {
        const fetchBuilders = async () => {
            try {
                const response = await axios.get('https://api.mannethainfra.com/builder'); // Replace with your API
                setBuilders(response.data);
            } catch (error) {
                console.error("Error fetching Builders:", error);
            }
        };
        fetchBuilders();
    }, []);

    return (
        <>
            <div className="overflow-auto">
                <div className="card common-card min-w-maxContent">
                    <div className="card-body">
                        <table className="table style-two">
                            <thead>
                                <tr>
                                    <th>Builder Name</th>
                                    <th>Office Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    builders.length > 0 ? (
                                        builders.map((builder, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="cart-item__content">
                                                            <h6 className="cart-item__title fw-500 font-18">                                                          
                                                                   {builder.builderName || 'No Title'}                                                   
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </td>

                                                {/* Office Address */}
                                                <td>
                                                    {builder.officeAddress || 'No Address'}
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="2" className="text-center">
                                                No Builders Found
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BuilderList;
