import React from "react";


  
  // style={imgStyle}

const Userimage = function(props){ 
    const squareStyle = {
        position: 'relative',
        width: '100%',
        background: `url(${props.image})`,
        backgroundSize: 'cover',
        borderRadius: '50%',
        border: 'solid 2px #f44d2f',
    };
    return(
    <div style={squareStyle} className="square">
        <div className="userimage">
        </div>
    </div>

)};

export default Userimage;