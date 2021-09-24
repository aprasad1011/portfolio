import React from "react";
import './Resume.css';
import downloadIcon from '../assets/download.png';
const Resume = () => {

    return (
        <div className='Resume-container'>
            <a href='/resume/resume.pdf' 
               download="PrasadAnchawale_6_Yrs_FSD_Java&React.pdf"
               className='Resume-href'
            >
                <img src={downloadIcon} alt='Download' className='Download-image'/>
                Resume 
            </a>
        </div>
    )
};

export default Resume;