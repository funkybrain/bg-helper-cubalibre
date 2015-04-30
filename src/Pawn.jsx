var React = require("react");
var classNames = require("classnames");

var Pawn = React.createClass({

  displayName: "Pawn",

  getInitialState: function() {
    return {pawnState: this.props.state};
  },

  handleToggleStatusClick: function() {
    if (this.state.pawnState === "Active") {
      this.setState({pawnState: "Underground"});
    } else {
      this.setState({pawnState: "Active"});
    }
    console.log(this.state.pawnState);
  },

  render: function() {
    var type = this.props.type;
    var classString = classNames("pawn", {
      govt: type==="Govt",
      synd: type==="Synd",
      castro: type==="26J",
      dr: type==="DR"
    });

    return (
      <div className={classString} onClick={this.handleToggleStatusClick}>
        <PawnStatus pawn_state={this.state.pawnState} />
      </div>
      );
  }
});

var PawnStatus = React.createClass({

  displayName: "PawnStatus",

  render: function() {
    if (this.props.pawn_state === "Active") {
      return <em>*</em>;
    } else {
      return <em></em>;
    }
  }

});

module.exports = Pawn;
