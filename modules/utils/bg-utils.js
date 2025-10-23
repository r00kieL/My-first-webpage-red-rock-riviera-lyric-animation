import state from '../data/state.js';
import { bgImage } from '../data/bg-images.js';

function initBackground(bgiIndex) {
    state.body.style.backgroundImage = bgImage[bgiIndex];
    return bgiIndex;
}

function getNextIndex(currentIndex) {
    return (currentIndex + 1) % bgImage.length;
}

function switchBgi(nextImage) {
    state.body.style.setProperty("--next-bg", nextImage);
    state.body.classList.add("bg-fade");
}

function setBgi(imageIndexUrl) {
    state.body.style.backgroundImage = imageIndexUrl;
    state.body.classList.remove("bg-fade");
}

function PreloadedImage(nextImage) {
    const img = new Image();
    const rawPath = extractRawUrl(nextImage);
    img.src = rawPath;

    return img;
}

function extractRawUrl(cssUrl) {
    return cssUrl.slice(5, -2);
}

export {
    initBackground,
    getNextIndex,
    switchBgi,
    setBgi,
    PreloadedImage,
    extractRawUrl,
 };