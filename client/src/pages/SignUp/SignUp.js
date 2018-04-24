import React, { Fragment } from "react";
import Logo from "../../components/Logo";
// import API from "../../utils/API";

class SignUp extends React.Component {

    render() {
        return (
            <Fragment>
                <div className="container">
                <Logo/>
                <form className="form" id="signup">
                    <input type="text" placeholder="Username" required/>
                    <input type="password" placeholder="Password" required/>
                    <input type="text" placeholder="Image"/>
                    <button id="signup-button" className="loginbutton" type="submit">Submit</button><br/>
                </form>
                </div>
            </Fragment>
        )
    }
}

export default SignUp;