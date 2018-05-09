import React, { Fragment } from "react";
import Logo from "../../components/Logo";
import API from "../../utils/API";

class SignUp extends React.Component {

    state = {
      username: "",
      password: "",
      image: "https://cdn.dribbble.com/users/149398/screenshots/1725558/fuego-loop-2.gif"
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

        var userData = {
          username: this.state.username,
          password: this.state.password,
          image: this.state.image
        }

        API.getByName(this.state.username).then( res => {
            if(res.data){
                alert("Username is taken, please choose a different one.")
                this.setState({username: ""})
            }
            else{
                API.addUser(userData)
                window.location.href = '/main';
            }
        });
        
        };

    render() {
        return (
            <Fragment>
                <div className="container">
                    <Logo/>
                    <form className="form" id="signup" onSubmit={this.handleFormSubmit}>
                        <input name="username" onChange={this.handleInputChange} value={this.state.username} type="text" placeholder="Username" required/>
                        <input name="password" onChange={this.handleInputChange} value={this.state.password} type="password" placeholder="Password" required/>
                        <input 
                        id="imgName" 
                        name="image" 
                        onChange={this.handleInputChange} 
                        value={this.state.image} 
                        type="text" 
                        placeholder="Web Image URL"
                        required />
                        <button id="signup-button" className="grad1" type="submit">Sign Up</button><br/><br/>
                        <h3 id="linkz"><a href="/">Already a member?</a></h3>
                    </form>
                        <h2>Profile Pic</h2>
                        <img src={this.state.image} name="imageHolder" id="imageHolder"/><br/><br/>
                </div>
            </Fragment>
        )
    }
}

export default SignUp;