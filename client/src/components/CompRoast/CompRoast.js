import React from 'react';
import Userimage from "../Userimage";

const imgStyle = {
    height: 50,
    width: 50,
  };

class CompRoast extends React.Component {
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
                
                <div className="card-footer text-muted">
                    <button className="btn col-5 mr-3">Vote/Roast (user a name)</button>
                    <button className="btn col-5 ml-3">Vote/Roast (user b name)</button>
                </div>
            </div>
            
        )
    }
}

export default CompRoast;