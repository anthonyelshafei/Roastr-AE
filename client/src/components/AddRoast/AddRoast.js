import React from "react";

class AddRoast extends React.Component {   

//<form onSubmit={this.createRoast}>
  render() {
    return (
        <form>
            <div className="form-group">
              <select className="form-control" id="userSearch">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            
            <div className="form-group">
              <textarea className="form-control" id="userSearch" rows="3"></textarea>
            </div>

            <button type="button" className="btn col-12">Roast</button>
        </form>
    );
  }
}

export default AddRoast;