let featureExtractor, features, knnClassifier;
let video, labels = [], label, ready2predict = false;

function setup() {
  // put setup code here

  video = createCapture(VIDEO);
  // video.hide();

  createCanvas(800,600);

  featureExtractor = ml5.featureExtractor('MobileNet', function(){
    console.log("mobilenet is loaded... feature extractor is ready...");
  });

  knnClassifier = ml5.KNNClassifier();

  labels = ['Tree','NYU','左','右'];
}

function draw() {
  // put drawing code here
  if(ready2predict){
    const features = featureExtractor.infer(video);
    knnClassifier.classify(features, function(err,result){
      if(err){
        console.log(err);
        console.log('knn classify failed...');
      }else{
        label = result.label;
      }
    console.log(label);
    });
  }
}

function keyPressed(){
  if(key === 'p' || key === 'P'){
    ready2predict = !ready2predict;
  }
  if(key === 'q' || key === 'Q'){
    const features = featureExtractor.infer(video);
    knnClassifier.addExample(features,labels[0]);
    console.log(labels[0] + ' is added...');
    // counters[0] ++;
  }
  if(key === 'w' || key === 'W'){
    const features = featureExtractor.infer(video);
    knnClassifier.addExample(features,labels[1]);
    console.log(labels[1] + ' is added...');

  }
  if(key === 'e' || key === 'E'){
    const features = featureExtractor.infer(video);
    knnClassifier.addExample(features,labels[2]);
    console.log(labels[2] + ' is added...');

  }
  if(key === 'r' || key === 'R'){
    const features = featureExtractor.infer(video);
    knnClassifier.addExample(features,labels[3]);
    console.log(labels[3] + ' is added...');

  }
}
