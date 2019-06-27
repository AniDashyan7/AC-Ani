var mic;
var button;
var smoothMicLevel=0;

function setup(){
  createCanvas(windowWidth,windowHeight-100,WEBGL);
  button = createButton("Listen");
  button.mousePressed(toggleListen);
	mic = new p5.AudioIn()
  mic.start();
}

function draw(){
  background(0);
  micLevel = mic.getLevel();
  console.log(micLevel); 
  translate(width/20,height/20);

  smoothMicLevel = lerp(smoothMicLevel, micLevel,0.5);
  fill(random(255),random(255),random(255));
  noStroke();

  for(var i = 0; i <  50; i++){
    beginShape();
    for(var a = 0; a < TWO_PI;a+=0.01){
    var r = width/5;
    var x = smoothMicLevel * r * 16 *  pow(sin(a), 3);
    var y = smoothMicLevel*(-r*(13 * cos(a) - 5*cos(2*a) - 2*cos(3*a) - cos(4*a)));
    ellipse(x*i,y*i,i,i);
  }
    endShape();
  }
    

   
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
