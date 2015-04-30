var React = require("react");
var Pawn = require("./Pawn.jsx");
var Province = require("./Province.jsx");
var AvailableForces = require("./AvailableForces.jsx");
var mapProps = require("./GameState.json");

var govForces = [];
var synForces = [];
var dirForces = [];
var castForces = [];

var Game = React.createClass({

  displayName: "Game",

  getInitialState: function() {
    return {data: []};
  },

  componentWillMount: function() {
    this.seedForces("Govt");
    this.seedForces("Synd");
    this.seedForces("DR");
    this.seedForces("26J");
  },

  seedForces: function(player) {
    var count = 0;
    var newPawn;
    switch (player) {
      case "Govt":
        count = 10;
        newPawn = <Pawn type="Govt" state="Underground" />;
        for (let i = 0; i <= count; i++) {
          govForces.push(newPawn);
        }
      break;
      case "Synd":
        count = 8;
        newPawn = <Pawn type="Synd" state="Underground" />;
        for (let i = 0; i <= count; i++) {
          synForces.push(newPawn);
        }
      break;
      case "DR":
        count = 4;
        newPawn = <Pawn type="DR" state="Underground" />;
        for (let i = 0; i <= count; i++) {
          dirForces.push(newPawn);
        }
      break;
      case "26J":
        count = 14;
        newPawn = <Pawn type="26J" state="Underground" />;
        for (let i = 0; i <= count; i++) {
          castForces.push(newPawn);
        }
      break;
      default:
        count = 0;
        newPawn = "";
      break;
    }
  },

  render: function() {
    return (
      <div className="game-map">
        <AvailableForces id="govt-forces" name="Government Forces" seed={govForces} />
        <AvailableForces id="synd-forces" name="Syndicate Forces" seed={synForces} />
        <AvailableForces id="dr-forces" name="Directorio Forces" seed={dirForces} />
        <AvailableForces id="castro-forces" name="26 July Forces" seed={castForces} />

        <Province id="pinar" data={mapProps[0]} />
        <Province id="la-habana" data={mapProps[1]} />
        <Province id="havana" data={mapProps[2]} />
        <Province id="matanzas" data={mapProps[3]} />
        <Province id="las-villas" data={mapProps[4]} />
        <Province id="camaguey" data={mapProps[5]} />
        <Province id="camaguey-city" data={mapProps[6]} />
        <Province id="oriente" data={mapProps[7]} />
        <Province id="sierra-maestra" data={mapProps[8]} />
        <Province id="santiago" data={mapProps[9]} />
      </div>
      );
  }


});

module.exports = Game;
