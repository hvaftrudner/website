//Dependencys
//import logo from './logo.svg';
import './App.css';
import React from 'react';
//import {useSpring, animated} from 'react-spring';
//use animated.div to with effect to slowly render in app

//added routing to ios app pages
//import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

//components
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import LatestWork from '../latestwork/LatestWork';
import MainContent from '../maincontent/MainContent';
import Cv from '../cv/Cv';

import NordicHistoricalSites from '../NordicHistoricalSites/NordicHistoricalSites';
//import Work from '../work/Work';
//import NordicHistoricalSitesPrivacy from '../NordicHistoricalSites/NordicHistoricalSitesPrivacy/NordicHistoricalSitesPrivacy.js';

//utils
import GithubUser from '../../utils/github';
import FadeIn from '../../utils/fadein';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      repoInfo: [],
    }
    this.getRepo = this.getRepo.bind(this);
    this.printRepo = this.printRepo.bind(this);
  }

  componentDidMount(){
    this.getRepo();
    //this.printRepo();
  }

  getRepo(){
    GithubUser.getUserRepo().then(result => {
      this.setState({repoInfo: result})
      let repoCount = result.length
      //count is only 30? should be 70+
      console.log(repoCount)
    });
  }

  printRepo(){
    console.log(this.state.repoInfo);
  }
  
  render(){

    return(
      
          <div className="App">
          <Navbar getRepo={this.getRepo}
                  repo={this.state.repoInfo}
                  />
          <Header />
          
          <FadeIn 
            children={<NordicHistoricalSites />}/>
          
          <LatestWork getRepo={this.getRepo}
                      repo={this.state.repoInfo}/>
          <FadeIn 
            children={<Cv />}/>
          
          <FadeIn 
            children={<MainContent />}/>
            
          <FadeIn 
            children={<Footer />} />
          
          
          {/*test comment*/}
        </div>
      
        
      
    )
  }
}

export default App;
