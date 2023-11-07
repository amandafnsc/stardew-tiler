function drawTreesMap() {
    for (let i = 0; i < 40; i++)
        for (let j = 0; j < 20; j++) {
            if (season = summer) {
                if (treesMap[j][i] == 1) image(tree[1][1], i * 32 + 8, j * 32 + 8);
                if (treesMap[j][i] == 2) image(tree[1][2], i * 32 + 8, j * 32 + 8);
                if (treesMap[j][i] == 3) image(tree[1][3], i * 32 + 8, j * 32 + 8);
                if (treesMap[j][i] == 4) image(tree[1][4], i * 32 + 8, j * 32 - 8);
                if (treesMap[j][i] == 5) image(tree[1][5], i * 32 - 8, j * 32 - 66);
                if (treesMap[j][i] == 6) image(tree[1][6], i * 32 + 8, j * 32 + 4);
            }

            if (season = fall) {
                if (treesMap[j][i] == 1) image(tree[2][1], i * 32 + 8, j * 32 + 8);
                if (treesMap[j][i] == 2) image(tree[2][2], i * 32 + 8, j * 32 + 8);
                if (treesMap[j][i] == 3) image(tree[2][3], i * 32 + 8, j * 32 + 8);
                if (treesMap[j][i] == 4) image(tree[2][4], i * 32 + 8, j * 32 - 8);
                if (treesMap[j][i] == 5) image(tree[2][5], i * 32 - 8, j * 32 - 66);
                if (treesMap[j][i] == 6) image(tree[2][6], i * 32 + 8, j * 32 + 4);
            }

            if (season = winter) {
                if (treesMap[j][i] == 1) image(tree[3][1], i * 32 + 8, j * 32 + 8);
                if (treesMap[j][i] == 2) image(tree[3][2], i * 32 + 8, j * 32 + 8);
                if (treesMap[j][i] == 3) image(tree[3][3], i * 32 + 8, j * 32 + 8);
                if (treesMap[j][i] == 4) image(tree[3][4], i * 32 + 8, j * 32 - 8);
                if (treesMap[j][i] == 5) image(tree[3][5], i * 32 - 8, j * 32 - 66);
                if (treesMap[j][i] == 6) image(tree[3][6], i * 32 + 8, j * 32 + 4);
            }

            if (season = spring) {
                if (treesMap[j][i] == 1) image(tree[4][1], i * 32 + 8, j * 32 + 8);
                if (treesMap[j][i] == 2) image(tree[4][2], i * 32 + 8, j * 32 + 8);
                if (treesMap[j][i] == 3) image(tree[4][3], i * 32 + 8, j * 32 + 8);
                if (treesMap[j][i] == 4) image(tree[4][4], i * 32 + 8, j * 32 - 8);
                if (treesMap[j][i] == 5) image(tree[4][5], i * 32 - 8, j * 32 - 66);
                if (treesMap[j][i] == 6) image(tree[4][6], i * 32 + 8, j * 32 + 4);
            }
        }
}

