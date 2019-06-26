// Example 30

// global variables

let num = 10;
let angNoise, radiusNoise, xNoise, yNoise;
let angle;
let radius = 100;
let strokeCol = 254;
let strokeChange = -1;

function clearBackground() {
  background(255);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(208);
    smooth();
    // noLoop();
    noFill();
    strokeWeight(0.5);
    clearBackground();
    angle = -PI/2;
    angNoise = random(10);
    radiusNoise = random(10);
    xNoise = random(10);
    yNoise = random(10);
}

function draw() {
    radiusNoise += 0.005;
    radius = (noise(radiusNoise) * 500) +1;

    angNoise += 0.005;
    angle += (noise(angNoise) * 6) - 3;
    if (angle > 360) { angle -= 360; }
    if (angle < 0) { angle += 360; }

    // wobble centre
    xNoise += 0.01;
    yNoise += 0.01;
    let centreX = width/2 + (noise(xNoise) * 100) - 50;
    let centreY = height/2 + (noise(yNoise) * 100) - 50;

    let rad = radians(angle);
    let x1 = centreX + (radius * cos(rad));
    let y1 = centreY + (radius * sin(rad));

    // opposite end of line
    let opprad = rad + PI;
    let x2 = centreX + (radius * cos(opprad));
    let y2 = centreY + (radius * sin(opprad));

    noFill();
    strokeCol += strokeChange;
    if (strokeCol > 254) { strokeChange *= -1; }
    if (strokeCol < 0) { strokeChange *= -1; }
    stroke(strokeCol, 60);
    strokeWeight(1);
    line(x1, y1, x2, y2);

    // disply the wandering centre visible
    //fill(255,0,0,40);
    //noStroke();
    //ellipseMode(CENTER);
    //ellipse(centreX, centreY, 2, 2);
}

function mousePressed() {
  clearBackground();
}