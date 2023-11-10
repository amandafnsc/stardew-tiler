let imgClouds, imgIntroTitle, imgNewButton, imgLoadButton, imgIntroFrame;

let imgBackButton, imgCameraButton, imgInventory, imgGridButton, imgSelected, imgGameFrame;

let imgSummerButton, imgFallButton, imgWinterButton, imgSpringButton;

let sea = [];
let map = [];

let grass = [];
let grassDot = [];
let grassMiddle = [];
let dirt = [];
let dirtDot = [];
let dirtMiddle = [];

let grassOneD = [[], [], [], []];
let grassTwoD = [[], [], [], []];
let grassLD = [[], [], [], []];
let grassCorner = [[], [], [], []];
let grassSide = [[], [], [], []];
let grassTD = [[], [], [], []];
let grassEntrance = [[], [], [], []];
let grassDiagonal = [[], [], [], []];
let grassEdge = [[], [], [], []];
let grassNewWay = [[], [], [], [], [], [], [], []];
let grassTwoExit = [[], [], [], []];

let dirtOneD = [[], [], [], []];
let dirtTwoD = [[], [], [], []];
let dirtLD = [[], [], [], []];
let dirtCorner = [[], [], [], []];
let dirtSide = [[], [], [], []];
let dirtTD = [[], [], [], []];
let dirtEntrance = [[], [], [], []];
let dirtDiagonal = [[], [], [], []];
let dirtEdge = [[], [], [], []];
let dirtNewWay = [[], [], [], [], [], [], [], []];
let dirtTwoExit = [[], [], [], []];

let tree = [[], [], [], [], [], []];

