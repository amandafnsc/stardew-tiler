let gameBackground;

let imgGrass, imgGrassDot, imgGrassMiddle, imgDirt, imgDirtDot, imgDirtMiddle;

let grassOneD = [];
let grassTwoD = [];
let grassLD = [];
let grassCorner = [];
let grassSide = [];
let grassTD = [];
let grassEntrance = [];
let grassDiagonal = [];
let grassEdge = [];
let grassNewWay = [];
let grassTwoExit = [];

let dirtOneD = [];
let dirtTwoD = [];
let dirtLD = [];
let dirtCorner = [];
let dirtSide = [];
let dirtTD = [];
let dirtEntrance = [];
let dirtDiagonal = [];
let dirtEdge = [];
let dirtNewWay = [];
let dirtTwoExit = [];

let islandExit = [];

let tree = [];

function drawTreesMap() {
    for (let i = 0; i < 40; i++)
        for (let j = 0; j < 20; j++) {
            if (treesMap[j][i] == 1) image(tree[1], i * 32 + 8, j * 32 + 8);
            if (treesMap[j][i] == 2) image(tree[2], i * 32 + 8, j * 32 + 8);
            if (treesMap[j][i] == 3) image(tree[3], i * 32 + 8, j * 32 + 8);
            if (treesMap[j][i] == 4) image(tree[4], i * 32 + 8, j * 32 - 8);
            if (treesMap[j][i] == 5) image(tree[5], i * 32 - 8, j * 32 - 66);
            if (treesMap[j][i] == 6) image(tree[6], i * 32 + 8, j * 32 + 4);
        }
}

