song1 = "";
song2 = "";

function preload() {
    song1 = loadSound("Fix_You.mp3");
    song2 = loadSound("music.mp3");
}

function setup() {
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

}
