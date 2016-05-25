var React = require('react');
var ReactDOM = require('react-dom');
var InputForm = require('./components/inputForm.jsx');
var OutputForm = require('./components/outputForm.jsx');
const socket = io.connect();

var App = React.createClass({
  getInitialState: function () {
    return { output: "" }
  },
  componentDidMount: function() {
    socket.on('send:output', this._dataReceive);
  },
  handleDataSubmit: function(data) {
    socket.emit('send:data', data);
  },
  _dataReceive: function(data) {
    if (data.value)
      this.setState({ output: this.state.output + "\n" + data.value });
  },
  render: function () {
    return (
      <div>
        <InputForm onDataSubmit={this.handleDataSubmit} />
        <OutputForm output={this.state.output} />
      </div>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('app'));
