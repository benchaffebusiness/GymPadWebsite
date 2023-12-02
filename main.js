const startFirstAnimation = 1060;
const textStartAnimation = 1270;
const textEndAnimation = 1799;
const startSecondAnimation = 1800;
const endSecondAnimation = 1980;

const startMovement = 1981;
const endMovement = 3000;

const final = 3205;
var iphoneImg = document.getElementById("iphoneImg");
var introText = document.getElementById("introText");


window.onscroll = (event) => {
    if(window.scrollY >= startFirstAnimation && window.scrollY <= textEndAnimation) {
        iphoneImg.style.left = (window.scrollY - startFirstAnimation) + "px";
    }
    if(window.scrollY < startFirstAnimation) {
        iphoneImg.style.left = '0px';
    } else if(window.scrollY > textEndAnimation) {
        iphoneImg.style.left = (textEndAnimation - startFirstAnimation) + "px";
    }

    if(window.scrollY >= textStartAnimation && window.scrollY <= textEndAnimation) {
        introText.style.opacity = 1 - ((textEndAnimation-textStartAnimation) - (textEndAnimation - window.scrollY))/(textEndAnimation-textStartAnimation);
    }
    if(window.scrollY > textEndAnimation) {
        introText.style.opacity = 0;
    } else if(window.scrollY < textStartAnimation) {
        introText.style.opacity = 1;
    }

    if(window.scrollY >= startSecondAnimation && window.scrollY <= endSecondAnimation) {
        iphoneImg.style.transform = 'rotate(' + (endSecondAnimation - window.scrollY)/2 + 'deg)';
    }
    if(window.scrollY > endSecondAnimation) {
        iphoneImg.style.transform = 'rotate(0deg)';
    } else if(window.scrollY < startSecondAnimation) {
        iphoneImg.style.transform = 'rotate(90deg)';
    }

    console.log(window.scrollY);
}