let x;
let y;

let spd = 2;

let xspeed;
let yspeed;

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
  rect(x,y, 80, 60);
  if (x == width - 80) {
    xspeed = -spd;
  } else if (x == 0) {
    xspeed = spd;
  }

  if (y == height - 60) {
    yspeed = -spd;
  } else if (y == 0) {
    yspeed = spd;
  }
  x += xspeed;
  y += yspeed;
}
