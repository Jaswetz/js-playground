window.onload = init;

function init() {
    createCanvas();
    drawCanvas();
}

function createCanvas() {

    // Create canvas element
    var canvas = document.createElement('canvas');

    // Get panel selector
    var panel = document.getElementById('panelCanvas');

    // Give canvas it's attributes
    canvas.setAttribute('id', 'lookwhatIdrew');
    canvas.setAttribute('width', '600px');
    canvas.setAttribute('height', '200px');

    // Inject the canvas
    panel.appendChild(canvas);

}

function printUpgradeMessage() {
    // Create div for message
    var upgradeMessage = document.createElement('div');

    // Get panel selector
    var panel = document.getElementById('panelCanvas');

    // Add class to message div
    upgradeMessage.setAttribute('class', 'alert-box');

    // Inject message
    upgradeMessage.innerHTML = 'Upgrade your browser fool!';

    // Inject message
    panel.appendChild(upgradeMessage);
}

function drawCanvas() {

    // Grab the canvas
    var canvas = document.getElementById('lookwhatIdrew');

    // Give the canvas context
    var context = canvas.getContext('2d');

    if (canvas.getContext) {
        context.fillRect(10, 10, 500, 150);
    } else {
        printUpgradeMessage();
    }

}

