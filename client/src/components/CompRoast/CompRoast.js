import React from 'react';
import Userimage from "../Userimage";

const style = {
    height: 60,
    width: 60,
  };

class CompRoast extends React.Component {
    render() {
        return ( 
            
            <div className="card text-center">
                <div className="card-header row text-center justify-content-between">
                    
                    <div style={style} className="d-flex ">
                        <Userimage />
                    </div>
                    
                    <div className="d-flex my-auto">
                        Player 1 @ Player 2
                    </div>
                    
                    <div style={style} className="d-flex">
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