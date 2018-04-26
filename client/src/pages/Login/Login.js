import React, { Fragment } from 'react';
import Logo from "../../components/Logo";
import axios from "axios";
import API from "../../utils/API";


class Login extends React.Component {

    state = {
      username: "",
      password: ""
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
        event.preventDefault();

        API.getByName(this.state.username).then( res => {
            if(res.data){
                if(res.data.password === this.state.password){
                    window.location.href = '/main';
                }
                else{
                    alert("Password was incorrect, please try again.")
                    this.setState({password: ""})
                }
            }
            else{
              alert("User not found, please try again.")
              this.setState({username: ""})
            }
        });
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <Logo/>
                    <form className="form" id="signup" onSubmit={this.handleFormSubmit}>
                        <input name="username" onChange={this.handleInputChange} type="text" placeholder="Username" value={this.state.username} required/>
                        <input name="password" onChange={this.handleInputChange} type="password" placeholder="Password" value={this.state.password} required/>
                        
                        <button 
                        type="submit" 
                        id="login-button" 
                        className="loginbutton"
                        >Login</button>
                        <br/>

                    </form>
                </div>
            </Fragment>
        )
    }
}

export default Login;