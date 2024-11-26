// import React from 'react';
// import { Link } from 'react-router-dom';

// const Pagination = () => {
//     return (
//         <nav aria-label="Page navigation example">
//             <ul className="pagination common-pagination">
//                 <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
//                 <li className="page-item"><Link className="page-link" to="#">2</Link></li>
//                 <li className="page-item"><Link className="page-link" to="#">3</Link></li>
//                 <li className="page-item"><Link className="page-link" to="#">4</Link></li>
//             </ul>
//         </nav> 
//     );
// };

// export default Pagination;

import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ propertiesPerPage, totalProperties, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProperties / propertiesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination common-pagination">
                {pageNumbers.map((number) => (
                    <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                        <Link className="page-link" to="#" onClick={() => paginate(number)}>
                            {number}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav> 
    );
};

export default Pagination;
