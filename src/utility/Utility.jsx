
// // ================================ Utility Data Start ================================
// // Text convert to string
// export const convertToSlug = (text) => {
//     return text.toLowerCase().replace(/\s+/g, '-');
// };

// export const slugURL = ({url, slug }) => {
//     return `/${url}/${encodeURIComponent(convertToSlug(slug))}`;
// }


// // Get The Current Month Name
// export const getCurrentMonth = () => {
//     const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
//     const currentMonth = new Date().getMonth();
//     const currentMonthName = monthNames[currentMonth];
//     return currentMonthName; 
// }
// // ================================ Utility Data End ================================





// // ================================ Utility Data Start ================================
// // Text convert to slug-friendly string
// export const convertToSlug = (text) => {
//     // Check if text is not null or undefined
//     if (!text) {
//         return ''; // Return an empty string if the text is invalid
//     }
//     return text.toString().toLowerCase().replace(/\s+/g, '-');
// };

// export const slugURL = ({ url, slug }) => {
//     // Ensure slug is valid before calling convertToSlug
//     const slugText = slug ? slug : 'default-slug'; // Provide a fallback slug if slug is undefined or empty
//     return `/${url}/${encodeURIComponent(convertToSlug(slugText))}`;
// };

// // Get The Current Month Name
// export const getCurrentMonth = () => {
//     const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
//     const currentMonth = new Date().getMonth();
//     const currentMonthName = monthNames[currentMonth];
//     return currentMonthName; 
// };
// // ================================ Utility Data End ================================





export const convertToSlug = (text) => {
    if (!text) return ''; // Safeguard against undefined or null values
    return text.toLowerCase()
               .replace(/ /g, '-')
               .replace(/[^\w-]+/g, '');
};

export const slugURL = (property) => {
    return `/property/${convertToSlug(property.propertyTitle)}`;
};



// Get The Current Month Name
export const getCurrentMonth = () => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const currentMonth = new Date().getMonth();
    const currentMonthName = monthNames[currentMonth];
    return currentMonthName; 
}