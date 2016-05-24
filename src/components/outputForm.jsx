var React = require('react');

var OutputForm = React.createClass({
  getInitialState: function () {
    return { value: 'Hello!' };
  },
  
  componentDidMount: function() {
    socket.on('change:output', this._changeOutput);
  },
  
  _changeOutput(message) {
    this.setState({ value: message });
  },
  
  render: function () {
    return (
      <input
        id="output"
        type="text"
        value={this.state.value}
        onChange={this._changeOutput}
      />
    );
  }
});

module.exports = OutputForm;
