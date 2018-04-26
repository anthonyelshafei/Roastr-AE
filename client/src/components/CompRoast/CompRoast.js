import React from 'react';
import Userimage from "../Userimage";


class CompRoast extends React.Component {
    render() {
        return ( 
            
            <div className="card text-center">
                <div className="card-header row text-center">
                
                    <div className="col-3"/>
                    
                    <div className="col-1">
                        <Userimage />
                    </div>
                    
                    <div className="col-4 my-auto">
                        Player 1 @ Player 2
                    </div>
                    
                    <div className="col-1">
                        <Userimage />
                    </div>

                    <div className="col-3"/>

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