import React from 'react';
import './devIcon.css';

import DevIcon from 'devicon-react-svg';

const devIconStyle = {
    fill: "rgb(255, 231, 255)",
    width: "3vw",
    height: "3vw",
    filter: "drop-shadow(0 0 10px rgb(252, 2, 252))",
    marginLeft: "5px",
    //border: "3px solid red"
};
const devIconViewbox = "0 0 30 35";

const Icon = () => {
    
    return(
        <div className="devIcon">

            <DevIcon icon="html5"  style={devIconStyle} viewBox={devIconViewbox}/>
            <DevIcon icon="css3"  style={devIconStyle} viewBox={devIconViewbox}/>
            <DevIcon icon="sass"  style={devIconStyle} viewBox={devIconViewbox}/>
            <DevIcon icon="javascript" style={devIconStyle} viewBox={devIconViewbox}/>
            <DevIcon icon="nodejs"  style={devIconStyle} viewBox={devIconViewbox}/>
            <DevIcon icon="react" style={devIconStyle} viewBox={devIconViewbox}/>
            <DevIcon icon="python" style={devIconStyle} viewBox={devIconViewbox}/>
            <DevIcon icon="git"  style={devIconStyle} viewBox={devIconViewbox}/>
            <DevIcon icon="npm"  style={devIconStyle} viewBox={devIconViewbox}/>
            <DevIcon icon="swift"  style={devIconStyle} viewBox={devIconViewbox}/>
            <DevIcon icon="apple"  style={devIconStyle} viewBox={devIconViewbox}/>
            

        </div>
    )
}

export default Icon;