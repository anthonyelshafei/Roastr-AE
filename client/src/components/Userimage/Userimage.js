import React from "react";


  
  // style={imgStyle}

const Userimage = function(props){ 
    const squareStyle = {
        position: 'relative',
        width: '100%',
        borderRadius: '50%',
        backgroundImage: `url(${props.image})`,
        backgroundSize: 'cover',
        backgroundRepeat:'none',
        backgoundColor: 'gold',
        border: 'solid 2px #f44d2f',
    };
    return(
    <div style={squareStyle} className="square">
        <div className="userimage">
        </div>
    </div>

)};

export default Userimage;