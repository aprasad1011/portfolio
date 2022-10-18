import React from "react";
import Section from "./../shared/section/Section";
import './Skills.css';

const SkillsData = [
    {
        name: 'Java'
    },
    {
        name: 'React'
    },
    {
        name: 'MySql'
    },
    {
        name: 'Spring Boot'
    },
    {
        name: 'Javascript'
    },
    {
        name: 'Micro-services'
    },
    {
        name: 'Rest API'
    },
    {
        name: 'Data Structure & Algorithoms'
    },
    {
        name: 'HTML'
    },
    {
        name: 'CSS'
    },
    {
        name: 'Styled-Components'
    },
    {
        name: 'Swagger'
    },
    {
        name: 'Junit'
    },
    {
        name: 'Jest'
    },
    {
        name: 'Jenkins'
    },
    {
        name: 'AWS'
    },
    {
        name: 'Docker'
    },
    {
        name: 'Kubernetes'
    }
];

const Skill = ({details}) => {
    return (
        <div className="Skill-wrapper">
            {details.name}
        </div>
    )
};

const Skills = () => {
    return (
        <Section sectionTitle='Skills'>
            <div className='Skills-details-container'>
                {
                    SkillsData.map(skill => {
                        return <Skill details={skill}/>
                    })
                }
            </div>
        </Section>
    )
};

export default Skills;