import React from 'react';
import Userimage from "../Userimage";

const imgStyle = {
    height: 50,
    width: 50,
  };

class CompRoast extends React.Component {
    render() {
        return ( 
            
            <div className="card text-center">
                <div className="card-header row text-center justify-content-between">
                    
                    <div style={imgStyle} className="d-flex ml-auto mr-3">
                        <Userimage />
                    </div>
                    
                    <div className="d-flex my-auto">
                        Player 1 @ Player 2
                    </div>
                    
                    <div style={imgStyle} className="d-flex mr-auto ml-3">
                        <Userimage />
                    </div>

                </div>
                
                <div className="card-body row">
                    
                    <div className="col border-right">
                        Offense
                    </div>
                    
                    <div className="col">
                        Defense
                    </div>
                </div>
                
                <div className="card-footer text-muted">
                    Voting system
                </div>
            </div>
            
        )
    }
}

export default CompRoast;