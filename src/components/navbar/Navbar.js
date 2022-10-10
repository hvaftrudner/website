import React from 'react';
import './Navbar.css';
import {useRef, useState, useEffect} from 'react';

const Navbar = () => {

    const [isSticky, setSticky] = useState(false)
    const [toggle, setToggle] = useState(false)
    const ref = useRef(null)

    const toggleHamburger = () => setToggle(!toggle)

    useEffect(() => {
        const cachedRef = ref.current,
            observer = new IntersectionObserver(
                //changed to boundingClientRect from intersectionratio
                ([e]) => setSticky(e.boundingClientRect.top < 0),
                {threshold: [1]}
            )
        observer.observe(cachedRef)

        return function(){
            observer.unobserve(cachedRef)
        }
    }, [])

    const moreButtonStyle = {
        backgroundColor : "white",
        
        height: "2px",
        margin: "4px",
        paddingTop: "1px"
    }

    const closeButtonStyle = {
        backgroundColor : "white",
        
        height: "2px",
        margin: "4px",
        paddingTop: "1px",
        
    }

    function moreButton() {
        return (
            <div className={"moreButton"}>
                
                <div style={moreButtonStyle}></div>
                <div style={moreButtonStyle}></div>
                <div style={moreButtonStyle}></div>
                
            </div>
        )
    }
      
      function closeButton() {
        return (
            <div className={"closeButton"}>
                
               <div style={Object.assign({ transform: "rotate(-45deg)" }, closeButtonStyle)}></div>
               <div style={Object.assign({ transform: "rotate(45deg)" }, closeButtonStyle)}></div>
            </div>
        )
      }

    // add a _ in front of classname in navbar to apply 2 classes
   
    //wrap navbartext in another div to render margin
    //us if statement to render a elements ?
    //onclick must be issticky otherwise not available
    console.log(isSticky);
    console.log(toggle)
    return(
        
        
        <div className={"Navbar" + (isSticky ? "Effect" : "") } onClick={isSticky ? toggleHamburger : undefined} ref={ref} >

            <div className={'NavbarText' + (isSticky ? 'Effect' : '') + (toggle ? "Animated" : "") }  >

                <a href="#Header">Home</a>
                <a href="#MainContent">About me</a>
                <a href="#Cv">CV</a>
                <a href="#Projects">Projects</a>

            </div>

            <div className={"NavbarButton"} style={!isSticky ? {display: "none"} : {display: "block"}}> 
            
                {!toggle && moreButton()}
                {toggle && closeButton()}
        
            </div>

        </div>
    )
}


export default Navbar;