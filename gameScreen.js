let imgBackButton, imgCameraButton, imgInventory, imgSelected;

let isGrassSelected, isAxSelected, isHoeSelected, isSeedSelected;

let pictureTime = 0;

function gameScreen() {;
    drawTilesMap();
    drawTreesMap();
    drawTreeGrowth();

    image(imgBackButton, 16, 16);
    image(imgCameraButton, 1204, 16);
    image(imgInventory, 496, 512);

    if (isGrassSelected == true) image(imgSelected, 512, 528);
    if (isAxSelected == true) image(imgSelected, 576, 528);
    if (isHoeSelected == true) image(imgSelected, 640, 528);
    if (isSeedSelected == true) image(imgSelected, 704, 528);

    takeAPicture();
}

function drawTreeGrowth() {
    for (let i = 0; i < 20; i++)
        for (let j = 0; j < 10; j++) {
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
    for (let i = 0; i < 20; i++)
        for (let j = 0; j < 10; j++) {
            stroke(0, 20);
            line(i * 64, 0, i * 64, height);
            line(0, j * 64, width, j * 64);
        }
}
