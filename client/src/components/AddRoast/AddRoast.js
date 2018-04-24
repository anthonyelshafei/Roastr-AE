import React from "react";

class AddRoast extends React.Component {   


  render() {
    return (
        <form onSubmit={this.createRoast}>
            <input type="text" placeholder="Roastr"/>
            <input type="text" placeholder="Recipient"/>
            <input type="text" placeholder="Roast"/>
            <input type="text" placeholder="Reply"/> 
            <input type="text" placeholder="Roast Score"/>
            <input type="text" placeholder="Reply Score"/>
            <button className="loginbutton" type="submit">Send</button><br/>
        </form>
    );
  }
}

export default AddRoast;