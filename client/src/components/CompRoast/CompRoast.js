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
      replyScore: 0
    }

    componentDidMount() {
        
        API.getRoast(this.props.id).then(res => {
            this.setState({roastScore: res.data.roastScore, replyScore: res.data.replyScore})
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
                        this.setState({replyScore: newreplyScore})
                   })
                })
            };
            
        })
      };
        
            
        
    

    render() {
        return ( 
            
            <div className="card text-center mb-3">
                <div className="card-header row text-center justify-content-center mx-auto">
                <span class="badge badge-pill badge-warning mr-0 align-middle align-self-center">Score</span>

                    <div style={imgStyle} className='ml-3'>
                        <Userimage
                        image={this.props.roastrImage}
                         />
                    </div>
                    
                    <div className="d-flex align-self-center mx-3">
                        {this.props.roastrName} VS {this.props.recipientName}
                    </div>
                    
                    <div style={imgStyle} className='mr-3'>
                        <Userimage
                        image={this.props.recipientImage}
                         />
                    </div>
                <span class="badge badge-pill badge-warning mr-0 align-middle align-self-center">Score</span>


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
                    <button className="btn col-5 border-right border-dark mx-2" onClick={this.roastRoastr}><strong>{this.state.roastScore}</strong></button>
                    <button className="btn col-5 border-left border-dark mx-2" onClick={this.roastRecipient}><strong>{this.state.replyScore}</strong></button>
                    <p> Vote on who got roasted</p>
                </div>

                <div id="accordion">
                    <div class="card">
                        <div class="card-header" id="headingOne">
                        <h5 class="mb-0">

                            <button onClick={this.sendMessage} data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" className="btn btn-primary form-control"><img src="https://i.imgur.com/keUwOqg.png" heigt="16px"/></button>

                        </h5>
                        </div>

                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div class="card-body">


                            !!!!!!!!!!!!!comment cards go here!!!!!!!!!!!!!!!
                            !!!!!!!!!!!!!comment cards go here!!!!!!!!!!!!!!!
                            !!!!!!!!!!!!!comment cards go here!!!!!!!!!!!!!!!
                            !!!!!!!!!!!!!comment cards go here!!!!!!!!!!!!!!!
                            !!!!!!!!!!!!!comment cards go here!!!!!!!!!!!!!!!
                            



                        </div>
                        </div>
                    </div>
                </div>

            </div>
            
        )
    }
}

export default CompRoast;
