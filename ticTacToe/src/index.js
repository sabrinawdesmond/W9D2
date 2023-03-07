const View = require("./ttt-view")// require appropriate file
const Game = require("../ttt_node/game.js")// require appropriate file
window.game = Game;

document.addEventListener("DOMContentLoaded", () => {
  // Your code here
  const figure = document.querySelector("figure.ttt") //arraylike object
  const game = new Game();
  const view = new View(game, figure)

});
