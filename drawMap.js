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