import React, {useState, useEffect} from 'react';
import './Work.css';

import {useTrail, animated} from 'react-spring';

function Work(){

    const [users, setUsers] = useState([])
    const [toggle, setToggle] = useState(false)
    const config = {mass: 20, tension: 2500, friction: 400}

    const trail = useTrail(users.length, {
        config,
        opacity: toggle ? 1 : 0,
        x: toggle ? 0 : 20,
        height: toggle ? 80 : 0,
        width: toggle ? 200 : 0,
        from: {opacity: 0, x: 20, height: 0, width: 0}
    })

    const toggleTrue = () => setToggle(!toggle)

    return (
        
        <div className="WorkGroup">
            <div className="Test" onClick={toggleTrue}>tja</div>
            {trail.map(({opacity, x, height, ...rest}, index) => (
                <animated.div
                items={this.props.repo}
                key={repo => repo.id}
                className="WorkContainer"
                style={{...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`)}}>
                    {repo => props => (
                            <animated.div className="LatestWorkContainer"  style={props}>
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
                            </animated.div>)}
                </animated.div>
            ))}
        </div>
    )

}

export default Work;