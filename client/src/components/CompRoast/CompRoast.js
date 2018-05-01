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
                    
                    <div className="col">
                        {this.props.reply}
                    </div>
                </div>
                
<<<<<<< HEAD
                <div className="card-footer text-muted p-3">
                    <button className="btn col-6 border-right border-dark">Roasted</button>
                    <button className="btn col-6 border-left border-dark">Roasted</button>
                    <p> Vote on who got roasted</p>
=======
                <div className="card-footer text-muted">
                    <button className="btn col-5 mr-3">{this.props.roastrName}</button>
                    <button className="btn col-5 ml-3">{this.props.recipientName}</button>
                    <span> Vote on who got roasted</span>
>>>>>>> d5cdd37ac7668435292297e4cafcdbd0eb27fa78
                </div>
            </div>
            
        )
    }
}

export default CompRoast;
