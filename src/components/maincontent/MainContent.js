import React from 'react';
import './MainContent.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import FadeIn from '../../utils/fadein';


class MainContent extends React.Component {
    render(){
        return(
            <div className='MainContent' id="MainContent">
                <h1>Personal life</h1>

                <div className="MainContentContainer">
                    <FadeIn children= {
                        <div className="MainContentContainerElement">
                            <div className="MainContentContainerText">
                                <div className="MainContentContainerElementHeader">
                                    History
                                </div>
                                <div className="MainContentContainerElementInfo">
                                    I love history very much and i read books on the topic almost daily.
                                    And on the weekends i enjoy going on hikes to historical sites!
                                    
                                </div>
                            </div>
                            
                            <div className="MainContentContainerPic">
                                <FontAwesomeIcon icon={faCoffee} className="Font1"></FontAwesomeIcon>
                            </div>
                        </div> } />

                    <FadeIn children= {
                        <div className="MainContentContainerElement">
                            <div className="MainContentContainerPic">
                                <FontAwesomeIcon icon={faCoffee} className="Font1"></FontAwesomeIcon>
                            </div>

                            <div className="MainContentContainerText">
                                <div className="MainContentContainerElementHeader">
                                    Coding
                                </div>
                                <div className="MainContentContainerElementInfo">
                                    I am super interested in new technology and i tend to 
                                    dabble in all kinds of new tech. I am proficient in Webdevelopment
                                    using the MERN stack. I have knowledge in building Backends using
                                    Node.js, Django and Vapor. I have made projects which uses SQL, postGres,
                                    MongoDB and sqlite3 as DBs. Currently i am developing an iOS app which will
                                    help people locate Nordic historical sites!
        
                                </div>
                            </div>
                        </div>} />
                    <FadeIn children= {
                        <div className="MainContentContainerElement">
                            <div className="MainContentContainerText">
                                <div className="MainContentContainerElementHeader">
                                    Music
                                </div>
                                <div className="MainContentContainerElementInfo">
                                    I have a big interest in Metal music and i play both
                                    guitar and bass. I have a Bachelors degree in Sound Design
                                    for computer games in which i also helped produce some music pieces 
                                    for some games. And have written, produced, mixed and mastered 2 full length
                                    albums on my own. 
                                </div>
                            </div>
                            
                            <div className="MainContentContainerPic">
                                <FontAwesomeIcon icon={faCoffee} className="Font1"></FontAwesomeIcon>
                            </div>
                        </div>} />
                    <FadeIn children= {
                        <div className="MainContentContainerElement">
                            <div className="MainContentContainerPic">
                                <FontAwesomeIcon icon={faCoffee} className="Font1"></FontAwesomeIcon>
                            </div>

                            <div className="MainContentContainerText">
                                <div className="MainContentContainerElementHeader">
                                    Gaming
                                </div>
                                <div className="MainContentContainerElementInfo">
                                    I have an avid interest in Warhammer40k were i both
                                    collect, paint, play and read lots of books on the lore!
                                    Used to be an avid World of Warcraft player were i was 
                                    in an top 50th world ranked guild during 2006.
                                </div>
                            </div>
                        </div> } />         
                </div>
            </div>
        )
    }
}

export default MainContent;