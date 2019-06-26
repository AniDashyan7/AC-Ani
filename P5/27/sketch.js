// Example 27

var step = 10;
var lastX = -10;
var radius = 200;
let lastY;
let middle;
let y;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(208);
    smooth();
    noLoop();
    noFill();
    strokeWeight(5);
}

function draw() {
    stroke(20, 50, 70);
    centX = width / 2;
    centY = height / 2;
    stroke(0, 30);
    noFill();
    ellipse(centX, centY, radius * 2, radius * 2);

    stroke('red');
    for (ang = 0; ang <= 360; ang += 5) {
        var rad = radians(ang);
        x = centX + (radius * cos(rad));
        y = centY + (radius * sin(rad));
        point(x, y);
    }
}