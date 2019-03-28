let video, yolo;
let output = [];

function setup() {
  // put setup code here
  createCanvas(640,480);
  video = createCapture(VIDEO);
  video.size(width,height);
  video.hide();
  console.log(video.width + ":" + video.height);

  yolo = ml5.YOLO(video, function(){
    console.log("model loaded...");
  });

  textAlign(LEFT,BOTTOM);
  strokeWeight(1);
  noFill();
  stroke(255);
}

function draw() {
  background(0);
  // put drawing code here
  image(video,0,0);
  yolo.detect(function(err, results){
    if(err){
      console.log("something went wrong");
    }else{
      output = results;
      // if(output.length > 1){
        // console.log(output);
      // }
    }
  });

  for(let i = 0; i < output.length; i ++){
    let object = output[i];
    let name = object.className;

    let x = object.x*video.width;
    let y = object.y*video.height;
    let w = object.w*video.width;
    let h = object.h*video.height;
    
    push();
    translate(x,y);
    noFill();
    rect(0,0,w,h);
    textSize(0.3*w);
    rotate(PI/2);
    fill(255);
    text(name,0.03*h,-0.03*w);
    pop();
  }
}