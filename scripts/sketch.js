let x;
let y;

let spd = 1;

let xspeed;
let yspeed;

function setup() {
  createCanvas(400,300);
  x = 200;
  y = 150;
  xspeed = spd;
  yspeed = spd;

}

function draw() {
  background(0);
  rect(x,y, 40, 30);
  if (x == width - 40) {
    xspeed = -spd;
  } else if (x == 0) {
    xspeed = spd;
  }

  if (y == height - 30) {
    yspeed = -spd;
  } else if (y == 0) {
    yspeed = spd;
  }
  x += xspeed;
  y += yspeed;
}
