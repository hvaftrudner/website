import React from 'react';
import './LatestWork.css';

class LatestWork extends React.Component {

    constructor(props){
        super(props);

        this.getRepo = this.getRepo.bind(this);
        this.conditionalRender = this.conditionalRender.bind(this);
    }

    getRepo(){
        if(this.props.getRepo){
            return this.props.getRepo();
        } else {
            return alert('This doesnt work')
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
            
                            //slice indicates how many should render
            return (
                <div className="LatestWorkGroup">{
                    this.props.repo.reverse().slice(0, 3).map(repo => {
                   //change props.avatar_url to profilepic / projectpic
                    return(
                        <div className="LatestWorkContainer" key={this.props.repo}>
                            <div className="LatestWorkHeader">
                                <h4>{repo.name}</h4>
                            </div>
                            <div className="LatestWorkInfo">
                                <p>{repo.description}</p>
                            </div>
                            <div className="LatestWorkPicture">
                                <p>{repo.avatar_url}</p>
                                <img src={repo.avatar_url} alt="logo"></img>
                            </div>
                        </div>)
                    })
                }</div>
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

export default LatestWork;
