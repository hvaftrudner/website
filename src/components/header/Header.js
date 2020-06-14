import React from 'react';
import './Header.css';

//utils
//social media fonts (several different librarys)
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import {faFacebookF, faGithub, faInstagram, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';

class Header extends React.Component{
    render(){
        return(
            <div className='Header'>
                <div className='HeaderText'>
                    <h1>Kristoffer Eriksson</h1>
                    <h2>Krille, PizzaGreven, Hvaftrudner</h2>
                    <h5>Välkommen till min hemsida</h5>
                    <div className="HeaderLinks">
                        <FontAwesomeIcon icon={faCoffee} spin/>
                        <FontAwesomeIcon icon={faGithub} className="Header-Icon"/>
                        <FontAwesomeIcon icon={faFacebookF} className="Header-Icon"/>
                        <FontAwesomeIcon icon={faInstagram} className="Header-Icon"/>
                        <FontAwesomeIcon icon={faLinkedinIn} className="Header-Icon"/>
                        <FontAwesomeIcon icon={faCoffee} spin/>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;