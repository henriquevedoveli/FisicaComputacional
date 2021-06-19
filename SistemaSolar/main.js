
// let sun;
// let cam;

// function setup() {
//     createCanvas(600, 600, WEBGL).elt = () => false;
//     // canvas.elt.oncontextmenu = () => false;

//     cam = createEasyCam({ distance: 500 });

//     sun = new Astro(50, 0, 0);
//     sun.addAstro(4, 1);
// }
  
// function draw() {
//   background(51);
//   lights();
//   sun.show();
//   sun.orbita();
// }


////////////////

let sun;
let cam;

function setup() {
  let canvas = createCanvas(600, 600, WEBGL);
  // Disable the context menu on the canvas so the camera can use the right mouse button
  canvas.elt.oncontextmenu = () => false;

  cam = createEasyCam({ distance: 500 });

  sun = new Astro(20, 0, 0);
  sun.addAstro(6, 1);
}

function draw() {
  background(0);
  lights();
  sun.show();
  sun.orbita();
}