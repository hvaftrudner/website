import './root.css';
import React from 'react';

import {
    HashRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

import App from '../app/App.js';
import PrivacyPolicy from '../NordicHistoricalSites/NordicHistoricalSitesPrivacy/NordicHistoricalSitesPrivacy.js';

class root extends React.Component {
    render() {         
        return (
      
            <Router >
              <Routes>
                
                <Route path="/*" element={<App />} />
                
                <Route path='/NordicHistoricalSites/PrivacyPolicy' element={<PrivacyPolicy />} />
                
              </Routes>
            </Router>
          
        )
    }
    
  }
    
  export default root;