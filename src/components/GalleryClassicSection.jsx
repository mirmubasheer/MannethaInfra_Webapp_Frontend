// import React from 'react';
// import Pagination from '../common/Pagination';
// import { blogs } from '../data/HomeOneData/HomeOneData';
// import CommonSidebar from '../common/CommonSidebar';
// import BlogClassicItem from './items/BlogClassicItem';

// const GalleryClassicSection = () => {
//     return (
//         <>
//             <div className="blog-classic padding-y-120">
//                 <div className="container container-two">
//                     <div className="row gy-4">
//                         <div className="col-lg-8">
//                             {
//                                 blogs.map((blogItem, blogItemIndex) => {
//                                     return (
//                                         <BlogClassicItem blogItem={blogItem} key={blogItemIndex}/>
//                                     )
//                                 })
//                             }
//                             <Pagination/>
//                         </div>
//                         <div className="col-lg-4">
//                             <CommonSidebar renderSearch={true} renderProperties={false} renderTags={true}/>
//                         </div>  
//                     </div>
//                 </div>
//             </div>   
//         </>
//     );
// };

// export default GalleryClassicSection;

import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

const GalleryClassicSection = () => {
    const images = [
        '/images/gallery1.jpg',
        '/images/gallery2.jpg',
        '/images/gallery3.jpg',
        '/images/gallery4.jpg',
        '/images/gallery5.jpg',
        '/images/gallery6.jpg',
        '/images/gallery7.jpg',
        '/images/gallery8.jpg',
        '/images/gallery9.jpg',
        '/images/gallery10.jpg',
        '/images/gallery11.jpg',
        '/images/gallery12.jpg',
        '/images/gallery13.jpg',
        '/images/gallery14.jpg',
        '/images/gallery15.jpg',
        '/images/gallery16.jpg',
        '/images/gallery17.jpg',
        '/images/gallery18.jpg',
        '/images/gallery19.jpg',
        '/images/gallery20.jpg',
    ];

    return (
        <div id="galleryCarousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                {images.map((image, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <img src={image} alt={`Gallery ${index + 1}`} className="d-block w-100" />
                    </div>
                ))}
            </div>
            <a className="carousel-control-prev" href="#galleryCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#galleryCarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            <ol className="carousel-indicators">
                {images.map((_, index) => (
                    <li
                        key={index}
                        data-target="#galleryCarousel"
                        data-slide-to={index}
                        className={index === 0 ? 'active' : ''}
                    ></li>
                ))}
            </ol>
        </div>
    );
};

export default GalleryClassicSection;

