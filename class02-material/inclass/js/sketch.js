let video;
let classifier;
let label, prob;

function setup() {
  // put setup code here
  createCanvas(600,400);
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('mobileNet',video,function(){
    console.log("model is ready!");
  });
  textAlign(CENTER);
}

function draw() {
  // put drawing code here
  // background(random(255),0,255);
  image(video,0,0);
  classifier.predict(function(err,results){
    if(err){
      console.error(err);
    }
    // result
    label = results[0].className.split(',')[0];
    prob = results[0].probability;
    console.log(label);
    console.log(prob);
  });
  text(label + "\n" + prob,500,height*0.5);
}
