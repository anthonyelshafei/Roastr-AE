import React from "react";


  
  // style={imgStyle}

const Userimage = function(props){ 
    const squareStyle = {
        position: 'relative',
        width: '100%',
        minWidth: 30,
        minHeight: 30,
        backgroundImage: `url(${props.image})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no repeat',
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