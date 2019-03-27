// aven le zhou: https://aven.cc
// 2019.03
// AI-Arts Series: Neuralnet On Web
// Class 02 Image/Video Classification with MobileNet



let img;
let canvas;

function preload(){
  img = loadImage("images/dada.png");
}
function setup() {
  // put setup code here
  canvas = createCanvas(600,400);
  background(0,255,255);
  // img = loadImage();
}

function draw() {
  // put drawing code here
  image(img,0,0);
}