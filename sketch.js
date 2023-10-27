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
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 0, 0, 1, 0, 0],
    [1, 1, 0, 0, 1, 0, 0, 0, 0, 0],
    [1, 0, 1, 1, 1, 1, 1, 1, 0, 0],
    [1, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 1, 1, 0, 0, 0, 1, 0, 0, 0],
  ];

  drawMap();
  //drawGrid();
}

function drawMap() {

  let hasDirtOnTop;
  let hasDirtOnBottom;
  let hasDirtOnLeft;
  let hasDirtOnRight;

  let hasDirtOnDiagonalTL;
  let hasDirtOnDiagonalTR;
  let hasDirtOnDiagonalDL;
  let hasDirtOnDiagonalDR;

  const hasDirtOnDiagonals =
    hasDirtOnDiagonalTL ||
    hasDirtOnDiagonalTR ||
    hasDirtOnDiagonalDL ||
    hasDirtOnDiagonalDR;


  for (let i = 0; i < 10; i++)
    for (let j = 0; j < 8; j++) {

      if (j > 0) hasDirtOnTop = tilesMap[j - 1][i] == 1;
      if (j < 7) hasDirtOnBottom = tilesMap[j + 1][i] == 1;
      if (i > 0) hasDirtOnLeft = tilesMap[j][i - 1] == 1;
      if (i < 9) hasDirtOnRight = tilesMap[j][i + 1] == 1;

      if (j > 0 && i > 0)
        hasDirtOnDiagonalTL = tilesMap[j - 1][i - 1] == 1;
      if (j > 0 && i < 9)
        hasDirtOnDiagonalTR = tilesMap[j - 1][i + 1] == 1;
      if (j < 7 && i > 0)
        hasDirtOnDiagonalDL = tilesMap[j + 1][i - 1] == 1;
      if (j < 7 && i < 9)
        hasDirtOnDiagonalDR = tilesMap[j + 1][i + 1] == 1;

      if (tilesMap[j][i] == 1) {
        if (!hasDirtOnDiagonals) {
          if (
            !hasDirtOnTop &&
            !hasDirtOnBottom &&
            !hasDirtOnLeft &&
            !hasDirtOnRight
          ) image(imgDirtDot, i * 64, j * 64);

          if (
            !hasDirtOnTop &&
            hasDirtOnBottom &&
            !hasDirtOnLeft &&
            !hasDirtOnRight
          ) image(dirtOneD[1], i * 64, j * 64);

          if (
            hasDirtOnTop &&
            !hasDirtOnBottom &&
            !hasDirtOnLeft &&
            !hasDirtOnRight
          ) image(dirtOneD[2], i * 64, j * 64);

          if (
            !hasDirtOnTop &&
            !hasDirtOnBottom &&
            hasDirtOnLeft &&
            !hasDirtOnRight
          ) image(dirtOneD[3], i * 64, j * 64);

          if (
            !hasDirtOnTop &&
            !hasDirtOnBottom &&
            !hasDirtOnLeft &&
            hasDirtOnRight
          ) image(dirtOneD[4], i * 64, j * 64);

          if (
            hasDirtOnTop &&
            hasDirtOnBottom &&
            !hasDirtOnLeft &&
            !hasDirtOnRight
          ) image(dirtTwoD[1], i * 64, j * 64);

          if (
            !hasDirtOnTop &&
            !hasDirtOnBottom &&
            hasDirtOnLeft &&
            hasDirtOnRight
          ) image(dirtTwoD[2], i * 64, j * 64);

          if (
            !hasDirtOnTop &&
            hasDirtOnBottom &&
            !hasDirtOnLeft &&
            hasDirtOnRight
          ) image(dirtLD[1], i * 64, j * 64);

          if (
            !hasDirtOnTop &&
            hasDirtOnBottom &&
            hasDirtOnLeft &&
            !hasDirtOnRight
          ) image(dirtLD[2], i * 64, j * 64);

          if (
            hasDirtOnTop &&
            !hasDirtOnBottom &&
            !hasDirtOnLeft &&
            hasDirtOnRight
          ) image(dirtLD[3], i * 64, j * 64);

          if (
            hasDirtOnTop &&
            !hasDirtOnBottom &&
            hasDirtOnLeft &&
            !hasDirtOnRight
          ) image(dirtLD[4], i * 64, j * 64);

          if (
            hasDirtOnTop &&
            hasDirtOnBottom &&
            hasDirtOnLeft &&
            hasDirtOnRight
          ) image(imgDirtMiddle, i * 64, j * 64);

          if (
            hasDirtOnTop &&
            !hasDirtOnBottom &&
            hasDirtOnLeft &&
            hasDirtOnRight
          ) image(dirtTD[1], i * 64, j * 64);

          if (
            !hasDirtOnTop &&
            hasDirtOnBottom &&
            hasDirtOnLeft &&
            hasDirtOnRight
          ) image(dirtTD[2], i * 64, j * 64);

          if (
            hasDirtOnTop &&
            hasDirtOnBottom &&
            !hasDirtOnLeft &&
            hasDirtOnRight
          ) image(dirtTD[3], i * 64, j * 64);

          if (
            hasDirtOnTop &&
            hasDirtOnBottom &&
            hasDirtOnLeft &&
            !hasDirtOnRight
          ) image(dirtTD[4], i * 64, j * 64);
        }
        else {
          if (
            hasDirtOnTop &&
            hasDirtOnBottom &&
            hasDirtOnLeft &&
            hasDirtOnRight &&
            hasDirtOnDiagonalTL &&
            hasDirtOnDiagonalTR &&
            hasDirtOnDiagonalDL &&
            hasDirtOnDiagonalDR
          ) image(imgDirt, i * 64, j * 64);
          
          if (
            !hasDirtOnTop &&
            hasDirtOnBottom &&
            !hasDirtOnLeft &&
            hasDirtOnRight &&
            !hasDirtOnDiagonalTL &&
            !hasDirtOnDiagonalTR &&
            !hasDirtOnDiagonalDL &&
            hasDirtOnDiagonalDR
          ) image(dirtCorner[1], i * 64, j * 64);

          if (
            !hasDirtOnTop &&
            hasDirtOnBottom &&
            hasDirtOnLeft &&
            !hasDirtOnRight &&
            !hasDirtOnDiagonalTL &&
            !hasDirtOnDiagonalTR &&
            hasDirtOnDiagonalDL &&
            !hasDirtOnDiagonalDR
          ) image(dirtCorner[2], i * 64, j * 64);

          if (
            hasDirtOnTop &&
            !hasDirtOnBottom &&
            !hasDirtOnLeft &&
            hasDirtOnRight &&
            !hasDirtOnDiagonalTL &&
            hasDirtOnDiagonalTR &&
            !hasDirtOnDiagonalDL &&
            !hasDirtOnDiagonalDR
          ) image(dirtCorner[3], i * 64, j * 64);

          if (
            hasDirtOnTop &&
            !hasDirtOnBottom &&
            hasDirtOnLeft &&
            !hasDirtOnRight &&
            hasDirtOnDiagonalTL &&
            !hasDirtOnDiagonalTR &&
            !hasDirtOnDiagonalDL &&
            !hasDirtOnDiagonalDR
          ) image(dirtCorner[4], i * 64, j * 64);

          if (
            hasDirtOnTop &&
            hasDirtOnBottom &&
            hasDirtOnLeft &&
            hasDirtOnRight &&
            !hasDirtOnDiagonalTL &&
            !hasDirtOnDiagonalTR &&
            hasDirtOnDiagonalDL &&
            hasDirtOnDiagonalDR
          ) image(dirtEntrance[1], i * 64, j * 64);

          if (
            hasDirtOnTop &&
            hasDirtOnBottom &&
            hasDirtOnLeft &&
            hasDirtOnRight &&
            hasDirtOnDiagonalTL &&
            hasDirtOnDiagonalTR &&
            !hasDirtOnDiagonalDL &&
            !hasDirtOnDiagonalDR
          ) image(dirtEntrance[2], i * 64, j * 64);

          if (
            hasDirtOnTop &&
            hasDirtOnBottom &&
            hasDirtOnLeft &&
            hasDirtOnRight &&
            hasDirtOnDiagonalTL &&
            !hasDirtOnDiagonalTR &&
            hasDirtOnDiagonalDL &&
            !hasDirtOnDiagonalDR
          ) image(dirtEntrance[3], i * 64, j * 64);

          if (
            hasDirtOnTop &&
            hasDirtOnBottom &&
            hasDirtOnLeft &&
            hasDirtOnRight &&
            !hasDirtOnDiagonalTL &&
            hasDirtOnDiagonalTR &&
            !hasDirtOnDiagonalDL &&
            hasDirtOnDiagonalDR
          ) image(dirtEntrance[4], i * 64, j * 64);

          if (
            !hasDirtOnTop &&
            hasDirtOnBottom &&
            hasDirtOnLeft &&
            hasDirtOnRight &&
            !hasDirtOnDiagonalTL &&
            !hasDirtOnDiagonalTR &&
            hasDirtOnDiagonalDL &&
            hasDirtOnDiagonalDR
          ) image(dirtSide[1], i * 64, j * 64);

          if (
            hasDirtOnTop &&
            !hasDirtOnBottom &&
            hasDirtOnLeft &&
            hasDirtOnRight &&
            hasDirtOnDiagonalTL &&
            hasDirtOnDiagonalTR &&
            !hasDirtOnDiagonalDL &&
            !hasDirtOnDiagonalDR
          ) image(dirtSide[2], i * 64, j * 64);

          if (
            hasDirtOnTop &&
            hasDirtOnBottom &&
            hasDirtOnLeft &&
            !hasDirtOnRight &&
            hasDirtOnDiagonalTL &&
            !hasDirtOnDiagonalTR &&
            hasDirtOnDiagonalDL &&
            !hasDirtOnDiagonalDR
          ) image(dirtSide[3], i * 64, j * 64);

          if (
            hasDirtOnTop &&
            hasDirtOnBottom &&
            !hasDirtOnLeft &&
            hasDirtOnRight &&
            !hasDirtOnDiagonalTL &&
            hasDirtOnDiagonalTR &&
            !hasDirtOnDiagonalDL &&
            hasDirtOnDiagonalDR
          ) image(dirtSide[4], i * 64, j * 64);

          if (
            hasDirtOnTop &&
            hasDirtOnBottom &&
            hasDirtOnLeft &&
            hasDirtOnRight &&
            !hasDirtOnDiagonalTL &&
            hasDirtOnDiagonalTR &&
            hasDirtOnDiagonalDL &&
            hasDirtOnDiagonalDR
          ) image(dirtEdge[1], i * 64, j * 64);

          if (
            hasDirtOnTop &&
            hasDirtOnBottom &&
            hasDirtOnLeft &&
            hasDirtOnRight &&
            hasDirtOnDiagonalTL &&
            !hasDirtOnDiagonalTR &&
            hasDirtOnDiagonalDL &&
            hasDirtOnDiagonalDR
          ) image(dirtEdge[2], i * 64, j * 64);

          if (
            hasDirtOnTop &&
            hasDirtOnBottom &&
            hasDirtOnLeft &&
            hasDirtOnRight &&
            hasDirtOnDiagonalTL &&
            hasDirtOnDiagonalTR &&
            !hasDirtOnDiagonalDL &&
            hasDirtOnDiagonalDR
          ) image(dirtEdge[3], i * 64, j * 64);

          if (
            hasDirtOnTop &&
            hasDirtOnBottom &&
            hasDirtOnLeft &&
            hasDirtOnRight &&
            hasDirtOnDiagonalTL &&
            hasDirtOnDiagonalTR &&
            hasDirtOnDiagonalDL &&
            !hasDirtOnDiagonalDR
          ) image(dirtEdge[4], i * 64, j * 64);

          if (
            hasDirtOnTop &&
            hasDirtOnBottom &&
            hasDirtOnLeft &&
            hasDirtOnRight &&
            !hasDirtOnDiagonalTL &&
            hasDirtOnDiagonalTR &&
            hasDirtOnDiagonalDL &&
            !hasDirtOnDiagonalDR
          ) image(dirtDiagonal[1], i * 64, j * 64);

          if (
            hasDirtOnTop &&
            hasDirtOnBottom &&
            hasDirtOnLeft &&
            hasDirtOnRight &&
            hasDirtOnDiagonalTL &&
            !hasDirtOnDiagonalTR &&
            !hasDirtOnDiagonalDL &&
            hasDirtOnDiagonalDR
          ) image(dirtDiagonal[2], i * 64, j * 64);
        }
      }
      else image(imgGrass, i * 64, j * 64);
    }
}

function drawGrid() {
  for (let i = 0; i < 10; i++)
    for (let j = 0; j < 8; j++) {
      stroke(0, 20);
      line(i * 64, 0, i * 64, height);
      line(0, j * 64, width, j * 64);
    }
}