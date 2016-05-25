var React = require('react');

var InputForm = React.createClass({
  getInitialState: function () {
    return { x: '', y: '' };
  },
  handleSubmit: function (e) {
    e.preventDefault();
    if (this.state.x && this.state.y) {
      var data = {
        x: this.state.x,
        y: this.state.y,
      };
      this.props.onDataSubmit(data);
    }
  },
  handleXChange: function (e) {
    this.setState({ x: e.target.value });
  },
  handleYChange: function (e) {
    this.setState({ y: e.target.value });
  },
  render: function () {
    return (
      <form className="form-inline col-sm-offset-2 col-sm-8" style={{ paddingLeft: "5px", paddingRight: "5px" }} onSubmit={this.handleSubmit}>
        <div className="form-group" style={{ marginBottom: "0", width: "50%" }}>
          <div style={{ width: "100%" }}>
            <label className="sr-only" htmlFor="Xform">X form</label>
            <textarea
              style={{ width: "100%" }}
              className="form-control"
              id="Xform"
              rows="10"
              placeholder="Enter your X here"
              value={this.state.x}
              onChange={this.handleXChange}
              />
          </div>
        </div>
        <div className="form-group" style={{ marginBottom: "0", width: "50%" }}>
          <div style={{}}>
            <label className="sr-only" htmlFor="Yform">Y form</label>
            <textarea
              style={{ width: "100%" }}
              className="form-control"
              id="Yform"
              rows="10"
              placeholder="Enter your Y here"
              value={this.state.y}
              onChange={this.handleYChange}
              />
          </div>
        </div>

        <button style={{ width: "100%" }}  type="submit" className=" btn btn-primary">Submit</button>

      </form>
    );
  }
});

module.exports = InputForm;
