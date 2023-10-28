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

                else if (
                    hasDirtOnTop &&
                    hasDirtOnDiagonalTR &&
                    hasDirtOnRight &&
                    hasDirtOnDiagonalDR &&
                    hasDirtOnBottom &&
                    hasDirtOnDiagonalDL &&
                    !hasDirtOnDiagonalTL &&
                    hasDirtOnLeft
                ) image(dirtEdge[1], i * 64, j * 64);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnRight &&
                    hasDirtOnDiagonalDR &&
                    hasDirtOnBottom &&
                    hasDirtOnDiagonalDL &&
                    hasDirtOnLeft &&
                    !hasDirtOnDiagonalTR &&
                    hasDirtOnDiagonalTL
                ) image(dirtEdge[2], i * 64, j * 64);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnDiagonalTR &&
                    hasDirtOnRight &&
                    hasDirtOnDiagonalDR &&
                    hasDirtOnBottom &&
                    hasDirtOnLeft &&
                    !hasDirtOnDiagonalDL &&
                    hasDirtOnDiagonalTL
                ) image(dirtEdge[3], i * 64, j * 64);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnDiagonalTR &&
                    hasDirtOnRight &&
                    hasDirtOnBottom &&
                    hasDirtOnDiagonalDL &&
                    hasDirtOnLeft &&
                    !hasDirtOnDiagonalDR &&
                    hasDirtOnDiagonalTL
                ) image(dirtEdge[4], i * 64, j * 64);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnDiagonalTR &&
                    hasDirtOnRight &&
                    hasDirtOnBottom &&
                    hasDirtOnDiagonalDL &&
                    !hasDirtOnDiagonalTL &&
                    !hasDirtOnDiagonalDR &&
                    hasDirtOnLeft
                ) image(dirtDiagonal[1], i * 64, j * 64);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnRight &&
                    hasDirtOnDiagonalDR &&
                    hasDirtOnBottom &&
                    hasDirtOnLeft &&
                    !hasDirtOnDiagonalTR &&
                    !hasDirtOnDiagonalDL &&
                    hasDirtOnDiagonalTL
                ) image(dirtDiagonal[2], i * 64, j * 64);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnRight &&
                    hasDirtOnDiagonalDR &&
                    hasDirtOnBottom &&
                    hasDirtOnDiagonalDL &&
                    !hasDirtOnDiagonalTL &&
                    !hasDirtOnDiagonalTR &&
                    hasDirtOnLeft
                ) image(dirtEntrance[1], i * 64, j * 64);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnDiagonalTR &&
                    hasDirtOnRight &&
                    hasDirtOnBottom &&
                    hasDirtOnLeft &&
                    !hasDirtOnDiagonalDL &&
                    !hasDirtOnDiagonalDR &&
                    hasDirtOnDiagonalTL
                ) image(dirtEntrance[2], i * 64, j * 64);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnRight &&
                    hasDirtOnBottom &&
                    hasDirtOnDiagonalDL &&
                    hasDirtOnLeft &&
                    !hasDirtOnDiagonalDR &&
                    !hasDirtOnDiagonalTR &&
                    hasDirtOnDiagonalTL
                ) image(dirtEntrance[3], i * 64, j * 64);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnDiagonalTR &&
                    hasDirtOnRight &&
                    hasDirtOnDiagonalDR &&
                    hasDirtOnBottom &&
                    !hasDirtOnDiagonalDL &&
                    !hasDirtOnDiagonalTL &&
                    hasDirtOnLeft
                ) image(dirtEntrance[4], i * 64, j * 64);

                else if (
                    hasDirtOnTop &&
                    !hasDirtOnDiagonalTR &&
                    hasDirtOnRight &&
                    !hasDirtOnDiagonalDR &&
                    hasDirtOnBottom &&
                    !hasDirtOnDiagonalDL &&
                    hasDirtOnDiagonalTL &&
                    hasDirtOnLeft
                ) image(dirtTwoExit[1], i * 64, j * 64);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnDiagonalTR &&
                    hasDirtOnRight &&
                    !hasDirtOnDiagonalDR &&
                    hasDirtOnBottom &&
                    !hasDirtOnDiagonalDL &&
                    !hasDirtOnDiagonalTL &&
                    hasDirtOnLeft
                ) image(dirtTwoExit[2], i * 64, j * 64);

                else if (
                    hasDirtOnTop &&
                    !hasDirtOnDiagonalTR &&
                    hasDirtOnRight &&
                    !hasDirtOnDiagonalDR &&
                    hasDirtOnBottom &&
                    hasDirtOnDiagonalDL &&
                    !hasDirtOnDiagonalTL &&
                    hasDirtOnLeft
                ) image(dirtTwoExit[3], i * 64, j * 64);

                else if (
                    hasDirtOnTop &&
                    !hasDirtOnDiagonalTR &&
                    hasDirtOnRight &&
                    hasDirtOnDiagonalDR &&
                    hasDirtOnBottom &&
                    !hasDirtOnDiagonalDL &&
                    !hasDirtOnDiagonalTL &&
                    hasDirtOnLeft
                ) image(dirtTwoExit[4], i * 64, j * 64);

                else if (
                    hasDirtOnRight &&
                    hasDirtOnDiagonalDR &&
                    hasDirtOnBottom &&
                    hasDirtOnDiagonalDL &&
                    hasDirtOnLeft
                ) image(dirtSide[1], i * 64, j * 64);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnDiagonalTR &&
                    hasDirtOnRight &&
                    hasDirtOnLeft &&
                    hasDirtOnDiagonalTL
                ) image(dirtSide[2], i * 64, j * 64);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnBottom &&
                    hasDirtOnDiagonalDL &&
                    hasDirtOnLeft &&
                    hasDirtOnDiagonalTL
                ) image(dirtSide[3], i * 64, j * 64);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnDiagonalTR &&
                    hasDirtOnRight &&
                    hasDirtOnDiagonalDR &&
                    hasDirtOnBottom
                ) image(dirtSide[4], i * 64, j * 64);

                else if (
                    hasDirtOnRight &&
                    hasDirtOnBottom &&
                    !hasDirtOnDiagonalDL &&
                    hasDirtOnDiagonalDR &&
                    hasDirtOnLeft
                ) image(dirtNewWay[1], i * 64, j * 64);

                else if (
                    hasDirtOnRight &&
                    hasDirtOnBottom &&
                    hasDirtOnDiagonalDL &&
                    !hasDirtOnDiagonalDR &&
                    hasDirtOnLeft
                ) image(dirtNewWay[2], i * 64, j * 64);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnRight &&
                    !hasDirtOnDiagonalTL &&
                    hasDirtOnDiagonalTR &&
                    hasDirtOnLeft
                ) image(dirtNewWay[3], i * 64, j * 64);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnRight &&
                    hasDirtOnDiagonalTL &&
                    !hasDirtOnDiagonalTR &&
                    hasDirtOnLeft
                ) image(dirtNewWay[4], i * 64, j * 64);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnBottom &&
                    hasDirtOnDiagonalDL &&
                    !hasDirtOnDiagonalTL &&
                    hasDirtOnLeft
                ) image(dirtNewWay[5], i * 64, j * 64);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnBottom &&
                    !hasDirtOnDiagonalDL &&
                    hasDirtOnDiagonalTL &&
                    hasDirtOnLeft
                ) image(dirtNewWay[6], i * 64, j * 64);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnRight &&
                    hasDirtOnBottom &&
                    hasDirtOnDiagonalDR &&
                    !hasDirtOnDiagonalTR
                ) image(dirtNewWay[7], i * 64, j * 64);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnRight &&
                    hasDirtOnBottom &&
                    !hasDirtOnDiagonalDR &&
                    hasDirtOnDiagonalTR
                ) image(dirtNewWay[8], i * 64, j * 64);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnRight &&
                    hasDirtOnBottom &&
                    !hasDirtOnDiagonalDL &&
                    !hasDirtOnDiagonalDR &&
                    !hasDirtOnDiagonalTL &&
                    !hasDirtOnDiagonalTR &&
                    hasDirtOnLeft
                ) image(imgDirtMiddle, i * 64, j * 64);

                else if (
                    hasDirtOnRight &&
                    hasDirtOnDiagonalDR &&
                    hasDirtOnBottom
                ) image(dirtCorner[1], i * 64, j * 64);

                else if (
                    hasDirtOnBottom &&
                    hasDirtOnDiagonalDL &&
                    hasDirtOnLeft
                ) image(dirtCorner[2], i * 64, j * 64);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnDiagonalTR &&
                    hasDirtOnRight
                ) image(dirtCorner[3], i * 64, j * 64);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnLeft &&
                    hasDirtOnDiagonalTL
                ) image(dirtCorner[4], i * 64, j * 64);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnRight &&
                    !hasDirtOnDiagonalTL &&
                    !hasDirtOnDiagonalTR &&
                    hasDirtOnLeft
                ) image(dirtTD[1], i * 64, j * 64);

                else if (
                    hasDirtOnRight &&
                    hasDirtOnBottom &&
                    !hasDirtOnDiagonalDL &&
                    !hasDirtOnDiagonalDR &&
                    hasDirtOnLeft
                ) image(dirtTD[2], i * 64, j * 64);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnRight &&
                    !hasDirtOnDiagonalDR &&
                    !hasDirtOnDiagonalTR &&
                    hasDirtOnBottom
                ) image(dirtTD[3], i * 64, j * 64);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnBottom &&
                    !hasDirtOnDiagonalDL &&
                    !hasDirtOnDiagonalTL &&
                    hasDirtOnLeft
                ) image(dirtTD[4], i * 64, j * 64);

                else if (
                    hasDirtOnRight &&
                    !hasDirtOnDiagonalDR &&
                    hasDirtOnBottom
                ) image(dirtLD[1], i * 64, j * 64);

                else if (
                    hasDirtOnBottom &&
                    !hasDirtOnDiagonalDL &&
                    hasDirtOnLeft
                ) image(dirtLD[2], i * 64, j * 64);

                else if (
                    hasDirtOnTop &&
                    !hasDirtOnDiagonalTR &&
                    hasDirtOnRight
                ) image(dirtLD[3], i * 64, j * 64);

                else if (
                    hasDirtOnTop &&
                    !hasDirtOnDiagonalTL &&
                    hasDirtOnLeft
                ) image(dirtLD[4], i * 64, j * 64);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnBottom
                ) image(dirtTwoD[1], i * 64, j * 64);

                else if (
                    hasDirtOnRight &&
                    hasDirtOnLeft
                ) image(dirtTwoD[2], i * 64, j * 64);

                else if (
                    hasDirtOnBottom
                ) image(dirtOneD[1], i * 64, j * 64);

                else if (
                    hasDirtOnTop
                ) image(dirtOneD[2], i * 64, j * 64);

                else if (
                    hasDirtOnLeft
                ) image(dirtOneD[3], i * 64, j * 64);

                else if (
                    hasDirtOnRight
                ) image(dirtOneD[4], i * 64, j * 64);

                else image(imgDirtDot, i * 64, j * 64);
            }

            else image(imgGrass, i * 64, j * 64);
        }
}