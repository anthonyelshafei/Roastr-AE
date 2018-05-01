import React from "react";
import axios from "axios";
import Feed from "../../components/Feed";
import Nav from "../../components/Nav";
import User from "../../components/User";
import Social from "../../components/Social";
import { Route } from "react-router-dom";
import Worst from "../../components/Worst";
import Best from "../../components/Best";
import API from "../../utils/API";



class Main extends React.Component {

  state = {
    center: "feed",
    userInfo: {},
    pendings: []
  }

  updatePendings = () => {
    API.getPendings(this.state.userInfo.username).then(res => {
      this.setState({pendings: res.data})
    })
  }

  componentDidMount(){

    axios.get("/api/sessioninfo").then(res => {
          this.setState({userInfo: res.data})
          if(res.data === ""){
            window.location.href = '/'
          }
          this.updatePendings()
      })

      
};

  render() {
    return (
      <div>

        <Nav />
        <div className="row px-3 pb-3">
        
          <div className="col-10 col-xs-8 col-sm-8 offset-sm-2 col-md-4 col-lg-3 col-xl-3 mx-auto">
            <User />
          </div>

          <div className="col-sm-12 col-md-8 col-lg-5 col-xl-6">
            <Route exact path={`${this.props.match.url}`} render={() => <Feed updatePendings={this.updatePendings} userInfo={this.state.userInfo}/>} />   
            {/* <Route exact path={`${this.props.match.url}/Worst`} component={Worst}/>
            <Route exact path={`${this.props.match.url}/Best`} component={Best}/> */}
            <Route exact path={`${this.props.match.url}/Worst`} render={() => <Worst updatePendings={this.updatePendings} userInfo={this.state.userInfo}/>} /> 
            <Route exact path={`${this.props.match.url}/Best`} render={() => <Best updatePendings={this.updatePendings} userInfo={this.state.userInfo}/>} /> 
          </div>

          <div className="col-sm-12 col-md-12 col-lg-4 offset-lg-0 col-xl-3">
            <Social
            pendings={this.state.pendings}
             />
          </div>

        </div>
        
      </div>
    )
  }
}

export default Main;
