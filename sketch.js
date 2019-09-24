let img;
function preload() {
  img = loadImage('pic.jpg');
}
function setup() {
  background(50);
  // Top-left corner of the img is at (10, 10)
  // Width and height are 50 x 50
  image(img, 10, 10, 50, 50);
}

function draw() {
  if (mouseIsPressed) {
    noStroke();
    ellipse(mouseX,mouseY,1,1);
  }
}