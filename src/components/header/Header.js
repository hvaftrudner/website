import React from 'react';
import './Header.css';

//import Icon from '../devIcon/devIcon';
//import Navbar from '../navbar/Navbar';
//utils
//social media fonts (several different librarys)
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import {faFacebookF, faGithub, faInstagram, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';


class Header extends React.Component{
    render(){
        return(
            <div className='Header' id="Header">
                
                <div className='HeaderText'>
                    <h1>Kristoffer Eriksson</h1>
                    <h4>iOS / Web-developer</h4>
                    
                    <div className="HeaderLinks">
                        <FontAwesomeIcon icon={faCoffee} spin/>

                        <a href="https://github.com/hvaftrudner" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} className="Header-Icon"/>
                        </a>
                        <a href="https://www.facebook.com/kristoffer.eriksson.52" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebookF} className="Header-Icon"/>
                        </a>
                        <a href="https://www.instagram.com/hvaftrudner/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className="Header-Icon"/>
                        </a>
                        <a href="https://www.linkedin.com/in/kristoffer-eriksson-4b0697251/" target="_blank" rel="noopener noreferrer"> 
                            <FontAwesomeIcon icon={faLinkedinIn} className="Header-Icon"/>
                        </a>
                        
                        <FontAwesomeIcon icon={faCoffee} spin/>
                        
                    </div>
                
                </div>
                
            </div>
        )
    }
}

export default Header;