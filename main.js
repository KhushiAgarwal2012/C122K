function preload() {}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();

  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  image(video, 0, 0, 150, 150);

  background(200);
  fill(255, 0, 0);
  circle(50, 50, 50);
  circle(50, 250, 50);
  circle(250, 250, 50);
  circle(250, 50, 50);
  fill(0, 200, 0);
  rect(75, 40, 153, 20);
  rect(75, 240, 153, 20);
  rect(240, 75, 20, 153);
  rect(40, 75, 20, 153);
}

function take_snapshot() {
  save("myFilterImage.png");
}
