//etch-a-sketch
//builds an nXn grid of squares that change color when mouse hovers over them
//user can build and specify size of new grid by pressing the REFRESH button

let squaresPerSide = 4;
let squareArray = [];
let containerArray = [];
let mainDiv = document.getElementById("mainDiv");
let refreshButton = document.getElementById('refreshButton');
refreshButton.addEventListener('click', (e) => {
    refreshGrid();
});

buildGrid();
listenForSquareClicks();

function listenForSquareClicks() {
let squareElements = document.querySelectorAll(".square");
squareElements.forEach((square) => 
    square.addEventListener('mouseover', (e) => {
        square.style.backgroundColor = 'black';
}));
}

function buildGrid() {
    //create an array of container elements, which will contain rows of squares
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

function refreshGrid() {
    deleteGrid();
    squaresPerSide = window.prompt("Please Enter Number of Squares per Side");
    buildGrid();
    listenForSquareClicks();
}

function deleteGrid() {
    for (i = 0; i < (squaresPerSide); i += 1) {
        mainDiv.removeChild(containerArray[i]);
    }

}




