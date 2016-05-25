var React = require('react');

var InputForm = React.createClass({
  getInitialState: function () {
    return { value: 'Hello!' };
  },
  handleSubmit: function(e) {
    e.preventDefault();
    if (this.state.value) {
      var data = {
        value: this.state.value,
      };
      this.props.onDataSubmit(data);
    }
  },
  handleChange: function(e) {
    this.setState({ value: e.target.value });
  },
  render: function () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />  
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    );
  }
});

module.exports = InputForm;
