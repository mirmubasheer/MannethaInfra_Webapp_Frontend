import React from 'react'; 

// Banner One
import BannerImg from '../../../public/assets/images/thumbs/banner-img.png'; 
export const bannerContent = {
    subtitle: 'Mannetha Infra',
    title: 'Crafting Iconic Spaces, ',
    gradientTitle: 'Nurturing Timeless Connections',
    desc: 'Mannetha Infra is recognized as the best real estate company in Andhra Pradesh and Hyderabad. We don’t just build homes; we define the future of living. As a leader in real estate, we create iconic spaces that blend luxury, functionality, and innovation. Each project, from villas to farmlands, embodies our commitment to quality and excellence. Mannetha Infra doesn’t just build; we create legacies that endure.',
    thumb: BannerImg
}

// Filter Tabs
export const filterTabs = [
    {
        id: 1,
        text: 'Rent'
    },
    {
        id: 2,
        text: 'Buy'
    },
    {
        id: 3,
        text: 'Sell'
    },
]
  

// About One Content
export const aboutStatistics = {
    icon: <i className="fas fa-users text-gradient"></i>,
    number: '400',
    text: 'Satisfied Clients'
}
import aboutContentThumb from '../../../public/assets/images/thumbs/about-img.png'; 
import aboutContentIcon from '../../../public/assets/images/icons/about-icon.svg'; 
export const aboutContent = {
    thumb: aboutContentThumb,
    icon: aboutContentIcon,
    title: 'Your Dream Home Awaits',
    desc: 'Mannetha Infra has earned its reputation as the best real estate company in Hyderabad and Andhra Pradesh by consistently delivering projects that embody quality, innovation, and customer satisfaction. Our commitment to excellence drives us to create exceptional real estate ventures, from luxury villas to modern apartments. As a trusted name in the industry, we cater to the evolving needs of our clients, offering unparalleled value and service. Mannetha Infra is not just a real estate company; we are the preferred choice for those who seek the very best in property development.'
}