function drawTilesMap() {
    image(imgGameBackground, 0, 0);

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
                ) image(imgDirt, i * 32, j * 32);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnDiagonalTR &&
                    hasDirtOnRight &&
                    hasDirtOnDiagonalDR &&
                    hasDirtOnBottom &&
                    hasDirtOnDiagonalDL &&
                    !hasDirtOnDiagonalTL &&
                    hasDirtOnLeft
                ) image(dirtEdge[1], i * 32, j * 32);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnRight &&
                    hasDirtOnDiagonalDR &&
                    hasDirtOnBottom &&
                    hasDirtOnDiagonalDL &&
                    hasDirtOnLeft &&
                    !hasDirtOnDiagonalTR &&
                    hasDirtOnDiagonalTL
                ) image(dirtEdge[2], i * 32, j * 32);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnDiagonalTR &&
                    hasDirtOnRight &&
                    hasDirtOnDiagonalDR &&
                    hasDirtOnBottom &&
                    hasDirtOnLeft &&
                    !hasDirtOnDiagonalDL &&
                    hasDirtOnDiagonalTL
                ) image(dirtEdge[3], i * 32, j * 32);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnDiagonalTR &&
                    hasDirtOnRight &&
                    hasDirtOnBottom &&
                    hasDirtOnDiagonalDL &&
                    hasDirtOnLeft &&
                    !hasDirtOnDiagonalDR &&
                    hasDirtOnDiagonalTL
                ) image(dirtEdge[4], i * 32, j * 32);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnDiagonalTR &&
                    hasDirtOnRight &&
                    hasDirtOnBottom &&
                    hasDirtOnDiagonalDL &&
                    !hasDirtOnDiagonalTL &&
                    !hasDirtOnDiagonalDR &&
                    hasDirtOnLeft
                ) image(dirtDiagonal[1], i * 32, j * 32);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnRight &&
                    hasDirtOnDiagonalDR &&
                    hasDirtOnBottom &&
                    hasDirtOnLeft &&
                    !hasDirtOnDiagonalTR &&
                    !hasDirtOnDiagonalDL &&
                    hasDirtOnDiagonalTL
                ) image(dirtDiagonal[2], i * 32, j * 32);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnRight &&
                    hasDirtOnDiagonalDR &&
                    hasDirtOnBottom &&
                    hasDirtOnDiagonalDL &&
                    !hasDirtOnDiagonalTL &&
                    !hasDirtOnDiagonalTR &&
                    hasDirtOnLeft
                ) image(dirtEntrance[1], i * 32, j * 32);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnDiagonalTR &&
                    hasDirtOnRight &&
                    hasDirtOnBottom &&
                    hasDirtOnLeft &&
                    !hasDirtOnDiagonalDL &&
                    !hasDirtOnDiagonalDR &&
                    hasDirtOnDiagonalTL
                ) image(dirtEntrance[2], i * 32, j * 32);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnRight &&
                    hasDirtOnBottom &&
                    hasDirtOnDiagonalDL &&
                    hasDirtOnLeft &&
                    !hasDirtOnDiagonalDR &&
                    !hasDirtOnDiagonalTR &&
                    hasDirtOnDiagonalTL
                ) image(dirtEntrance[3], i * 32, j * 32);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnDiagonalTR &&
                    hasDirtOnRight &&
                    hasDirtOnDiagonalDR &&
                    hasDirtOnBottom &&
                    !hasDirtOnDiagonalDL &&
                    !hasDirtOnDiagonalTL &&
                    hasDirtOnLeft
                ) image(dirtEntrance[4], i * 32, j * 32);

                else if (
                    hasDirtOnTop &&
                    !hasDirtOnDiagonalTR &&
                    hasDirtOnRight &&
                    !hasDirtOnDiagonalDR &&
                    hasDirtOnBottom &&
                    !hasDirtOnDiagonalDL &&
                    hasDirtOnDiagonalTL &&
                    hasDirtOnLeft
                ) image(dirtTwoExit[1], i * 32, j * 32);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnDiagonalTR &&
                    hasDirtOnRight &&
                    !hasDirtOnDiagonalDR &&
                    hasDirtOnBottom &&
                    !hasDirtOnDiagonalDL &&
                    !hasDirtOnDiagonalTL &&
                    hasDirtOnLeft
                ) image(dirtTwoExit[2], i * 32, j * 32);

                else if (
                    hasDirtOnTop &&
                    !hasDirtOnDiagonalTR &&
                    hasDirtOnRight &&
                    !hasDirtOnDiagonalDR &&
                    hasDirtOnBottom &&
                    hasDirtOnDiagonalDL &&
                    !hasDirtOnDiagonalTL &&
                    hasDirtOnLeft
                ) image(dirtTwoExit[3], i * 32, j * 32);

                else if (
                    hasDirtOnTop &&
                    !hasDirtOnDiagonalTR &&
                    hasDirtOnRight &&
                    hasDirtOnDiagonalDR &&
                    hasDirtOnBottom &&
                    !hasDirtOnDiagonalDL &&
                    !hasDirtOnDiagonalTL &&
                    hasDirtOnLeft
                ) image(dirtTwoExit[4], i * 32, j * 32);

                else if (
                    hasDirtOnRight &&
                    hasDirtOnDiagonalDR &&
                    hasDirtOnBottom &&
                    hasDirtOnDiagonalDL &&
                    hasDirtOnLeft
                ) image(dirtSide[1], i * 32, j * 32);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnDiagonalTR &&
                    hasDirtOnRight &&
                    hasDirtOnLeft &&
                    hasDirtOnDiagonalTL
                ) image(dirtSide[2], i * 32, j * 32);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnBottom &&
                    hasDirtOnDiagonalDL &&
                    hasDirtOnLeft &&
                    hasDirtOnDiagonalTL
                ) image(dirtSide[3], i * 32, j * 32);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnDiagonalTR &&
                    hasDirtOnRight &&
                    hasDirtOnDiagonalDR &&
                    hasDirtOnBottom
                ) image(dirtSide[4], i * 32, j * 32);

                else if (
                    hasDirtOnRight &&
                    hasDirtOnBottom &&
                    !hasDirtOnDiagonalDL &&
                    hasDirtOnDiagonalDR &&
                    hasDirtOnLeft
                ) image(dirtNewWay[1], i * 32, j * 32);

                else if (
                    hasDirtOnRight &&
                    hasDirtOnBottom &&
                    hasDirtOnDiagonalDL &&
                    !hasDirtOnDiagonalDR &&
                    hasDirtOnLeft
                ) image(dirtNewWay[2], i * 32, j * 32);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnRight &&
                    !hasDirtOnDiagonalTL &&
                    hasDirtOnDiagonalTR &&
                    hasDirtOnLeft
                ) image(dirtNewWay[3], i * 32, j * 32);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnRight &&
                    hasDirtOnDiagonalTL &&
                    !hasDirtOnDiagonalTR &&
                    hasDirtOnLeft
                ) image(dirtNewWay[4], i * 32, j * 32);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnBottom &&
                    hasDirtOnDiagonalDL &&
                    !hasDirtOnDiagonalTL &&
                    hasDirtOnLeft
                ) image(dirtNewWay[5], i * 32, j * 32);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnBottom &&
                    !hasDirtOnDiagonalDL &&
                    hasDirtOnDiagonalTL &&
                    hasDirtOnLeft
                ) image(dirtNewWay[6], i * 32, j * 32);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnRight &&
                    hasDirtOnBottom &&
                    hasDirtOnDiagonalDR &&
                    !hasDirtOnDiagonalTR
                ) image(dirtNewWay[7], i * 32, j * 32);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnRight &&
                    hasDirtOnBottom &&
                    !hasDirtOnDiagonalDR &&
                    hasDirtOnDiagonalTR
                ) image(dirtNewWay[8], i * 32, j * 32);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnRight &&
                    hasDirtOnBottom &&
                    !hasDirtOnDiagonalDL &&
                    !hasDirtOnDiagonalDR &&
                    !hasDirtOnDiagonalTL &&
                    !hasDirtOnDiagonalTR &&
                    hasDirtOnLeft
                ) image(imgDirtMiddle, i * 32, j * 32);

                else if (
                    hasDirtOnRight &&
                    hasDirtOnDiagonalDR &&
                    hasDirtOnBottom
                ) image(dirtCorner[1], i * 32, j * 32);

                else if (
                    hasDirtOnBottom &&
                    hasDirtOnDiagonalDL &&
                    hasDirtOnLeft
                ) image(dirtCorner[2], i * 32, j * 32);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnDiagonalTR &&
                    hasDirtOnRight
                ) image(dirtCorner[3], i * 32, j * 32);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnLeft &&
                    hasDirtOnDiagonalTL
                ) image(dirtCorner[4], i * 32, j * 32);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnRight &&
                    !hasDirtOnDiagonalTL &&
                    !hasDirtOnDiagonalTR &&
                    hasDirtOnLeft
                ) image(dirtTD[1], i * 32, j * 32);

                else if (
                    hasDirtOnRight &&
                    hasDirtOnBottom &&
                    !hasDirtOnDiagonalDL &&
                    !hasDirtOnDiagonalDR &&
                    hasDirtOnLeft
                ) image(dirtTD[2], i * 32, j * 32);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnRight &&
                    !hasDirtOnDiagonalDR &&
                    !hasDirtOnDiagonalTR &&
                    hasDirtOnBottom
                ) image(dirtTD[3], i * 32, j * 32);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnBottom &&
                    !hasDirtOnDiagonalDL &&
                    !hasDirtOnDiagonalTL &&
                    hasDirtOnLeft
                ) image(dirtTD[4], i * 32, j * 32);

                else if (
                    hasDirtOnRight &&
                    !hasDirtOnDiagonalDR &&
                    hasDirtOnBottom
                ) image(dirtLD[1], i * 32, j * 32);

                else if (
                    hasDirtOnBottom &&
                    !hasDirtOnDiagonalDL &&
                    hasDirtOnLeft
                ) image(dirtLD[2], i * 32, j * 32);

                else if (
                    hasDirtOnTop &&
                    !hasDirtOnDiagonalTR &&
                    hasDirtOnRight
                ) image(dirtLD[3], i * 32, j * 32);

                else if (
                    hasDirtOnTop &&
                    !hasDirtOnDiagonalTL &&
                    hasDirtOnLeft
                ) image(dirtLD[4], i * 32, j * 32);

                else if (
                    hasDirtOnTop &&
                    hasDirtOnBottom
                ) image(dirtTwoD[1], i * 32, j * 32);

                else if (
                    hasDirtOnRight &&
                    hasDirtOnLeft
                ) image(dirtTwoD[2], i * 32, j * 32);

                else if (
                    hasDirtOnBottom
                ) image(dirtOneD[1], i * 32, j * 32);

                else if (
                    hasDirtOnTop
                ) image(dirtOneD[2], i * 32, j * 32);

                else if (
                    hasDirtOnLeft
                ) image(dirtOneD[3], i * 32, j * 32);

                else if (
                    hasDirtOnRight
                ) image(dirtOneD[4], i * 32, j * 32);

                else image(imgDirtDot, i * 32, j * 32);
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
                ) image(imgGrass, i * 32, j * 32);

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
                ) image(imgGrassMiddle, i * 32, j * 32);

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

                else image(imgGrassDot, i * 32, j * 32);
            }
        }
}