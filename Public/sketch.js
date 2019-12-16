let x = []
let F;

const USER = 0;
const FOURIER = 1;

let state = -1;

function mousePressed(){
  state = USER;
  x = [];
}

function mouseReleased() {

  state = FOURIER;

  F = new Fourier(x);

  console.log(`N = ${F.N}`);

}

function setup() {

  createCanvas(800,600);
  background(0);
 
  
}

function draw() {

  background(0);

  if(state == USER) {

    //Podria evaluar cargar cada dos valores en vez de uno
    x.push(new Complex(mouseX - width/2, mouseY - height/2));

    stroke(255);
    noFill();
    beginShape();
    for (let c of x) {
      vertex(c.a + width / 2, c.b + height / 2);
    }
    endShape();

  } else if(state == FOURIER) {

    F.show_epycicles(true);

  }

 
}




