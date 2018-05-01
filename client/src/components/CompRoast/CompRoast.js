import React from 'react';
import Userimage from "../Userimage";
import API from "../../utils/API";

const imgStyle = {
    height: 50,
    width: 50,
  };

class CompRoast extends React.Component {

    state= {
      roastrScore: 0,
      recipientScore: 0
    }

    componentDidMount() {
        
        API.getRoast(this.props.id).then(res => {
            this.setState({roastrScore: res.data.roastScore, recipientScore: res.data.replyScore})
        })
    }

    roastRoastr = (event) => {
        var checked = false;
        event.preventDefault()
        API.getRoast(this.props.id).then(res => {
            
            for(var i = 0; i < res.data.voters.length; i++){
                if(res.data.voters[i] === this.props.username && checked === false){

                    alert("You already voted!")
                    
                    checked = true
                }
            }
            }).then(() => {
                if(checked===false){
                API.getRoast(this.props.id).then(res => { 
                   var newroastScore = res.data.roastrScore
                   newroastScore = this.state.roastrScore + 1
                   var newVoters = res.data.voters
                   newVoters.push(this.props.username)

                   var roastData = {
                     roastScore: newroastScore,
                     voters: newVoters  
                   }

                   API.updateRoast(roastData, this.props.id).then(() =>{
                        this.setState({roastrScore: newroastScore})
                   })
                })
            };
            
        })
      };
      
      roastRecipient = (event) => {
        var checked = false;
        event.preventDefault()
        API.getRoast(this.props.id).then(res => {
            
            for(var i = 0; i < res.data.voters.length; i++){
                if(res.data.voters[i] === this.props.username && checked === false){

                    alert("You already voted!")
                    
                    checked = true
                }
            }
            }).then(() => {
                if(checked===false){
                API.getRoast(this.props.id).then(res => { 
                   var newreplyScore = res.data.replyScore;
                   newreplyScore = this.state.replyScore + 1
                   var newVoters = res.data.voters
                   newVoters.push(this.props.username)

                   var roastData = {
                     replyScore: newreplyScore,
                     voters: newVoters  
                   }

                   API.updateRoast(roastData, this.props.id).then(() =>{
                        this.setState({recipientScore: newreplyScore})
                   })
                })
            };
            
        })
      };
        
            
        
    

    render() {
        return ( 
            
            <div className="card text-center mb-3">
                <div className="card-header row text-center justify-content-between">
                    
                    <div style={imgStyle} className="d-flex ml-auto mr-3">
                        <Userimage
                        image={this.props.roastrImage}
                         />
                    </div>
                    
                    <div className="d-flex my-auto">
                        {this.props.roastrName} VS {this.props.recipientName}
                    </div>
                    
                    <div style={imgStyle} className="d-flex mr-auto ml-3">
                        <Userimage
                        image={this.props.recipientImage}
                         />
                    </div>

                </div>
                
                <div className="card-body row">
                    
                    <div className="col border-right">
                        {this.props.roast}
                    </div>
                    
                    <div className="col border-left">
                        {this.props.reply}
                    </div>
                </div>
                
                <div className="text-muted">
<<<<<<< HEAD
                    <button className="btn col-5 border-right border-dark mx-2">{this.props.roastrName}</button>
                    <button className="btn col-5 border-left border-dark mx-2">{this.props.recipientName}</button>
                    <p > Vote on who got roasted</p>
=======
                    <button className="btn col-5 border-right border-dark mx-2" onClick={this.roastRoastr}><strong>{this.state.roastrScore}</strong></button>
                    <button className="btn col-5 border-left border-dark mx-2" onClick={this.roastRecipient}><strong>{this.state.recipientScore}</strong></button>
                    <p> Vote on who got roasted</p>
>>>>>>> d34ab77935e3a6a90c3b7f89bc03a804f1228dc1
                </div>
            </div>
            
        )
    }
}

export default CompRoast;
