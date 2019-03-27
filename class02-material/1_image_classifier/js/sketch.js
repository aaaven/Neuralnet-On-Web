// aven le zhou: https://aven.cc
// 2019.03
// AI-Arts Series: Neuralnet On Web
// Class 02 Image/Video Classification with MobileNet



let img;
let canvas;
let classifier;

function preload() {
  img = loadImage("images/modelx.png");
}

function setup() {
  canvas = createCanvas(600, 400);
  background(0, 255, 255);
  textAlign(CENTER);

  classifier = ml5.imageClassifier('MobileNet', function () {
    console.log("Model Loaded");
  });
}


function draw() {
  image(img, 0, 0);

  classifier.predict(img, function (err, results) {
    if (err) {
      console.error(err);
    }
    // The results are in an array ordered by probability.
    console.log(results);
    let label = results[0].className;
    let prob = results[0].probability;

    text(label + "\n" + prob, 500, 0.5 * height);

  });
  noLoop();
}