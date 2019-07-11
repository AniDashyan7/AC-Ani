var vol = new Tone.Volume(-12).toMaster();
var pl = new Tone.Players({
 	"kick": 'https://cdn.jsdelivr.net/gh/Tone.js/Tone/js/examples/audio/505/kick.mp3'

});

pl.connect(vol);

function play(){
	pl.get("kick").start();
}