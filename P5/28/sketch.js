// Example 28

//Turning a Circle into a Spiral
 
var step = 10;
var lastX = -10;
var radius = 50;
let lastY;
let middle;
let y;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(208);
    smooth();
    noLoop();
    noFill();
    strokeWeight(3);
}

function draw() {
    stroke(20, 50, 70);
    centX = width / 2;
    centY = height / 2;
    stroke(0, 30);
    noFill();
    // ellipse(centX, centY, radius * 2, radius * 2);

    stroke('red');
    for (ang = 0; ang <= 4000; ang += 2) {
        radius += 0.2;
        var rad = radians(ang);
        x = centX + (radius * cos(rad));
        y = centY + (radius * sin(rad));
        point(x, y);
    }
}