var Pawn = React.createClass ({

  getInitialState: function () {
    return { pawnState: this.props.state };
  },

  
  handleToggleStatusClick: function() {
    if (this.state.pawnState == "Active") {
      this.setState({pawnState: "Underground"});
    } else {
      this.setState({pawnState: "Active"});
    };
    console.log(this.state.pawnState);
  },

  render: function () {
    var type = this.props.type;
    var classString ='pawn';

    switch (type) {
      case "Govt":
        classString += ' govt'
      break;
      case "Synd":
        classString += ' synd'
      break;
      case "DR":
        classString += ' dr'
      break;
      case "26J":
        classString += ' castro'
      break;
      default:
        classString += ' null'
      break;
    };

    return (
      <div className={classString} onClick={this.handleToggleStatusClick}>
        <PawnStatus pawn_state={this.state.pawnState} />
      </div>
      );
  }	
});

var PawnStatus = React.createClass ({
  
  render: function() {
    if (this.props.pawn_state == "Active") {
        return ( <em>*</em> )
      } else {
        return ( <em></em> )
      };
  }

});
