import React from "react";
import './ContactDetails.css';
import { isMobile } from "react-device-detect";
import mobileIcon from '../assets/mobile.png';
import emailIcon from '../assets/email.png';
import linkedinIcon from '../assets/linkedin.png';
import githubIcon from '../assets/github.png';

const ContactDetailsData = [
    {
        icon: mobileIcon,
        text: '+91-738-715-8115',
        refUrl: 'https://wa.me/917387158115'
    },
    {
        icon: emailIcon,
        text: 'aprasad1011@gmail.com',
        refUrl: 'mailto: aprasad1011@gmail.com'
    },
    {
        icon: linkedinIcon,
        text: 'LinkedIn',
        refUrl: 'https://www.linkedin.com/in/prasad-anchawale-0b1b20b0/'
    },
    {
        icon: githubIcon,
        text: 'Github',
        refUrl: 'https://github.com/aprasad1011'
    }
]

const ContactIconWithText = ({details}) => {
    return (
        <a href={details.refUrl} target="_blank" className='Contact-icon-with-text-wrapper'>
            <img className='Contact-image' src={details.icon}/>
            {details.text}
        </a>
    )
}

const ContactDetails = () => {

    return (
        <div className={`Contact-details-wrapper ${isMobile && 'Contact-details-wrapper-mobile'}`}>
            {
                ContactDetailsData.map(details => {
                    return <ContactIconWithText details={details}/>
                })
            }
        </div>
    )
}

export default ContactDetails;