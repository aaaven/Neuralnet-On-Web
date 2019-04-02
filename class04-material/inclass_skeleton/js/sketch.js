let video, posenet;
let poses = [];

function setup() {
  // put setup code here
 createCanvas(640,480);
 video = createCapture(VIDEO);
 video.hide();

 posenet = ml5.poseNet(video, function(){
   console.log("yo, model is ready!");
 });

 posenet.on('pose',function(results){
   poses = results;
 });

 stroke(255);
 strokeWeight(4);
}

function draw() {
  // put drawing code here
 image(video,0,0);
 for(let i = 0; i < poses.length; i ++){
   let skeleton = poses[i].skeleton;
   console.log(skeleton);
   for(let j = 0; j < skeleton.length; j ++){
     let seg = skeleton[j];
     let startPt = seg[0].position;
     let endPt = seg[1].position;
     line(startPt.x,startPt.y,endPt.x,endPt.y);

   }
 }
}
