import React from "react";
import Userimage from "../Userimage";

const imgStyle = {
    maxHeight: 50,
    maxWidth: 50,
  };

  // style={imgStyle}

const Inbox = function(props) { 

    

    
    return (
    <div>
      <div className="row border-bottom justify-content-between p-1">

        <div style={imgStyle} className="my-auto mr-1">
          <Userimage
          image = {props.roastrImage}
          />
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
        <button type="button" class="btn btn-primary mt-1" onClick={()=>props.deleteRoast(props.id)}>X</button>

       
      </div>
    </div>
 )
};

export default Inbox;