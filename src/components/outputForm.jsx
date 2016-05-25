var React = require('react');

var OutputForm = React.createClass({
  render: function () {
    return (
      <div>
        {this.props.output}
      </div>
    );
  }
});

module.exports = OutputForm;
