let isTheGameOn = false;
let isTakingAPicture = false;

let tilesMap = [];
let treesMap = [];
let treesTime = [];

let x;
let y;
let t;

function preload() {
  imgIntroBackground = loadImage('assets/introBackground.png');
  imgIntroTitle = loadImage('assets/introTitle.png');
  imgNewButton = loadImage('assets/newButton.png');
  imgLoadButton = loadImage('assets/loadButton.png');
  imgNewButton2 = loadImage('assets/newButton2.png');
  imgLoadButton2 = loadImage('assets/loadButton2.png');

  imgGameBackground = loadImage('assets/gameBackground.png');
  imgBackButton = loadImage('assets/backButton.png');
  imgCameraButton = loadImage('assets/cameraButton.png');
  imgInventory = loadImage('assets/inventory.png');
  imgSelected = loadImage('assets/selected.png');

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

  for (let i = 1; i < 7; i++) {
    tree[i] = loadImage('assets/tree' + [i] + '.png');
  }
}

function setup() {
  createCanvas(1280, 640);

  resetTiles();
  resetInventorySelected();
}

function draw() {
  x = mouseX / 64;
  y = mouseY / 64;

  if (isTheGameOn) {
    gameScreen();
  }

  else introScreen();
}

function mousePressed() {
  if (isTheGameOn) {
    if (mouseX > 1204 && mouseX < 1264 && mouseY > 16 && mouseY < 66) {
      isTakingAPicture = true;
      saveFrames('my-map', 'png', 1, 1);
    }

    if (mouseX > 16 && mouseX < 126 && mouseY > 16 && mouseY < 66) {
      isTheGameOn = false;
    }

    if (mouseX > 512 && mouseX < 576 && mouseY > 528 && mouseY < 592) {
      isGrassSelected = true;
      isAxSelected = false;
      isHoeSelected = false;
      isSeedSelected = false;
    }

    if (mouseX > 576 && mouseX < 640 && mouseY > 528 && mouseY < 592) {
      isGrassSelected = false;
      isAxSelected = true;
      isHoeSelected = false;
      isSeedSelected = false;
    }

    if (mouseX > 640 && mouseX < 704 && mouseY > 528 && mouseY < 592) {
      isGrassSelected = false;
      isAxSelected = false;
      isHoeSelected = true;
      isSeedSelected = false;
    }

    if (mouseX > 704 && mouseX < 768 && mouseY > 528 && mouseY < 592) {
      isGrassSelected = false;
      isAxSelected = false;
      isHoeSelected = false;
      isSeedSelected = true;
    }

    for (let i = 0; i < 20; i++)
      for (let j = 0; j < 10; j++) {
        if (floor(x) == i && floor(y) == j && tilesMap[j][i] == 0 && isHoeSelected && treesMap[j][i] == 0)
          tilesMap[j][i] = 1;

        if (floor(x) == i && floor(y) == j && tilesMap[j][i] == 1 && isGrassSelected && treesMap[j][i] == 0)
          tilesMap[j][i] = 0;

        if (floor(x) == i && floor(y) == j && tilesMap[j][i] == 1 && isSeedSelected && treesMap[j][i] == 0)
          treesMap[j][i] = 1;

        if (floor(x) == i && floor(y) == j && isAxSelected) {
          if (treesMap[j][i] <= 4 || treesMap[j][i] == 6) {
            treesMap[j][i] = 0;
            treesTime[j][i] = 0;
          }
          if (treesMap[j][i] == 5) treesMap[j][i] = 6;
        }
      }
  }

  else {
    if (mouseX > 476 && mouseX < 624 && mouseY > 433 && mouseY < 549) {
      resetInventorySelected();
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

  treesMap = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  treesTime = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
}

function resetInventorySelected() {
  isGrassSelected = false;
  isAxSelected = false;
  isHoeSelected = true;
  isSeedSelected = false;
}