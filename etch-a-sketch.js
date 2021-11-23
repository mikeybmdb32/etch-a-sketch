//ROCK/PAPER/SCISSORS GAME
//first to 5 successful rounds of play wins

let squaresPerSide = 4;
let squareArray = [];
let containerArray = [];
let mainDiv = document.getElementById("mainDiv");

console.log(mainDiv)


buildGrid();

let squareElements = document.querySelectorAll(".square");
squareElements.forEach((square) => 
    square.addEventListener('mouseover', (e) => {
        square.style.backgroundColor = 'black';
}));
    
let resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', (e) => {
    getGridSize();
});

function buildGrid() {
//create an array of container elements
    for (i = 0; i < (squaresPerSide); i += 1) {
        containerArray[i] = document.createElement('div');
        containerArray[i].setAttribute('style', 'display: flex; jusifyContent: center; alignItems: center');
    };
    //create an array of square elements
    for (i = 0; i < (squaresPerSide * squaresPerSide); i += 1) {
        squareArray[i] = document.createElement('div');
        squareArray[i].setAttribute('style', 'background: white; border: 1px solid gray; height: 40px; flex: 1 1 0%'); 
        squareArray[i].setAttribute('class', 'square'); 
    };
    //append square elements to container elements
    squareIndex = 0;
    for (i = 0; i < squaresPerSide; i += 1) { 
        for(j = 0; j < squaresPerSide; j +=1) {
        containerArray[i].appendChild(squareArray[squareIndex]);
        squareIndex += 1;
        }
    };
    //place container elements, with appended square elements, in HTML body
    for (i = 0; i < (squaresPerSide); i += 1) {
    mainDiv.appendChild(containerArray[i]);
    }
}

function getGridSize() {
    deleteGrid();
    squaresPerSide = window.prompt("Please Enter Number of Squares per Side");
    buildGrid();
}

function deleteGrid() {
    for (i = 0; i < (squaresPerSide); i += 1) {
        mainDiv.removeChild(containerArray[i]);
    }
    squareArray = [];
    containerArray = [];
}











/*
create a 16x16 grid of div elements

create grid
-for each row:
 -create container div
 -create square div until # of squares per side is reached
when mouse hovers over div elements
-change div element color to black

reset button resets all div colors and prompt user for # of squares per side in next grid


*/

/*this is what the 16x16 should look like
<div>
<div class = container>
  <div class = square></div>
  <div class = square></div>
  <div class = square></div>
  <div class = square></div>
</div>
<div>
<div class = container>
  <div class = square></div>
  <div class = square></div>
  <div class = square></div>
  <div class = square></div>
</div>
<div>
<div class = container>
  <div class = square></div>
  <div class = square></div>
  <div class = square></div>
  <div class = square></div>
</div>
<div>
<div class = container>
  <div class = square></div>
  <div class = square></div>
  <div class = square></div>
  <div class = square></div>
</div>
*/