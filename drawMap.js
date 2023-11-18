function drawTreesMap() {
    for (let i = 0; i < 40; i++)
        for (let j = 0; j < 20; j++) {
            if (treesMap[j][i] == 5 && season == winter) image(tree[season][4], i * 32 - 6, j * 32 - 66);
            else if (treesMap[j][i] == 6 && season == winter) image(tree[season][5], i * 32 + 7, j * 32 + 3);
            else if (treesMap[j][i] == 1) image(tree[season][0], i * 32 + 8, j * 32 + 8);
            else if (treesMap[j][i] == 2) image(tree[season][1], i * 32 + 8, j * 32 + 8);
            else if (treesMap[j][i] == 3) image(tree[season][2], i * 32 + 8, j * 32 + 8);
            else if (treesMap[j][i] == 4) image(tree[season][3], i * 32 + 8, j * 32 - 8);
            else if (treesMap[j][i] == 5) image(tree[season][4], i * 32 - 8, j * 32 - 66);
            else if (treesMap[j][i] == 6) image(tree[season][5], i * 32 + 8, j * 32 + 4);
        }
}

function drawTilesMap() {
    let hasDirtOnTop, hasDirtOnBottom, hasDirtOnLeft, hasDirtOnRight;

    let hasDirtOnDiagonalTL, hasDirtOnDiagonalTR, hasDirtOnDiagonalDL, hasDirtOnDiagonalDR;

    let hasGrassOnTop, hasGrassOnBottom, hasGrassOnLeft, hasGrassOnRight;

    let hasGrassOnDiagonalTL, hasGrassOnDiagonalTR, hasGrassOnDiagonalDL, hasGrassOnDiagonalDR;

    for (let i = 0; i < 40; i++)
        for (let j = 0; j < 20; j++) {

            if (j > 0) hasDirtOnTop = tilesMap[j - 1][i] == 2;
            if (j < 19) hasDirtOnBottom = tilesMap[j + 1][i] == 2;
            if (i > 0) hasDirtOnLeft = tilesMap[j][i - 1] == 2;
            if (i < 39) hasDirtOnRight = tilesMap[j][i + 1] == 2;

            if (j > 0 && i > 0)
                hasDirtOnDiagonalTL = tilesMap[j - 1][i - 1] == 2;
            if (j > 0 && i < 39)
                hasDirtOnDiagonalTR = tilesMap[j - 1][i + 1] == 2;
            if (j < 19 && i > 0)
                hasDirtOnDiagonalDL = tilesMap[j + 1][i - 1] == 2;
            if (j < 19 && i < 39)
                hasDirtOnDiagonalDR = tilesMap[j + 1][i + 1] == 2;

            if (j > 0) hasGrassOnTop = tilesMap[j - 1][i] == 1;
            if (j < 19) hasGrassOnBottom = tilesMap[j + 1][i] == 1;
            if (i > 0) hasGrassOnLeft = tilesMap[j][i - 1] == 1;
            if (i < 39) hasGrassOnRight = tilesMap[j][i + 1] == 1;

            if (j > 0 && i > 0)
                hasGrassOnDiagonalTL = tilesMap[j - 1][i - 1] == 1;
            if (j > 0 && i < 39)
                hasGrassOnDiagonalTR = tilesMap[j - 1][i + 1] == 1;
            if (j < 19 && i > 0)
                hasGrassOnDiagonalDL = tilesMap[j + 1][i - 1] == 1;
            if (j < 19 && i < 39)
                hasGrassOnDiagonalDR = tilesMap[j + 1][i + 1] == 1;

            if (tilesMap[j][i] == 2) {
                if (
                    hasDirtOnTop &&
                    hasDirtOnBottom &&
                    hasDirtOnLeft &&
                    hasDirtOnRight
                ) {
                    if (
                        hasDirtOnDiagonalTL &&
                        hasDirtOnDiagonalTR &&
                        hasDirtOnDiagonalDL &&
                        hasDirtOnDiagonalDR
                    ) image(dirt[season], i * 32, j * 32);

                    else if (
                        hasDirtOnDiagonalTR &&
                        hasDirtOnDiagonalDR &&
                        hasDirtOnDiagonalDL &&
                        !hasDirtOnDiagonalTL
                    ) image(dirtEdge[season][0], i * 32, j * 32);

                    else if (
                        hasDirtOnDiagonalDR &&
                        hasDirtOnDiagonalDL &&
                        !hasDirtOnDiagonalTR &&
                        hasDirtOnDiagonalTL
                    ) image(dirtEdge[season][1], i * 32, j * 32);

                    else if (
                        hasDirtOnDiagonalTR &&
                        hasDirtOnDiagonalDR &&
                        !hasDirtOnDiagonalDL &&
                        hasDirtOnDiagonalTL
                    ) image(dirtEdge[season][2], i * 32, j * 32);

                    else if (
                        hasDirtOnDiagonalTR &&
                        hasDirtOnDiagonalDL &&
                        !hasDirtOnDiagonalDR &&
                        hasDirtOnDiagonalTL
                    ) image(dirtEdge[season][3], i * 32, j * 32);

                    else if (
                        hasDirtOnDiagonalTR &&
                        hasDirtOnDiagonalDL &&
                        !hasDirtOnDiagonalTL &&
                        !hasDirtOnDiagonalDR
                    ) image(dirtDiagonal[season][0], i * 32, j * 32);

                    else if (
                        hasDirtOnDiagonalDR &&
                        !hasDirtOnDiagonalTR &&
                        !hasDirtOnDiagonalDL &&
                        hasDirtOnDiagonalTL
                    ) image(dirtDiagonal[season][1], i * 32, j * 32);

                    else if (
                        hasDirtOnDiagonalDR &&
                        hasDirtOnDiagonalDL &&
                        !hasDirtOnDiagonalTL &&
                        !hasDirtOnDiagonalTR
                    ) image(dirtEntrance[season][0], i * 32, j * 32);

                    else if (
                        hasDirtOnDiagonalTR &&
                        !hasDirtOnDiagonalDL &&
                        !hasDirtOnDiagonalDR &&
                        hasDirtOnDiagonalTL
                    ) image(dirtEntrance[season][1], i * 32, j * 32);

                    else if (
                        hasDirtOnDiagonalDL &&
                        !hasDirtOnDiagonalDR &&
                        !hasDirtOnDiagonalTR &&
                        hasDirtOnDiagonalTL
                    ) image(dirtEntrance[season][2], i * 32, j * 32);

                    else if (
                        hasDirtOnDiagonalTR &&
                        hasDirtOnDiagonalDR &&
                        !hasDirtOnDiagonalDL &&
                        !hasDirtOnDiagonalTL
                    ) image(dirtEntrance[season][3], i * 32, j * 32);

                    else if (
                        !hasDirtOnDiagonalTR &&
                        !hasDirtOnDiagonalDR &&
                        !hasDirtOnDiagonalDL &&
                        hasDirtOnDiagonalTL
                    ) image(dirtTwoExit[season][0], i * 32, j * 32);

                    else if (
                        hasDirtOnDiagonalTR &&
                        !hasDirtOnDiagonalDR &&
                        !hasDirtOnDiagonalDL &&
                        !hasDirtOnDiagonalTL
                    ) image(dirtTwoExit[season][1], i * 32, j * 32);

                    else if (
                        !hasDirtOnDiagonalTR &&
                        !hasDirtOnDiagonalDR &&
                        hasDirtOnDiagonalDL &&
                        !hasDirtOnDiagonalTL
                    ) image(dirtTwoExit[season][2], i * 32, j * 32);

                    else if (
                        !hasDirtOnDiagonalTR &&
                        hasDirtOnDiagonalDR &&
                        !hasDirtOnDiagonalDL &&
                        !hasDirtOnDiagonalTL
                    ) image(dirtTwoExit[season][3], i * 32, j * 32);

                    else if (
                        !hasDirtOnDiagonalDL &&
                        !hasDirtOnDiagonalDR &&
                        !hasDirtOnDiagonalTL &&
                        !hasDirtOnDiagonalTR
                    ) image(dirtMiddle[season], i * 32, j * 32);
                }

                else if (
                    hasDirtOnRight &&
                    hasDirtOnDiagonalDR &&
                    hasDirtOnBottom &&
                    hasDirtOnDiagonalDL &&
                    hasDirtOnLeft
                ) image(dirtSide[season][0], i * 32, j * 32);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnDiagonalTR &&
                    hasDirtOnRight &&
                    hasDirtOnLeft &&
                    hasDirtOnDiagonalTL
                ) image(dirtSide[season][1], i * 32, j * 32);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnBottom &&
                    hasDirtOnDiagonalDL &&
                    hasDirtOnLeft &&
                    hasDirtOnDiagonalTL
                ) image(dirtSide[season][2], i * 32, j * 32);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnDiagonalTR &&
                    hasDirtOnRight &&
                    hasDirtOnDiagonalDR &&
                    hasDirtOnBottom
                ) image(dirtSide[season][3], i * 32, j * 32);

                else if (
                    hasDirtOnRight &&
                    hasDirtOnBottom &&
                    !hasDirtOnDiagonalDL &&
                    hasDirtOnDiagonalDR &&
                    hasDirtOnLeft
                ) image(dirtNewWay[season][0], i * 32, j * 32);

                else if (
                    hasDirtOnRight &&
                    hasDirtOnBottom &&
                    hasDirtOnDiagonalDL &&
                    !hasDirtOnDiagonalDR &&
                    hasDirtOnLeft
                ) image(dirtNewWay[season][1], i * 32, j * 32);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnRight &&
                    !hasDirtOnDiagonalTL &&
                    hasDirtOnDiagonalTR &&
                    hasDirtOnLeft
                ) image(dirtNewWay[season][2], i * 32, j * 32);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnRight &&
                    hasDirtOnDiagonalTL &&
                    !hasDirtOnDiagonalTR &&
                    hasDirtOnLeft
                ) image(dirtNewWay[season][3], i * 32, j * 32);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnBottom &&
                    hasDirtOnDiagonalDL &&
                    !hasDirtOnDiagonalTL &&
                    hasDirtOnLeft
                ) image(dirtNewWay[season][4], i * 32, j * 32);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnBottom &&
                    !hasDirtOnDiagonalDL &&
                    hasDirtOnDiagonalTL &&
                    hasDirtOnLeft
                ) image(dirtNewWay[season][5], i * 32, j * 32);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnRight &&
                    hasDirtOnBottom &&
                    hasDirtOnDiagonalDR &&
                    !hasDirtOnDiagonalTR
                ) image(dirtNewWay[season][6], i * 32, j * 32);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnRight &&
                    hasDirtOnBottom &&
                    !hasDirtOnDiagonalDR &&
                    hasDirtOnDiagonalTR
                ) image(dirtNewWay[season][7], i * 32, j * 32);

                else if (
                    hasDirtOnRight &&
                    hasDirtOnDiagonalDR &&
                    hasDirtOnBottom
                ) image(dirtCorner[season][0], i * 32, j * 32);

                else if (
                    hasDirtOnBottom &&
                    hasDirtOnDiagonalDL &&
                    hasDirtOnLeft
                ) image(dirtCorner[season][1], i * 32, j * 32);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnDiagonalTR &&
                    hasDirtOnRight
                ) image(dirtCorner[season][2], i * 32, j * 32);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnLeft &&
                    hasDirtOnDiagonalTL
                ) image(dirtCorner[season][3], i * 32, j * 32);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnRight &&
                    !hasDirtOnDiagonalTL &&
                    !hasDirtOnDiagonalTR &&
                    hasDirtOnLeft
                ) image(dirtTD[season][0], i * 32, j * 32);

                else if (
                    hasDirtOnRight &&
                    hasDirtOnBottom &&
                    !hasDirtOnDiagonalDL &&
                    !hasDirtOnDiagonalDR &&
                    hasDirtOnLeft
                ) image(dirtTD[season][1], i * 32, j * 32);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnRight &&
                    !hasDirtOnDiagonalDR &&
                    !hasDirtOnDiagonalTR &&
                    hasDirtOnBottom
                ) image(dirtTD[season][2], i * 32, j * 32);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnBottom &&
                    !hasDirtOnDiagonalDL &&
                    !hasDirtOnDiagonalTL &&
                    hasDirtOnLeft
                ) image(dirtTD[season][3], i * 32, j * 32);

                else if (
                    hasDirtOnRight &&
                    !hasDirtOnDiagonalDR &&
                    hasDirtOnBottom
                ) image(dirtLD[season][0], i * 32, j * 32);

                else if (
                    hasDirtOnBottom &&
                    !hasDirtOnDiagonalDL &&
                    hasDirtOnLeft
                ) image(dirtLD[season][1], i * 32, j * 32);

                else if (
                    hasDirtOnTop &&
                    !hasDirtOnDiagonalTR &&
                    hasDirtOnRight
                ) image(dirtLD[season][2], i * 32, j * 32);

                else if (
                    hasDirtOnTop &&
                    !hasDirtOnDiagonalTL &&
                    hasDirtOnLeft
                ) image(dirtLD[season][3], i * 32, j * 32);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnBottom
                ) image(dirtTwoD[season][0], i * 32, j * 32);

                else if (
                    hasDirtOnRight &&
                    hasDirtOnLeft
                ) image(dirtTwoD[season][1], i * 32, j * 32);

                else if (
                    hasDirtOnBottom
                ) image(dirtOneD[season][0], i * 32, j * 32);

                else if (
                    hasDirtOnTop
                ) image(dirtOneD[season][1], i * 32, j * 32);

                else if (
                    hasDirtOnLeft
                ) image(dirtOneD[season][2], i * 32, j * 32);

                else if (
                    hasDirtOnRight
                ) image(dirtOneD[season][3], i * 32, j * 32);

                else image(dirtDot[season], i * 32, j * 32);
            }

            if (tilesMap[j][i] == 1) {
                if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnBottom || hasDirtOnBottom) &&
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (hasGrassOnRight || hasDirtOnRight)
                ) {
                    if (
                        (hasGrassOnDiagonalTL || hasDirtOnDiagonalTL) &&
                        (hasGrassOnDiagonalTR || hasDirtOnDiagonalTR) &&
                        (hasGrassOnDiagonalDL || hasDirtOnDiagonalDL) &&
                        (hasGrassOnDiagonalDR || hasDirtOnDiagonalDR)
                    ) image(grass[season], i * 32, j * 32);

                    else if (
                        (!hasGrassOnDiagonalTL && !hasDirtOnDiagonalTL) &&
                        (hasGrassOnDiagonalTR || hasDirtOnDiagonalTR) &&
                        (hasGrassOnDiagonalDL || hasDirtOnDiagonalDL) &&
                        (hasGrassOnDiagonalDR || hasDirtOnDiagonalDR)
                    ) image(grassEdge[season][0], i * 32, j * 32);

                    else if (
                        (hasGrassOnDiagonalTL || hasDirtOnDiagonalTL) &&
                        (!hasGrassOnDiagonalTR && !hasDirtOnDiagonalTR) &&
                        (hasGrassOnDiagonalDL || hasDirtOnDiagonalDL) &&
                        (hasGrassOnDiagonalDR || hasDirtOnDiagonalDR)
                    ) image(grassEdge[season][1], i * 32, j * 32);

                    else if (
                        (hasGrassOnDiagonalTL || hasDirtOnDiagonalTL) &&
                        (hasGrassOnDiagonalTR || hasDirtOnDiagonalTR) &&
                        (!hasGrassOnDiagonalDL && !hasDirtOnDiagonalDL) &&
                        (hasGrassOnDiagonalDR || hasDirtOnDiagonalDR)
                    ) image(grassEdge[season][2], i * 32, j * 32);

                    else if (
                        (hasGrassOnDiagonalTL || hasDirtOnDiagonalTL) &&
                        (hasGrassOnDiagonalTR || hasDirtOnDiagonalTR) &&
                        (hasGrassOnDiagonalDL || hasDirtOnDiagonalDL) &&
                        (!hasGrassOnDiagonalDR && !hasDirtOnDiagonalDR)
                    ) image(grassEdge[season][3], i * 32, j * 32);

                    else if (
                        (!hasGrassOnDiagonalTL && !hasDirtOnDiagonalTL) &&
                        (hasGrassOnDiagonalTR || hasDirtOnDiagonalTR) &&
                        (hasGrassOnDiagonalDL || hasDirtOnDiagonalDL) &&
                        (!hasGrassOnDiagonalDR && !hasDirtOnDiagonalDR)
                    ) image(grassDiagonal[season][0], i * 32, j * 32);

                    else if (
                        (hasGrassOnDiagonalTL || hasDirtOnDiagonalTL) &&
                        (!hasGrassOnDiagonalTR && !hasDirtOnDiagonalTR) &&
                        (!hasGrassOnDiagonalDL && !hasDirtOnDiagonalDL) &&
                        (hasGrassOnDiagonalDR || hasDirtOnDiagonalDR)
                    ) image(grassDiagonal[season][1], i * 32, j * 32);

                    else if (
                        (!hasGrassOnDiagonalTL && !hasDirtOnDiagonalTL) &&
                        (!hasGrassOnDiagonalTR && !hasDirtOnDiagonalTR) &&
                        (hasGrassOnDiagonalDL || hasDirtOnDiagonalDL) &&
                        (hasGrassOnDiagonalDR || hasDirtOnDiagonalDR)
                    ) image(grassEntrance[season][0], i * 32, j * 32);

                    else if (
                        (hasGrassOnDiagonalTL || hasDirtOnDiagonalTL) &&
                        (hasGrassOnDiagonalTR || hasDirtOnDiagonalTR) &&
                        (!hasGrassOnDiagonalDL && !hasDirtOnDiagonalDL) &&
                        (!hasGrassOnDiagonalDR && !hasDirtOnDiagonalDR)
                    ) image(grassEntrance[season][1], i * 32, j * 32);

                    else if (
                        (hasGrassOnDiagonalTL || hasDirtOnDiagonalTL) &&
                        (!hasGrassOnDiagonalTR && !hasDirtOnDiagonalTR) &&
                        (hasGrassOnDiagonalDL || hasDirtOnDiagonalDL) &&
                        (!hasGrassOnDiagonalDR && !hasDirtOnDiagonalDR)
                    ) image(grassEntrance[season][2], i * 32, j * 32);

                    else if (
                        (!hasGrassOnDiagonalTL && !hasDirtOnDiagonalTL) &&
                        (hasGrassOnDiagonalTR || hasDirtOnDiagonalTR) &&
                        (!hasGrassOnDiagonalDL && !hasDirtOnDiagonalDL) &&
                        (hasGrassOnDiagonalDR || hasDirtOnDiagonalDR)
                    ) image(grassEntrance[season][3], i * 32, j * 32);

                    else if (
                        (hasGrassOnDiagonalTL || hasDirtOnDiagonalTL) &&
                        (!hasGrassOnDiagonalTR && !hasDirtOnDiagonalTR) &&
                        (!hasGrassOnDiagonalDL && !hasDirtOnDiagonalDL) &&
                        (!hasGrassOnDiagonalDR && !hasDirtOnDiagonalDR)
                    ) image(grassTwoExit[season][0], i * 32, j * 32);

                    else if (
                        (!hasGrassOnDiagonalTL && !hasDirtOnDiagonalTL) &&
                        (hasGrassOnDiagonalTR || hasDirtOnDiagonalTR) &&
                        (!hasGrassOnDiagonalDL && !hasDirtOnDiagonalDL) &&
                        (!hasGrassOnDiagonalDR && !hasDirtOnDiagonalDR)
                    ) image(grassTwoExit[season][1], i * 32, j * 32);

                    else if (
                        (!hasGrassOnDiagonalTL && !hasDirtOnDiagonalTL) &&
                        (!hasGrassOnDiagonalTR && !hasDirtOnDiagonalTR) &&
                        (hasGrassOnDiagonalDL || hasDirtOnDiagonalDL) &&
                        (!hasGrassOnDiagonalDR && !hasDirtOnDiagonalDR)
                    ) image(grassTwoExit[season][2], i * 32, j * 32);

                    else if (
                        (!hasGrassOnDiagonalTL && !hasDirtOnDiagonalTL) &&
                        (!hasGrassOnDiagonalTR && !hasDirtOnDiagonalTR) &&
                        (!hasGrassOnDiagonalDL && !hasDirtOnDiagonalDL) &&
                        (hasGrassOnDiagonalDR || hasDirtOnDiagonalDR)
                    ) image(grassTwoExit[season][3], i * 32, j * 32);

                    else if (
                        (!hasGrassOnDiagonalTL && !hasDirtOnDiagonalTL) &&
                        (!hasGrassOnDiagonalTR && !hasDirtOnDiagonalTR) &&
                        (!hasGrassOnDiagonalDL && !hasDirtOnDiagonalDL) &&
                        (!hasGrassOnDiagonalDR && !hasDirtOnDiagonalDR)
                    ) image(grassMiddle[season], i * 32, j * 32);
                }

                else if (
                    (hasGrassOnBottom || hasDirtOnBottom) &&
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (hasGrassOnRight || hasDirtOnRight) &&
                    (hasGrassOnDiagonalDL || hasDirtOnDiagonalDL) &&
                    (hasGrassOnDiagonalDR || hasDirtOnDiagonalDR)
                ) image(grassSide[season][0], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (hasGrassOnRight || hasDirtOnRight) &&
                    (hasGrassOnDiagonalTL || hasDirtOnDiagonalTL) &&
                    (hasGrassOnDiagonalTR || hasDirtOnDiagonalTR)
                ) image(grassSide[season][1], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnBottom || hasDirtOnBottom) &&
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (hasGrassOnDiagonalTL || hasDirtOnDiagonalTL) &&
                    (hasGrassOnDiagonalDL || hasDirtOnDiagonalDL)
                ) image(grassSide[season][2], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnBottom || hasDirtOnBottom) &&
                    (hasGrassOnRight || hasDirtOnRight) &&
                    (hasGrassOnDiagonalTR || hasDirtOnDiagonalTR) &&
                    (hasGrassOnDiagonalDR || hasDirtOnDiagonalDR)
                ) image(grassSide[season][3], i * 32, j * 32);

                else if (
                    (hasGrassOnBottom || hasDirtOnBottom) &&
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (hasGrassOnRight || hasDirtOnRight) &&
                    (!hasGrassOnDiagonalDL && !hasDirtOnDiagonalDL) &&
                    (hasGrassOnDiagonalDR || hasDirtOnDiagonalDR)
                ) image(grassNewWay[season][0], i * 32, j * 32);

                else if (
                    (hasGrassOnBottom || hasDirtOnBottom) &&
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (hasGrassOnRight || hasDirtOnRight) &&
                    (hasGrassOnDiagonalDL || hasDirtOnDiagonalDL) &&
                    (!hasGrassOnDiagonalDR && !hasDirtOnDiagonalDR)
                ) image(grassNewWay[season][1], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (hasGrassOnRight || hasDirtOnRight) &&
                    (!hasGrassOnDiagonalTL && !hasDirtOnDiagonalTL) &&
                    (hasGrassOnDiagonalTR || hasDirtOnDiagonalTR)
                ) image(grassNewWay[season][2], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (hasGrassOnRight || hasDirtOnRight) &&
                    (hasGrassOnDiagonalTL || hasDirtOnDiagonalTL) &&
                    (!hasGrassOnDiagonalTR && !hasDirtOnDiagonalTR)
                ) image(grassNewWay[season][3], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnBottom || hasDirtOnBottom) &&
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (!hasGrassOnDiagonalTL && !hasDirtOnDiagonalTL) &&
                    (hasGrassOnDiagonalDL || hasDirtOnDiagonalDL)
                ) image(grassNewWay[season][4], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnBottom || hasDirtOnBottom) &&
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (hasGrassOnDiagonalTL || hasDirtOnDiagonalTL) &&
                    (!hasGrassOnDiagonalDL && !hasDirtOnDiagonalDL)
                ) image(grassNewWay[season][5], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnBottom || hasDirtOnBottom) &&
                    (hasGrassOnRight || hasDirtOnRight) &&
                    (!hasGrassOnDiagonalTR && !hasDirtOnDiagonalTR) &&
                    (hasGrassOnDiagonalDR || hasDirtOnDiagonalDR)
                ) image(grassNewWay[season][6], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnBottom || hasDirtOnBottom) &&
                    (hasGrassOnRight || hasDirtOnRight) &&
                    (hasGrassOnDiagonalTR || hasDirtOnDiagonalTR) &&
                    (!hasGrassOnDiagonalDR && !hasDirtOnDiagonalDR)
                ) image(grassNewWay[season][7], i * 32, j * 32);

                else if (
                    (hasGrassOnBottom || hasDirtOnBottom) &&
                    (hasGrassOnRight || hasDirtOnRight) &&
                    (hasGrassOnDiagonalDR || hasDirtOnDiagonalDR)
                ) image(grassCorner[season][0], i * 32, j * 32);

                else if (
                    (hasGrassOnBottom || hasDirtOnBottom) &&
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (hasGrassOnDiagonalDL || hasDirtOnDiagonalDL)
                ) image(grassCorner[season][1], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnRight || hasDirtOnRight) &&
                    (hasGrassOnDiagonalTR || hasDirtOnDiagonalTR)
                ) image(grassCorner[season][2], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (hasGrassOnDiagonalTL || hasDirtOnDiagonalTL)
                ) image(grassCorner[season][3], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (hasGrassOnRight || hasDirtOnRight) &&
                    (!hasGrassOnDiagonalTL && !hasDirtOnDiagonalTL) &&
                    (!hasGrassOnDiagonalTR && !hasDirtOnDiagonalTR)
                ) image(grassTD[season][0], i * 32, j * 32);

                else if (
                    (hasGrassOnBottom || hasDirtOnBottom) &&
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (hasGrassOnRight || hasDirtOnRight) &&
                    (!hasGrassOnDiagonalDL && !hasDirtOnDiagonalDL) &&
                    (!hasGrassOnDiagonalDR && !hasDirtOnDiagonalDR)
                ) image(grassTD[season][1], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnBottom || hasDirtOnBottom) &&
                    (hasGrassOnRight || hasDirtOnRight) &&
                    (!hasGrassOnDiagonalTR && !hasDirtOnDiagonalTR) &&
                    (!hasGrassOnDiagonalDR && !hasDirtOnDiagonalDR)
                ) image(grassTD[season][2], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnBottom || hasDirtOnBottom) &&
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (!hasGrassOnDiagonalTL && !hasDirtOnDiagonalTL) &&
                    (!hasGrassOnDiagonalDL && !hasDirtOnDiagonalDL)
                ) image(grassTD[season][3], i * 32, j * 32);

                else if (
                    (hasGrassOnBottom || hasDirtOnBottom) &&
                    (hasGrassOnRight || hasDirtOnRight) &&
                    (!hasGrassOnDiagonalDR && !hasDirtOnDiagonalDR)
                ) image(grassLD[season][0], i * 32, j * 32);

                else if (
                    (hasGrassOnBottom || hasDirtOnBottom) &&
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (!hasGrassOnDiagonalDL && !hasDirtOnDiagonalDL)
                ) image(grassLD[season][1], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnRight || hasDirtOnRight) &&
                    (!hasGrassOnDiagonalTR && !hasDirtOnDiagonalTR)
                ) image(grassLD[season][2], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (!hasGrassOnDiagonalTL && !hasDirtOnDiagonalTL)
                ) image(grassLD[season][3], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnBottom || hasDirtOnBottom)
                ) image(grassTwoD[season][0], i * 32, j * 32);

                else if (
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (hasGrassOnRight || hasDirtOnRight)
                ) image(grassTwoD[season][1], i * 32, j * 32);

                else if (
                    (hasGrassOnBottom || hasDirtOnBottom)
                ) image(grassOneD[season][0], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop)
                ) image(grassOneD[season][1], i * 32, j * 32);

                else if (
                    (hasGrassOnLeft || hasDirtOnLeft)
                ) image(grassOneD[season][2], i * 32, j * 32);

                else if (
                    (hasGrassOnRight || hasDirtOnRight)
                ) image(grassOneD[season][3], i * 32, j * 32);

                else image(grassDot[season], i * 32, j * 32);
            }
        }
}