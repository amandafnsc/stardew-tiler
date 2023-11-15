let isTheGameOn = false;
let isChoosingMap = false;

let tilesMap = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
let treesMap = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
let treesTime = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];

let x;
let y;
let t;

function setup() {
  createCanvas(1280, 640);
  isGridOn = false;

  resetTiles();
  resetInventorySelected();
}

function draw() {
  x = mouseX / 32;
  y = mouseY / 32;

  if (isTheGameOn) {
    gameScreen();
  }
  else if (isChoosingMap) chooseScreen();
  else introScreen();
}

function mousePressed() {
  if (isTheGameOn) {
    if (mouseX > 1225.6 && mouseX < 1264 && mouseY > 16 && mouseY < 48) {
      drawAnimatedSea();
      drawTilesMap();
      drawTreesMap();
      image(imgIntroFrame, 0, 0);
      saveCanvas('my-map', 'png');
    }

    if (mouseX > 1224 && mouseX < 1264 && mouseY > 584 && mouseY < 624) {
      isGridOn = !isGridOn;
    }

    if (mouseX > 16 && mouseX < 85.93 && mouseY > 16 && mouseY < 48) {
      isChoosingMap = false;
      isTheGameOn = false;
    }

    if (mouseX > 1041 && mouseX < 1079.4 && mouseY > 16 && mouseY < 48) {
      season = summer;
    }

    if (mouseX > 1087 && mouseX < 1125.4 && mouseY > 16 && mouseY < 48) {
      season = fall;
    }

    if (mouseX > 1133 && mouseX < 1171.4 && mouseY > 16 && mouseY < 48) {
      season = winter;
    }

    if (mouseX > 1179 && mouseX < 1217.4 && mouseY > 16 && mouseY < 48) {
      season = spring;
    }

    if (mouseX > 533.67 && mouseX < 576.33 && mouseY > 586.67 && mouseY < 629.34) {
      isPickaxeSelected = true;
      isGrassSelected = false;
      isHoeSelected = false;
      isSeedSelected = false;
      isAxSelected = false;
    }

    if (mouseX > 576.33 && mouseX < 619 && mouseY > 586.67 && mouseY < 629.34) {
      isPickaxeSelected = false;
      isGrassSelected = true;
      isHoeSelected = false;
      isSeedSelected = false;
      isAxSelected = false;
    }

    if (mouseX > 619 && mouseX < 661.67 && mouseY > 586.67 && mouseY < 629.34) {
      isPickaxeSelected = false;
      isGrassSelected = false;
      isHoeSelected = true;
      isSeedSelected = false;
      isAxSelected = false;
    }

    if (mouseX > 661.67 && mouseX < 704.34 && mouseY > 586.67 && mouseY < 629.34) {
      isPickaxeSelected = false;
      isGrassSelected = false;
      isHoeSelected = false;
      isSeedSelected = true;
      isAxSelected = false;
    }

    if (mouseX > 704.34 && mouseX < 747 && mouseY > 586.67 && mouseY < 629.34) {
      isPickaxeSelected = false;
      isGrassSelected = false;
      isHoeSelected = false;
      isSeedSelected = false;
      isAxSelected = true;
    }

    for (let i = 0; i < 40; i++)
      for (let j = 0; j < 20; j++) {
        if (
          floor(x) == i &&
          floor(y) == j &&
          tilesMap[j][i] == 1 &&
          isHoeSelected &&
          treesMap[j][i] == 0 &&
          !tilesMap[j - 1][i] == 0 &&
          !tilesMap[j + 1][i] == 0 &&
          !tilesMap[j][i - 1] == 0 &&
          !tilesMap[j][i + 1] == 0 &&
          !tilesMap[j - 1][i - 1] == 0 &&
          !tilesMap[j - 1][i + 1] == 0 &&
          !tilesMap[j + 1][i - 1] == 0 &&
          !tilesMap[j + 1][i + 1] == 0
        )
          tilesMap[j][i] = 2;

        if (i > 1 && i < 38 && j > 1 && j < 18)
          if ((floor(x) == i && floor(y) == j && isGrassSelected && treesMap[j][i] == 0)
            && (tilesMap[j][i] == 2 || tilesMap[j][i] == 0))
            tilesMap[j][i] = 1;

        if ((floor(x) == i && floor(y) == j && isPickaxeSelected && treesMap[j][i] == 0)
          && (tilesMap[j][i] == 1 || tilesMap[j][i] == 2)) {

          if (tilesMap[j - 1][i] == 2) tilesMap[j - 1][i] = 1;

          if (tilesMap[j + 1][i] == 2) tilesMap[j + 1][i] = 1;

          if (tilesMap[j][i - 1] == 2) tilesMap[j][i - 1] = 1;

          if (tilesMap[j][i + 1] == 2) tilesMap[j][i + 1] = 1;

          if (tilesMap[j - 1][i - 1] == 2) tilesMap[j - 1][i - 1] = 1;

          if (tilesMap[j - 1][i + 1] == 2) tilesMap[j - 1][i + 1] = 1;

          if (tilesMap[j + 1][i - 1] == 2) tilesMap[j + 1][i - 1] = 1;

          if (tilesMap[j + 1][i + 1] == 2) tilesMap[j + 1][i + 1] = 1;

          tilesMap[j][i] = 0;
        }

        if (floor(x) == i && floor(y) == j && tilesMap[j][i] == 2 && isSeedSelected && treesMap[j][i] == 0)
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

  else if (isChoosingMap) {
    if (mouseX > 559 && mouseX < 592 && mouseY > 419 && mouseY < 449) {
      if (whichMap == 0) whichMap = 3;
      else if (whichMap == 1) whichMap = 0;
      else if (whichMap == 2) whichMap = 1;
      else if (whichMap == 3) whichMap = 2;
    }

    else if (mouseX > 622 && mouseX < 658 && mouseY > 416 && mouseY < 452) {
      if (whichMap == 0) firstMap();
      else if (whichMap == 1) secondMap();
      else if (whichMap == 2) thirdMap();
      else if (whichMap == 3) fourthMap();
      isTheGameOn = true;
    }

    else if (mouseX > 688 && mouseX < 721 && mouseY > 419 && mouseY < 449) {
      if (whichMap == 0) whichMap = 1;
      else if (whichMap == 1) whichMap = 2;
      else if (whichMap == 2) whichMap = 3;
      else if (whichMap == 3) whichMap = 0;
    }
  }

  else {
    if (mouseX > 489 && mouseX < 600 && mouseY > 411 && mouseY < 498) {
      isGridOn = false;
      season = summer;
      resetInventorySelected();
      resetTiles();
      isChoosingMap = true;
    }

    if (mouseX > 680 && mouseX < 791 && mouseY > 411 && mouseY < 498) {
      isTheGameOn = true;
    }
  }
}

function resetTiles() {
  for (let i = 0; i < 40; i++)
    for (let j = 0; j < 20; j++) {
      treesMap[j][i] = 0;
      treesTime[j][i] = 0;
    }
}

function resetInventorySelected() {
  isPickaxeSelected = false;
  isGrassSelected = false;
  isHoeSelected = true;
  isSeedSelected = false;
  isAxSelected = false;
}