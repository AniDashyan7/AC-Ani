// Example 25

// Create a jagged line using random

var step = 10;
var lastX = -10;
let lastY;
let middle;
var y = 50;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(208);
    smooth();
    noLoop();
    noFill();
}

function draw() {
    stroke(20, 50, 70);
    middle = height / 2;
    line(0, middle, width, height / 2);

    stroke('red');
    for (i = 0; i <= width; i += 5) {
        y = random(middle - 30, middle + 50);
        line(i, y, lastX, lastY);
        // line(i, height/2, lastX, lastY);
        lastX = i;
        lastY = y;
    }
}