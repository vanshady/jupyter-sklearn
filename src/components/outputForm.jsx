var React = require('react');

var OutputForm = React.createClass({
  render: function () {
    return (
      <form className="form-horizontal">
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-8">
            <textarea
              className="form-control"
              rows="10"
              placeholder="Output"
              value={this.props.output}
            />  
          </div>
        </div>
      </form>
    );
  }
});

module.exports = OutputForm;
