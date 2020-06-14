import React from 'react';
import './Navbar.css';


class Navbar extends React.Component {

    constructor(props){
        super(props);

        this.state = {repo: false};

        this.workAction = this.workAction.bind(this);
        
    }
    //NEEDs an optional load to render json from fetch otherwise
    //it will not render on first load
    
    //render button (p) depending on if the state has been passed
    workAction(){
        if(!this.props.repo){
            return (
                <p className="Work-Button"
                   onClick={this.props.getRepo}>Work</p>
            )
        } else if(this.props.repo[1]) {
            return (
                <p className="Work-Button-Use"
                   key={this.props.repo}>{this.props.repo[1].name}</p>
            )
        } else {
            return (
                <p onClick={this.props.getRepo}>tjos</p>
            )
        }
    }
    
    //se tracklist and track components in jammming
    
    //must use ( )to get the function working
    render(){
        return(
            <div className='Navbar'>
                <div className='NavbarText'>
                    <p>Navbar</p>
                    <p>Navbar</p>
                    
                    <p>Navbar</p>
                    <p>Navbar</p>
                </div>
            </div>
        )
    }
}

export default Navbar;