// Property Data 
import propertyThumb1 from '../../../public/assets/images/thumbs/IMG_2876.png'; 
import propertyThumb2 from '../../../public/assets/images/thumbs/IMG_2873.png'; 
import propertyThumb3 from '../../../public/assets/images/thumbs/IMG_2875.png'; 
import propertyThumb4 from '../../../public/assets/images/thumbs/IMG_2874.png'; 
// import propertyThumb5 from '../../../public/assets/images/thumbs/property-5.png'; 
// import propertyThumb6 from '../../../public/assets/images/thumbs/property-6.png'; 
// import propertyThumb7 from '../../../public/assets/images/thumbs/property-7.png'; 
// import propertyThumb8 from '../../../public/assets/images/thumbs/property-8.png'; 
// import propertyThumb9 from '../../../public/assets/images/thumbs/property-9.png'; 
// import propertyThumb10 from '../../../public/assets/images/thumbs/property-10.png'; 
// import propertyThumb11 from '../../../public/assets/images/thumbs/property-11.png'; 
// import propertyThumb12 from '../../../public/assets/images/thumbs/property-12.png'; 
export const properties = [
    {
        id: 1,
        thumb: propertyThumb1,
        price: '₹ 4999/- Per Sq.ft',
        day: '',
        title: 'Sri Surya Teja Elite ',
        desc: 'Sri Surya Teja Elite offers luxurious 3BHK apartments in the heart of Madhurawada, Visakhapatnam, ready for immediate possession. With the benefits of a ready-to-move-in home, you can skip the waiting period and settle into a meticulously crafted space right away. Perfect for families looking to start their next chapter without delay, Sri Surya Teja Elite ensures a hassle-free transition into an elegant, modern living environment, coupled with excellent connectivity to the city’s key landmarks.',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: 'Madhurawada -Visakhapatnam',
        amenities: [
            {
                icon: <i className="fas fa-bed"></i>,
                text: '3 Beds',
            },
            {
                icon: <i className="fas fa-bath"></i>,
                text: ' 1 Baths ',
            }
        ],
        btnText: 'Book Now',
        dataSort: 'Newest',
        dataStatuses: 'Sell',
        dataTypes: 'Apartments',
        dataLocations: "Visakhapatnam",
        
    },
    {
        id: 2,
        thumb: propertyThumb2,
        price: '₹ 6999/- Per Sq.ft',
        day: '',
        title: 'Urban Green Farms  ',
        desc: 'Urban Green Farms offers a unique opportunity to embrace nature without compromising modern comforts. Situated in the tranquil surroundings of Dubbacherla Village, this exclusive gated farm plot community provides an escape from the hustle and bustle of city life while still being close to major urban hubs. Ideal for those seeking a peaceful retreat, Urban Green Farms combines the serenity of lush green landscapes with the convenience of modern infrastructure, making it the perfect place to build your dream farm getaway.',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: 'Dubbacherla village, Maheshwaram Mandal, R R District',
        amenities: [
            {
                icon: <i className="fas fa-bed"></i>,
                text: '4 Beds',
            },
            {
                icon: <i className="fas fa-bath"></i>,
                text: ' 1 Baths ',
            }
        ],
        btnText: 'Book Now',
        dataSort: 'Newest',
        dataStatuses: 'Buy',
        dataTypes: 'FarmLands',
        dataLocations: "R R District",

    },
    {
        id: 3,
        thumb: propertyThumb3,
        price: '₹ 4800/- Per Sq.ft',
        day: '',
        title: 'Arunoodaya Residency',
        desc: 'Step into a world of luxury with Mannetha Infra, a premium pre-launch project offering 3BHK apartments in the serene locale of Madhurawada, Visakhapatnam. This pre-launch opportunity allows you to secure your dream home at an attractive price with flexible payment options. Experience the benefit of customizing your space and investing early in a project that promises excellent future returns. With spacious layouts and a prime location, it is the perfect blend of modern living and peaceful surroundings, ideal for those planning their future in comfort and style.',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: 'Madhurawada - Visakhapatnam',
        amenities: [
            {
                icon: <i className="fas fa-bed"></i>,
                text: '3 Beds',
            },
            {
                icon: <i className="fas fa-bath"></i>,
                text: ' 1 Baths ',
            }
        ],
        btnText: 'Book Now',
        dataSort: 'Newest',
        dataStatuses: 'Rent',
        dataTypes: 'Apartments',
        dataLocations: "Visakhapatnam",
    },
    {
        id: 4,
        thumb: propertyThumb4,
        price: '₹ 10,500/- Per Sq.ft',
        day: '',
        title: 'MANNETHA INFRA PRIVATE LIMITED ',
        desc: 'Mannetha Infra presents a prime ready-to-move-in luxury project in the coveted location of Kondapur, Hyderabad. These spacious 3BHK apartments offer the distinct advantage of immediate possession, allowing you to enjoy your new home without the uncertainties of construction delays. Ideal for those seeking a seamless, upscale living experience, this project provides unmatched convenience with its proximity to major business and entertainment hubs, making it the perfect choice for families and professionals looking to settle into a vibrant, well-connected community right',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: 'Kondapur - Hyderabad',
        amenities: [
            {
                icon: <i className="fas fa-bed"></i>,
                text: '5 floors',
            },
            {
                // icon: <i className="fas fa-bath"></i>,
                // text: '  ',
            }
        ],
        btnText: 'Book Now',
        dataSort: 'Newest',
        dataStatuses: 'Sell',
        dataTypes: 'Apartments',
        dataLocations: "Hyderabad",
    },
    // {
    //     id: 5,
    //     thumb: propertyThumb5,
    //     price: '$650.00',
    //     day: '/per day',
    //     title: 'Building Trust, One Home at a Time',
    //     desc: 'Real Estate is a vast industry that deals with the buying, selling, and renting of properties. It inv transactions related to residential, commercial, and industrial properties. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobor mattis fmentum ullam',
    //     locationIcon: <i className="fas fa-map-marker-alt"></i>,
    //     location: '66 Broklyant, New York America',
    //     amenities: [
    //         {
    //             icon: <i className="fas fa-bed"></i>,
    //             text: '6 Beds',
    //         },
    //         {
    //             icon: <i className="fas fa-bath"></i>,
    //             text: ' 4 Baths ',
    //         }
    //     ],
    //     btnText: 'Book Now',
    //     dataSort: 'High Price',
    //     dataStatuses: 'Buy',
    //     dataTypes: 'Houses',
    //     dataLocations: "Germany",
    // },
    // {
    //     id: 6,
    //     thumb: propertyThumb6,
    //     price: '$700.00',
    //     day: '/per day',
    //     title: 'Brick by Brick Your Dream Home Awaits ',
    //     desc: 'Real Estate is a vast industry that deals with the buying, selling, and renting of properties. It inv transactions related to residential, commercial, and industrial properties. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobor mattis fmentum ullam',
    //     locationIcon: <i className="fas fa-map-marker-alt"></i>,
    //     location: '66 Broklyant, New York America',
    //     amenities: [
    //         {
    //             icon: <i className="fas fa-bed"></i>,
    //             text: '7 Beds',
    //         },
    //         {
    //             icon: <i className="fas fa-bath"></i>,
    //             text: ' 3 Baths ',
    //         }
    //     ],
    //     btnText: 'Book Now',
    //     dataSort: 'Medium Price',
    //     dataStatuses: 'Rent',
    //     dataTypes: 'Apartments',
    //     dataLocations: "Thailand",
    // },
    // {
    //     id: 7,
    //     thumb: propertyThumb7,
    //     price: '$350.00',
    //     day: '/per day',
    //     title: 'Guiding You Home with Experience',
    //     desc: 'Real Estate is a vast industry that deals with the buying, selling, and renting of properties. It inv transactions related to residential, commercial, and industrial properties. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobor mattis fmentum ullam',
    //     locationIcon: <i className="fas fa-map-marker-alt"></i>,
    //     location: '66 Broklyant, New York America',
    //     amenities: [
    //         {
    //             icon: <i className="fas fa-bed"></i>,
    //             text: '7 Beds',
    //         },
    //         {
    //             icon: <i className="fas fa-bath"></i>,
    //             text: ' 3 Baths ',
    //         }
    //     ],
    //     btnText: 'Book Now',
    //     dataSort: 'Best Seller',
    //     dataStatuses: 'Sell',
    //     dataTypes: 'Office',
    //     dataLocations: "Bangladesh",
    // },
    // {
    //     id: 8,
    //     thumb: propertyThumb8,
    //     price: '$530.00',
    //     day: '/per day',
    //     title: 'A Tradition of Trust in Real Estate ',
    //     desc: 'Real Estate is a vast industry that deals with the buying, selling, and renting of properties. It inv transactions related to residential, commercial, and industrial properties. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobor mattis fmentum ullam',
    //     locationIcon: <i className="fas fa-map-marker-alt"></i>,
    //     location: '66 Broklyant, New York America',
    //     amenities: [
    //         {
    //             icon: <i className="fas fa-bed"></i>,
    //             text: '7 Beds',
    //         },
    //         {
    //             icon: <i className="fas fa-bath"></i>,
    //             text: ' 3 Baths ',
    //         }
    //     ],
    //     btnText: 'Book Now',
    //     dataSort: 'Best Match',
    //     dataStatuses: 'Buy',
    //     dataTypes: 'Villa',
    //     dataLocations: "Japan",
    // },
    // {
    //     id: 9,
    //     thumb: propertyThumb9,
    //     price: '$560.00',
    //     day: '/per day',
    //     title: 'Target Audience and Reflect the Values',
    //     desc: 'Real Estate is a vast industry that deals with the buying, selling, and renting of properties. It inv transactions related to residential, commercial, and industrial properties. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobor mattis fmentum ullam',
    //     locationIcon: <i className="fas fa-map-marker-alt"></i>,
    //     location: '66 Broklyant, New York America',
    //     amenities: [
    //         {
    //             icon: <i className="fas fa-bed"></i>,
    //             text: '7 Beds',
    //         },
    //         {
    //             icon: <i className="fas fa-bath"></i>,
    //             text: ' 3 Baths ',
    //         }
    //     ],
    //     btnText: 'Book Now',
    //     dataSort: 'Low Price',
    //     dataStatuses: 'Rent',
    //     dataTypes: 'Houses',
    //     dataLocations: "Korea",
    // },
    // {
    //     id: 10,
    //     thumb: propertyThumb10,
    //     price: '$680.00',
    //     day: '/per day',
    //     title: 'Making House Hunting an Adventure ',
    //     desc: 'Real Estate is a vast industry that deals with the buying, selling, and renting of properties. It inv transactions related to residential, commercial, and industrial properties. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobor mattis fmentum ullam',
    //     locationIcon: <i className="fas fa-map-marker-alt"></i>,
    //     location: '66 Broklyant, New York America',
    //     amenities: [
    //         {
    //             icon: <i className="fas fa-bed"></i>,
    //             text: '7 Beds',
    //         },
    //         {
    //             icon: <i className="fas fa-bath"></i>,
    //             text: ' 3 Baths ',
    //         }
    //     ],
    //     btnText: 'Book Now',
    //     dataSort: 'High Price',
    //     dataStatuses: 'Sell',
    //     dataTypes: 'Apartments',
    //     dataLocations: "Singapore",
    // },
    // {
    //     id: 11,
    //     thumb: propertyThumb11,
    //     price: '$580.00',
    //     day: '/per day',
    //     title: 'Opening New Doors to Your Future ',
    //     desc: 'Real Estate is a vast industry that deals with the buying, selling, and renting of properties. It inv transactions related to residential, commercial, and industrial properties. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobor mattis fmentum ullam',
    //     locationIcon: <i className="fas fa-map-marker-alt"></i>,
    //     location: '66 Broklyant, New York America',
    //     amenities: [
    //         {
    //             icon: <i className="fas fa-bed"></i>,
    //             text: '7 Beds',
    //         },
    //         {
    //             icon: <i className="fas fa-bath"></i>,
    //             text: ' 3 Baths ',
    //         }
    //     ],
    //     btnText: 'Book Now',
    //     dataSort: 'Newest',
    //     dataStatuses: 'Buy',
    //     dataTypes: 'Office',
    //     dataLocations: "Germany",
    // },
    // {
    //     id: 12,
    //     thumb: propertyThumb12,
    //     price: '$563.00',
    //     day: '/per day',
    //     title: 'Your Journey to Home Starts Here ',
    //     desc: 'Real Estate is a vast industry that deals with the buying, selling, and renting of properties. It inv transactions related to residential, commercial, and industrial properties. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobor mattis fmentum ullam',
    //     locationIcon: <i className="fas fa-map-marker-alt"></i>,
    //     location: '66 Broklyant, New York America',
    //     amenities: [
    //         {
    //             icon: <i className="fas fa-bed"></i>,
    //             text: '7 Beds',
    //         },
    //         {
    //             icon: <i className="fas fa-bath"></i>,
    //             text: ' 3 Baths ',
    //         }
    //     ],
    //     btnText: 'Book Now',
    //     dataSort: 'Best Seller',    
    //     dataStatuses: 'Rent',
    //     dataTypes: 'Villa',
    //     dataLocations: "Thailand",
    // },
]


