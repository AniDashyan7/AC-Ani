// Example 24

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
            fill(255, 0, 0, random(100));
          } else {
            // but usually pick a random gray color
            fill(random(180, 255), random(90));
            rect(x+20, y+20, 40, 40);
          }
      ellipse(x+20, y+20, random(40), random(40));
      y = y + 20;
    }
    x = x + 20;
  }
}