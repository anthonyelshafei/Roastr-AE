import React from "react";
import axios from "axios";

class TestPage extends React.Component {

    state = {
      userInfo: {}
    }

    componentDidMount(){
        axios.get("/api/sessioninfo").then(res => {
            this.setState({userInfo: res.data})
          })
    };

    render(){
        return (
            <div>
                <h1>{this.state.userInfo.username}</h1>
            </div>
        )
    }
}


export default TestPage;