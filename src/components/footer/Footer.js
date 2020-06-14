import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render(){
        return (
            <div className="Footer">
                <div className='FooterText'>
                    <h3>Footer text</h3>
                </div>
                <div className="FooterInfo">
                    <h3>Info@gmail.com</h3>
                </div>
            </div>
        )
    }
}

export default Footer;