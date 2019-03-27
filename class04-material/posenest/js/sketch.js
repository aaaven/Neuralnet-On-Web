// aven le zhou: https://aven.cc
// 2019.03
// AI-Arts Series: Neuralnet On Web
// Class 04 Pose Detection, Skeleton Tracking with Posenet

let video, posenet;
let poses = [];


function setup() {
  // put setup code here
  createCanvas(800, 600);
  video = createCapture(VIDEO);
  video.hide();

  posenet = ml5.poseNet(video, function () {
    console.log("model loaded");
  });

  posenet.on('pose', function (results) { poses = results });

  stroke(255);
  strokeWeight(2);
}

function draw() {
  // put drawing code here
  image(video, 0, 0);
  // console.log(poses);
  for (let i = 0; i < poses.length; i++) {
    console.log("pose No." + i + "is detected...");
    let pose = poses[i].pose;
    let keyPts = pose.keypoints;
    for (let j = 0; j < keyPts.length - 1; j++) {
      if (keyPts[j].score > 0.5) {
        for (let k = j + 1; k < keyPts.length; k++) {
          if (keyPts[k].score > 0.5) {
            line(keyPts[j].position.x, keyPts[j].position.y, keyPts[k].position.x, keyPts[k].position.y);
          }
        }
      }
    }
  }
}