function drawTilesMap() {
    let hasDirtOnTop;
    let hasDirtOnBottom;
    let hasDirtOnLeft;
    let hasDirtOnRight;

    let hasDirtOnDiagonalTL;
    let hasDirtOnDiagonalTR;
    let hasDirtOnDiagonalDL;
    let hasDirtOnDiagonalDR;

    let hasGrassOnTop;
    let hasGrassOnBottom;
    let hasGrassOnLeft;
    let hasGrassOnRight;

    let hasGrassOnDiagonalTL;
    let hasGrassOnDiagonalTR;
    let hasGrassOnDiagonalDL;
    let hasGrassOnDiagonalDR;

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
                    hasDirtOnRight &&
                    hasDirtOnDiagonalTL &&
                    hasDirtOnDiagonalTR &&
                    hasDirtOnDiagonalDL &&
                    hasDirtOnDiagonalDR
                ) {
                    if (season = summer) image(dirt[1], i * 32, j * 32);
                    if (season = fall) image(dirt[2], i * 32, j * 32);
                    if (season = winter) image(dirt[3], i * 32, j * 32);
                    if (season = spring) image(dirt[4], i * 32, j * 32);
                }

                else if (
                    hasDirtOnTop &&
                    hasDirtOnDiagonalTR &&
                    hasDirtOnRight &&
                    hasDirtOnDiagonalDR &&
                    hasDirtOnBottom &&
                    hasDirtOnDiagonalDL &&
                    !hasDirtOnDiagonalTL &&
                    hasDirtOnLeft
                ) {
                    if (season = summer) image(dirtEdge[1][1], i * 32, j * 32);
                    if (season = fall) image(dirtEdge[2][1], i * 32, j * 32);
                    if (season = winter) image(dirtEdge[3][1], i * 32, j * 32);
                    if (season = spring) image(dirtEdge[4][1], i * 32, j * 32);
                }

                else if (
                    hasDirtOnTop &&
                    hasDirtOnRight &&
                    hasDirtOnDiagonalDR &&
                    hasDirtOnBottom &&
                    hasDirtOnDiagonalDL &&
                    hasDirtOnLeft &&
                    !hasDirtOnDiagonalTR &&
                    hasDirtOnDiagonalTL
                ) {
                    if (season = summer) image(dirtEdge[1][2], i * 32, j * 32);
                    if (season = fall) image(dirtEdge[2][2], i * 32, j * 32);
                    if (season = winter) image(dirtEdge[3][2], i * 32, j * 32);
                    if (season = spring) image(dirtEdge[4][2], i * 32, j * 32);
                }

                else if (
                    hasDirtOnTop &&
                    hasDirtOnDiagonalTR &&
                    hasDirtOnRight &&
                    hasDirtOnDiagonalDR &&
                    hasDirtOnBottom &&
                    hasDirtOnLeft &&
                    !hasDirtOnDiagonalDL &&
                    hasDirtOnDiagonalTL
                ) {
                    if (season = summer) image(dirtEdge[1][3], i * 32, j * 32);
                    if (season = fall) image(dirtEdge[2][3], i * 32, j * 32);
                    if (season = winter) image(dirtEdge[3][3], i * 32, j * 32);
                    if (season = spring) image(dirtEdge[4][3], i * 32, j * 32);
                }

                else if (
                    hasDirtOnTop &&
                    hasDirtOnDiagonalTR &&
                    hasDirtOnRight &&
                    hasDirtOnBottom &&
                    hasDirtOnDiagonalDL &&
                    hasDirtOnLeft &&
                    !hasDirtOnDiagonalDR &&
                    hasDirtOnDiagonalTL
                ) {
                    if (season = summer) image(dirtEdge[1][4], i * 32, j * 32);
                    if (season = fall) image(dirtEdge[2][4], i * 32, j * 32);
                    if (season = winter) image(dirtEdge[3][4], i * 32, j * 32);
                    if (season = spring) image(dirtEdge[4][4], i * 32, j * 32);
                }

                else if (
                    hasDirtOnTop &&
                    hasDirtOnDiagonalTR &&
                    hasDirtOnRight &&
                    hasDirtOnBottom &&
                    hasDirtOnDiagonalDL &&
                    !hasDirtOnDiagonalTL &&
                    !hasDirtOnDiagonalDR &&
                    hasDirtOnLeft
                ) {
                    if (season = summer) image(dirtDiagonal[1][1], i * 32, j * 32);
                    if (season = fall) image(dirtDiagonal[2][1], i * 32, j * 32);
                    if (season = winter) image(dirtDiagonal[3][1], i * 32, j * 32);
                    if (season = spring) image(dirtDiagonal[4][1], i * 32, j * 32);
                }

                else if (
                    hasDirtOnTop &&
                    hasDirtOnRight &&
                    hasDirtOnDiagonalDR &&
                    hasDirtOnBottom &&
                    hasDirtOnLeft &&
                    !hasDirtOnDiagonalTR &&
                    !hasDirtOnDiagonalDL &&
                    hasDirtOnDiagonalTL
                ) {
                    if (season = summer) image(dirtDiagonal[1][2], i * 32, j * 32);
                    if (season = fall) image(dirtDiagonal[2][2], i * 32, j * 32);
                    if (season = winter) image(dirtDiagonal[3][2], i * 32, j * 32);
                    if (season = spring) image(dirtDiagonal[4][2], i * 32, j * 32);
                }

                else if (
                    hasDirtOnTop &&
                    hasDirtOnRight &&
                    hasDirtOnDiagonalDR &&
                    hasDirtOnBottom &&
                    hasDirtOnDiagonalDL &&
                    !hasDirtOnDiagonalTL &&
                    !hasDirtOnDiagonalTR &&
                    hasDirtOnLeft
                ) {
                    if (season = summer) image(dirtEntrance[1][1], i * 32, j * 32);
                    if (season = fall) image(dirtEntrance[2][1], i * 32, j * 32);
                    if (season = winter) image(dirtEntrance[3][1], i * 32, j * 32);
                    if (season = spring) image(dirtEntrance[4][1], i * 32, j * 32);
                }

                else if (
                    hasDirtOnTop &&
                    hasDirtOnDiagonalTR &&
                    hasDirtOnRight &&
                    hasDirtOnBottom &&
                    hasDirtOnLeft &&
                    !hasDirtOnDiagonalDL &&
                    !hasDirtOnDiagonalDR &&
                    hasDirtOnDiagonalTL
                ) {
                    if (season = summer) image(dirtEntrance[1][2], i * 32, j * 32);
                    if (season = fall) image(dirtEntrance[2][2], i * 32, j * 32);
                    if (season = winter) image(dirtEntrance[3][2], i * 32, j * 32);
                    if (season = spring) image(dirtEntrance[4][2], i * 32, j * 32);
                }

                else if (
                    hasDirtOnTop &&
                    hasDirtOnRight &&
                    hasDirtOnBottom &&
                    hasDirtOnDiagonalDL &&
                    hasDirtOnLeft &&
                    !hasDirtOnDiagonalDR &&
                    !hasDirtOnDiagonalTR &&
                    hasDirtOnDiagonalTL
                ) {
                    if (season = summer) image(dirtEntrance[1][3], i * 32, j * 32);
                    if (season = fall) image(dirtEntrance[2][3], i * 32, j * 32);
                    if (season = winter) image(dirtEntrance[3][3], i * 32, j * 32);
                    if (season = spring) image(dirtEntrance[4][3], i * 32, j * 32);
                }

                else if (
                    hasDirtOnTop &&
                    hasDirtOnDiagonalTR &&
                    hasDirtOnRight &&
                    hasDirtOnDiagonalDR &&
                    hasDirtOnBottom &&
                    !hasDirtOnDiagonalDL &&
                    !hasDirtOnDiagonalTL &&
                    hasDirtOnLeft
                ) {
                    if (season = summer) image(dirtEntrance[1][4], i * 32, j * 32);
                    if (season = fall) image(dirtEntrance[2][4], i * 32, j * 32);
                    if (season = winter) image(dirtEntrance[3][4], i * 32, j * 32);
                    if (season = spring) image(dirtEntrance[4][4], i * 32, j * 32);
                }

                else if (
                    hasDirtOnTop &&
                    !hasDirtOnDiagonalTR &&
                    hasDirtOnRight &&
                    !hasDirtOnDiagonalDR &&
                    hasDirtOnBottom &&
                    !hasDirtOnDiagonalDL &&
                    hasDirtOnDiagonalTL &&
                    hasDirtOnLeft
                ) {
                    if (season = summer) image(dirtTwoExit[1][1], i * 32, j * 32);
                    if (season = fall) image(dirtTwoExit[2][1], i * 32, j * 32);
                    if (season = winter) image(dirtTwoExit[3][1], i * 32, j * 32);
                    if (season = spring) image(dirtTwoExit[4][1], i * 32, j * 32);
                }

                else if (
                    hasDirtOnTop &&
                    hasDirtOnDiagonalTR &&
                    hasDirtOnRight &&
                    !hasDirtOnDiagonalDR &&
                    hasDirtOnBottom &&
                    !hasDirtOnDiagonalDL &&
                    !hasDirtOnDiagonalTL &&
                    hasDirtOnLeft
                ) {
                    if (season = summer) image(dirtTwoExit[1][2], i * 32, j * 32);
                    if (season = fall) image(dirtTwoExit[2][2], i * 32, j * 32);
                    if (season = winter) image(dirtTwoExit[3][2], i * 32, j * 32);
                    if (season = spring) image(dirtTwoExit[4][2], i * 32, j * 32);
                }

                else if (
                    hasDirtOnTop &&
                    !hasDirtOnDiagonalTR &&
                    hasDirtOnRight &&
                    !hasDirtOnDiagonalDR &&
                    hasDirtOnBottom &&
                    hasDirtOnDiagonalDL &&
                    !hasDirtOnDiagonalTL &&
                    hasDirtOnLeft
                ) {
                    if (season = summer) image(dirtTwoExit[1][3], i * 32, j * 32);
                    if (season = fall) image(dirtTwoExit[2][3], i * 32, j * 32);
                    if (season = winter) image(dirtTwoExit[3][3], i * 32, j * 32);
                    if (season = spring) image(dirtTwoExit[4][3], i * 32, j * 32);
                }

                else if (
                    hasDirtOnTop &&
                    !hasDirtOnDiagonalTR &&
                    hasDirtOnRight &&
                    hasDirtOnDiagonalDR &&
                    hasDirtOnBottom &&
                    !hasDirtOnDiagonalDL &&
                    !hasDirtOnDiagonalTL &&
                    hasDirtOnLeft
                ) {
                    if (season = summer) image(dirtTwoExit[1][4], i * 32, j * 32);
                    if (season = fall) image(dirtTwoExit[2][4], i * 32, j * 32);
                    if (season = winter) image(dirtTwoExit[3][4], i * 32, j * 32);
                    if (season = spring) image(dirtTwoExit[4][4], i * 32, j * 32);
                }

                else if (
                    hasDirtOnRight &&
                    hasDirtOnDiagonalDR &&
                    hasDirtOnBottom &&
                    hasDirtOnDiagonalDL &&
                    hasDirtOnLeft
                ) {
                    if (season = summer) image(dirtSide[1][1], i * 32, j * 32);
                    if (season = fall) image(dirtSide[2][1], i * 32, j * 32);
                    if (season = winter) image(dirtSide[3][1], i * 32, j * 32);
                    if (season = spring) image(dirtSide[4][1], i * 32, j * 32);
                }

                else if (
                    hasDirtOnTop &&
                    hasDirtOnDiagonalTR &&
                    hasDirtOnRight &&
                    hasDirtOnLeft &&
                    hasDirtOnDiagonalTL
                ) {
                    if (season = summer) image(dirtSide[1][2], i * 32, j * 32);
                    if (season = fall) image(dirtSide[2][2], i * 32, j * 32);
                    if (season = winter) image(dirtSide[3][2], i * 32, j * 32);
                    if (season = spring) image(dirtSide[4][2], i * 32, j * 32);
                }

                else if (
                    hasDirtOnTop &&
                    hasDirtOnBottom &&
                    hasDirtOnDiagonalDL &&
                    hasDirtOnLeft &&
                    hasDirtOnDiagonalTL
                ) {
                    if (season = summer) image(dirtSide[1][3], i * 32, j * 32);
                    if (season = fall) image(dirtSide[2][3], i * 32, j * 32);
                    if (season = winter) image(dirtSide[3][3], i * 32, j * 32);
                    if (season = spring) image(dirtSide[4][3], i * 32, j * 32);
                }

                else if (
                    hasDirtOnTop &&
                    hasDirtOnDiagonalTR &&
                    hasDirtOnRight &&
                    hasDirtOnDiagonalDR &&
                    hasDirtOnBottom
                ) {
                    if (season = summer) image(dirtSide[1][4], i * 32, j * 32);
                    if (season = fall) image(dirtSide[2][4], i * 32, j * 32);
                    if (season = winter) image(dirtSide[3][4], i * 32, j * 32);
                    if (season = spring) image(dirtSide[4][4], i * 32, j * 32);
                }

                else if (
                    hasDirtOnRight &&
                    hasDirtOnBottom &&
                    !hasDirtOnDiagonalDL &&
                    hasDirtOnDiagonalDR &&
                    hasDirtOnLeft
                ) {
                    if (season = summer) image(dirtNewWay[1][1], i * 32, j * 32);
                    if (season = fall) image(dirtNewWay[2][1], i * 32, j * 32);
                    if (season = winter) image(dirtNewWay[3][1], i * 32, j * 32);
                    if (season = spring) image(dirtNewWay[4][1], i * 32, j * 32);
                }

                else if (
                    hasDirtOnRight &&
                    hasDirtOnBottom &&
                    hasDirtOnDiagonalDL &&
                    !hasDirtOnDiagonalDR &&
                    hasDirtOnLeft
                ) {
                    if (season = summer) image(dirtNewWay[1][2], i * 32, j * 32);
                    if (season = fall) image(dirtNewWay[2][2], i * 32, j * 32);
                    if (season = winter) image(dirtNewWay[3][2], i * 32, j * 32);
                    if (season = spring) image(dirtNewWay[4][2], i * 32, j * 32);
                }

                else if (
                    hasDirtOnTop &&
                    hasDirtOnRight &&
                    !hasDirtOnDiagonalTL &&
                    hasDirtOnDiagonalTR &&
                    hasDirtOnLeft
                ) {
                    if (season = summer) image(dirtNewWay[1][3], i * 32, j * 32);
                    if (season = fall) image(dirtNewWay[2][3], i * 32, j * 32);
                    if (season = winter) image(dirtNewWay[3][3], i * 32, j * 32);
                    if (season = spring) image(dirtNewWay[4][3], i * 32, j * 32);
                }

                else if (
                    hasDirtOnTop &&
                    hasDirtOnRight &&
                    hasDirtOnDiagonalTL &&
                    !hasDirtOnDiagonalTR &&
                    hasDirtOnLeft
                ) {
                    if (season = summer) image(dirtNewWay[1][4], i * 32, j * 32);
                    if (season = fall) image(dirtNewWay[2][4], i * 32, j * 32);
                    if (season = winter) image(dirtNewWay[3][4], i * 32, j * 32);
                    if (season = spring) image(dirtNewWay[4][4], i * 32, j * 32);
                }

                else if (
                    hasDirtOnTop &&
                    hasDirtOnBottom &&
                    hasDirtOnDiagonalDL &&
                    !hasDirtOnDiagonalTL &&
                    hasDirtOnLeft
                ) {
                    if (season = summer) image(dirtNewWay[1][5], i * 32, j * 32);
                    if (season = fall) image(dirtNewWay[2][5], i * 32, j * 32);
                    if (season = winter) image(dirtNewWay[3][5], i * 32, j * 32);
                    if (season = spring) image(dirtNewWay[4][5], i * 32, j * 32);
                }

                else if (
                    hasDirtOnTop &&
                    hasDirtOnBottom &&
                    !hasDirtOnDiagonalDL &&
                    hasDirtOnDiagonalTL &&
                    hasDirtOnLeft
                ) {
                    if (season = summer) image(dirtNewWay[1][6], i * 32, j * 32);
                    if (season = fall) image(dirtNewWay[2][6], i * 32, j * 32);
                    if (season = winter) image(dirtNewWay[3][6], i * 32, j * 32);
                    if (season = spring) image(dirtNewWay[4][6], i * 32, j * 32);
                }

                else if (
                    hasDirtOnTop &&
                    hasDirtOnRight &&
                    hasDirtOnBottom &&
                    hasDirtOnDiagonalDR &&
                    !hasDirtOnDiagonalTR
                ) {
                    if (season = summer) image(dirtNewWay[1][7], i * 32, j * 32);
                    if (season = fall) image(dirtNewWay[2][7], i * 32, j * 32);
                    if (season = winter) image(dirtNewWay[3][7], i * 32, j * 32);
                    if (season = spring) image(dirtNewWay[4][7], i * 32, j * 32);
                }

                else if (
                    hasDirtOnTop &&
                    hasDirtOnRight &&
                    hasDirtOnBottom &&
                    !hasDirtOnDiagonalDR &&
                    hasDirtOnDiagonalTR
                ) {
                    if (season = summer) image(dirtNewWay[1][8], i * 32, j * 32);
                    if (season = fall) image(dirtNewWay[2][8], i * 32, j * 32);
                    if (season = winter) image(dirtNewWay[3][8], i * 32, j * 32);
                    if (season = spring) image(dirtNewWay[4][8], i * 32, j * 32);
                }

                else if (
                    hasDirtOnTop &&
                    hasDirtOnRight &&
                    hasDirtOnBottom &&
                    !hasDirtOnDiagonalDL &&
                    !hasDirtOnDiagonalDR &&
                    !hasDirtOnDiagonalTL &&
                    !hasDirtOnDiagonalTR &&
                    hasDirtOnLeft
                ) {
                    if (season = summer) image(dirtMiddle[1], i * 32, j * 32);
                    if (season = fall) image(dirtMiddle[2], i * 32, j * 32);
                    if (season = winter) image(dirtMiddle[3], i * 32, j * 32);
                    if (season = spring) image(dirtMiddle[4], i * 32, j * 32);
                }

                else if (
                    hasDirtOnRight &&
                    hasDirtOnDiagonalDR &&
                    hasDirtOnBottom
                ) {
                    if (season = summer) image(dirtCorner[1][1], i * 32, j * 32);
                    if (season = fall) image(dirtCorner[2][1], i * 32, j * 32);
                    if (season = winter) image(dirtCorner[3][1], i * 32, j * 32);
                    if (season = spring) image(dirtCorner[4][1], i * 32, j * 32);
                }

                else if (
                    hasDirtOnBottom &&
                    hasDirtOnDiagonalDL &&
                    hasDirtOnLeft
                ) {
                    if (season = summer) image(dirtCorner[1][2], i * 32, j * 32);
                    if (season = fall) image(dirtCorner[2][2], i * 32, j * 32);
                    if (season = winter) image(dirtCorner[3][2], i * 32, j * 32);
                    if (season = spring) image(dirtCorner[4][2], i * 32, j * 32);
                }

                else if (
                    hasDirtOnTop &&
                    hasDirtOnDiagonalTR &&
                    hasDirtOnRight
                ) {
                    if (season = summer) image(dirtCorner[1][3], i * 32, j * 32);
                    if (season = fall) image(dirtCorner[2][3], i * 32, j * 32);
                    if (season = winter) image(dirtCorner[3][3], i * 32, j * 32);
                    if (season = spring) image(dirtCorner[4][3], i * 32, j * 32);
                }

                else if (
                    hasDirtOnTop &&
                    hasDirtOnLeft &&
                    hasDirtOnDiagonalTL
                ) {
                    if (season = summer) image(dirtCorner[1][4], i * 32, j * 32);
                    if (season = fall) image(dirtCorner[2][4], i * 32, j * 32);
                    if (season = winter) image(dirtCorner[3][4], i * 32, j * 32);
                    if (season = spring) image(dirtCorner[4][4], i * 32, j * 32);
                }

                else if (
                    hasDirtOnTop &&
                    hasDirtOnRight &&
                    !hasDirtOnDiagonalTL &&
                    !hasDirtOnDiagonalTR &&
                    hasDirtOnLeft
                ) {
                    if (season = summer) image(dirtTD[1][1], i * 32, j * 32);
                    if (season = fall) image(dirtTD[2][1], i * 32, j * 32);
                    if (season = winter) image(dirtTD[3][1], i * 32, j * 32);
                    if (season = spring) image(dirtTD[4][1], i * 32, j * 32);
                }

                else if (
                    hasDirtOnRight &&
                    hasDirtOnBottom &&
                    !hasDirtOnDiagonalDL &&
                    !hasDirtOnDiagonalDR &&
                    hasDirtOnLeft
                ) {
                    if (season = summer) image(dirtTD[1][2], i * 32, j * 32);
                    if (season = fall) image(dirtTD[2][2], i * 32, j * 32);
                    if (season = winter) image(dirtTD[3][2], i * 32, j * 32);
                    if (season = spring) image(dirtTD[4][2], i * 32, j * 32);
                }

                else if (
                    hasDirtOnTop &&
                    hasDirtOnRight &&
                    !hasDirtOnDiagonalDR &&
                    !hasDirtOnDiagonalTR &&
                    hasDirtOnBottom
                ) {
                    if (season = summer) image(dirtTD[1][3], i * 32, j * 32);
                    if (season = fall) image(dirtTD[2][3], i * 32, j * 32);
                    if (season = winter) image(dirtTD[3][3], i * 32, j * 32);
                    if (season = spring) image(dirtTD[4][3], i * 32, j * 32);
                }

                else if (
                    hasDirtOnTop &&
                    hasDirtOnBottom &&
                    !hasDirtOnDiagonalDL &&
                    !hasDirtOnDiagonalTL &&
                    hasDirtOnLeft
                ) {
                    if (season = summer) image(dirtTD[1][4], i * 32, j * 32);
                    if (season = fall) image(dirtTD[2][4], i * 32, j * 32);
                    if (season = winter) image(dirtTD[3][4], i * 32, j * 32);
                    if (season = spring) image(dirtTD[4][4], i * 32, j * 32);
                }

                else if (
                    hasDirtOnRight &&
                    !hasDirtOnDiagonalDR &&
                    hasDirtOnBottom
                ) {
                    if (season = summer) image(dirtLD[1][1], i * 32, j * 32);
                    if (season = fall) image(dirtLD[2][1], i * 32, j * 32);
                    if (season = winter) image(dirtLD[3][1], i * 32, j * 32);
                    if (season = spring) image(dirtLD[4][1], i * 32, j * 32);
                }

                else if (
                    hasDirtOnBottom &&
                    !hasDirtOnDiagonalDL &&
                    hasDirtOnLeft
                ) {
                    if (season = summer) image(dirtLD[1][2], i * 32, j * 32);
                    if (season = fall) image(dirtLD[2][2], i * 32, j * 32);
                    if (season = winter) image(dirtLD[3][2], i * 32, j * 32);
                    if (season = spring) image(dirtLD[4][2], i * 32, j * 32);
                }

                else if (
                    hasDirtOnTop &&
                    !hasDirtOnDiagonalTR &&
                    hasDirtOnRight
                ) {
                    if (season = summer) image(dirtLD[1][3], i * 32, j * 32);
                    if (season = fall) image(dirtLD[2][3], i * 32, j * 32);
                    if (season = winter) image(dirtLD[3][3], i * 32, j * 32);
                    if (season = spring) image(dirtLD[4][3], i * 32, j * 32);
                }

                else if (
                    hasDirtOnTop &&
                    !hasDirtOnDiagonalTL &&
                    hasDirtOnLeft
                ) {
                    if (season = summer) image(dirtLD[1][4], i * 32, j * 32);
                    if (season = fall) image(dirtLD[2][4], i * 32, j * 32);
                    if (season = winter) image(dirtLD[3][4], i * 32, j * 32);
                    if (season = spring) image(dirtLD[4][4], i * 32, j * 32);
                }

                else if (
                    hasDirtOnTop &&
                    hasDirtOnBottom
                ) {
                    if (season = summer) image(dirtTwoD[1][1], i * 32, j * 32);
                    if (season = fall) image(dirtTwoD[2][1], i * 32, j * 32);
                    if (season = winter) image(dirtTwoD[3][1], i * 32, j * 32);
                    if (season = spring) image(dirtTwoD[4][1], i * 32, j * 32);
                }

                else if (
                    hasDirtOnRight &&
                    hasDirtOnLeft
                ) {
                    if (season = summer) image(dirtTwoD[1][2], i * 32, j * 32);
                    if (season = fall) image(dirtTwoD[2][2], i * 32, j * 32);
                    if (season = winter) image(dirtTwoD[3][2], i * 32, j * 32);
                    if (season = spring) image(dirtTwoD[4][2], i * 32, j * 32);
                }

                else if (
                    hasDirtOnBottom
                ) {
                    if (season = summer) image(dirtOneD[1][1], i * 32, j * 32);
                    if (season = fall) image(dirtOneD[2][1], i * 32, j * 32);
                    if (season = winter) image(dirtOneD[3][1], i * 32, j * 32);
                    if (season = spring) image(dirtOneD[4][1], i * 32, j * 32);
                }

                else if (
                    hasDirtOnTop
                ) {
                    if (season = summer) image(dirtOneD[1][2], i * 32, j * 32);
                    if (season = fall) image(dirtOneD[2][2], i * 32, j * 32);
                    if (season = winter) image(dirtOneD[3][2], i * 32, j * 32);
                    if (season = spring) image(dirtOneD[4][2], i * 32, j * 32);
                }

                else if (
                    hasDirtOnLeft
                ) {
                    if (season = summer) image(dirtOneD[1][3], i * 32, j * 32);
                    if (season = fall) image(dirtOneD[2][3], i * 32, j * 32);
                    if (season = winter) image(dirtOneD[3][3], i * 32, j * 32);
                    if (season = spring) image(dirtOneD[4][3], i * 32, j * 32);
                }

                else if (
                    hasDirtOnRight
                ) {
                    if (season = summer) image(dirtOneD[1][4], i * 32, j * 32);
                    if (season = fall) image(dirtOneD[2][4], i * 32, j * 32);
                    if (season = winter) image(dirtOneD[3][4], i * 32, j * 32);
                    if (season = spring) image(dirtOneD[4][4], i * 32, j * 32);
                }

                else {
                    if (season = summer) image(dirtDot[1], i * 32, j * 32);
                    if (season = fall) image(dirtDot[2], i * 32, j * 32);
                    if (season = winter) image(dirtDot[3], i * 32, j * 32);
                    if (season = spring) image(dirtDot[4], i * 32, j * 32);
                }
            }

            if (tilesMap[j][i] == 1) {
                if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnBottom || hasDirtOnBottom) &&
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (hasGrassOnRight || hasDirtOnRight) &&
                    (hasGrassOnDiagonalTL || hasDirtOnDiagonalTL) &&
                    (hasGrassOnDiagonalTR || hasDirtOnDiagonalTR) &&
                    (hasGrassOnDiagonalDL || hasDirtOnDiagonalDL) &&
                    (hasGrassOnDiagonalDR || hasDirtOnDiagonalDR)
                ) image(grass, i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnBottom || hasDirtOnBottom) &&
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (hasGrassOnRight || hasDirtOnRight) &&
                    (!hasGrassOnDiagonalTL && !hasDirtOnDiagonalTL) &&
                    (hasGrassOnDiagonalTR || hasDirtOnDiagonalTR) &&
                    (hasGrassOnDiagonalDL || hasDirtOnDiagonalDL) &&
                    (hasGrassOnDiagonalDR || hasDirtOnDiagonalDR)
                ) image(grassEdge[1], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnBottom || hasDirtOnBottom) &&
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (hasGrassOnRight || hasDirtOnRight) &&
                    (hasGrassOnDiagonalTL || hasDirtOnDiagonalTL) &&
                    (!hasGrassOnDiagonalTR && !hasDirtOnDiagonalTR) &&
                    (hasGrassOnDiagonalDL || hasDirtOnDiagonalDL) &&
                    (hasGrassOnDiagonalDR || hasDirtOnDiagonalDR)
                ) image(grassEdge[2], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnBottom || hasDirtOnBottom) &&
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (hasGrassOnRight || hasDirtOnRight) &&
                    (hasGrassOnDiagonalTL || hasDirtOnDiagonalTL) &&
                    (hasGrassOnDiagonalTR || hasDirtOnDiagonalTR) &&
                    (!hasGrassOnDiagonalDL && !hasDirtOnDiagonalDL) &&
                    (hasGrassOnDiagonalDR || hasDirtOnDiagonalDR)
                ) image(grassEdge[3], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnBottom || hasDirtOnBottom) &&
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (hasGrassOnRight || hasDirtOnRight) &&
                    (hasGrassOnDiagonalTL || hasDirtOnDiagonalTL) &&
                    (hasGrassOnDiagonalTR || hasDirtOnDiagonalTR) &&
                    (hasGrassOnDiagonalDL || hasDirtOnDiagonalDL) &&
                    (!hasGrassOnDiagonalDR && !hasDirtOnDiagonalDR)
                ) image(grassEdge[4], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnBottom || hasDirtOnBottom) &&
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (hasGrassOnRight || hasDirtOnRight) &&
                    (!hasGrassOnDiagonalTL && !hasDirtOnDiagonalTL) &&
                    (hasGrassOnDiagonalTR || hasDirtOnDiagonalTR) &&
                    (hasGrassOnDiagonalDL || hasDirtOnDiagonalDL) &&
                    (!hasGrassOnDiagonalDR && !hasDirtOnDiagonalDR)
                ) image(grassDiagonal[1], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnBottom || hasDirtOnBottom) &&
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (hasGrassOnRight || hasDirtOnRight) &&
                    (hasGrassOnDiagonalTL || hasDirtOnDiagonalTL) &&
                    (!hasGrassOnDiagonalTR && !hasDirtOnDiagonalTR) &&
                    (!hasGrassOnDiagonalDL && !hasDirtOnDiagonalDL) &&
                    (hasGrassOnDiagonalDR || hasDirtOnDiagonalDR)
                ) image(grassDiagonal[2], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnBottom || hasDirtOnBottom) &&
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (hasGrassOnRight || hasDirtOnRight) &&
                    (!hasGrassOnDiagonalTL && !hasDirtOnDiagonalTL) &&
                    (!hasGrassOnDiagonalTR && !hasDirtOnDiagonalTR) &&
                    (hasGrassOnDiagonalDL || hasDirtOnDiagonalDL) &&
                    (hasGrassOnDiagonalDR || hasDirtOnDiagonalDR)
                ) image(grassEntrance[1], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnBottom || hasDirtOnBottom) &&
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (hasGrassOnRight || hasDirtOnRight) &&
                    (hasGrassOnDiagonalTL || hasDirtOnDiagonalTL) &&
                    (hasGrassOnDiagonalTR || hasDirtOnDiagonalTR) &&
                    (!hasGrassOnDiagonalDL && !hasDirtOnDiagonalDL) &&
                    (!hasGrassOnDiagonalDR && !hasDirtOnDiagonalDR)
                ) image(grassEntrance[2], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnBottom || hasDirtOnBottom) &&
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (hasGrassOnRight || hasDirtOnRight) &&
                    (hasGrassOnDiagonalTL || hasDirtOnDiagonalTL) &&
                    (!hasGrassOnDiagonalTR && !hasDirtOnDiagonalTR) &&
                    (hasGrassOnDiagonalDL || hasDirtOnDiagonalDL) &&
                    (!hasGrassOnDiagonalDR && !hasDirtOnDiagonalDR)
                ) image(grassEntrance[3], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnBottom || hasDirtOnBottom) &&
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (hasGrassOnRight || hasDirtOnRight) &&
                    (!hasGrassOnDiagonalTL && !hasDirtOnDiagonalTL) &&
                    (hasGrassOnDiagonalTR || hasDirtOnDiagonalTR) &&
                    (!hasGrassOnDiagonalDL && !hasDirtOnDiagonalDL) &&
                    (hasGrassOnDiagonalDR || hasDirtOnDiagonalDR)
                ) image(grassEntrance[4], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnBottom || hasDirtOnBottom) &&
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (hasGrassOnRight || hasDirtOnRight) &&
                    (hasGrassOnDiagonalTL || hasDirtOnDiagonalTL) &&
                    (!hasGrassOnDiagonalTR && !hasDirtOnDiagonalTR) &&
                    (!hasGrassOnDiagonalDL && !hasDirtOnDiagonalDL) &&
                    (!hasGrassOnDiagonalDR && !hasDirtOnDiagonalDR)
                ) image(grassTwoExit[1], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnBottom || hasDirtOnBottom) &&
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (hasGrassOnRight || hasDirtOnRight) &&
                    (!hasGrassOnDiagonalTL && !hasDirtOnDiagonalTL) &&
                    (hasGrassOnDiagonalTR || hasDirtOnDiagonalTR) &&
                    (!hasGrassOnDiagonalDL && !hasDirtOnDiagonalDL) &&
                    (!hasGrassOnDiagonalDR && !hasDirtOnDiagonalDR)
                ) image(grassTwoExit[2], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnBottom || hasDirtOnBottom) &&
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (hasGrassOnRight || hasDirtOnRight) &&
                    (!hasGrassOnDiagonalTL && !hasDirtOnDiagonalTL) &&
                    (!hasGrassOnDiagonalTR && !hasDirtOnDiagonalTR) &&
                    (hasGrassOnDiagonalDL || hasDirtOnDiagonalDL) &&
                    (!hasGrassOnDiagonalDR && !hasDirtOnDiagonalDR)
                ) image(grassTwoExit[3], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnBottom || hasDirtOnBottom) &&
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (hasGrassOnRight || hasDirtOnRight) &&
                    (!hasGrassOnDiagonalTL && !hasDirtOnDiagonalTL) &&
                    (!hasGrassOnDiagonalTR && !hasDirtOnDiagonalTR) &&
                    (!hasGrassOnDiagonalDL && !hasDirtOnDiagonalDL) &&
                    (hasGrassOnDiagonalDR || hasDirtOnDiagonalDR)
                ) image(grassTwoExit[4], i * 32, j * 32);

                else if (
                    (hasGrassOnBottom || hasDirtOnBottom) &&
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (hasGrassOnRight || hasDirtOnRight) &&
                    (hasGrassOnDiagonalDL || hasDirtOnDiagonalDL) &&
                    (hasGrassOnDiagonalDR || hasDirtOnDiagonalDR)
                ) image(grassSide[1], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (hasGrassOnRight || hasDirtOnRight) &&
                    (hasGrassOnDiagonalTL || hasDirtOnDiagonalTL) &&
                    (hasGrassOnDiagonalTR || hasDirtOnDiagonalTR)
                ) image(grassSide[2], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnBottom || hasDirtOnBottom) &&
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (hasGrassOnDiagonalTL || hasDirtOnDiagonalTL) &&
                    (hasGrassOnDiagonalDL || hasDirtOnDiagonalDL)
                ) image(grassSide[3], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnBottom || hasDirtOnBottom) &&
                    (hasGrassOnRight || hasDirtOnRight) &&
                    (hasGrassOnDiagonalTR || hasDirtOnDiagonalTR) &&
                    (hasGrassOnDiagonalDR || hasDirtOnDiagonalDR)
                ) image(grassSide[4], i * 32, j * 32);

                else if (
                    (hasGrassOnBottom || hasDirtOnBottom) &&
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (hasGrassOnRight || hasDirtOnRight) &&
                    (!hasGrassOnDiagonalDL && !hasDirtOnDiagonalDL) &&
                    (hasGrassOnDiagonalDR || hasDirtOnDiagonalDR)
                ) image(grassNewWay[1], i * 32, j * 32);

                else if (
                    (hasGrassOnBottom || hasDirtOnBottom) &&
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (hasGrassOnRight || hasDirtOnRight) &&
                    (hasGrassOnDiagonalDL || hasDirtOnDiagonalDL) &&
                    (!hasGrassOnDiagonalDR && !hasDirtOnDiagonalDR)
                ) image(grassNewWay[2], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (hasGrassOnRight || hasDirtOnRight) &&
                    (!hasGrassOnDiagonalTL && !hasDirtOnDiagonalTL) &&
                    (hasGrassOnDiagonalTR || hasDirtOnDiagonalTR)
                ) image(grassNewWay[3], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (hasGrassOnRight || hasDirtOnRight) &&
                    (hasGrassOnDiagonalTL || hasDirtOnDiagonalTL) &&
                    (!hasGrassOnDiagonalTR && !hasDirtOnDiagonalTR)
                ) image(grassNewWay[4], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnBottom || hasDirtOnBottom) &&
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (!hasGrassOnDiagonalTL && !hasDirtOnDiagonalTL) &&
                    (hasGrassOnDiagonalDL || hasDirtOnDiagonalDL)
                ) image(grassNewWay[5], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnBottom || hasDirtOnBottom) &&
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (hasGrassOnDiagonalTL || hasDirtOnDiagonalTL) &&
                    (!hasGrassOnDiagonalDL && !hasDirtOnDiagonalDL)
                ) image(grassNewWay[6], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnBottom || hasDirtOnBottom) &&
                    (hasGrassOnRight || hasDirtOnRight) &&
                    (!hasGrassOnDiagonalTR && !hasDirtOnDiagonalTR) &&
                    (hasGrassOnDiagonalDR || hasDirtOnDiagonalDR)
                ) image(grassNewWay[7], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnBottom || hasDirtOnBottom) &&
                    (hasGrassOnRight || hasDirtOnRight) &&
                    (hasGrassOnDiagonalTR || hasDirtOnDiagonalTR) &&
                    (!hasGrassOnDiagonalDR && !hasDirtOnDiagonalDR)
                ) image(grassNewWay[8], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnBottom || hasDirtOnBottom) &&
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (hasGrassOnRight || hasDirtOnRight) &&
                    (!hasGrassOnDiagonalTL && !hasDirtOnDiagonalTL) &&
                    (!hasGrassOnDiagonalTR && !hasDirtOnDiagonalTR) &&
                    (!hasGrassOnDiagonalDL && !hasDirtOnDiagonalDL) &&
                    (!hasGrassOnDiagonalDR && !hasDirtOnDiagonalDR)
                ) image(grassMiddle, i * 32, j * 32);

                else if (
                    (hasGrassOnBottom || hasDirtOnBottom) &&
                    (hasGrassOnRight || hasDirtOnRight) &&
                    (hasGrassOnDiagonalDR || hasDirtOnDiagonalDR)
                ) image(grassCorner[1], i * 32, j * 32);

                else if (
                    (hasGrassOnBottom || hasDirtOnBottom) &&
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (hasGrassOnDiagonalDL || hasDirtOnDiagonalDL)
                ) image(grassCorner[2], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnRight || hasDirtOnRight) &&
                    (hasGrassOnDiagonalTR || hasDirtOnDiagonalTR)
                ) image(grassCorner[3], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (hasGrassOnDiagonalTL || hasDirtOnDiagonalTL)
                ) image(grassCorner[4], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (hasGrassOnRight || hasDirtOnRight) &&
                    (!hasGrassOnDiagonalTL && !hasDirtOnDiagonalTL) &&
                    (!hasGrassOnDiagonalTR && !hasDirtOnDiagonalTR)
                ) image(grassTD[1], i * 32, j * 32);

                else if (
                    (hasGrassOnBottom || hasDirtOnBottom) &&
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (hasGrassOnRight || hasDirtOnRight) &&
                    (!hasGrassOnDiagonalDL && !hasDirtOnDiagonalDL) &&
                    (!hasGrassOnDiagonalDR && !hasDirtOnDiagonalDR)
                ) image(grassTD[2], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnBottom || hasDirtOnBottom) &&
                    (hasGrassOnRight || hasDirtOnRight) &&
                    (!hasGrassOnDiagonalTR && !hasDirtOnDiagonalTR) &&
                    (!hasGrassOnDiagonalDR && !hasDirtOnDiagonalDR)
                ) image(grassTD[3], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnBottom || hasDirtOnBottom) &&
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (!hasGrassOnDiagonalTL && !hasDirtOnDiagonalTL) &&
                    (!hasGrassOnDiagonalDL && !hasDirtOnDiagonalDL)
                ) image(grassTD[4], i * 32, j * 32);

                else if (
                    (hasGrassOnBottom || hasDirtOnBottom) &&
                    (hasGrassOnRight || hasDirtOnRight) &&
                    (!hasGrassOnDiagonalDR && !hasDirtOnDiagonalDR)
                ) image(grassLD[1], i * 32, j * 32);

                else if (
                    (hasGrassOnBottom || hasDirtOnBottom) &&
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (!hasGrassOnDiagonalDL && !hasDirtOnDiagonalDL)
                ) image(grassLD[2], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnRight || hasDirtOnRight) &&
                    (!hasGrassOnDiagonalTR && !hasDirtOnDiagonalTR)
                ) image(grassLD[3], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (!hasGrassOnDiagonalTL && !hasDirtOnDiagonalTL)
                ) image(grassLD[4], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop) &&
                    (hasGrassOnBottom || hasDirtOnBottom)
                ) image(grassTwoD[1], i * 32, j * 32);

                else if (
                    (hasGrassOnLeft || hasDirtOnLeft) &&
                    (hasGrassOnRight || hasDirtOnRight)
                ) image(grassTwoD[2], i * 32, j * 32);

                else if (
                    (hasGrassOnBottom || hasDirtOnBottom)
                ) image(grassOneD[1], i * 32, j * 32);

                else if (
                    (hasGrassOnTop || hasDirtOnTop)
                ) image(grassOneD[2], i * 32, j * 32);

                else if (
                    (hasGrassOnLeft || hasDirtOnLeft)
                ) image(grassOneD[3], i * 32, j * 32);

                else if (
                    (hasGrassOnRight || hasDirtOnRight)
                ) image(grassOneD[4], i * 32, j * 32);

                else image(grassDot, i * 32, j * 32);
            }
        }
}