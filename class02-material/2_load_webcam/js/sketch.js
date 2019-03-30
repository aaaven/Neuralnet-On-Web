// aven le zhou: https://aven.cc
// 2019.03
// AI-Arts Series: Neuralnet On Web
// Class 02 Image/Video Classification with MobileNet


let video;
let canvas;

let classifier;

function setup() {
  canvas = createCanvas(600,400);
  background(0,255,255);
  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  image(video,0,0);
}