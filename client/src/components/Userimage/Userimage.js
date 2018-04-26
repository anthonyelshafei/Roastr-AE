import React from "react";

const imgStyle = {
    clipPath: 'circle(50% at 50% 50%)',
    width: '100%',    
  };

const Userimage = props => (
    <img style={imgStyle} src={props.image} alt=""/>

);

export default Userimage;