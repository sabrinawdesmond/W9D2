class View {
  constructor(game, el) {
    this.game = game;
    this.el = el; //Node/Element
    this.setupBoard();
  }

  setupBoard() {
    debugger;
    const ul = document.createElement("ul");
    for(let x = 0; x < 3; x++) {
      for(let y = 0; y < 3; y++) {
        const li = document.createElement("li");
        li.dataset.pos = JSON.stringify([x,y]);
        ul.append(li);
      }
    }
    (this.el).append(ul);
  }
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;
