let stopLightElement = document.getElementById('stopLight');
let waitLightElement = document.getElementById('readyLight');
let goLightElement = document.getElementById('goLight');
let stopButtonElement = document.getElementById('stopButton');
let waitButtonElement = document.getElementById('readyButton');
let goButtonElement = document.getElementById('goButton');

function turnOnRed() {
    stopLightElement.style.backgroundColor = "#cf1124";
    waitLightElement.style.backgroundColor = "#4b5069";
    goLightElement.style.backgroundColor = "#4b5069";

    stopButtonElement.style.backgroundColor = "#cf1124";
    waitButtonElement.style.backgroundColor = "#1f1d41";
    goButtonElement.style.backgroundColor = "#1f1d41";
}

function turnOnYellow() {
    stopLightElement.style.backgroundColor = "#4b5069";
    waitLightElement.style.backgroundColor = "#f7c948";
    goLightElement.style.backgroundColor = "#4b5069";

    stopButtonElement.style.backgroundColor = "#1f1d41";
    waitButtonElement.style.backgroundColor = "#f7c948";
    goButtonElement.style.backgroundColor = "#1f1d41";
}

function turnOnGreen() {
    stopLightElement.style.backgroundColor = "#4b5069";
    waitLightElement.style.backgroundColor = "#4b5069";
    goLightElement.style.backgroundColor = "#199473";

    stopButtonElement.style.backgroundColor = "#1f1d41";
    waitButtonElement.style.backgroundColor = "#1f1d41";
    goButtonElement.style.backgroundColor = "#199473";
}