import React, { Fragment } from 'react';
import Logo from "../../components/Logo";
// import API from "../../utils/API";

class Login extends React.Component {

    render() {
        return (
            <Fragment>
                <div className="container">
                    <Logo/>
                    <form className="form" id="signup">
                        <input type="text" placeholder="Username" required/>
                        <input type="password" placeholder="Password" required/>
                        <button type="submit" id="login-button" className="loginbutton">Login</button><br/>
                    </form>
                </div>
            </Fragment>
        )
    }
}

export default Login;