// Property Type Data
import propertyTypeIcon1 from '../../../public/assets/images/icons/i1.png';
import propertyTypeIcon2 from '../../../public/assets/images/icons/i3.png';
import propertyTypeIcon3 from '../../../public/assets/images/icons/i6.png';
import propertyTypeIcon4 from '../../../public/assets/images/icons/i2.png';
import propertyTypeIcon5 from '../../../public/assets/images/icons/i5.png';
import propertyTypeIcon6 from '../../../public/assets/images/icons/i4.png';
export const propertyTypes = [ 
    {
        icon: propertyTypeIcon1,
        title: 'Villas ',
        desc: 'Discover unparalleled luxury in our meticulously designed villas, reflecting the highest standards of construction and style.'
    },
    {
        icon: propertyTypeIcon2,
        title: 'Apartments ',
        desc: ' Choose from our collection of modern apartments, strategically located to offer convenience and comfort.'
    },
    {
        icon: propertyTypeIcon3,
        title: 'Open Plots & Villa Plots',
        desc: 'Explore our range of open and villa plots in prime locations, perfect for crafting your dream home or making a valuable investment.'
    },
    {
        icon: propertyTypeIcon4,
        title: 'Resorts',
        desc: 'Indulge in luxury and relaxation with our premium resorts, offering serene environments and top-notch amenities for an unforgettable experience.'
    },
    {
        icon: propertyTypeIcon5,
        title: 'Farmlands ',
        desc: ' Reconnect with nature through our serene farmlands, offering a peaceful retreat and a solid investment.'
    },
    {
        icon: propertyTypeIcon6,
        title: 'Commercial Spaces',
        desc: 'Elevate your business with our premium commercial properties, designed to enhance your business potential.'
    }
]


