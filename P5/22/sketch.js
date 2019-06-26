// Example 22

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#6AA21E');
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
      rect(x, y, 30, 30);
      y = y + 40;
    }
    x = x + 40;
  }
}