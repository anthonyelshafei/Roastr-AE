import React, { Fragment } from 'react';
import Logo from "../../components/Logo";
import API from "../../utils/API";



class Login extends React.Component {

    state = {
      userCount: [],
      username: "",
      password: ""
    }

    componentDidMount(){
        API.getUsers().then(res => {
          this.setState({userCount: res.data})
        })
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
                        className="grad1"
                        >Login</button>
                        <br/><br/>
                        <h3 id="linkz"><a href="/signup">New to Roastr? Join {this.state.userCount.length} roastrs!</a></h3>
                    </form>
                </div>
            </Fragment>
        )
    }
}

export default Login;