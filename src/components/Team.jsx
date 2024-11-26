// import React from 'react';
// import SectionHeading from '../common/SectionHeading';
// import { teams } from '../data/OthersPageData/OthersPageData';
// import TeamItem from './items/TeamItem';

// const Team = () => {
//     return (
//         <>
//             <section className="team padding-y-60">
//                 <div className="container container-two">

//                 <SectionHeading
//                         headingClass=""  
//                         subtitle="Our Team"
//                         subtitleClass="" 
//                         title="The Experts Behind the Best Real Estate Company in Hyderabad" 
//                         renderDesc={false}
//                         desc=""
//                         renderButton={false}
//                         buttonClass="btn-main"
//                         buttonText="Learn More"
//                     />
                    
//                     <div className="row gy-4">
//                         {
//                             teams.map((team, teamIndex) => {
//                                 return (
//                                     <div className="col-lg-4 col-sm-6 col-xs-6" key={teamIndex}>
//                                         <TeamItem team={team}/>
//                                     </div>
//                                 )
//                             })
//                         }
                      
//                     </div>
//                 </div>
//             </section>   
//         </>
//     );
// };

// export default Team;
import React from 'react';
import SectionHeading from '../common/SectionHeading';
import { teams } from '../data/OthersPageData/OthersPageData';
import TeamItem from './items/TeamItem';

const Team = () => {
    // Inline styles
    const sectionStyle = {
        padding: '60px 0',
    };

    const rowStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '-15px',
    };

    const colStyle = {
        flex: '1 1 33.33%', // Three columns in the row
        padding: '15px',
    };

    const paragraphStyle = {
        fontSize: '18px',
        lineHeight: '1.2',
        color: '#6c757d', // Lighter gray color
        textAlign:'center',
        marginBottom: '30px'
    };

    return (
        <section className="team" style={sectionStyle}>
            <div className="container container-two">
                <SectionHeading
                    headingClass=""  
                    subtitle="Our Team"
                    subtitleClass="" 
                    title="The Experts Behind the Best Real Estate Company in Hyderabad" 
                    renderDesc={false}
                    desc=""
                    renderButton={false}
                    buttonClass="btn-main"
                    buttonText="Learn More"
                />

                <div className="row" style={{ marginBottom: '30px' }}>
                    <div className="col-lg-12">
                        <p style={paragraphStyle}>
                            Our team at Mannetha Infra is a key reason why we are celebrated as the best real estate company in Hyderabad. With a collective expertise that spans various aspects of real estate, including design, management, and customer service, our team stands out among top real estate companies in Hyderabad. We are proud to be recognized as a leading name in real estate marketing companies in Hyderabad, ensuring that every project benefits from innovative strategies and industry-leading practices. As a result, we consistently deliver the best real estate services in Hyderabad and set benchmarks for excellence in the industry.
                        </p>
                    </div>
                </div>

                <div className="row gy-4">
                    {
                        teams.map((team, teamIndex) => (
                            <div className="col-lg-4 col-sm-6 col-xs-6" key={teamIndex}>
                                <TeamItem team={team} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Team;
