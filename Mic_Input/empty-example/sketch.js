

var mic;
var button;
var smoothMicLevel=0;

function setup(){
  createCanvas(windowWidth,windowHeight-100);
  button = createButton("Listen");
  button.mousePressed(toggleListen);
	mic = new p5.AudioIn()
  mic.start();
}

function draw(){
  background(0);
  micLevel = mic.getLevel();
  translate(width/2,height/2);

  smoothMicLevel = lerp(smoothMicLevel, micLevel,0.5);
  fill(255,0,0);
  // stroke(255);

  beginShape();
  for(var a = 0; a < TWO_PI;a+=0.01){
    var r = width/10;
    var x = smoothMicLevel * r * 16 *  pow(sin(a), 3);
    var y = smoothMicLevel*(-r*(13 * cos(a) - 5*cos(2*a) - 2*cos(3*a) - cos(4*a)));
    vertex(x,y);
  }
  endShape();

  // var vol = mic.getLevel();
  // ellipse(width/2,height/2,vol*width,vol*width);
}

function toggleListen() {
	if (getAudioContext().state !== 'running') {
    	getAudioContext().resume();
		text('listening to audio', width/2, height/2);
		button.html("Stop");
	} else {
        text('click Play button to start', width/2, height/2);

        button.html("Listen");
    }
}