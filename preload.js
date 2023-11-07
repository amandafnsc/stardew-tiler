let imgClouds, imgIntroTitle, imgNewButton, imgLoadButton, imgIntroFrame;

let imgGameBackground;

let imgBackButton, imgCameraButton, imgInventory, imgGridButton, imgSelected, imgGameFrame;

let imgSummerButton, imgFallButton, imgWinterButton, imgSpringButton;

let grass = [];
let grassDot = [];
let grassMiddle = [];
let dirt = [];
let dirtDot = [];
let dirtMiddle = [];

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

let tree = [];

function preload() {
    imgClouds = loadImage('assets/clouds.png');
    imgIntroTitle = loadImage('assets/introTitle.png');
    imgNewButton = loadImage('assets/newButton.png');
    imgLoadButton = loadImage('assets/loadButton.png');
    imgIntroFrame = loadImage('assets/introFrame.png');

    imgGameBackground = loadImage('assets/gameBackground.png');
    imgBackButton = loadImage('assets/backButton.png');
    imgCameraButton = loadImage('assets/cameraButton.png');
    imgInventory = loadImage('assets/inventory.png');
    imgGridButton = loadImage('assets/gridButton.png');
    imgSelected = loadImage('assets/selected.png');
    imgGameFrame = loadImage('assets/gameFrame.png');

    imgSummerButton = loadImage('assets/summerButton.png');
    imgFallButton = loadImage('assets/fallButton.png');
    imgWinterButton = loadImage('assets/winterButton.png');
    imgSpringButton = loadImage('assets/springButton.png');

    grass[1] = loadImage('assets/summer/summerGrass.png');
    grassDot[1] = loadImage('assets/summer/summerGrassDot.png');
    grassMiddle[1] = loadImage('assets/summer/summerGrassMiddle.png');

    dirt[1] = loadImage('assets/summer/summerDirt.png');
    dirtDot[1] = loadImage('assets/summer/summerDirtDot.png');
    dirtMiddle[1] = loadImage('assets/summer/summerDirtMiddle.png');

    grass[2] = loadImage('assets/fall/fallGrass.png');
    grassDot[2] = loadImage('assets/fall/fallGrassDot.png');
    grassMiddle[2] = loadImage('assets/fall/fallGrassMiddle.png');

    dirt[2] = loadImage('assets/fall/fallDirt.png');
    dirtDot[2] = loadImage('assets/fall/fallDirtDot.png');
    dirtMiddle[2] = loadImage('assets/fall/fallDirtMiddle.png');

    grass[3] = loadImage('assets/winter/winterGrass.png');
    grassDot[3] = loadImage('assets/winter/winterGrassDot.png');
    grassMiddle[3] = loadImage('assets/winter/winterGrassMiddle.png');

    dirt[3] = loadImage('assets/winter/winterDirt.png');
    dirtDot[3] = loadImage('assets/winter/winterDirtDot.png');
    dirtMiddle[3] = loadImage('assets/winter/winterDirtMiddle.png');

    grass[4] = loadImage('assets/spring/springGrass.png');
    grassDot[4] = loadImage('assets/spring/springGrassDot.png');
    grassMiddle[4] = loadImage('assets/spring/springGrassMiddle.png');

    dirt[4] = loadImage('assets/spring/springDirt.png');
    dirtDot[4] = loadImage('assets/spring/springDirtDot.png');
    dirtMiddle[4] = loadImage('assets/spring/springDirtMiddle.png');

    for (let i = 1; i < 3; i++) {
        grassTwoD[1][i] = loadImage('assets/summer/summerGrassTwoD' + [i] + '.png');
        grassDiagonal[1][i] = loadImage('assets/summer/summerGrassDiagonal' + [i] + '.png');

        dirtTwoD[1][i] = loadImage('assets/summer/summerDirtTwoD' + [i] + '.png');
        dirtDiagonal[1][i] = loadImage('assets/summer/summerDirtDiagonal' + [i] + '.png');

        grassTwoD[2][i] = loadImage('assets/fall/fallGrassTwoD' + [i] + '.png');
        grassDiagonal[2][i] = loadImage('assets/fall/fallGrassDiagonal' + [i] + '.png');

        dirtTwoD[2][i] = loadImage('assets/fall/fallDirtTwoD' + [i] + '.png');
        dirtDiagonal[2][i] = loadImage('assets/fall/fallDirtDiagonal' + [i] + '.png');

        grassTwoD[3][i] = loadImage('assets/winter/winterGrassTwoD' + [i] + '.png');
        grassDiagonal[3][i] = loadImage('assets/winter/winterGrassDiagonal' + [i] + '.png');

        dirtTwoD[3][i] = loadImage('assets/winter/winterDirtTwoD' + [i] + '.png');
        dirtDiagonal[3][i] = loadImage('assets/winter/winterDirtDiagonal' + [i] + '.png');

        grassTwoD[4][i] = loadImage('assets/spring/springGrassTwoD' + [i] + '.png');
        grassDiagonal[4][i] = loadImage('assets/spring/springGrassDiagonal' + [i] + '.png');

        dirtTwoD[4][i] = loadImage('assets/spring/springDirtTwoD' + [i] + '.png');
        dirtDiagonal[4][i] = loadImage('assets/spring/springDirtDiagonal' + [i] + '.png');
    }

    for (let i = 1; i < 5; i++) {
        grassOneD[1][i] = loadImage('assets/summer/summerGrassOneD' + [i] + '.png');
        grassLD[1][i] = loadImage('assets/summer/summerGrassLD' + [i] + '.png');
        grassCorner[1][i] = loadImage('assets/summer/summerGrassCorner' + [i] + '.png');
        grassSide[1][i] = loadImage('assets/summer/summerGrassSide' + [i] + '.png');
        grassTD[1][i] = loadImage('assets/summer/summerGrassTD' + [i] + '.png');
        grassEntrance[1][i] = loadImage('assets/summer/summerGrassEntrance' + [i] + '.png');
        grassEdge[1][i] = loadImage('assets/summer/summerGrassEdge' + [i] + '.png');
        grassTwoExit[1][i] = loadImage('assets/summer/summerGrassTwoExit' + [i] + '.png');

        dirtOneD[1][i] = loadImage('assets/summer/summerDirtOneD' + [i] + '.png');
        dirtLD[1][i] = loadImage('assets/summer/summerDirtLD' + [i] + '.png');
        dirtCorner[1][i] = loadImage('assets/summer/summerDirtCorner' + [i] + '.png');
        dirtSide[1][i] = loadImage('assets/summer/summerDirtSide' + [i] + '.png');
        dirtTD[1][i] = loadImage('assets/summer/summerDirtTD' + [i] + '.png');
        dirtEntrance[1][i] = loadImage('assets/summer/summerDirtEntrance' + [i] + '.png');
        dirtEdge[1][i] = loadImage('assets/summer/summerDirtEdge' + [i] + '.png');
        dirtTwoExit[1][i] = loadImage('assets/summer/summerDirtTwoExit' + [i] + '.png');

        grassOneD[2][i] = loadImage('assets/fall/fallGrassOneD' + [i] + '.png');
        grassLD[2][i] = loadImage('assets/fall/fallGrassLD' + [i] + '.png');
        grassCorner[2][i] = loadImage('assets/fall/fallGrassCorner' + [i] + '.png');
        grassSide[2][i] = loadImage('assets/fall/fallGrassSide' + [i] + '.png');
        grassTD[2][i] = loadImage('assets/fall/fallGrassTD' + [i] + '.png');
        grassEntrance[2][i] = loadImage('assets/fall/fallGrassEntrance' + [i] + '.png');
        grassEdge[2][i] = loadImage('assets/fall/fallGrassEdge' + [i] + '.png');
        grassTwoExit[2][i] = loadImage('assets/fall/fallGrassTwoExit' + [i] + '.png');

        dirtOneD[2][i] = loadImage('assets/fall/fallDirtOneD' + [i] + '.png');
        dirtLD[2][i] = loadImage('assets/fall/fallDirtLD' + [i] + '.png');
        dirtCorner[2][i] = loadImage('assets/fall/fallDirtCorner' + [i] + '.png');
        dirtSide[2][i] = loadImage('assets/fall/fallDirtSide' + [i] + '.png');
        dirtTD[2][i] = loadImage('assets/fall/fallDirtTD' + [i] + '.png');
        dirtEntrance[2][i] = loadImage('assets/fall/fallDirtEntrance' + [i] + '.png');
        dirtEdge[2][i] = loadImage('assets/fall/fallDirtEdge' + [i] + '.png');
        dirtTwoExit[2][i] = loadImage('assets/fall/fallDirtTwoExit' + [i] + '.png');

        grassOneD[3][i] = loadImage('assets/winter/winterGrassOneD' + [i] + '.png');
        grassLD[3][i] = loadImage('assets/winter/winterGrassLD' + [i] + '.png');
        grassCorner[3][i] = loadImage('assets/winter/winterGrassCorner' + [i] + '.png');
        grassSide[3][i] = loadImage('assets/winter/winterGrassSide' + [i] + '.png');
        grassTD[3][i] = loadImage('assets/winter/winterGrassTD' + [i] + '.png');
        grassEntrance[3][i] = loadImage('assets/winter/winterGrassEntrance' + [i] + '.png');
        grassEdge[3][i] = loadImage('assets/winter/winterGrassEdge' + [i] + '.png');
        grassTwoExit[3][i] = loadImage('assets/winter/winterGrassTwoExit' + [i] + '.png');

        dirtOneD[3][i] = loadImage('assets/winter/winterDirtOneD' + [i] + '.png');
        dirtLD[3][i] = loadImage('assets/winter/winterDirtLD' + [i] + '.png');
        dirtCorner[3][i] = loadImage('assets/winter/winterDirtCorner' + [i] + '.png');
        dirtSide[3][i] = loadImage('assets/winter/winterDirtSide' + [i] + '.png');
        dirtTD[3][i] = loadImage('assets/winter/winterDirtTD' + [i] + '.png');
        dirtEntrance[3][i] = loadImage('assets/winter/winterDirtEntrance' + [i] + '.png');
        dirtEdge[3][i] = loadImage('assets/winter/winterDirtEdge' + [i] + '.png');
        dirtTwoExit[3][i] = loadImage('assets/winter/winterDirtTwoExit' + [i] + '.png');

        grassOneD[4][i] = loadImage('assets/spring/springGrassOneD' + [i] + '.png');
        grassLD[4][i] = loadImage('assets/spring/springGrassLD' + [i] + '.png');
        grassCorner[4][i] = loadImage('assets/spring/springGrassCorner' + [i] + '.png');
        grassSide[4][i] = loadImage('assets/spring/springGrassSide' + [i] + '.png');
        grassTD[4][i] = loadImage('assets/spring/springGrassTD' + [i] + '.png');
        grassEntrance[4][i] = loadImage('assets/spring/springGrassEntrance' + [i] + '.png');
        grassEdge[4][i] = loadImage('assets/spring/springGrassEdge' + [i] + '.png');
        grassTwoExit[4][i] = loadImage('assets/spring/springGrassTwoExit' + [i] + '.png');

        dirtOneD[4][i] = loadImage('assets/spring/springDirtOneD' + [i] + '.png');
        dirtLD[4][i] = loadImage('assets/spring/springDirtLD' + [i] + '.png');
        dirtCorner[4][i] = loadImage('assets/spring/springDirtCorner' + [i] + '.png');
        dirtSide[4][i] = loadImage('assets/spring/springDirtSide' + [i] + '.png');
        dirtTD[4][i] = loadImage('assets/spring/springDirtTD' + [i] + '.png');
        dirtEntrance[4][i] = loadImage('assets/spring/springDirtEntrance' + [i] + '.png');
        dirtEdge[4][i] = loadImage('assets/spring/springDirtEdge' + [i] + '.png');
        dirtTwoExit[4][i] = loadImage('assets/spring/springDirtTwoExit' + [i] + '.png');
    }

    for (let i = 1; i < 9; i++) {
        grassNewWay[1][i] = loadImage('assets/summer/summerGrassNewWay' + [i] + '.png');

        dirtNewWay[1][i] = loadImage('assets/summer/summerDirtNewWay' + [i] + '.png');

        grassNewWay[2][i] = loadImage('assets/fall/fallGrassNewWay' + [i] + '.png');

        dirtNewWay[2][i] = loadImage('assets/fall/fallDirtNewWay' + [i] + '.png');

        grassNewWay[3][i] = loadImage('assets/winter/winterGrassNewWay' + [i] + '.png');

        dirtNewWay[3][i] = loadImage('assets/winter/winterDirtNewWay' + [i] + '.png');

        grassNewWay[4][i] = loadImage('assets/spring/springGrassNewWay' + [i] + '.png');

        dirtNewWay[4][i] = loadImage('assets/spring/springDirtNewWay' + [i] + '.png');
    }

    for (let i = 1; i < 7; i++) {
        tree[1][i] = loadImage('assets/summer/summerTree' + [i] + '.png');
        tree[2][i] = loadImage('assets/fall/fallTree' + [i] + '.png');
        tree[3][i] = loadImage('assets/winter/winterTree' + [i] + '.png');
        tree[4][i] = loadImage('assets/spring/springTree' + [i] + '.png');
    }
}