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
            <div class="modal fade" id="inboxModal" tabindex="-1" role="dialog" aria-labelledby="inboxModalTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="pending">Incoming Roast</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form name="textbox" value={this.state.textbody} onChange={this.handleInputChange} onSubmit={this.handleFormSubmit}>
                    <div class="form-group">
                    <label for="exampleFormControlTextarea1">Roast 'em back!</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
                </div>
                
                <div class="modal-footer">
                {this.state.responded ? (
                    <div>
                    <span>Roast has been sent!</span>
                    <button type="button" onClick={this.resetModal} data-dismiss="modal" class="btn btn-secondary">Close</button>
                    </div>
                ) : (
                    <button type="submit" class="btn btn-secondary">Send</button>
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