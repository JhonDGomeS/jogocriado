let bulletActive = false;
let pontos = 0;
let ponto;
let municao;
let tempo = 10;

function setup() {
  createCanvas(600, 400);
  div = createDiv("Pontos: 0");
  div.innerHTML = "Pontos: 0"
  div.position(10, 2);
  div.style("color", "white");
  div.style("font-family", "arial");
  div.style("color", "white")
  div.style("fontSize", "26px")
}

function draw() {
  background(0);
  cenario();
  bolinha();
  obstaculo();
  keyTyped();
  bullet();
  colisao();
  crash();
  tempojogo();
  div.html("Pontos: " + pontos);
}



function bullet() {
  if (bulletActive) {
    fill(20, 25, 255);
    rect(xbullet, ybullet - 2, 20, 6, 200);
    xbullet += 10;

    if (xbullet >= width) {
      bulletActive = false;
      xbullet = xBolinha;
      ybullet = yBolinha;
    }
  }
}

function keyPressed() {
const maxObjects = 3;
const objects = [];
  if (keyCode === 32) {
    if (!bulletActive && objects.length < maxObjects) {
      bulletActive = true;
      xbullet = xBolinha;
      ybullet = yBolinha;
      objects.push({ bulletActive });
    }
  }
}


function colisao() {
  for( let obstaculo in xobst){
    if (xbullet >= xobst[obstaculo] + largura_obj &&
    ybullet <= yobst[obstaculo] + altura_obj &&
    ybullet >= yobst[obstaculo]) {
    bulletActive = false;
    xobst[obstaculo] = 700;
    yobst[obstaculo] = random(350);
    velocidadeObst = random(3, 10);
    pontos ++;
  }
  }
}

function crash(){
  for( let obstaculo in xobst){
    if (xBolinha + raioBolinha >= xobst[obstaculo] + largura_obj &&
    yBolinha + raioBolinha <= yobst[obstaculo] + altura_obj &&
    yBolinha + raioBolinha >= yobst[obstaculo]) {
      pontos = pontos-1;
  }
  }
}  

function tempojogo(){
  tempo = millis()/1000;
  fill(255);
  textSize(30);
  text("Tempo "+ tempo, 420, 30);
  
    if (tempo <= 10 ) {
    return;
  }
  if(tempo = true){
    textSize(60);
    text("Finish", 220, 200);
    stop(all);
  }
}