// CountUp Data
export const counts = [ 
    {
        number: '200',
        text: 'HAPPY PATIENTS'
    },
    {
        number: '20',
        text: 'SAVED HEARTS '
    },
    {
        number: '10k',
        text: 'EXPERT DOCTORS'
    },
    {
        number: '900',
        text: 'SERENITY WORK '
    },
]


// portfolio  Data
import portfolioThumb1 from '../../../public/assets/images/thumbs/1.png'; 
import portfolioThumb2 from '../../../public/assets/images/thumbs/2.png'; 
import portfolioThumb3 from '../../../public/assets/images/thumbs/3.png'; 
import portfolioThumb4 from '../../../public/assets/images/thumbs/4.png'; 
export const portfolios = [
    {
        thumb: portfolioThumb1,
        title: 'Outsourcing business',
        desc: 'Real Estate is a vast industry that deals with the buying, selling, and renting of properties',
        btnIcon: <i className="fas fa-arrow-right"></i>
    },
    {
        thumb: portfolioThumb2,
        title: 'Outsourcing business',
        desc: 'Real Estate is a vast industry that deals with the buying, selling, and renting of properties',
        btnIcon: <i className="fas fa-arrow-right"></i>
    },
    {
        thumb: portfolioThumb3,
        title: 'Outsourcing business',
        desc: 'Real Estate is a vast industry that deals with the buying, selling, and renting of properties',
        btnIcon: <i className="fas fa-arrow-right"></i>
    },
    {
        thumb: portfolioThumb4,
        title: 'Outsourcing business',
        desc: 'Real Estate is a vast industry that deals with the buying, selling, and renting of properties',
        btnIcon: <i className="fas fa-arrow-right"></i>
    },
]


