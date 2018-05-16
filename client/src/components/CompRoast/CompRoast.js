import React from 'react';
import Userimage from "../Userimage";
import API from "../../utils/API";
import Comments from "../Comments";

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
                    <p>Vote</p>
                </div>

            <div className='accordion'>
                <div className="card-header p-0" id="headingFour">
                    <h5 className="mb-0">
                    <button className="btn col-12 collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Comments
                    </button>
                    </h5>
                </div>
                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                    <div className="card-body">
                    <Comments/>
                    </div>
                </div>
            </div>

            </div>
            
        )
    }
}

export default CompRoast;
