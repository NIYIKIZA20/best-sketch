let color = "grey";

let board = document.querySelector(".board");
let cell = document.querySelector("cell");
let newCells = document.querySelectorAll("div");

let button = document.getElementById("button");

button.addEventListener("click", getNum);
function getColor() {
  this.style.backgroundColor = color;
}
let cellNum = 0;
function getNum() {
  let numb = parseInt(prompt("how many rows"), 10);
  if (numb > 0 && numb < 100) {
    cellNum = numb;
    button.textContent = "click to resize";
  } else {
    cellNum = 0;
    button.textContent = " wrong number, click to retry";
  }
  board.style.gridTemplateColumns = `repeat(${cellNum},auto)`;
  for (i = 0; i < cellNum; i++) {
    for (j = 0; j < cellNum; j++) {
      newCells = document.createElement("div");
      newCells.addEventListener("mouseover", getColor);
      newCells.textContent = " ";

      board.appendChild(newCells).className = "cell";
    }
  }
}

function changeColor(choice) {
  color = choice;
}

function reset() {
  let newCells = board.querySelectorAll("div");
  newCells.forEach((div) => div.remove());
}
