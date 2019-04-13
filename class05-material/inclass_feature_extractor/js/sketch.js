// aven le zhou: https://aven.cc
// 2019.04
// AI-Arts Series: Neuralnet On Web
// Class 05 feature extractor and learn/train in realtime

let video, label;
let featureExtractor, classifier;
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

  classifier = featureExtractor.classification(video,function(){
    console.log("classifier is ready...");
  });

  labels = ['老虎','棒子','鸡','None'];
}

function draw() {
  // put drawing code here
  if(ready2predict){
    classifier.classify(function(err,result){
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
    classifier.addImage(labels[0],function(){
       console.log("add in" + labels[0] + "image");
    });
  }
  if(key === 'w' || key === 'W'){
    classifier.addImage(labels[1],function(){
       console.log("add in" + labels[1] + "image");
    });
  }
  if(key === 'e' || key === 'E'){
    classifier.addImage(labels[2],function(){
       console.log("add in" + labels[2] + "image");
    });
  }
  if(key === 'r' || key === 'R'){
    classifier.addImage(labels[3],function(){
       console.log("add in" + labels[3] + "image");
    });
  }
//train
  if(key === 't' || key === 'T'){
    classifier.train(function(loss){
      console.log("loss value is " + loss);
    })
  }
  //inference
  if(key === 'p' || key === 'P'){
    ready2predict = !ready2predict;
  }

  //save
  if(key === 's' || key === 'S'){
    classifier.save();
  }

  if(key == 'l' || key === 'L'){
    ready2predict = false;
    classifier.load('../model/model.json',function(){
      console.log("model is loaded")
    });
  }
}
