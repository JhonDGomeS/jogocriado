let largura_obj = 50;
let altura_obj = 50;
let velocidadeObst = 5;
let xobst = [700, 700, 700];
let yobst = [350, 50, 300];


function obstaculo() {

  let corObst = 200;
  fill(corObst);
  for( let i = 0; i < 3; i = i + 1){
  rect(xobst[i], yobst[i], altura_obj, largura_obj, 20);
  xobst [i] -= velocidadeObst;
   // yobst [obstaculo] += velocidadeObst;
    if (xobst[i] < -30) {
    xobst[i] = 700;
    yobst[i] = random(50, 350);
    velocidadeObst = random(3, 12);
  }
  }
}