import React from 'react';
import Userimage from "../Userimage";
import API from "../../utils/API";

const imgStyle = {
    height: 50,
    width: 50,
  };

class CompRoast extends React.Component {

    state= {
      roastScore: 0,
      replyScore: 0,
      roastrScore: 88,
      recipientScore: 88,
      voted: false
    }

    componentDidMount() {

        API.getByName(this.props.roastrName).then(res => {
            this.setState({roastrScore: res.data.score})
        })

        API.getByName(this.props.recipientName).then(res => {
            this.setState({roastrScore: res.data.score})
        })
        
        API.getRoast(this.props.id).then(res => {
            this.setState({roastScore: res.data.roastScore, replyScore: res.data.replyScore})
        })

        API.getRoast(this.props.id).then(res => {
            
            for(var i = 0; i < res.data.voters.length; i++){
                if(res.data.voters[i] === this.props.username){
                    this.setState({voted: true})
                    
                }
            }
        })
    };

    voteRoastr = (event) => {
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
                   var newroastScore = res.data.roastScore
                   newroastScore = this.state.roastScore + 1
                   var newVoters = res.data.voters
                   newVoters.push(this.props.username)

                   var roastData = {
                     roastScore: newroastScore,
                     voters: newVoters  
                   }

                   API.updateRoast(roastData, this.props.id).then(() =>{
                        this.setState({roastScore: newroastScore})
                        this.setState({voted: true})
                   })
                })
            };
            
        })
      };
      
      voteRecipient = (event) => {
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
                        this.setState({replyScore: newreplyScore})
                        this.setState({voted: true})
                   })
                })
            };
            
        })
      };
        
            
        
    

    render() {
        return ( 
            
            <div className="card text-center mb-3" key={this.state.voted}>
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
                    {this.state.voted === false? (
                        <div>
                        <button className="btn col-5 border-right border-dark mx-2"  onClick={this.voteRoastr}><strong>{this.state.roastScore}</strong></button>
                        <button className="btn col-5 border-left border-dark mx-2"  onClick={this.voteRecipient}><strong>{this.state.replyScore}</strong></button>
                        </div>
                    ) : (
                        <div>
                        <button className="btn col-5 border-right border-dark mx-2"  onClick={this.voteRoastr} disabled><strong>{this.state.roastScore}</strong></button>
                        <button className="btn col-5 border-left border-dark mx-2"  onClick={this.voteRecipient} disabled><strong>{this.state.replyScore}</strong></button>
                        </div>
                    )
                }
                    <p>Vote for the better roast</p>
                </div>
            </div>
            
        )
    }
}

export default CompRoast;
