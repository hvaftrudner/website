import React from 'react';
import './LatestWork.css';

import {Trail, animated} from 'react-spring/renderprops'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons';

class LatestWork extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            pushL: 0,
            pushR: 3
        }

        this.getRepo = this.getRepo.bind(this);
        this.pushLeft = this.pushLeft.bind(this);
        this.pushRight = this.pushRight.bind(this);
        this.renderArrowLeft = this.renderArrowLeft.bind(this);
        this.renderArrowRight = this.renderArrowRight.bind(this);
        this.conditionalRender = this.conditionalRender.bind(this);

    }

    getRepo(){
        if(this.props.getRepo){
            return this.props.getRepo();
        } else {
            return alert('This doesnt work')
        }
    }

    pushLeft(){
        this.setState({
            pushL: this.state.pushL - 3,
            pushR: this.state.pushR - 3
        });
    }
    
    pushRight(){
        this.setState({
            pushL: this.state.pushL + 3,
            pushR: this.state.pushR + 3
        });
    }

    //only renders arrows to se the next objects if there is more to show

    renderArrowLeft(){
        if(this.props.repo[this.state.pushL - 1]){
            return(
                <FontAwesomeIcon icon={faArrowLeft} className="left arrow" onClick={this.pushLeft}></FontAwesomeIcon>
            )
        }
    }
    
    renderArrowRight(){
        if(this.props.repo[this.state.pushR - 1]){
            return(
                <FontAwesomeIcon icon={faArrowRight} className="right arrow" onClick={this.pushRight}></FontAwesomeIcon>
            )
        }
    }
    
    //ConditionalRender checks to see if this.props.repo have loaded. 
    //Then it renders every object in the repo object separately.
    conditionalRender(){

        if(!this.props.repo){
            return (
                <div className="LatestWorkGroup">Loading...</div>
            )
        } else if(this.props.repo){
            
            //this.props.repo.reverse().slice(0,3).map(repo =>) is needed to render only 3 items
            //from newest

            //solved trail issue by encorporating LatestWorkGroup in return instead of outside of it
            //Didnt use slice anymore, need to fix that in future
            
            //change props.avatar_url to profilepic / projectpic

            return(
                    <div className="LatestWorkGroup" id="Projects">
                        {this.renderArrowLeft()}
                        
                        <Trail
                            items={this.props.repo.slice(this.state.pushL, this.state.pushR).reverse()}
                            keys={repo => repo.id}
                            config={{mass: 20, tension: 2500, friction: 400}}
                            from={{marginLeft: -20, opacity: 0, transform: 'translate3d(-1000px,0,0)' }}
                            to={{marginLeft: 20, opacity: 1, transform: 'translate3d(0px,0,0)' }}
                            >
                            {repo => props => (
                            <animated.div className="LatestWorkContainer"  style={props}>
                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                    <div className="LatestWorkHeader">
                                        <h4>{repo.name}</h4>
                                    </div>
                                    <div className="LatestWorkInfo">
                                        <div>{repo.description}</div>
                                    </div>
                                    {/* <div className="LatestWorkPicture">
                                        <img src={repo.avatar_url} alt="logo"></img>
                                    </div> */}
                                </a>
                            </animated.div>)}
                        </Trail>
                        {this.renderArrowRight()}
                        {/*<div className="arrow right"></div>*/}
                    </div>
                )
                
        } else {
            return (
                <div className="Latestwork-fail">failed to load</div>
            )
        }
    }

    render(){
        
        return(
            this.conditionalRender()
        )
    }
} 


/*

import {animated, useTrail} from 'react-spring';

const config = {mass: 30, tension: 1500, friction: 200} // use before function


    function LatestWork(){

        const {toggle, set} = useState(true)

        //using this.props.repo.length instead of predetermined array
        //is not working correctly, it cant find props because hook must be called 
        //before conditional, and conditional must be called to find props
        const trail = useTrail(this.props.repo, {
            config,
            opacity: toggle ? 1 : 0,
            x: toggle ? 0 : 20,
            
            height: toggle ? 80 : 0,
            width: toggle ? 200 : 0,
            
            from: {opacity: 0, x: 20, height: 0, width: 0}, 
        })

        if(!this.props.repo){
            return (
                <div className="LatestWorkGroup">Loading...</div>
            )
        } else if(this.props.repo){
            
              //slice indicates how many should render, reverse start from newest
            return (
                //trying to convert this div to animation to apply trail

                <div className="LatestWorkGroup">{
                    this.props.repo.reverse().slice(0, 3).map(repo => {
                   //change props.avatar_url to profilepic / projectpic
                    return(
                            <div> {trail.map(({x, height, ...rest }) =>(
                                <animated.div 
                                className="LatestWorkContainer" 
                                key={this.props.repo}
                                style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                        <div className="LatestWorkHeader">
                                            <h4>{repo.name}</h4>
                                        </div>
                                        <div className="LatestWorkInfo">
                                            <h5>{repo.description}</h5>
                                        </div>
                                        <div className="LatestWorkPicture">
                                            <img src={repo.avatar_url} alt="logo"></img>
                                        </div>
                                    </a>
                                </animated.div>
                            ))} 
                            </div>
                        )
                    })
                }</div>
            )
        } else {
            return (
                <div className="Latestwork-fail">failed to load</div>
            )
        }
    }


*/

export default LatestWork;