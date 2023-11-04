let imgBackButton, imgCameraButton, imgInventory, imgSelected;

let isGrassSelected, isAxSelected, isHoeSelected, isSeedSelected;

let pictureTime = 0;

function gameScreen() {;
    drawTilesMap();
    drawTreesMap();
    drawTreeGrowth();

    image(imgBackButton, 16, 16);
    image(imgCameraButton, 1225.6, 16);
    image(imgInventory, 544, 576);

    if (isGrassSelected == true) image(imgSelected, 554.67, 586.67);
    if (isAxSelected == true) image(imgSelected, 597.33, 586.67);
    if (isHoeSelected == true) image(imgSelected, 640, 586.67);
    if (isSeedSelected == true) image(imgSelected, 682.67, 586.67);

    takeAPicture();
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
                    tilesMap[j][i] = 0;
                    treesMap[j][i]++;
                }
            }
        }
}

function takeAPicture() {
    if (isTakingAPicture) {
        pictureTime++;
        if (pictureTime >= 60) {
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
            stroke(0, 20);
            line(i * 32, 0, i * 32, height);
            line(0, j * 32, width, j * 32);
        }
}
