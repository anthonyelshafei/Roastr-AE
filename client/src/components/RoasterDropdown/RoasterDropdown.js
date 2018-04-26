import React from "react";
import API from "../../utils/API";

class RoasterDropdown extends React.Component {

    state = {
      roasters: []
    }

    componentDidMount(){
        API.getUsers().then(res => {
            console.log(res)
        })
    }

    render(){
        return(
            <h1>H1 TAG</h1>
        )
    }
};

export default RoasterDropdown;