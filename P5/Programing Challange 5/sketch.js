var columns;
var rows;
var size = 20;
var w;
var h;

var grid = [];

var f = 0;

var song;
var button;
var amplitude;


function preload() {
  song = loadSound("../audio/myBeat.mp3");
}

function setup(){
  createCanvas(windowWidth,windowHeight-100,WEBGL);
  w = width;
  h = height;
  columns = w / size;
  rows = h / size;
  grid.push([columns,rows]);

  slider = createSlider(0,1,0.5,0.01);
  button = createButton("Play");
  button.mousePressed(togglePlay);
	// song.loop();
  amplitude = new p5.Amplitude();
}

function togglePlay() {
  if (!song.isPlaying()){
      song.loop();
      button.html("Pause");
  } else {
      song.stop();
      button.html("Play");
  }
}

function draw(){
  song.setVolume(slider.value());
  var vol = amplitude.getLevel();
  var sound = map(vol, 0, 1, 1, 10);
 

  f += 0.0001;

  var yoffset = f;
  for(var y = 0;y < rows; y++){
    var xoffset = 0;
    for(var x = 0; x < columns; x++){
      grid.push([x,y]);
      grid[x][y] = map(noise(xoffset,yoffset), 0, 1, -200,200);

      xoffset += 0.3;
    }
    yoffset += 0.3;
  }

  background(0);
  noFill();
  stroke(random(255),random(255),random(255));
  translate(width/20-600,height/20-100);
  rotateX(PI/3);

  translate(-w/20,-h/20);
  for(var y = 0;y < rows-1; y++){
    beginShape(TRIANGLE_STRIP);
    for(var x = 0; x < columns; x++){
      vertex(x*size*sound,y*size*sound,grid[x][y])*sound;
      vertex(x*size*sound,(y+1)*size*sound ,grid[x][y]*sound);
      // rect(x*size,y*size,size,size);
    }
    endShape();
  }  
}
