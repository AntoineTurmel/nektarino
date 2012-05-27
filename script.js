// Nektarino JS
var playing = false
var nectaaudio = new Audio("http://scenemusic.unfy.org/necta64.ogg");

function playradio() {
		nectaaudio.load();
		nectaaudio.play();
    playing = true;
    document.getElementById('pause').style.visibility='visible';
    document.getElementById('pause').style.display='block';
    document.getElementById('play').style.visibility='hidden';
    document.getElementById('play').style.display='none';    
}

function pauseradio() {
    nectaaudio.pause();
    playing = false;
    document.getElementById('play').style.visibility='visible';
    document.getElementById('play').style.display='block';
    document.getElementById('pause').style.visibility='hidden';
    document.getElementById('pause').style.display='none';
}
