let imgGrass, imgDirt, imgDirtDot, imgDirtMiddle;

let dirtOneD = [];
let dirtTwoD = [];
let dirtLD = [];
let dirtCorner = [];
let dirtSide = [];
let dirtTD = [];
let dirtEntrance = [];
let dirtDiagonal = [];
let dirtEdge = [];

let x;
let y;

function preload() {
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
  }
}

function setup() {
  createCanvas(640, 512);

  background(255);

  tilesMap = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
}

function draw() {
  x = mouseX/64;
  y = mouseY/64;

  drawMap();
  drawGrid();

  console.log(x, y);
}

function drawGrid() {
  for (let i = 0; i < 10; i++)
    for (let j = 0; j < 8; j++) {
      stroke(0, 20);
      line(i * 64, 0, i * 64, height);
      line(0, j * 64, width, j * 64);
    }
}

function mousePressed() {
  for (let i = 0; i < 10; i++)
    for (let j = 0; j < 8; j++) {
      if (floor(x) == i && floor(y) == j)
      tilesMap[j][i] = 1;
    }
}