let imgBackButton, imgCameraButton, imgInventory, imgSelected;

let isGrassSelected, isAxSelected, isHoeSelected, isSeedSelected;

function gameScreen() {
    drawMap();
    
    image(imgBackButton, 16, 16);
    image(imgCameraButton, 1204, 16);
    image(imgInventory, 496, 512);

    if (isGrassSelected == true) image(imgSelected, 512, 528);
    if (isAxSelected == true) image(imgSelected, 576, 528);
    if (isHoeSelected == true) image(imgSelected, 640, 528);
    if (isSeedSelected == true) image(imgSelected, 704, 528);
}