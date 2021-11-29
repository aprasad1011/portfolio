import React from 'react';
import './AboutMe.css';
import Section from './../shared/section/Section';

const AboutMe = () => {
    return (
        <Section sectionTitle='About Me'>
            <div>
                <p className="About-me-details">
                    I'm a Full Stack Developer with 6.4 Years of experience in Web Application Developement.
                </p>
                <p className="About-me-details">
                    Currently, I'm working with Credit Suisse and responsible for developing new web applications / workflows 
                    using Java & React to improve user experience and simplify tedious process.
                </p>
            </div>
        </Section>
    )
};

export default AboutMe;
