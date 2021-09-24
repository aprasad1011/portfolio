import React, { useState } from 'react';
import { isMobile } from "react-device-detect";
import './App.css';
import './theme.css';
import Title from './title/Title';
import AboutMe from './aboutMe/AboutMe';
import ContactDetails from './contactDetails/ContactDetails';
import Skills from './skills/Skills';
import Experience from './experience/Experience';
import Education from './education/Education';
import Resume from './resume/Resume';
import { DarkMode } from 'darkMode/DarkMode';


function App() {

  const [theme, setTheme] = useState('dark');
  
  return (
    <div className= {`App-container ${theme}`}>
      <div className= {`App ${isMobile && 'App-mobile'}`}>
        <DarkMode theme={theme} setTheme={setTheme}/>
        <Title />
        <ContactDetails/>
        <AboutMe />
        <Skills />
        <Experience />
        <Education />
        <Resume />
      </div>
    </div>
  );
}

export default App;
