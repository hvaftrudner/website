//Dependencys
//import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useSpring, animated} from 'react-spring';
//use animated.div to with effect to slowly render in app

//components
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import LatestWork from '../latestwork/LatestWork';
import MainContent from '../maincontent/MainContent';

//utils
import GithubUser from '../../utils/github';

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
    });
  }

  printRepo(){
    console.log(this.state.repoInfo);
  }
  
  render(){

    return(
      <div className="App">
        <Header />
        <Navbar getRepo={this.getRepo}
                repo={this.state.repoInfo}/>
        <LatestWork getRepo={this.getRepo}
                    repo={this.state.repoInfo}/>
        <MainContent />
        <Footer />
        
        {/*test comment*/}
      </div>
    )
  }
}

export default App;
