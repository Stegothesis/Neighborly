import React from 'react';

const Landing = (props) => {
  return <div>
    <form className="form-inline">
      <div className="form-group">
        <label htmlFor="exampleInputCity">Type in city: </label>
        <input type="city" className="form-control" />
      </div>
      <div>
        <button type="submit" className="btn btn-primary">Go!</button>
      </div>
    </form>
  </div>
}

module.exports = Landing;