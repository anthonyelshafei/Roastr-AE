import React from "react";
import axios from "axios";
import API from "../../utils/API";
import Pending from "../Pending";
import Inbox from "../Inbox";
import Modal from "../Modal";
import InboxModal from "../InboxModal";
import Chat from "../Chat";
 
 class Social extends React.Component {
 
   state= {
     userInfo: {},
     pendings: [],
     inbox: [],
     pendingRoast: "",
     RoastToReply: ""
   }
 
   componentDidMount(){
     axios.get("/api/sessioninfo").then(response => {
       this.setState({userInfo: response.data})
     
     API.getPendings(this.state.userInfo.username).then(res => {
       this.setState({pendings: res.data})
 
     API.getInbox(this.state.userInfo.username).then(res => {
       this.setState({inbox: res.data})
     })
    })
   })

  };

  updateInbox = () => {
    API.getInbox(this.state.userInfo.username).then(res => {
      this.setState({inbox: res.data})
    })
  }

  updatePendings = () => {
    API.getPendings(this.state.userInfo.username).then(res => {
      this.setState({pendings: res.data})
    })
  }
 
   changeRoast = (roast) => {
     this.setState({pendingRoast: roast})
   }

   deleteRoast = (id) => {
    API.deleteRoast(id).then(()=>{
      this.updateInbox()
    })
   }
   
   submitResponse = (response) => {
     console.log(response)
   }
 
   getRoastInfo = (info) => {
     this.setState({RoastToReply: info})
   }
 
 
   render() {
     return (
     <div className="px-3">
       <h2>Social</h2>
       <div id="accordion">
         <div className="card">
           <div className="card-header p-0 p-0" id="headingOne">
             
               <button className="btn btn-link col-12 col-12" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">


                Inbox <strong>({this.state.inbox.length})</strong>
               </button>
           
           </div>
           <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
             <div className="card-body">
              {this.state.inbox.map(item => (
                <Inbox
                 roastrName={item.roastrName}
                 roastrScore={item.roastrScore}
                 id={item._id}
                 date={item.date}
                 getRoastInfo={this.getRoastInfo}
                 deleteRoast={this.deleteRoast}
                 roastrImage={item.roastrImage}
                 />

              ))}
             <InboxModal
               getRoastInfo={this.getRoastInfo}
               roastId={this.state.RoastToReply}
              updateInbox={this.updateInbox}
             />
             </div>
           </div>
         </div>
 
         <div className="card">
           <div className="card-header p-0" id="headingTwo">
             <h5 className="mb-0">
               <button className="btn btn-link col-12 collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">

                Pending <strong>({this.props.pendings.length})</strong>
               </button>
             </h5>
           </div>
           <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
             <div className="card-body">
               {this.props.pendings.map(item => (
                 <Pending
                 id={item._id}
                 key={item._id}
                 roast={item.roast}
                 changeRoast={this.changeRoast}
                 recipientName={item.recipientName}
                 recipientImage={item.recipientImage}
                 roastrName={item.roastrName}
                 date={item.date}
                 roastrScore={item.roastrScore}
                 />
               ))}
               <Modal
                roast={this.state.pendingRoast}
               />
             </div>
           </div>
         </div>
         
         <div className="card">
           <div className="card-header p-0" id="headingThree">
             <h5 className="mb-0">
               <button className="btn btn-link col-12 collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                 Chat
               </button>
             </h5>
           </div>
           <div id="collapseThree" className="collapse show" aria-labelledby="headingThree" data-parent="#accordion">
             <div className="card-body">
               <Chat
               username={this.state.userInfo.username}
               image={this.state.userInfo.image}
                />
             </div>
           </div>
         </div>
       </div>
     </div>
     )
   }
 }
 
 export default Social;

