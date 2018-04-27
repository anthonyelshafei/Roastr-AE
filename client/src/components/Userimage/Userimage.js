import React from "react";

const squareStyle = {
    position: 'relative',
	width: '100%',
	background: 'url(https://petecooperwildlife.files.wordpress.com/2017/07/this-beaver-could-be-coming-to-cornwall-1-credit-nick-upton.jpg?w=750)',
    backgroundSize: 'cover',
    borderRadius: '50%',
    border: 'solid 2px #f44d2f',
  };
  
  // style={imgStyle}

const Userimage = props => (
    <div style={squareStyle} className="square">
        <div className="userimage">
        </div>
    </div>

);

export default Userimage;