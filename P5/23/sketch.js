// Example 23

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#86a9e0');
  smooth();
  noStroke();
  noLoop();
}

function draw(){
  var x = 0;
  while (x < width) {
    var y = 0;
    while (y < height) {
        if (random(100) < 1 ) {
            fill(255, 0, 0, 150);
          } else {
            // but usually pick a random gray color
            fill(random(100, 200),150);
          }
      ellipse(x+20, y+20, 40, 40);
      y = y + 40;
    }
    x = x + 40;
  }
}