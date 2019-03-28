// aven le zhou: https://aven.cc
// 2019.03
// AI-Arts Series: Neuralnet On Web
// Class 03 Object Detection with YOLO

let video, yolo;
let output = [];
let crops = [];

function setup() {
  // put setup code here
  createCanvas(640, 960);
  video = createCapture(VIDEO);
  video.size(width, 0.5 * height);
  video.hide();
  console.log(video.width + ":" + video.height);

  yolo = ml5.YOLO(video, function () {
    console.log("model loaded...");
  });

  textAlign(LEFT, BOTTOM);
  strokeWeight(1);
  noFill();
  stroke(255);
}

function draw() {
  background(255);
  // put drawing code here
  image(video, 0, 0);
  yolo.detect(function (err, results) {
    if (err) {
      console.log("something went wrong");
    } else {
      output = results;
      // if(output.length > 1){
      // console.log(output);
      // }
    }
  });

  for (let i = 0; i < output.length; i++) {
    let object = output[i];
    let name = object.className;

    let x = object.x * video.width;
    let y = object.y * video.height;
    let w = object.w * video.width;
    let h = object.h * video.height;

    push();
    translate(x, y);
    noFill();
    rect(0, 0, w, h);
    textSize(0.3 * w);
    rotate(PI / 2);
    fill(255);
    text(name, 0.03 * h, -0.03 * w);
    pop();

    let img = video.get(x, y, w, h);
    crops.push(img);
    if (crops.length > 20) {
      crops.splice(0, 1);
    }
  }

  if (crops.length > 19) {
    for (let k = 0; k < 4; k++) {
      for (let j = 0; j < 5; j++) {
        let index = k * 5 + j;
        // console.log(index);
        let img = crops[index];
        console.log(img.height);
        image(img, 128 * j, 0.5 * height + k * 96);
        // save(img,"s-"+index+".png");
        // console.log(img);
      }
    }
  }
}

