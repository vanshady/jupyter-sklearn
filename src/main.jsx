var React = require('react');
var ReactDOM = require('react-dom');
var InputForm = require('./components/inputForm.jsx');
var OutputForm = require('./components/outputForm.jsx');
const socket = io.connect();

var App = React.createClass({
  getInitialState: function () {
    return { training_set: [], output: "" }
  },
  componentDidMount: function() {
    socket.on('send:output', this._dataReceive);
  },
  handleDataSubmit: function(data) {
    socket.emit('send:data', data);
  },
  _dataReceive: function(data) {
    this.setState({ output: data.value });
    console.log(this.state.output);
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
