import React from 'react';

class CompRoast extends React.Component {
    render() {
        return ( 
            
            <div className="card text-center">
                <div className="card-header">
                    Player 1 @ Player 2
                </div>
                
                <div className="card-body row">
                    
                    <div className="col">
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