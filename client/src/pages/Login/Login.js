import React, { Fragment } from 'react';
import Logo from "../../components/Logo";
// import API from "../../utils/API";
import { Route } from 'react-router-dom';

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

    render() {
        return (
            <Fragment>
                <div className="container">
                    <Logo/>
                    <form className="form" id="signup">
                        <input name="username" onChange={this.handleInputChange} type="text" placeholder="Username" value={this.state.username} required/>
                        <input name="password" onChange={this.handleInputChange} type="password" placeholder="Password" value={this.state.password} required/>
                        <Route render={({ history }) => ( 
                        <button 
                        type="submit" 
                        id="login-button" 
                        className="loginbutton"
                        onClick={() => {history.push('/users/' + this.state.username)}}
                        >Login</button>)}/>
                        <br/>

                    </form>
                </div>
            </Fragment>
        )
    }
}

export default Login;