// Testimonial Data
import quoteIcon from '../../../public/assets/images/icons/quote.svg';
export const testimonials = [
    {
        name: 'Ramesh Kumar',
        designation: ' IT Professional',
        desc: 'Choosing Mannetha Infra was one of the best decisions we made. The quality of their work and their attention to detail are unmatched. Our villa is not just a home; it is a dream come true.', 
        quote: quoteIcon
    },
    {
        name: 'Priya Reddy',
        designation: 'Entrepreneur',
        desc: 'Mannetha Infra commitment to excellence is evident in every corner of our apartment. From the location to the design, everything exceeds our expectations. They truly understand what modern living means.', 
        quote: quoteIcon
    },
    {
        name: 'Anil Sharma',
        designation: 'Financial Analyst',
        desc: 'Investing in a plot with Mannetha Infra was a seamless experience. Their transparency and professionalism gave me complete peace of mind. I am confident my investment will yield great returns.', 
        quote: quoteIcon
    },
    {
        name: 'Lakshmi Narayana',
        designation: 'Business Owner',
        desc: 'The team at Mannetha Infra is exceptional. They are responsive, reliable, and genuinely care about their clients needs. Our commercial space is exactly what we envisioned, thanks to their expertise.', 
        quote: quoteIcon
    },
    {
        name: 'Sandeep Verma',
        designation: 'Marketing Manager',
        desc: 'From start to finish, Mannetha Infra made the entire process of buying a farmhouse plot stress-free. Their dedication to customer satisfaction is truly commendable. I highly recommend them.', 
        quote: quoteIcon
    },
]

// Blog Data
import blogThumb1 from '../../../public/assets/images/thumbs/blog01.png'; 
// import blogThumb2 from '../../../public/assets/images/thumbs/blog2.png'; 
// import blogThumb3 from '../../../public/assets/images/thumbs/blog3.png'; 
// import blogThumb4 from '../../../public/assets/images/thumbs/property-4.png'; 
// import blogThumb5 from '../../../public/assets/images/thumbs/property-5.png'; 
// import blogThumb6 from '../../../public/assets/images/thumbs/property-6.png'; 

