import React from "react";

class AddRoast extends React.Component {   

//<form onSubmit={this.createRoast}>
  render() {
    return (
        <form>
            <div className="form-group">
              <label for="exampleFormControlSelect1">Example select</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <br/>
            <div className="form-group">
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <br/>
            <button type="button" class="btn">Roast</button>
        </form>
    );
  }
}

export default AddRoast;