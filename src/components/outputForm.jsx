var React = require('react');

var OutputForm = React.createClass({
  render: function () {
    return (
      <input
        id="output"
        type="text"
        defaultValue={this.props.training_set.value}
      />
    );
  }
});

module.exports = OutputForm;
