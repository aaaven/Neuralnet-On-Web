// aven le zhou: https://aven.cc
// 2019.04
// AI-Arts Series: Neuralnet On Web
// Class 05 feature extractor and learn/train in realtime

let video, label;
let featureExtractor, regressor;
let ready2predict = false;
let labels = [];


function setup() {
  // put setup code here
  createCanvas(640,480);
  video = createCapture(VIDEO);
  // video.hide();

  featureExtractor = ml5.featureExtractor('Mobilenet', video,function(){
    console.log("Model is loaded...");
  });

  regressor = featureExtractor.regression(video,function(){
    console.log("classifier is ready...");
  });

  labels = [0,5,9];
}

function draw() {
  // put drawing code here
  if(ready2predict){
    regressor.predict(function(err,result){
      if(err){
        console.log("classification failed");
      }else{
        label = result;
        console.log(label);
      }
    })
  }
}

// add data
function keyPressed(){
  if(key === 'q' || key === 'Q'){
    regressor.addImage(labels[0],function(){
       console.log("add in " + labels[0] + " image");
    });
  }
  if(key === 'w' || key === 'W'){
    regressor.addImage(labels[1],function(){
       console.log("add in " + labels[1] + " image");
    });
  }
  if(key === 'e' || key === 'E'){
    regressor.addImage(labels[2],function(){
       console.log("add in" + labels[2] + "image");
    });
  }
//train
  if(key === 't' || key === 'T'){
    regressor.train(function(loss){
      console.log("loss value is " + loss);
    })
  }
  //inference
  if(key === 'p' || key === 'P'){
    ready2predict = !ready2predict;
  }

  //save
  if(key === 's' || key === 'S'){
    regressor.save();
  }

  if(key == 'l' || key === 'L'){
    ready2predict = false;
    regressor.load('../model/model.json',function(){
      console.log("model is loaded")
    });
  }
}
