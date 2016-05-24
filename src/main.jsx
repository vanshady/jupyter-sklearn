var React = require('react');
var ReactDOM = require('react-dom');
import Notebook from 'react-notebook';
var sample = require('../test.ipynb.json');

var App = React.createClass({
  renderNotebook: function(type) {
      return (
        <Notebook
          content={sample}
          ui={type}
        />
      );
  },
  renderInputForm: function() {
    return (
      <form>
        <label htmlFor="ipynb-file">
        File:
        <input type="file" name="ipynb-file" ref="ipynb-file" id="ipynb-file" />
        </label>
      </form>
    );
  },
  render: function() {
    return (
      <div>
        { this.renderInputForm() }
        <div className="container-left">
          { this.renderNotebook('jupyter') }
        </div>
        <div className="container-right">
          { this.renderNotebook('nteract') }
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
