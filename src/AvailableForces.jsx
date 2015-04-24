
var AvailableForces = React.createClass ({


  getInitialState: function() {
    return { data: [] };
  },

  render: function () {
    return (
      <div className="availableForces" id={this.props.id} >
        <p className="available-force-title">{this.props.name}</p>
          {
            this.props.seed.map(function(pawn, i) {
              return pawn;
             })
          }
      </div>
      );
  }	
});

