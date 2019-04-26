let video, style, output;
let transfer = false;

function setup() {
  // put setup code here
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  style = ml5.styleTransfer("../models/lfm0", video, function () {
    console.log("model is loaded...");
  });

  output = createImg('');
  output.hide();
}

function draw() {
  // put drawing code here
  if (!transfer) {
    console.log("show camera source...");
    image(video, 0, 0);
  } else {
    console.log("show styled result...");
    if(style.ready){
      style.transfer(function (err, result) {
        if(err){
          console.log("transfer failed");
        }else{
          output.attribute('src',result.src);
        }
      });
    }
    image(output, 0, 0, 640, 480);
    console.log(output.width + ":" + output.height);
  }
}

function keyPressed() {
  if (key === ' ') {
    transfer = !transfer;
  }
}
