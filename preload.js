let imgClouds, imgIntroTitle, imgNewButton, imgLoadButton, imgIntroFrame;

let imgBackButton, imgCameraButton, imgInventory, imgGridButton, imgSelected, imgGameFrame;

let imgSummerButton, imgFallButton, imgWinterButton, imgSpringButton;

const seasons = ["summer", "fall", "winter", "spring"];

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

    for (let j = 0; j < 4; j++) {
        sea[j] = loadImage(`assets/${seasons[j]}/${seasons[j]}Sea.png`);

        grass[j] = loadImage(`assets/${seasons[j]}/${seasons[j]}Grass.png`);
        grassDot[j] = loadImage(`assets/${seasons[j]}/${seasons[j]}GrassDot.png`);
        grassMiddle[j] = loadImage(`assets/${seasons[j]}/${seasons[j]}GrassMiddle.png`);

        dirt[j] = loadImage(`assets/${seasons[j]}/${seasons[j]}Dirt.png`);
        dirtDot[j] = loadImage(`assets/${seasons[j]}/${seasons[j]}DirtDot.png`);
        dirtMiddle[j] = loadImage(`assets/${seasons[j]}/${seasons[j]}DirtMiddle.png`);

        for (let i = 0; i < 2; i++) {
            grassTwoD[j][i] = loadImage(`assets/${seasons[j]}/${seasons[j]}GrassTwoD${[i + 1]}.png`);
            grassDiagonal[j][i] = loadImage(`assets/${seasons[j]}/${seasons[j]}GrassDiagonal${[i + 1]}.png`);
            dirtTwoD[j][i] = loadImage(`assets/${seasons[j]}/${seasons[j]}DirtTwoD${[i + 1]}.png`);
            dirtDiagonal[j][i] = loadImage(`assets/${seasons[j]}/${seasons[j]}DirtDiagonal${[i + 1]}.png`);
        }

        for (let i = 0; i < 4; i++) {
            map[i] = loadImage(`assets/map${[i + 1]}.png`);

            grassOneD[j][i] = loadImage(`assets/${seasons[j]}/${seasons[j]}GrassOneD${[i + 1]}.png`);
            grassLD[j][i] = loadImage(`assets/${seasons[j]}/${seasons[j]}GrassLD${[i + 1]}.png`);
            grassCorner[j][i] = loadImage(`assets/${seasons[j]}/${seasons[j]}GrassCorner${[i + 1]}.png`);
            grassSide[j][i] = loadImage(`assets/${seasons[j]}/${seasons[j]}GrassSide${[i + 1]}.png`);
            grassTD[j][i] = loadImage(`assets/${seasons[j]}/${seasons[j]}GrassTD${[i + 1]}.png`);
            grassEntrance[j][i] = loadImage(`assets/${seasons[j]}/${seasons[j]}GrassEntrance${[i + 1]}.png`);
            grassEdge[j][i] = loadImage(`assets/${seasons[j]}/${seasons[j]}GrassEdge${[i + 1]}.png`);
            grassTwoExit[j][i] = loadImage(`assets/${seasons[j]}/${seasons[j]}GrassTwoExit${[i + 1]}.png`);

            dirtOneD[j][i] = loadImage(`assets/${seasons[j]}/${seasons[j]}DirtOneD${[i + 1]}.png`);
            dirtLD[j][i] = loadImage(`assets/${seasons[j]}/${seasons[j]}DirtLD${[i + 1]}.png`);
            dirtCorner[j][i] = loadImage(`assets/${seasons[j]}/${seasons[j]}DirtCorner${[i + 1]}.png`);
            dirtSide[j][i] = loadImage(`assets/${seasons[j]}/${seasons[j]}DirtSide${[i + 1]}.png`);
            dirtTD[j][i] = loadImage(`assets/${seasons[j]}/${seasons[j]}DirtTD${[i + 1]}.png`);
            dirtEntrance[j][i] = loadImage(`assets/${seasons[j]}/${seasons[j]}DirtEntrance${[i + 1]}.png`);
            dirtEdge[j][i] = loadImage(`assets/${seasons[j]}/${seasons[j]}DirtEdge${[i + 1]}.png`);
            dirtTwoExit[j][i] = loadImage(`assets/${seasons[j]}/${seasons[j]}DirtTwoExit${[i + 1]}.png`);
        }

        for (let i = 0; i < 8; i++) {
            grassNewWay[j][i] = loadImage(`assets/${seasons[j]}/${seasons[j]}GrassNewWay${[i + 1]}.png`);
            dirtNewWay[j][i] = loadImage(`assets/${seasons[j]}/${seasons[j]}DirtNewWay${[i + 1]}.png`);
        }

        for (let i = 0; i < 6; i++) {
            tree[j][i] = loadImage(`assets/${seasons[j]}/${seasons[j]}Tree${[i + 1]}.png`);
        }
    }
}