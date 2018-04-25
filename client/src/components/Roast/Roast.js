import React from "react";

class Roast extends React.Component {
  
  static propTypes = {
    details: PropTypes.shape({
      recipient: PropTypes.string,
      roast: PropTypes.string,
      reply: PropTypes.string,
      roastScore: PropTypes.number,
      replyScore: PropTypes.number
    })
  }

  render() {
    
    const {roastr, recipient, roast, reply, roastScore, replyScore} = this.props.details;

    return (
      <div className="completed-roast">
        <h1>{recipient}</h1>
        <h2>{roast}</h2>
        <h2>{reply}</h2>
        <p>{roastScore}</p>
        <button>Vote</button>
        <p>{replyScore}</p>
        <button>Vote</button>
      </div>
    );
  }
}

export default Roast;
