import React from "react";
 import API from "../../utils/API";
 

 /*data-dismiss="modal"*/
 
 class InboxModal extends React.Component {
 
     state = {
        textbody: "",
        roastId: "",
        responded: false
     }
 
 
     componentDidMount = () => {
         
     }

   resetModal = (event) => {
        event.preventDefault()
       this.setState({responded: false})
        
    }
     
 
     handleInputChange = event => {
         let value = event.target.value;
         this.setState({ textbody: value })
     };
 
     handleFormSubmit = event => {
         event.preventDefault()
         console.log(this.props.roastId)
         var RoastData = {
           reply: this.state.textbody,
           replied: true
         }

        API.updateRoast(RoastData, this.props.roastId).then(() =>{
            this.setState({responded: true})
            this.setState({textbody: ""})
            this.props.updateInbox()
        })
     };
 
     render(props) {
 
 
         return (
             <div className="modal fade" id="inboxModal" tabindex="-1" role="dialog" aria-labelledby="inboxModalTitle" aria-hidden="true">
             <div className="modal-dialog modal-dialog-centered" role="document">
                 <div className="modal-content bg-dark p-3">
                 <div className="modal-header">
                     <h5 className="modal-title" id="pending">Incoming Roast</h5>
                     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                     <span aria-hidden="true">&times;</span>
                     </button>
                 </div>
                 <form name="textbox" value={this.state.textbody} onChange={this.handleInputChange} onSubmit={this.handleFormSubmit}>
                     <div className="form-group">
                     <label for="exampleFormControlTextarea1">Roast 'em back!</label>
                     <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
                 </div>
                 
                 <div className="modal-footer">
                {this.state.responded ? (
                    <div>
                    <span className="mr-3">Roast has been sent!</span>
                    <button type="button" onClick={this.resetModal} data-dismiss="modal" className="btn btn-secondary">Close</button>
                    </div>
                ) : (
                     <button type="submit" className="btn btn-secondary">Send</button>
                )}
                 </div>
                 </form>
                 </div>
             </div>
             </div>
         )
     }
 };
 
 export default InboxModal;