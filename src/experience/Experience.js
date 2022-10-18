import React from "react";
import Section from "./../shared/section/Section";
import './Experience.css';

const ExperienceData = [
    {
        organization: 'Credit Suisse',
        duration: {
            from : 'April - 2018',
            to : 'Present'
        },
        role: 'Full Stack Developer',
        responsibilities : [
            'Developed and managed several micro-services like dashboard portal, task management system, reporting and sentiment analysis.',
            'Contributed in complete software development lifecycle with full ownership of tasks.',
            'Minimized portfolio blocking up to 90% by designing and developing end to end workflow functionality which also resulted in minimizing third party tool dependency.',
            'Provided low and high-level design inputs like usage of design patterns, refactoring code base, best coding practices and technological solutions.'
        ],
        location: 'Pune, IN'
    },
    {
        organization: 'Sears Holding',
        duration: {
            from : 'Dec - 2017',
            to : 'Jan - 2018'
        },
        role: 'Software Developer',
        responsibilities : [
            'Enhance existing application by building new feature as per given requirement.', 
            'Setup standard practices to enhance code quality and test coverage in existing applications.',
            'Worked on enhancement of existing application by building new requirements using Spring Boot, Hibernate, Jenkins and Maven.',
            'Developed REST APIs, handled Database calls to store data in Oracle, ensured coverage by writing unit and integration test cases, configured environment-specific properties.',
            'Implemented dispute cycle and rules using REST API, MVC Architecture and reduced API response time under one second.'
        ],
        location: 'Pune, IN'
    },
    {
        organization: 'Syntel Private Limited',
        duration: {
            from : 'Aug - 2015',
            to : 'Dec - 2017'
        },
        role: 'Trainee Engineer',
        responsibilities : [
            'Worked on ACM (Access Control Module) system that is responsible to prevent unauthorized access to system dynamically based on business requirements.',
            'Implemented Transit Management system to manage company employee transit which resulted in 80% reduction in human interference.',
            'Technologies Used: Spring Boot, Spring Security, Jquery and Jenkins.'
        ],
        location: 'Pune, IN'
    },

];

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