let video, style, output;
let transfer = false;
function setup() {
  // put setup code here
  createCanvas(640,480);
  video = createCapture(VIDEO);
  video.hide();

  style = ml5.styleTransfer("../models/lfm0", video, function(){
    console.log("style model is loaded...");
  });

  output = createImg('');
  output.hide();

}

function draw() {
  // put drawing code here
  if(transfer){
    style.transfer(function(err, result){
      if(err){
        console.log("style transfer error");
      }else{
        output.attribute('src',result.src); //label = result;
      }
    });
    image(output,0,0,video.width,video.height);
  }else{
    image(video,0,0);
  }
}

function keyPressed(){
  if(key === ' '){
    transfer = !transfer;
  }
}
