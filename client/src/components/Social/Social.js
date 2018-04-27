import React from "react";
import axios from "axios";
import API from "../../utils/API";
import Pending from "../Pending";
import Inbox from "../Inbox";

class Social extends React.Component {

  state= {
    userInfo: {},
    pendings: [],
    inbox: []
  }

  componentDidMount(){
    axios.get("/api/sessioninfo").then(response => {
      this.setState({userInfo: response.data})
      

    API.getPendings(this.state.userInfo.username).then(res => {
      this.setState({pendings: res.data})

    API.getInbox(this.state.userInfo.username).then(res => {
      this.setState({inbox: res.data})
    })
      
    })
  })
}

  render() {
    return (
    <div className="px-3">
      <h2>Social</h2>
      <div id="accordion bg-dark">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h5 className="mb-0">
              <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Inbox
              </button>
            </h5>
          </div>
          <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
            <div className="card-body">
             {this.state.inbox.map(item => (
               <Inbox
                roastrName={item.roastrName}
                roastrScore={item.roastrScore}
                date={item.date}
                />
             ))}
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header" id="headingTwo">
            <h5 className="mb-0">
              <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Pending
              </button>
            </h5>
          </div>
          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
            <div className="card-body">
              {this.state.pendings.map(item => (
                <Pending
                id={item._id}
                key={item._id}
                roast={item.roast}
                recipientName={item.recipientName}
                recipientImage={item.recipientImage}
                roastrName={item.roastrName}
                date={item.date}
                roastrScore={item.roastrScore}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="card-header" id="headingThree">
            <h5 className="mb-0">
              <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Chat
              </button>
            </h5>
          </div>
          <div id="collapseThree" className="collapse show" aria-labelledby="headingThree" data-parent="#accordion">
            <div className="card-body">
              Chat
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Social;