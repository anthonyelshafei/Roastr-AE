import React from "react";
import Userimage from "../Userimage";

const imgStyle = {
    maxHeight: 50,
    maxWidth: 50,
  };

  // style={imgStyle}

const Inbox = function(props) { 

    

    
    return (
      <div className="row border-bottom justify-content-between p-1">

        <div style={imgStyle} className="my-auto mr-1">
          <Userimage/>
        </div>

        <div>
            {/* <div class="modal fade" id="inboxModal" tabindex="-1" role="dialog" aria-labelledby="inboxModalTitle" aria-hidden="true"> */}
            {/* <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="pending">Incoming Roast</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form onSubmit={}>
                    <div class="form-group">
                    <label for="exampleFormControlTextarea1">Roast 'em back!</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                
                <div class="modal-footer">
                    <button type="submit" class="btn btn-secondary" data-dismiss="modal">Send</button>
                </div>
                </form>
                </div>
            </div> */}
            {/* </div> */}
        </div>

        <span className="align-middle text-right">
            <small>
            From: <br/>
            Date: 
            </small>
        </span>

        <span className="my-auto text-left">
            <span><small>{props.roastrName}</small> </span>
            <span className="badge badge-pill badge-danger">{props.roastrScore}</span><br/>
            <small>{props.date.substring(0,10)}</small>
        </span>
        
        <button type="button" onClick={()=>props.getRoastInfo(props.id)} class="btn btn-primary mt-1" data-toggle="modal" data-target="#inboxModal">Reply</button>
        <button type="button" class="btn btn-primary mt-1">X</button>

       
      </div>
 )
};

export default Inbox;