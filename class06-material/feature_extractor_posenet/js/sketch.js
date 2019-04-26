let poseNet, poses, poseData, knnClassifier;
let video, labels = [], label, ready2predict = false;

function setup() {
  // put setup code here

  video = createCapture(VIDEO);
  // video.hide();

  createCanvas(640,480);

  poseNet = ml5.poseNet(video, function(){
    console.log('posenet is ready...');
  });
  poseNet.on('pose',function(resutls){
    poses = resutls;
  });

  knnClassifier = ml5.KNNClassifier();
  labels = ['Tree','NYU','左','右'];
}

function draw() {
  // put drawing code here
  if(ready2predict){
    const poseData = poses[0].pose.keypoints.map(p => [p.score, p.position.x, p.position.y]);
    knnClassifier.classify(poseData, function(err,result){
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
    const poseData = poses[0].pose.keypoints.map(p => [p.score, p.position.x, p.position.y]);
    knnClassifier.addExample(poseData,labels[0]);
    console.log(labels[0] + ' is added...');
    // counters[0] ++;
  }
  if(key === 'w' || key === 'W'){
    const poseData = poses[0].pose.keypoints.map(p => [p.score, p.position.x, p.position.y]);
    knnClassifier.addExample(poseData,labels[1]);
    console.log(labels[1] + ' is added...');

  }
  if(key === 'e' || key === 'E'){
    const poseData = poses[0].pose.keypoints.map(p => [p.score, p.position.x, p.position.y]);
    knnClassifier.addExample(poseData,labels[2]);
    console.log(labels[2] + ' is added...');

  }
  if(key === 'r' || key === 'R'){
    const poseData = poses[0].pose.keypoints.map(p => [p.score, p.position.x, p.position.y]);
    knnClassifier.addExample(poseData,labels[3]);
    console.log(labels[3] + ' is added...');

  }
}
