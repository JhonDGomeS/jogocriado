let xBolinha = 50;
let yBolinha = 340;
let diametro;
let raioBolinha = diametro / 2;
let ColisaoXBolinha = xBolinha + raioBolinha;
let ColisaoYBolinha = yBolinha + raioBolinha;
let xbullet = xBolinha;
let ybullet = yBolinha -2;

function bolinha() {

 diametro = 22;
  //xBolinha = mouseX;
  //yBolinha = mouseY;
  let c = color("#EA0D0Df");
  fill(c);
  circle(xBolinha, yBolinha, diametro);
  if (keyIsDown(LEFT_ARROW)) {
    xBolinha -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    xBolinha += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    yBolinha -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    yBolinha += 5;
  }
}
function keyTyped() {
  if (key == "w") {
    yBolinha -= 5;
  } else if (key == "s") {
    down = yBolinha += 5;
  } else if (key == "d") {
    xBolinha += 5;
  } else if (key == "a") {
    right = xBolinha -= 5;
  }
}
