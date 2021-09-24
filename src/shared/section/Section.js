import React from "react";
import { isMobile } from "react-device-detect";
import './Section.css';



const Section = ({sectionTitle, children}) => {
    return (
        <div className={`Section-container ${isMobile && 'Section-container-mobile'}`}>
            <h2>
                {sectionTitle}
            </h2>
            {
                children
            }
        </div>
    )
}

export default Section;