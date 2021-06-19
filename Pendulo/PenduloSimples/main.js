let pendulo;

function setup() {
  createCanvas(640, 360);
  pendulo = new Pendulo(width / 2, 0, 175);
}

function draw() {
  background(0);
  pendulo.update();
  pendulo.show();
}