function preload() {
    imgClouds = loadImage('assets/clouds.png');
    imgIntroTitle = loadImage('assets/introTitle.png');
    imgNewButton = loadImage('assets/newButton.png');
    imgLoadButton = loadImage('assets/loadButton.png');
    imgIntroFrame = loadImage('assets/introFrame.png');

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

    sea[0] = loadImage('assets/summer/summerSea.png');
    sea[1] = loadImage('assets/fall/fallSea.png');
    sea[2] = loadImage('assets/winter/winterSea.png');
    sea[3] = loadImage('assets/spring/springSea.png');

    grass[0] = loadImage('assets/summer/summerGrass.png');
    grassDot[0] = loadImage('assets/summer/summerGrassDot.png');
    grassMiddle[0] = loadImage('assets/summer/summerGrassMiddle.png');

    dirt[0] = loadImage('assets/summer/summerDirt.png');
    dirtDot[0] = loadImage('assets/summer/summerDirtDot.png');
    dirtMiddle[0] = loadImage('assets/summer/summerDirtMiddle.png');

    grass[1] = loadImage('assets/fall/fallGrass.png');
    grassDot[1] = loadImage('assets/fall/fallGrassDot.png');
    grassMiddle[1] = loadImage('assets/fall/fallGrassMiddle.png');

    dirt[1] = loadImage('assets/fall/fallDirt.png');
    dirtDot[1] = loadImage('assets/fall/fallDirtDot.png');
    dirtMiddle[1] = loadImage('assets/fall/fallDirtMiddle.png');

    grass[2] = loadImage('assets/winter/winterGrass.png');
    grassDot[2] = loadImage('assets/winter/winterGrassDot.png');
    grassMiddle[2] = loadImage('assets/winter/winterGrassMiddle.png');

    dirt[2] = loadImage('assets/winter/winterDirt.png');
    dirtDot[2] = loadImage('assets/winter/winterDirtDot.png');
    dirtMiddle[2] = loadImage('assets/winter/winterDirtMiddle.png');

    grass[3] = loadImage('assets/spring/springGrass.png');
    grassDot[3] = loadImage('assets/spring/springGrassDot.png');
    grassMiddle[3] = loadImage('assets/spring/springGrassMiddle.png');

    dirt[3] = loadImage('assets/spring/springDirt.png');
    dirtDot[3] = loadImage('assets/spring/springDirtDot.png');
    dirtMiddle[3] = loadImage('assets/spring/springDirtMiddle.png');

    for (let i = 0; i < 2; i++) {
        grassTwoD[0][i] = loadImage('assets/summer/summerGrassTwoD' + [i + 1] + '.png');
        grassDiagonal[0][i] = loadImage('assets/summer/summerGrassDiagonal' + [i + 1] + '.png');

        dirtTwoD[0][i] = loadImage('assets/summer/summerDirtTwoD' + [i + 1] + '.png');
        dirtDiagonal[0][i] = loadImage('assets/summer/summerDirtDiagonal' + [i + 1] + '.png');

        grassTwoD[1][i] = loadImage('assets/fall/fallGrassTwoD' + [i + 1] + '.png');
        grassDiagonal[1][i] = loadImage('assets/fall/fallGrassDiagonal' + [i + 1] + '.png');

        dirtTwoD[1][i] = loadImage('assets/fall/fallDirtTwoD' + [i + 1] + '.png');
        dirtDiagonal[1][i] = loadImage('assets/fall/fallDirtDiagonal' + [i + 1] + '.png');

        grassTwoD[2][i] = loadImage('assets/winter/winterGrassTwoD' + [i + 1] + '.png');
        grassDiagonal[2][i] = loadImage('assets/winter/winterGrassDiagonal' + [i + 1] + '.png');

        dirtTwoD[2][i] = loadImage('assets/winter/winterDirtTwoD' + [i + 1] + '.png');
        dirtDiagonal[2][i] = loadImage('assets/winter/winterDirtDiagonal' + [i + 1] + '.png');

        grassTwoD[3][i] = loadImage('assets/spring/springGrassTwoD' + [i + 1] + '.png');
        grassDiagonal[3][i] = loadImage('assets/spring/springGrassDiagonal' + [i + 1] + '.png');

        dirtTwoD[3][i] = loadImage('assets/spring/springDirtTwoD' + [i + 1] + '.png');
        dirtDiagonal[3][i] = loadImage('assets/spring/springDirtDiagonal' + [i + 1] + '.png');
    }

    for (let i = 0; i < 4; i++) {
        map[i] = loadImage('assets/map' + [i + 1] + '.png');

        grassOneD[0][i] = loadImage('assets/summer/summerGrassOneD' + [i + 1] + '.png');
        grassLD[0][i] = loadImage('assets/summer/summerGrassLD' + [i + 1] + '.png');
        grassCorner[0][i] = loadImage('assets/summer/summerGrassCorner' + [i + 1] + '.png');
        grassSide[0][i] = loadImage('assets/summer/summerGrassSide' + [i + 1] + '.png');
        grassTD[0][i] = loadImage('assets/summer/summerGrassTD' + [i + 1] + '.png');
        grassEntrance[0][i] = loadImage('assets/summer/summerGrassEntrance' + [i + 1] + '.png');
        grassEdge[0][i] = loadImage('assets/summer/summerGrassEdge' + [i + 1] + '.png');
        grassTwoExit[0][i] = loadImage('assets/summer/summerGrassTwoExit' + [i + 1] + '.png');

        dirtOneD[0][i] = loadImage('assets/summer/summerDirtOneD' + [i + 1] + '.png');
        dirtLD[0][i] = loadImage('assets/summer/summerDirtLD' + [i + 1] + '.png');
        dirtCorner[0][i] = loadImage('assets/summer/summerDirtCorner' + [i + 1] + '.png');
        dirtSide[0][i] = loadImage('assets/summer/summerDirtSide' + [i + 1] + '.png');
        dirtTD[0][i] = loadImage('assets/summer/summerDirtTD' + [i + 1] + '.png');
        dirtEntrance[0][i] = loadImage('assets/summer/summerDirtEntrance' + [i + 1] + '.png');
        dirtEdge[0][i] = loadImage('assets/summer/summerDirtEdge' + [i + 1] + '.png');
        dirtTwoExit[0][i] = loadImage('assets/summer/summerDirtTwoExit' + [i + 1] + '.png');

        grassOneD[1][i] = loadImage('assets/fall/fallGrassOneD' + [i + 1] + '.png');
        grassLD[1][i] = loadImage('assets/fall/fallGrassLD' + [i + 1] + '.png');
        grassCorner[1][i] = loadImage('assets/fall/fallGrassCorner' + [i + 1] + '.png');
        grassSide[1][i] = loadImage('assets/fall/fallGrassSide' + [i + 1] + '.png');
        grassTD[1][i] = loadImage('assets/fall/fallGrassTD' + [i + 1] + '.png');
        grassEntrance[1][i] = loadImage('assets/fall/fallGrassEntrance' + [i + 1] + '.png');
        grassEdge[1][i] = loadImage('assets/fall/fallGrassEdge' + [i + 1] + '.png');
        grassTwoExit[1][i] = loadImage('assets/fall/fallGrassTwoExit' + [i + 1] + '.png');

        dirtOneD[1][i] = loadImage('assets/fall/fallDirtOneD' + [i + 1] + '.png');
        dirtLD[1][i] = loadImage('assets/fall/fallDirtLD' + [i + 1] + '.png');
        dirtCorner[1][i] = loadImage('assets/fall/fallDirtCorner' + [i + 1] + '.png');
        dirtSide[1][i] = loadImage('assets/fall/fallDirtSide' + [i + 1] + '.png');
        dirtTD[1][i] = loadImage('assets/fall/fallDirtTD' + [i + 1] + '.png');
        dirtEntrance[1][i] = loadImage('assets/fall/fallDirtEntrance' + [i + 1] + '.png');
        dirtEdge[1][i] = loadImage('assets/fall/fallDirtEdge' + [i + 1] + '.png');
        dirtTwoExit[1][i] = loadImage('assets/fall/fallDirtTwoExit' + [i + 1] + '.png');

        grassOneD[2][i] = loadImage('assets/winter/winterGrassOneD' + [i + 1] + '.png');
        grassLD[2][i] = loadImage('assets/winter/winterGrassLD' + [i + 1] + '.png');
        grassCorner[2][i] = loadImage('assets/winter/winterGrassCorner' + [i + 1] + '.png');
        grassSide[2][i] = loadImage('assets/winter/winterGrassSide' + [i + 1] + '.png');
        grassTD[2][i] = loadImage('assets/winter/winterGrassTD' + [i + 1] + '.png');
        grassEntrance[2][i] = loadImage('assets/winter/winterGrassEntrance' + [i + 1] + '.png');
        grassEdge[2][i] = loadImage('assets/winter/winterGrassEdge' + [i + 1] + '.png');
        grassTwoExit[2][i] = loadImage('assets/winter/winterGrassTwoExit' + [i + 1] + '.png');

        dirtOneD[2][i] = loadImage('assets/winter/winterDirtOneD' + [i + 1] + '.png');
        dirtLD[2][i] = loadImage('assets/winter/winterDirtLD' + [i + 1] + '.png');
        dirtCorner[2][i] = loadImage('assets/winter/winterDirtCorner' + [i + 1] + '.png');
        dirtSide[2][i] = loadImage('assets/winter/winterDirtSide' + [i + 1] + '.png');
        dirtTD[2][i] = loadImage('assets/winter/winterDirtTD' + [i + 1] + '.png');
        dirtEntrance[2][i] = loadImage('assets/winter/winterDirtEntrance' + [i + 1] + '.png');
        dirtEdge[2][i] = loadImage('assets/winter/winterDirtEdge' + [i + 1] + '.png');
        dirtTwoExit[2][i] = loadImage('assets/winter/winterDirtTwoExit' + [i + 1] + '.png');

        grassOneD[3][i] = loadImage('assets/spring/springGrassOneD' + [i + 1] + '.png');
        grassLD[3][i] = loadImage('assets/spring/springGrassLD' + [i + 1] + '.png');
        grassCorner[3][i] = loadImage('assets/spring/springGrassCorner' + [i + 1] + '.png');
        grassSide[3][i] = loadImage('assets/spring/springGrassSide' + [i + 1] + '.png');
        grassTD[3][i] = loadImage('assets/spring/springGrassTD' + [i + 1] + '.png');
        grassEntrance[3][i] = loadImage('assets/spring/springGrassEntrance' + [i + 1] + '.png');
        grassEdge[3][i] = loadImage('assets/spring/springGrassEdge' + [i + 1] + '.png');
        grassTwoExit[3][i] = loadImage('assets/spring/springGrassTwoExit' + [i + 1] + '.png');

        dirtOneD[3][i] = loadImage('assets/spring/springDirtOneD' + [i + 1] + '.png');
        dirtLD[3][i] = loadImage('assets/spring/springDirtLD' + [i + 1] + '.png');
        dirtCorner[3][i] = loadImage('assets/spring/springDirtCorner' + [i + 1] + '.png');
        dirtSide[3][i] = loadImage('assets/spring/springDirtSide' + [i + 1] + '.png');
        dirtTD[3][i] = loadImage('assets/spring/springDirtTD' + [i + 1] + '.png');
        dirtEntrance[3][i] = loadImage('assets/spring/springDirtEntrance' + [i + 1] + '.png');
        dirtEdge[3][i] = loadImage('assets/spring/springDirtEdge' + [i + 1] + '.png');
        dirtTwoExit[3][i] = loadImage('assets/spring/springDirtTwoExit' + [i + 1] + '.png');
    }

    for (let i = 0; i < 8; i++) {
        grassNewWay[0][i] = loadImage('assets/summer/summerGrassNewWay' + [i + 1] + '.png');
        dirtNewWay[0][i] = loadImage('assets/summer/summerDirtNewWay' + [i + 1] + '.png');

        grassNewWay[1][i] = loadImage('assets/fall/fallGrassNewWay' + [i + 1] + '.png');
        dirtNewWay[1][i] = loadImage('assets/fall/fallDirtNewWay' + [i + 1] + '.png');

        grassNewWay[2][i] = loadImage('assets/winter/winterGrassNewWay' + [i + 1] + '.png');
        dirtNewWay[2][i] = loadImage('assets/winter/winterDirtNewWay' + [i + 1] + '.png');

        grassNewWay[3][i] = loadImage('assets/spring/springGrassNewWay' + [i + 1] + '.png');
        dirtNewWay[3][i] = loadImage('assets/spring/springDirtNewWay' + [i + 1] + '.png');
    }

    for (let i = 0; i < 6; i++) {
        tree[0][i] = loadImage('assets/summer/summerTree' + [i + 1] + '.png');
        tree[1][i] = loadImage('assets/fall/fallTree' + [i + 1] + '.png');
        tree[2][i] = loadImage('assets/winter/winterTree' + [i + 1] + '.png');
        tree[3][i] = loadImage('assets/spring/springTree' + [i + 1] + '.png');
    }
}