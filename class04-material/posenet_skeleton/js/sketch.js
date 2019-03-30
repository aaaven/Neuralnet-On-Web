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
  
  //Triggers every time there's a new pose detected.
  posenet.on('pose', function(results){
    poses = results;
    console.log("new pose detected");
  });

  stroke(255);
  strokeWeight(4);
}

function draw() {
  // put drawing code here
  image(video,0,0);
  // console.log(poses);
  for(let i = 0; i < poses.length; i ++){
    console.log("pose No." + i + "is detected...");
    let skeleton = poses[i].skeleton;
    for(let j=0; j < skeleton.length;j++){
      let seg = skeleton[j];
      let startPt = seg[0];
      let endPt = seg[1];
      line(startPt.position.x,startPt.position.y,endPt.position.x,endPt.position.y);
    }
  }
}