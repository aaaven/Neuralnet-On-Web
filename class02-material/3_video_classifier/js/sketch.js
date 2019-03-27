// aven le zhou: https://aven.cc
// 2019.03
// AI-Arts Series: Neuralnet On Web
// Class 02 Image/Video Classification with MobileNet


let video;
let canvas;

let classifier;

function setup() {
  canvas = createCanvas(600, 400);
  background(0, 255, 255);
  textAlign(CENTER);
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier("MobileNet", video, function () {
    console.log("model loaded... ");
  });
}

function draw() {
  image(video, 0, 0);

  classifier.predict(function(err,results){
    let label = results[0].className.split(',')[0];
    let prob = results[0].probability;
    if(prob > 0.5){
      console.log(label);
    }
  });
}