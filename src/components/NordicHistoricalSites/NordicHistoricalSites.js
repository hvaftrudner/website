import './NordicHistoricalSites.css';

import NordicHistImg1 from './Nordic hist img1.png';
import NordicHistImg2 from './Nordic hist img2.png';
import NordicHistImg3 from './Nordic hist img3.png';

import React from 'react';

class NordicHistoricalSites extends React.Component {

    render(){
        return(
   
                <div className="NordicHistoricalSitesMain">
                    <div className="Nord-Header">
                        <h1>iOS Apps</h1>
                    </div>

                    <div className="Nord-Body">
                        <div className="App-images">
                            <div className="App-images-image">
                                <img src={NordicHistImg1} alt="Nordic Hist img 1" />
                                <img src={NordicHistImg2} alt="Nordic Hist img 2" />
                                <img src={NordicHistImg3} alt="Nordic Hist img 3" />
                            </div>
                            
                        </div>
                        
                        <div className="App-info">
                            <div className="App-info-header">
                                Nordic Historical Sites
                            </div>

                            <div className="App-info-body">
                                <p>
                                    This is the app for you who love hiking, traveling and Scandinavian History!
                
                                </p>

                                <p>
                                    In this app you can see where many of the 
                                    Historical Sites in the Nordic countries are placed.
                                </p>

                                <p>
                                    The app allows you to track all sites you have visited.
                                    There are different filtering options to sort sites on the map.
                                    On pressing a site you get a detailview of all information about the site.
                                    You can even select a specific site you want to visit and get a travel route to it!
                                </p>

                                <p>
                                   {/* <Link to={'/NordicHistoricalSites/PrivacyPolicy'} 
                                        className="App-info-route-link" 
                                        >
                                        Privacy policy
                                    </Link> */}
                                    <a href='/NordicHistoricalSites/PrivacyPolicy' className="App-info-route-link" >
                                        Privacy Policy
                                    </a>
                                </p>

                            <a href="https://www.raa.se/hitta-information/k-samsok/" target="_blank" rel="noopener noreferrer"> App data is provided from the K-samsök API </a>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                
        )
    }
}

export default NordicHistoricalSites;