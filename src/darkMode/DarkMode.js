import React from "react";
import './DarkMode.css';
import DarkModeToggle from "react-dark-mode-toggle";
 
export const DarkMode = ({theme, setTheme}) => {
    const setIsDarkMode = (isDarkMode) => {
        setTheme(isDarkMode? 'light': 'dark');
    };
    return <div className='float'>
        <DarkModeToggle
      onChange={setIsDarkMode}
      checked={theme === 'light'}
      size={80}
    />
    </div>
}