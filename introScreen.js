let imgIntroBackground, imgIntroTitle, imgNewButton, imgLoadButton, imgNewButton2, imgLoadButton2;

function introScreen() {
    image(imgIntroBackground, 0, 0);
    image(imgIntroTitle, 322, 91);
    image(imgNewButton, 476, 433);
    image(imgLoadButton, 656, 433);

    document.querySelector('body').classList.add('intro');
}