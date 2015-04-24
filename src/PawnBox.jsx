

var PawnBox = React.createClass({

  getInitialState: function() {
      return { pawnlist: [] };
  },

  handleAddPawnClick: function(e) {
    // TODO: check that player pawn has not reacxhed max limit
    var newPawn = [<Pawn type={this.props.player} state="Underground" />];
    this.setState({ pawnlist: this.state.pawnlist.concat(newPawn)})
  },  

  handleRemovePawnClick: function(e) {
    if (this.state.pawnlist.length > 0) {
      var arr = this.state.pawnlist;
      arr.pop();
      this.setState({ pawnlist: arr});
    };
  },

  render: function() {
    return (
      <div className="pawn-box" id={this.props.player}>
        <em>{this.props.player}</em>
        <button className="btn-add-pawn" onClick={this.handleAddPawnClick}>+</button>
        <button className="btn-remove-pawn" onClick={this.handleRemovePawnClick}>-</button>
        {
          this.state.pawnlist.map(function (pawn, i) {
            return pawn;
          })
         }
      </div>
    );
  }
});

