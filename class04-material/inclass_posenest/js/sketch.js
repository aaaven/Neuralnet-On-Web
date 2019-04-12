let video, posenet;
let poses = [];

function setup() {
  // put setup code here
 createCanvas(640,480);
 video = createCapture(VIDEO);
 video.hide();

 posenet = ml5.poseNet(video, function(){
   console.log("yohoooooooo! model is ready!");
 });

 posenet.on('pose',function(results){poses=results});

 noStroke();
 fill(255);
}

function draw() {
  // put drawing code here
 image(video,0,0);
 // console.log(poses);

 for(let i = 0; i < poses.length; i ++){
   let pose = poses[i].pose;

   let keyPts = pose.keypoints;
   for(let j = 0; j < keyPts.length; j ++){
     let keyPt = keyPts[j];
     let keyPtScore = keyPt.score;
     if(keyPtScore > 0.5){
       let keyPtPos = keyPt.position;
       let x = keyPtPos.x;
       let y = keyPtPos.y;
       ellipse(x,y,keyPtScore*20,keyPtScore*20);

     }
   }


 }

}
