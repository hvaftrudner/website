import React from 'react';
import './Footer.css';

import Icon from '../devIcon/devIcon';

class Footer extends React.Component {
    render(){
        return (
            <div className="Footer">
                <div className='FooterText'>
                    <h3>@hvaftrudner</h3>
                </div>
                
                <Icon />
                
                <div className="FooterInfo">
                    <h3>Contact: krill_eriksson@hotmail.com</h3>
                </div>
            </div>
        )
    }
}

export default Footer;