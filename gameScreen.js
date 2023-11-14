let isPickaxeSelected, isGrassSelected, isHoeSelected, isSeedSelected, isAxSelected;

let season;
let summer = 0;
let fall = 1;
let winter = 2;
let spring = 3;

let isGridOn;

let pictureTime = 0;
let seaTime = 0;

function gameScreen() {
    drawAnimatedSea();
    drawTilesMap();
    drawTreesMap();
    drawTreeGrowth();

    if (isGridOn == true) drawGrid();

    image(imgBackButton, 16, 16);
    image(imgCameraButton, 1225.6, 16);
    image(imgInventory, 523, 576);
    image(imgGridButton, 1224, 584);
    image(imgGameFrame, 0, 0);

    image(imgSummerButton, 1041, 16);
    image(imgFallButton, 1087, 16);
    image(imgWinterButton, 1133, 16);
    image(imgSpringButton, 1179, 16);

    if (isPickaxeSelected == true) image(imgSelected, 533.67, 586.67);
    if (isGrassSelected == true) image(imgSelected, 576.33, 586.67);
    if (isHoeSelected == true) image(imgSelected, 619, 586.67);
    if (isSeedSelected == true) image(imgSelected, 661.67, 586.67);
    if (isAxSelected == true) image(imgSelected, 704.34, 586.67);

    takeAPicture();
}

function drawAnimatedSea() {
    seaTime++;
    for (let i = 0; i < 21; i++) {
        for (let j = 0; j < 41; j++) {
            if (seaTime < 60) image(sea[season], i * 64, j * 16);
            if (seaTime > 60) image(sea[season], i * 64 - 16, j * 16 - 16);
            if (seaTime >= 120) seaTime = 0;
        }
    }
}

function drawTreeGrowth() {
    for (let i = 0; i < 40; i++)
        for (let j = 0; j < 20; j++) {
            if (treesMap[j][i] == 1) {
                treesTime[j][i]++;
                if (treesTime[j][i] >= 30) {
                    treesMap[j][i]++;
                }
            }
            if (treesMap[j][i] == 2) {
                treesTime[j][i]++;
                if (treesTime[j][i] >= 60) {
                    treesMap[j][i]++;
                }
            }
            if (treesMap[j][i] == 3) {
                treesTime[j][i]++;
                if (treesTime[j][i] >= 90) {
                    treesMap[j][i]++;
                }
            }
            if (treesMap[j][i] == 4) {
                treesTime[j][i]++;
                if (treesTime[j][i] >= 120) {
                    tilesMap[j][i] = 1;
                    treesMap[j][i]++;
                }
            }
        }
}

function takeAPicture() {
    if (isTakingAPicture) {
        pictureTime++;
        if (pictureTime >= 60) {
            drawAnimatedSea();
            drawTilesMap();
            drawTreesMap();
            isTakingAPicture = false;
        }
    }
    if (!isTakingAPicture) pictureTime = 0;
}

function drawGrid() {
    for (let i = 0; i < 40; i++)
        for (let j = 0; j < 20; j++) {
            stroke(133, 54, 5, 20);
            line(i * 32, 0, i * 32, height);
            line(0, j * 32, width, j * 32);
        }
}
