var maxSize = 20;
var phase = 0; 
var speed = 0.03;
var Columns = 40;
var Rows = 230;
var c = 2;
var colorA;
var colorB;

function setup(){
  createCanvas(windowWidth,windowHeight);
  noStroke();
}

function draw(){
  background(120);
  var x = width/2 ;
  phase = frameCount * speed;
  var sizeOffset = (cos(phase) + 1) * 0.5;
  var circleSize = sizeOffset * maxSize; 
  
  for(var k = 0 ; k < c; k++){
    var phaseC = phase + map(k, 0, c, 0, TWO_PI);

    for(var j = 0; j < Columns; j++){
      var colOffset = map(j, 0, Columns, 0, TWO_PI);
      var x = map(j,0,Columns,50,width - 50);

      for(var i = 0;i < Rows;i++){
        var y = height/2 + i * 10 + sin(phaseC+colOffset) * 50;
        var sizeOffset = (cos(phaseC - (i/Rows) + colOffset) + 1) * 0.5;
        fill(0,random(180,255),random(180,255),80);
        ellipse(x,y,circleSize,circleSize);
      }
    }
}
  }
   