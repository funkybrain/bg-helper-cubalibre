

var control = ["Uncontrolled", "Govt", "26J", "DR", "Synd"];
var support = ["Active Support", "Passive Support", "Neutral", "Passive Opposition", "Active opposition"];

var Province = React.createClass ({

  getInitialState: function() {
    return {control: this.props.data.control, support: this.props.data.support};
  },

  handleControlClick: function() {
    var controlIndex = control.indexOf(this.state.control);
    this.setState({control: control[(controlIndex + 1) % 5]});
  },  

  handleSupportClick: function() {
    var supportIndex = support.indexOf(this.state.support);
    this.setState({support: support[(supportIndex + 1) % 5]});
  },  

  render: function() {
    var classPopulationString = '';

    if (this.props.data.type=="City") {
      classPopulationString = 'population-city';
    } else {
      classPopulationString = 'population';
    };

    return (
      <div className="Province" id={this.props.id}>
        <h2 className="province-name">{this.props.data.name}</h2>
        <div className={classPopulationString}>{this.props.data.population}</div>
        <button className="btn-control" onClick={this.handleControlClick}>{this.state.control}</button>
        <button className="btn-support" onClick={this.handleSupportClick}>{this.state.support}</button>
        <PawnBox player="Govt" />
        <PawnBox player="Synd" />
        <PawnBox player="DR" />
        <PawnBox player="26J" />

      </div>
    );
  }
});
