let x;
let y;

let dvd;
let r,g,b;

let spd = 2;

let xspeed;
let yspeed;

function preload() {
    dvd = loadImage("res/DvdLogo.png");
}

function setup() {
  let cnv = createCanvas(800,600);
  cnv.class("p5Canvas");
  x = 400;
  y = 300;
  xspeed = spd;
  yspeed = spd;
  newColor();
}

function newColor() {
  r = random(100,256);
  g = random(100,256);
  b = random(100,256);
}

function draw() {
  background(0);
  // rect(x,y, 80, 60);
  tint(r,g,b);
  image(dvd, x, y, dvd.width, dvd.height);
  if (x + dvd.width >= width) {
    xspeed = -xspeed;
    x = width - dvd.width
    newColor();
  } else if (x <= 0) {
    xspeed = -xspeed;
    x = 0;
    newColor();
  }

  if (y + dvd.height >= height) {
    yspeed = -yspeed;
    y = height - dvd.height
    newColor();
  }else if (y <= 0) {
    yspeed = -yspeed;
    y = 0;
    newColor();
  }
  x += xspeed;
  y += yspeed;
}
