import React from "react";

const imgStyle = {
    clipPath: 'circle(50% at 50% 50%)',
    width: '100%',    
  };


  // style={imgStyle}

const Userimage = props => (
    <img style={imgStyle} src="https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&h=350" alt=""/>

);

export default Userimage;