// Lesson 2

// Bonus Challange 1


// var x = 0;
// var y = 0;
// var add = 100;

// function setup(){
//   createCanvas(windowWidth,windowHeight);
// }

// function draw(){
  
// strokeWeight(50);
// strokeCap(SQUARE);
// line(width/2,y,width,y);

// for(var i = 0; i < 4;i++){
//   line(width/2,y+add*i,width,y+add*i);
// }

// line(width/2,height/2,width/2,height);  

// for(var i = 0; i < 11;i++){
//   line(width/2+add*i,height/2,width/2+add*i,height);
// }


// line(x,y,width/2,height);

// for(var i = 1; i < 11;i++){
//   line(x,y-add*i,width/2,height-add*i);
// }

// line(x,height,width/4,height/2);

// for(var i = 1; i < 5;i++){
//   line(x-add*i,height-add*i,width/4-add*i,height/2-add*i); 
//   line(x+add*i,height+add*i,width/4+add*i,height/2+add*i); 
// }

//  }

//  Rain
// var x = 30;
// var y = 30;

// function setup(){
//   createCanvas(windowWidth,windowHeight);
//   noStroke();
// }

// function draw(){
//   background(100);
//   fill(255);
//   ellipse(x,y,2,10);
//   y = y+20;

//   if(y > height){
//     y = random(0,-height);
//   }
  
//   for(var i = 0; i< 200;i++){
//     ellipse(x*i,y,5,20);
//   }
// }

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  smooth();
  noStroke();
  noLoop();
}

function draw(){
  var x = 0;
  while (x < width) {
    var y = 0;
    while (y < height) {
      fill(random(200,255),random(200,255),random(200,255));
      rect(x, y, 60, 60);
      y = y + 62;
    }
    x = x + 62;
  }

  fill();
}