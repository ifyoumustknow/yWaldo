
import React, { useState, useEffect } from 'react';
import './App.css';
import desktopImage from './images/background.png';
import mobileImage from './images/background.png';

const App = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const imageUrl = windowWidth >= 650 ? desktopImage : mobileImage;

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, []);
    
    return (
      <div className="page_container">
        <div className="header_container" style={{backgroundImage: `url(${imageUrl})` }}>
              <div className="logo_content">
              <h1>yWaldo</h1>
              <p>SIGN UP TODAY TO EARN THE HIGHEST COMMISSIONS</p>
            </div>
            <div className="input_form">
            </div>               
        </div>
      </div>
    );
};

export default App;