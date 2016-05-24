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
  changeHandler: function(e) {
    this.setState({ tevaluext: e.target.value });
  },
  render: function () {
    return (
      <form onSubmit={this.handleSubmit} autoComplete="off">
        <input
          type="text"
          id="input"
          onChange={this.changeHandler}
          value={this.state.value}
          />
      </form>

    );
  }
});

module.exports = InputForm;
