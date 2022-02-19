objects = [];
var img = "";
function preload() {
    img = loadImage("Livingroom.jpg");
}
function setup() {
    canvas = createCanvas(380, 380);
    canvas.center(); 
    objectDetector = ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("staty").innerHTML = "Status: Objects Detected";
}
function modelLoaded() {
    console.log("model loaded");
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        objects = results;
    }
}
function draw() {
    image(img, 0, 0, 380, 380);
for (i = 0; i < objects.length; i++) {
            console.log("I see you");
            strokeWeight(2);
            fill("red");
            percent = floor(objects[i].confidence * 100)
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y)
            noFill()
            stroke("red");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
            document.getElementById("objects").innerHTML = " Number of objects detected : " + objects.length;
        }
    }