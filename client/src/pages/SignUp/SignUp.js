import React, { Fragment } from "react";
import Logo from "../../components/Logo";
// import API from "../../utils/API";

class SignUp extends React.Component {

    state = {
      username: "",
      password: "",
      image: ""
    }

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;
    
        if (name === "password") {
            value = value.substring(0, 15);
          }
          
        this.setState({
            [name]: value
        })
       };

       handleFormSubmit = event => {
           
       }

    render() {
        return (
            <Fragment>
                <div className="container">
                <Logo/>
                <form className="form" id="signup">
                    <input name="username" onChange={this.handleInputChange} value={this.state.username} type="text" placeholder="Username" required/>
                    <input name="password" onChange={this.handleInputChange} value={this.state.password} type="password" placeholder="Password" required/>
                    <input name="image" onChange={this.handleInputChange} value={this.state.image} type="text" placeholder="Image"/>
                    <button id="signup-button" className="loginbutton" type="submit">Submit</button><br/>
                </form>
                </div>
            </Fragment>
        )
    }
}

export default SignUp;