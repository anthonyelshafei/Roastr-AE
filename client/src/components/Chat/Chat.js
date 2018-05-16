import React from "react";
import io from "socket.io-client";
import Userimage from "../Userimage";

var connection = document.URL
console.log(connection)

const chatImage = {

    maxWidth: 30,
    maxHeight: 30
    
};

if(document.URL === 'http://localhost:3000/main'){
    connection='localhost:3001';
}
else{
    connection=window.location.host;
}

class Chat extends React.Component{

    


    constructor(props){
        super(props);

        this.state = {
            // username: this.props.username,
            message: '',
            messages: []
        };

        this.socket = io(connection);

        this.socket.on('RECEIVE_MESSAGE', function(data){
            addMessage(data);
        });

        const addMessage = data => {
            console.log(data);
            this.setState({messages: [...this.state.messages, data]});
            console.log(this.state.messages);
        };

        this.sendMessage = ev => {
            ev.preventDefault();
            this.socket.emit('SEND_MESSAGE', {
                author: this.props.username,
                authorImage: this.props.image,
                message: this.state.message
            })
            this.setState({message: ''});

        }
    }
    
    render(){
        return (
            <div>
                <div className="row">
                    <div className="col-12">
                        <div lassName="p-0">
                            <div className="card-body">
                                <hr/>
                                <div className="messages">
                                    {this.state.messages.map(message => {
                                        return (
                                            <div className="row pt-2">
                                            
                                                <div className="col-3 mr-1 p-0" style={chatImage}> <Userimage image={message.authorImage}/></div> 
                                                
                                                <div classname="col-9 text-right">{message.author}: </div>
                                            
                                                <div className="col-12 border-bottom mb-3 pb-3 px-0">
                                                <div><small>{message.message}</small></div>
                                            </div>
                                            </div>
                                        )
                                    })}
                                </div>

                            </div>
                            <div>
                                {/* <input type="text" placeholder="Username" value={this.state.username} onChange={ev => this.setState({username: ev.target.value})} className="form-control"/>
                                <br/> */}
                                <input type="text" placeholder="Message" className="form-control" value={this.state.message} onChange={ev => this.setState({message: ev.target.value})}/>
                                <br/>
                                <button onClick={this.sendMessage} className="btn btn-primary form-control"><img src="https://i.imgur.com/keUwOqg.png" heigt="16px"/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chat;