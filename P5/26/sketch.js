/ Example 26

// Using the Noise function to create a random line

var step = 10;
var lastX = -10;
let lastY;
let middle;
let y;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(208);
    smooth();
    noLoop();
    noFill();
}

function draw() {
    var ynoise = random(10);
    stroke(20, 50, 70);
    middle = height / 2;
    line(0, middle, width, height / 2);

    stroke('red');
    for (i = 0; i <= width; i += 3) {
        y = middle - 40 + noise(ynoise) * 80;
        console.log(y);
        line(i, y, lastX, lastY);
        // line(i, height/2, lastX, lastY);
        lastX = i;
        lastY = y;
        ynoise += 0.1;
    }
}