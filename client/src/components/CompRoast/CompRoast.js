import React from 'react';
import Userimage from "../Userimage";
import API from "../../utils/API";

const imgStyle = {
    height: 50,
    width: 50,
  };

class CompRoast extends React.Component {

    state= {
      roastrScore: 0,
      recipientScore: 0
    }

    componentDidMount() {
        API.getRoast(this.props.id).then(res => {
            this.setState({roastrScore: res.data.roastrScore, recipientScore: res.data.recipientScore})
        })
    }

    roastRoastr = () => {
        
    }

    render() {
        return ( 
            
            <div className="card text-center mb-3">
                <div className="card-header row text-center justify-content-between">
                    
                    <div style={imgStyle} className="d-flex ml-auto mr-3">
                        <Userimage
                        image={this.props.roastrImage}
                         />
                    </div>
                    
                    <div className="d-flex my-auto">
                        {this.props.roastrName} | {this.props.recipientName}
                    </div>
                    
                    <div style={imgStyle} className="d-flex mr-auto ml-3">
                        <Userimage
                        image={this.props.recipientImage}
                         />
                    </div>

                </div>
                
                <div className="card-body row">
                    
                    <div className="col border-right">
                        {this.props.roast}
                    </div>
                    
                    <div className="col border-left">
                        {this.props.reply}
                    </div>
                </div>
                

                <div className="text-muted">
                    <button className="btn col-5 border-right border-dark mx-2">{this.props.roastrName}</button>
                    <button className="btn col-5 border-left border-dark mx-2">{this.props.recipientName}</button>
                    <p> Vote on who got roasted</p>
                </div>
            </div>
            
        )
    }
}

export default CompRoast;
