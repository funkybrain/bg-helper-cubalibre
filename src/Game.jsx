var mapProps = [
  {"name": "Pinar del Rio", "type": "Province", "terrain": "Province", "population": 1,
   "control": "Synd", "support": "Active Support"},
  {"name": "La Habana", "type": "Province", "terrain": "Grassland", "population": 1,
   "control": "Uncontrolled", "support": "Passive Support"},
  {"name": "Havana", "type": "City", "terrain": "City", "population": 6,
   "control": "Govt", "support": "Active Support"},
  {"name": "Matanzas", "type": "Province", "terrain": "Grassland", "population": 1,
   "control": "Uncontrolled", "support": "Passive Opposition"},
  {"name": "Las Villas", "type": "Province", "terrain": "Mountain", "population": 2,
   "control": "Govt", "support": "Neutral"},
  {"name": "Camaguey", "type": "Province", "terrain": "Forest", "population": 1,
   "control": "DR", "support": "Passive Opposition"},
  {"name": "Camaguey", "type": "City", "terrain": "City", "population": 1,
   "control": "Govt", "support": "Passive Support"},
  {"name": "Oriente", "type": "Province", "terrain": "Forest", "population": 2,
   "control": "Uncontrolled", "support": "Passive Opposition"},
  {"name": "Sierra Maestra", "type": "Province", "terrain": "Mountain", "population": 1,
   "control": "26J", "support": "Active Opposition"},
  {"name": "Santiago de Cuba", "type": "City", "terrain": "City", "population": 1,
   "control": "Govt", "support": "Neutral"}
];

  var govForces = [];
  var synForces = [];
  var dirForces = [];
  var castForces = [];

var Game = React.createClass({


  getInitialState: function () {
    return {data: []};
  },

  componentWillMount: function() {
    this.seedForces("Govt");
    this.seedForces("Synd");
    this.seedForces("DR");
    this.seedForces("26J");
  },

  seedForces: function(player) {
    var count=0;
    var newPawn;
    switch (player) {
      case "Govt":
        count = 10;
        newPawn = <Pawn type="Govt" state="Underground" />;
        for (var i = 0; i <= count; i++) {
          govForces.push(newPawn);
        };
      break;
      case "Synd":
        count = 8;
        newPawn = <Pawn type="Synd" state="Underground" />;
        for (var i = 0; i <= count; i++) {
          synForces.push(newPawn);
        };
      break;
      case "DR":
        count = 4;
        newPawn = <Pawn type="DR" state="Underground" />;
        for (var i = 0; i <= count; i++) {
         dirForces.push(newPawn);
        };
      break;
      case "26J":
        count = 14;
        newPawn = <Pawn type="26J" state="Underground" />;
        for (var i = 0; i <= count; i++) {
         castForces.push(newPawn);
        };
      break;
      default:
        count = 0;
        newPawn = '';
      break;
    };
  },

  render: function () {
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


React.render(
  <Game />,
   document.getElementById('game')
);