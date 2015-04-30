var React = require("react");

var AvailableForces = React.createClass({

  displayName: "AvailableForces",

  getInitialState: function() {
    return {data: []};
  },

  render: function() {
    return (
      <div className="availableForces" id={this.props.id} >
        <p className="available-force-title">{this.props.name}</p>
          {
            this.props.seed.map(function(pawn) {
              return pawn;
            })
          }
      </div>
      );
  }
});

module.exports = AvailableForces;
