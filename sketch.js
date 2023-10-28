let isTheGameOn = false;

let tilesMap = [];

let x;
let y;

function preload() {
  imgIntroBackground = loadImage('assets/introBackground.png');
  imgIntroTitle = loadImage('assets/introTitle.png');
  imgNewButton = loadImage('assets/newButton.png');
  imgLoadButton = loadImage('assets/loadButton.png');
  imgNewButton2 = loadImage('assets/newButton2.png');
  imgLoadButton2 = loadImage('assets/loadButton2.png');

  imgGameBackground = loadImage('assets/gameBackground.png');
  imgBackButton = loadImage('assets/backButton.png');

  imgGrass = loadImage('assets/grass.png');
  imgDirt = loadImage('assets/dirt.png');
  imgDirtDot = loadImage('assets/dirtDot.png');
  imgDirtMiddle = loadImage('assets/dirtMiddle.png');

  dirtTwoD[1] = loadImage('assets/dirtTwoD' + [1] + '.png');
  dirtTwoD[2] = loadImage('assets/dirtTwoD' + [2] + '.png');

  dirtDiagonal[1] = loadImage('assets/dirtDiagonal' + [1] + '.png');
  dirtDiagonal[2] = loadImage('assets/dirtDiagonal' + [2] + '.png');

  for (let i = 1; i < 5; i++) {
    dirtOneD[i] = loadImage('assets/dirtOneD' + [i] + '.png');
    dirtLD[i] = loadImage('assets/dirtLD' + [i] + '.png');
    dirtCorner[i] = loadImage('assets/dirtCorner' + [i] + '.png');
    dirtSide[i] = loadImage('assets/dirtSide' + [i] + '.png');
    dirtTD[i] = loadImage('assets/dirtTD' + [i] + '.png');
    dirtEntrance[i] = loadImage('assets/dirtEntrance' + [i] + '.png');
    dirtEdge[i] = loadImage('assets/dirtEdge' + [i] + '.png');
    dirtTwoExit[i] = loadImage('assets/dirtTwoExit' + [i] + '.png');
  }

  for (let i = 1; i < 9; i++) {
    dirtNewWay[i] = loadImage('assets/dirtNewWay' + [i] + '.png');
    islandExit[i] = loadImage('assets/islandExit' + [i] + '.png');
  }
}

function setup() {
  createCanvas(1280, 640);

  resetTiles();
}

function draw() {
  x = mouseX/64;
  y = mouseY/64;

  if (isTheGameOn) gameScreen();

  else introScreen();

  drawGrid();
}

function drawGrid() {
  for (let i = 0; i < 20; i++)
    for (let j = 0; j < 10; j++) {
      stroke(0, 20);
      line(i * 64, 0, i * 64, height);
      line(0, j * 64, width, j * 64);
    }
}

function mousePressed() {
  if (isTheGameOn) {
    if (mouseX > 16 && mouseX < 126 && mouseY > 16 && mouseY < 66) {
      isTheGameOn = false;
    }

    for (let i = 0; i < 20; i++)
    for (let j = 0; j < 10; j++) {
      if (floor(x) == i && floor(y) == j && tilesMap[j][i] == 0)
      tilesMap[j][i] = 1;
    }
  }
  
  else {
    if (mouseX > 476 && mouseX < 624 && mouseY > 433 && mouseY < 549) {
      resetTiles();
      isTheGameOn = true;
    }

    if (mouseX > 656 && mouseX < 804 && mouseY > 433 && mouseY < 549) {
      isTheGameOn = true;
    }
  }
}

function resetTiles() {
  tilesMap = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  ];
}