import React from 'react';

class CompRoast extends React.Component {
    render() {
        return ( 
            
            <div class="card text-center">
                <div class="card-header">
                    Player 1 @ Player 2
                </div>
                
                <div class="card-body row">
                    
                    <div className="col">
                        Offense
                    </div>
                    
                    <div className="col">
                        Defense
                    </div>
                </div>
                
                <div class="card-footer text-muted">
                    Voting system
                </div>
            </div>
            
        )
    }
}

export default CompRoast;