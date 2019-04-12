let video, yolo;
let outputs = [];
function setup() {
  // put setup code here
  createCanvas(640,480);
  video = createCapture(VIDEO);
  video.hide();

  yolo = ml5.YOLO(video,function(){
    console.log("model loaded... Yeah!!!");
  });

  strokeWeight(1);
  noFill();
  stroke(255);
}

function draw() {
  // put drawing code here
  image(video,0,0);

  yolo.detect(function(err,results){
    //if failed, console.error();
    if(err){
      console.log("something is wrong...");
    }else{
      outputs = results;
      console.log(output);
    }
  });

  //output;
  for(let i = 0; i < outputs.length; i ++){
    let object = outputs[i];
    let name = object.className;
    let prob = object.classProb;

    let x = object.x*video.width;
    let w = object.w*video.width;
    let y = object.y*video.height;
    let h = object.h*video.height;



    push();
    translate(x,y);
    rect(0,0,w,h);
    textSize(0.3*w);
    rotate(PI/2);
    text(name,0.03*h,-0.03*h);
    pop();



  }

}
