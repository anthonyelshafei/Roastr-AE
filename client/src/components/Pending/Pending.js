import React from "react";
import Userimage from "../Userimage";

const imgStyle = {
    maxHeight: 50,
    maxWidth: 50,
  };



const Pending = function(props) {
    

    
    return(
    
      <div className="row border-bottom justify-content-between p-1">
        
        <div>
            <button type="button" className="btn btn-primary mt-1" data-toggle="modal" onClick={()=>props.changeRoast(props.roast)} data-target="#pendingModal">View</button>
            
        </div>

        <span className="align-middle text-right">
            <small>
            To: <br/>
            Date: 
            </small>
        </span>

        <span className="my-auto text-left">
            <span><small>{props.recipientName}</small> </span>
            <span className="badge badge-pill badge-danger">{props.recipientScore}</span><br/>
            <small>{props.date.substring(0,10)}</small>
        </span>
        
        <div style={imgStyle} className="my-auto mr-1">
          <Userimage
          image={props.recipientImage}
          />
        </div>
       
      </div>

    )
};

export default Pending;