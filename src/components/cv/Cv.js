import React, {useState, useEffect} from 'react';
import './Cv.css';
import './CV.docx';


import {useTrail, animated} from 'react-spring';

//make a toggle for each h1 that uses trail to render the info from cv 

const School = [
    "High School - Computer Science / IT, 2 years",
    "High School - Construction concrete/rebar specialist, 3 years",
    "Bachelors Degree - Sound-Design for computer games, 3 years",
    "Codecademy - Web development",
    "Codecademy - Computer Science/Analysis",
    "Hacking with Swift",
    "Serverside Swift with Vapor"
]
const Work = [
    "Concrete worker - Asplunds-bygg Örebro",
    "Telecommunications Officer - Tele2 Karlskoga",
    "Telecommunications Officer - Tele2 Stockholm",
    "Alarm Operator - Bergslagens Räddningstjänst Karlskoga",
    "Data Protection Officer - Bergslagens Räddningstjänst Karlskoga",
    "Freelance iOS developer"
]
const Experience = [
    ['Html / Css', 80],
    ['Javascript', 75],
    ['React', 60],
    ['NodeJs', 40],
    ['Python', 25],
    ['Swift', 65],
]

const Progress = ({done}) => {

    const [style, setStyle] = useState({})
    
    useEffect(() => {
        let timer = setTimeout(() => {
            const newStyle = {
                
                opacity: 1,
                width: `${done}%`,
                
            }
    
            setStyle(newStyle);
        }, 500);

        return () => {
            clearTimeout(timer);
        }
        
    }, [done])

    //sending back [done] in useffect 
    //and returning clearTimeout in the cleanup funciton solved memoryleak 

    

    return (
        <div className="Progress">
            <div className="ProgressDone" style={style}>
                {done}%
            </div>

        </div>
    )
}

const config = {mass: 10, tension: 1000, friction: 100}

const Cv = () => {

    const [schoolToggle, setSchoolToggle] = useState(false)
    const [workToggle, setWorkToggle] = useState(false)
    const [expToggle, setExpToggle] = useState(false)

    const trail = useTrail(School.length, {
        config,
        opacity: schoolToggle ? 1 : 0,
        x: schoolToggle ? 20 : 0,
        
        from: {opacity: 0, x: 20}, 
    })
    //removing height and width from animation fixed the lag
    const trail2 = useTrail(Work.length, {
        config,
        opacity: workToggle ? 1 : 0,
        x: workToggle ? 20 : 0,
        
        from: {opacity: 0, x: 20}, 
    })

    const trail3 = useTrail(Experience.length, {
        config,
        opacity: expToggle ? 1 : 0,
        x: expToggle ? 20 : 0,
        
        from: {opacity: 0, x: 20}, 
    })

    

    const conditionalRenderBlocks = () => {
        if (schoolToggle === true && workToggle === false && expToggle === false){
            return (
                <div className="CvPartContainer">
                            
                            {trail.map(({ x, ...rest }, index) => (
                                <animated.div
                                    key={School[index]}
                                    className="CvPartContainelement"
                                    
                                    style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                                <animated.div >{School[index]}</animated.div>
                                </animated.div>
                            ))}
                </div>
            )

        } else if (schoolToggle === false && workToggle === true && expToggle === false){
            return (
                <div className="CvPartContainer">
                        {trail2.map(({ x, ...rest }, index) => (
                            <animated.div
                                key={Work[index]}
                                className="CvPartContainelement"
                                style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                            <animated.div >{Work[index]}</animated.div>
                            </animated.div>
                        ))}
                </div>
            )
            
        } else if (schoolToggle === false && workToggle === false && expToggle === true){
            return (
                <div className="CvPartContainer">

                        <div className="CvProgressContainer">
                            <div className="CvProgressContainerElement">Familiar</div>
                            <div>
                            {trail3.map(({ x, ...rest }, index) => (
                                
                                <animated.div
                                    key={Experience[index]}
                                    className="CvInfoText"
                                    style={{ ...rest, transform: x.interpolate(x => `translate3d(0, ${x}px, 0)`) }}>
                                    
                                    <animated.div >{Experience[index][0]}</animated.div>
                                    {expToggle ? <Progress done={Experience[index][1]}/> : null }
                                    
                                    
                                </animated.div>
                                
                                
                            ))}
                            </div>
                            <div className="CvProgressContainerElement">Expert</div>
                        </div>
                </div>
            )
        }
        
    }

    const schoolToggleTrue = () => {
        setSchoolToggle(!schoolToggle)
        
        if (workToggle || expToggle === true ){
            setWorkToggle(false)
            setExpToggle(false)
        }
    }

    const workToggleTrue = () => {
        setWorkToggle(!workToggle)
        
        if (schoolToggle || expToggle === true ){
            setSchoolToggle(false)
            setExpToggle(false)
        }
    }

    const expToggleTrue = () => {
        setExpToggle(!expToggle)
        
        if (workToggle || schoolToggle === true ){
            setWorkToggle(false)
            setSchoolToggle(false)
        }
    }

    return (
        <div className="CvContainer" id="Cv">
            <div className="CvHeader">
                <h1>CV</h1>
                <div className="CvHeaderP">
                    iOS and Webdevelopment entusiast. Currently working on an iOS app that 
                    tracks visits to different Nordic Historical Sites,
                    the app will hopefully expand to include an Web-app in the future. 
                    Proficient in Webdevelopment using MERN stack. Knowledge of all the 
                    most used Apple frameworks including Combine, Async/Await, SpriteKit, Mapkit, Widgetkit,
                    SwiftUI, UIkit, WebKit, CloudKit etc. 
                    Building back-ends in NodeJS, Django and Vapor.


                </div>
                <a className="CvDownload" href="CV.docx" download="KristofferErikssonCV.docx">Download full CV</a>
            </div>
            <div className="CvInfo">
                <div className="CvInfoHeader">
                    <div onClick={schoolToggleTrue}>Education</div>
                    <div onClick={workToggleTrue}>Work</div>
                    <div onClick={expToggleTrue}>Experience</div>
                </div>
                
                
                {conditionalRenderBlocks()}
                    
                
                
            </div>
        </div>
    )


}

export default Cv;