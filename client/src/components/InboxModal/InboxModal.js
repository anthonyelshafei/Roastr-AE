import React from "react";
import API from "../../utils/API";

/*data-dismiss="modal"*/

class InboxModal extends React.Component {

    state = {
        textbody: "",
        roastId: ""
    }


    componentDidMount = () => {
        
    }
    

    handleInputChange = event => {
        let value = event.target.value;
        // const name = event.target.name;
        this.setState({ textbody: value })
    };

    handleFormSubmit = event => {
        event.preventDefault()
        console.log(this.props.roastId)
        var RoastData = {
            reply: this.state.textbody
        }
        API.updateRoast(RoastData, this.props.roastId)
    };

    render(props) {


        return (
            <div className="modal fade" id="inboxModal" tabIndex="-1" role="dialog" aria-labelledby="inboxModalTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="pending">Incoming Roast</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form name="textbox" value={this.state.textbody} onChange={this.handleInputChange} onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Roast 'em back!</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
                </div>
                
                <div className="modal-footer">
                    <button type="submit" className="btn btn-secondary">Send</button>
                </div>
                </form>
                </div>
            </div>
            </div>
        )
    }
};

export default InboxModal;