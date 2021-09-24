import React from "react";
import Section from "./../shared/section/Section";
import './Experience.css';

const ExperienceData = [
    {
        organization: 'Credit Suisse',
        duration: {
            from : 'May - 2018',
            to : 'Preset'
        },
        role: 'Full Stack Developer',
        responsibilities : [
            'Reduce manual efforts upto 70% by developing new workflows for front office users.',
             'Minimized portfolio blocking upto 90% by designing and developing end to end workflow functionality which result in minimizing third party tool dependancy.'
        ],
        location: 'Pune, IN'
    },
    {
        organization: 'Sears Holding',
        duration: {
            from : 'Dec - 2017',
            to : 'Apr - 2018'
        },
        role: 'Software Developer',
        responsibilities : [
            'Enhance existing application by building new feature as per given requirement.', 
            'Setup standard practices to enhance code quality and test coverage in existing applications.'
        ],
        location: 'Pune, IN'
    },
    {
        organization: 'Syntel Private Limited',
        duration: {
            from : 'Aug - 2015',
            to : 'Apr - 2018'
        },
        role: 'Trainee Engineer',
        responsibilities : [
            'Implemented access control module to prevent unauthorized access to system dynamically based on business requirements.',
             'Reduced human dependancy from 15 to 2 by developing TransitManagement System to manage company employee transit.'
        ],
        location: 'Pune, IN'
    },

]

const ExperienceDetails = ({details}) => {
    const {organization, duration, role, responsibilities} = details;
    return (
        <div className="Experience-details-wrapper">
            <div className="Experience-details-header">
                <div className="Organization-title">
                    {
                        organization
                    }
                </div>
                <div className="Duration">
                    {
                          duration.from + ' to ' + duration.to  
                    }
                </div>
            </div>
            <div>
                <div className="Role">
                    {
                        '(' + role + ')'
                    }
                </div>

            </div>
            <div className="Responsibilities">
                <ul>
                {
                    responsibilities.map(resp => {
                        return <li>{resp}</li>
                    })
                }
                </ul>
            </div>
        </div>
    )
}

const Experience = () => {

    return (
        <Section sectionTitle='Experience'>
            <div className='Experience-details-container'>
                {
                    ExperienceData.map(exp => {
                        return <ExperienceDetails details={exp}/>
                    })
                }
            </div>
        </Section>
    )
}

export default Experience;