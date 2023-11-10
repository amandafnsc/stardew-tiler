let cloudsY = 69;
let cloudsTime = 0;
let isCloudsGoingUP = true;

function introScreen() {
    background('#708EB5');
    drawCloudsAnimation();
    image(imgIntroTitle, 401, 142);
    image(imgNewButton, 489, 411);
    image(imgLoadButton, 680, 411);
    image(imgIntroFrame, 0, 0);
}

function drawCloudsAnimation() {
    cloudsTime++;

    if (isCloudsGoingUP) {
        if (cloudsTime > 30) {
            cloudsY -= 5;
            if (cloudsY <= 64) isCloudsGoingUP = false;
            cloudsTime = 0;
        }
    }

    if (!isCloudsGoingUP) {
        if (cloudsTime > 30) {
            cloudsY += 5;
            if (cloudsY >= 64) isCloudsGoingUP = true;
            cloudsTime = 0;
        }
    }

    image(imgClouds, 98, cloudsY);
}