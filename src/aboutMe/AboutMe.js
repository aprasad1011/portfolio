import React from 'react';
import './AboutMe.css';
import Section from './../shared/section/Section';

const AboutMe = () => {
    return (
        <Section sectionTitle='About Me'>
            <div>
                <p className="About-me-details">
                    Dedicated and efficient full stack developer with 7.1 years of professional software development experience in creating and designing scalable web applications.
                </p>
                <p className="About-me-details">
                    Currently, I’m working with Credit Suisse and responsible for designing and developing new workflows using Java and React to simplify tedious process of client on boarding and maintenance.
                    using Java & React to improve user experience and simplify tedious process.
                </p>
            </div>
        </Section>
    )
};

export default AboutMe;
