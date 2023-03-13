import './root.css';
import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

import App from '../app/App.js';
import PrivacyPolicy from '../NordicHistoricalSites/NordicHistoricalSitesPrivacy/NordicHistoricalSitesPrivacy.js';

class root extends React.Component {
    render() {         
        return (
      
            <Router>
              <Routes>
                {/* This route is for home component 
                with exact path "/", in component props 
                we passes the imported component*/}
                <Route exact path="/" element={<App />} />
                  
                {/* This route is for about component 
                with exact path "/about", in component 
                props we passes the imported component*/}
                <Route exact path='/NordicHistoricalSites/PrivacyPolicy' element={<PrivacyPolicy />} />
                  
                {/* If any route mismatches the upper 
                route endpoints then, redirect triggers 
                and redirects app to home component with to="/" */}
                
              </Routes>
            </Router>
          
        )
    }
    
  }
    
  export default root;