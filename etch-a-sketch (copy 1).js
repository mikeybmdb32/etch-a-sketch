//ROCK/PAPER/SCISSORS GAME
//first to 5 successful rounds of play wins

let squaresPerSide = 4;



let squareArray = [];
let containerArray = [];


//create an array of container elements
for (i = 0; i < (squaresPerSide); i += 1) {
    containerArray[i] = document.createElement('div');
    containerArray[i].setAttribute('style', 'display: flex; jusifyContent: center; alignItems: center');
};

//create an array of square elements
for (i = 0; i < (squaresPerSide * squaresPerSide); i += 1) {
    squareArray[i] = document.createElement('div');
    squareArray[i].setAttribute('style', 'background: white; border: 4px solid gray; height: 100px; flex: 1 1 0%'); 
};




for (i = 0; i < squaresPerSide; i += 1) {    
    for (j = 0; j < squaresPerSide; j += 1) { 
        containerArray[i].appendChild(squareArray[i]);
    }
};


const mainDiv = document.getElementById("mainDiv");

mainDiv.appendChild(containerArray[0]);








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