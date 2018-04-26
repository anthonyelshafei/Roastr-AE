import React from "react";
import AddRoast from "../AddRoast";
import Pending from "../Pending";

class Social extends React.Component {
  render() {
    return (
    <div>
      <h2>Social</h2>
      <div id="accordion">
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
              inbox
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
              <Pending />
              <Pending />
              <Pending />
              <Pending />
              <Pending />
              <Pending />
              <Pending />
              <Pending />
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
              chat
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Social;