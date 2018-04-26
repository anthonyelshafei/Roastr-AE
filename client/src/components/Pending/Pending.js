import React from "react";
import Userimage from "../Userimage";

const imgStyle = {
    maxHeight: 50,
    maxWidth: 50,
  };

  // style={imgStyle}

const Pending = props => (
      <div className="row border-bottom justify-content-between p-1">
        
        <div>
            <button type="button" class="btn btn-primary mt-1" data-toggle="modal" data-target="#pendingModal">View</button>
            <div class="modal fade" id="pendingModal" tabindex="-1" role="dialog" aria-labelledby="pendingModalTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="pending">Roast Pending</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    {this.props.roast}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>
        </div>

        <span className="align-middle text-right">
            <small>
            To: {this.props.recipient}<br/>
            Date: {this.props.date}
            </small>
        </span>

        <span className="my-auto text-left">
            <span><small>{this.props.username}</small> </span>
            <span className="badge badge-pill badge-danger">{this.props.score}</span><br/>
            <small>{this.props.date}</small>
        </span>
        
        <div style={imgStyle} className="my-auto mr-1">
          <Userimage
          image={this.props.image}
          />
        </div>
       
      </div>

);

export default Pending;