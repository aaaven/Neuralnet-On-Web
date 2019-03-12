let img;
let canvas;

function preload(){
  img = loadImage("images/dada.png");
}
function setup() {
  // put setup code here
  canvas = createCanvas(800,600);
  background(0,255,255);
  // img = loadImage();
}

function draw() {
  // put drawing code here
  image(img,0,0);
}