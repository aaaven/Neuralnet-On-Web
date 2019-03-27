// aven le zhou: https://aven.cc
// 2019.03
// AI-Arts Series: Neuralnet On Web
// Class 04 Pose Detection, Skeleton Tracking with Posenet

let video,posenet;
let poses = [];


function setup() {
  // put setup code here
  createCanvas(800,600);
  video = createCapture(VIDEO);
  video.hide();
  
  posenet = ml5.poseNet(video,function(){
    console.log("model loaded");
  });
  
  posenet.on('pose', function(results){poses = results});

  noStroke();
}

function draw() {
  // put drawing code here
  image(video,0,0);
  // console.log(poses);
  for(let i = 0; i < poses.length; i ++){
    console.log("pose No." + i + "is detected...");
    let pose = poses[i].pose;
    let poseScore = pose.score;
    if(poseScore > 0.3){
      let keyPts = pose.keypoints;
      for(let j=0; j<keyPts.length; j++){
        let keyPt = keyPts[j];
        let keyPtScore = keyPt.score;
        if(keyPtScore>0.5){
          let keyPtPos = keyPt.position;
          ellipse(keyPtPos.x,keyPtPos.y,keyPtScore*20,keyPtScore*20);
        }
      }
    } 
  }
}
