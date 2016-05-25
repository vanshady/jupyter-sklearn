var React = require('react');

var InputForm = React.createClass({
  getInitialState: function () {
    return { value: '' };
  },
  handleSubmit: function (e) {
    e.preventDefault();
    if (this.state.value) {
      var data = {
        value: this.state.value,
      };
      this.props.onDataSubmit(data);
    }
  },
  handleChange: function (e) {
    this.setState({ value: e.target.value });
  },
  render: function () {
    return (
      <form className="form-horizontal" onSubmit={this.handleSubmit}>
        <div className="form-group" style={{marginBottom:"0"}}>
          <div className="col-sm-offset-2 col-sm-8">
            <textarea
              className="form-control"
              rows="10"
              placeholder="Enter your training set here"
              value={this.state.value}
              onChange={this.handleChange}
              />
            <button style={{ width: "100%" }}  type="submit" className=" btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    );
  }
});

module.exports = InputForm;
