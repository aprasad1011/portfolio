import React from "react";
import Section from "./../shared/section/Section";
import './Education.css';

const EducationData = [
    {
        qualification: 'B.E., E&TC',
        institute: "JSPM's RSCOE,  University of Pune",
        duration: '2011 - 2015'
    },
    {
        qualification: 'Java Certification',
        institute: 'Techrel Institue, Pune',
        duration: '2015'
    }
]

const EducationDetails = ({details}) => {
    const {qualification, institute, duration} = details;
    return (
        <div className="Education-details-wrapper">
            <div className="Education-details-header">
                <div className="Organization-title">
                    {
                        qualification
                    }
                </div>
                <div className="Duration">
                    {
                          duration
                    }
                </div>
            </div>
            <div>
                <div className="Institute">
                    {
                        '(' + institute + ')'
                    }
                </div>

            </div>
        </div>
    )
}

const Education = () => {
    return (
        <Section sectionTitle='Education & Certifications'>
            {
                EducationData.map(details => {
                    return <EducationDetails details={details} />
                })
            }
        </Section>
    )
}

export default Education;