let x;
let y;

let dvd;

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

}

function draw() {
  background(0);
  // rect(x,y, 80, 60);
  image(dvd, x, y, dvd.width/2, dvd.height/2);
  if (x + dvd.width/2 >= width ||x == 0) {
    xspeed = -xspeed;
  }

  if (y + dvd.height/2 >= height || y == 0) {
    yspeed = -yspeed;
  }
  x += xspeed;
  y += yspeed;
}
