import React from "react";
import Userimage from "../Userimage";

class Chat extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            username: '',
            message: '',
            messages: []
        };
    }
    render(){
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 p-0">
                        <div>
                            <div className="card-body h-50 p-0 m-0">
                                <div className="card-title"><h2>Global Chat</h2></div>
                                <hr/>
                                <div className="messages" placeholder="chat messages appear here">
                                    {this.state.messages.map(message => {
                                        return (
                                            <div><Userimage />{message.author}: {message.message}</div>
                                        )
                                    })}
                                </div>
                                <div className="footer m-0">


                                {/* <input type="text" placeholder="Username" value={this.state.username} onChange={ev => this.setState({username: ev.target.value})} className="form-control"/>
                                    <br/> */}
                                    
                                    <input type="text" placeholder="Message" className="form-control" value={this.state.message} onChange={ev => this.setState({message: ev.target.value})}/>
                                    <br/>
                                    <button className="btn btn-primary form-control">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chat;