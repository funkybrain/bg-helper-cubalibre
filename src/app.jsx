var Game = require("./Game.jsx");
var React = require("react");
require("normalize.css/normalize.css");
require("./cuba.css");


window.document.addEventListener("DOMContentLoaded", function() {
  React.render(<Game/>, document.getElementById("game"));
});
