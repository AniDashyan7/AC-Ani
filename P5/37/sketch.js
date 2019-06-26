// Example 33

// Using FFT with a Radial Visualization

var song;
var button;
var fft;
var barWidth;

var ampHistory = [];

function preload() {
    song = loadSound("../audio/myBeat.mp3");
}

function setup() {
    createCanvas(windowWidth, windowHeight - 100);
    angleMode(DEGREES);
    colorMode(HSB);
    slider = createSlider(0, 1, 0.5, 0.01);
    button = createButton("Play");
    button.mousePressed(togglePlay);
    // song.loop();
    fft = new p5.FFT(.6, 64);
    barWidth = width / 64;
}

function togglePlay() {
    if (!song.isPlaying()) {
        song.loop();
        button.html("Pause");
    } else {
        song.stop();
        button.html("Play");
    }
}

function draw() {
    background(0);
    song.setVolume(slider.value());
    var spectrum = fft.analyze()
    translate(width / 2, height / 2)
    beginShape();
    for (var i = 0; i < spectrum.length; i++) {
        var angle = map(i, 0, spectrum.length, 0, 360);
        var amp = spectrum[i];
        var r = map(amp, 0, 256, 20, 250);
        fill(i, 255, 255);
        var x = r * cos(angle);
        var y = r * sin(angle);
        stroke(i * 5, 255, 255);
        line(0, 0, x, y);
        vertex(x, y);
        //var y = map(amp, 0, 256, height, 0);
        //rect(i * w, y, w - 2, height - y);
    }
    endShape();
}