export const blogs = [
    {
        id: 1,
        thumb: blogThumb1,
        admin: 'admin',
        meta: [
            {
                icon: <i className="fas fa-user"></i>,
                text: ' By admin'
            },
            {
                icon: <i className="fas fa-comments"></i>,
                text: 'Comments (30)'
            },
        ],
        title: '𝗠𝗮𝗵𝗲𝘀𝗵𝘄𝗮𝗿𝗮𝗺: 𝗪𝗵𝗲𝗿𝗲 𝗛𝘆𝗱𝗲𝗿𝗮𝗯𝗮𝗱𝘀 𝗥𝗲𝗮𝗹 𝗘𝘀𝘁𝗮𝘁𝗲 𝗶𝘀 𝗕𝗼𝗼𝗺𝗶𝗻𝗴',
        desc: 'Maheshwaram, a thriving suburb in southern Hyderabad, is quickly becoming a real estate hotspot. Its strategic location near key developments like Mannetha Infra’s Urban Farms and proximity to the Outer Ring Road (ORR) and Rajiv Gandhi International Airport make it a prime destination for both residential and commercial investments.',
        linkText: 'Read More',
    },
    // {    
    //     id: 2,
    //     thumb: blogThumb2,
    //     date: '28 Mar',
    //     admin: 'John Doe',
    //     meta: [
    //         {
    //             icon: <i className="fas fa-user"></i>,
    //             text: ' By admin'
    //         },
    //         {
    //             icon: <i className="fas fa-comments"></i>,
    //             text: 'Comments (50)'
    //         },
    //     ],
    //     title: 'Turn Your Real Estate Dreams Into Reality Embrace the Real Estate',
    //     desc: 'Real estate is a lucrative industry that involves the buying, selling, and renting of properties. It encompasses residential, commercial, and industrial properties. Real estate agents play a crucial role in facilitating transactions and helping.',
    //     linkText: 'Read More',
    // },
    // {
    //     id: 3,
    //     thumb: blogThumb3,
    //     admin: 'Rakibul Islam',
    //     meta: [
    //         {
    //             icon: <i className="fas fa-user"></i>,
    //             text: ' By admin'
    //         },
    //         {
    //             icon: <i className="fas fa-comments"></i>,
    //             text: 'Comments (10)'
    //         },
    //     ],
    //     title: 'Your Journey to Home Ownership Starts Here: The Satisfaction',
    //     desc: 'Real estate is a lucrative industry that involves the buying, selling, and renting of properties. It encompasses residential, commercial, and industrial properties. Real estate agents play a crucial role in facilitating transactions and helping.',
    //     linkText: 'Read More',
    // },
    // {
    //     id: 4,
    //     thumb: blogThumb4,
    //     admin: 'Alex',
    //     meta: [
    //         {
    //             icon: <i className="fas fa-user"></i>,
    //             text: ' By admin'
    //         },
    //         {
    //             icon: <i className="fas fa-comments"></i>,
    //             text: 'Comments (10)'
    //         },
    //     ],
    //     title: 'Experience the Best in Real Estate Services',
    //     desc: 'Real estate is a lucrative industry that involves the buying, selling, and renting of properties. It encompasses residential, commercial, and industrial properties. Real estate agents play a crucial role in facilitating transactions and helping.',
    //     linkText: 'Read More',
    // },
    // {
    //     id: 5,
    //     thumb: blogThumb5,
    //     admin: 'Jenon Doe',
    //     meta: [
    //         {
    //             icon: <i className="fas fa-user"></i>,
    //             text: ' By admin'
    //         },
    //         {
    //             icon: <i className="fas fa-comments"></i>,
    //             text: 'Comments (10)'
    //         },
    //     ],
    //     title: 'Let Us Find the Perfect Property for You: Elite Realty Services',
    //     desc: 'Real estate is a lucrative industry that involves the buying, selling, and renting of properties. It encompasses residential, commercial, and industrial properties. Real estate agents play a crucial role in facilitating transactions and helping.',
    //     linkText: 'Read More',
    // },
    // {
    //     id: 6,
    //     thumb: blogThumb6,
    //     admin: 'Akramul Hoq',
    //     meta: [
    //         {
    //             icon: <i className="fas fa-user"></i>,
    //             text: ' By admin'
    //         },
    //         {
    //             icon: <i className="fas fa-comments"></i>,
    //             text: 'Comments (10)'
    //         },
    //     ],
    //     title: 'Investing in Real Estate Made Easy: The Door to Your New Home',
    //     desc: 'Real estate is a lucrative industry that involves the buying, selling, and renting of properties. It encompasses residential, commercial, and industrial properties. Real estate agents play a crucial role in facilitating transactions and helping.',
    //     linkText: 'Read More',
    // },
]

