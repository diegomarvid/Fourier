let x = []
let F;

const USER = 0;
const FOURIER = 1;

let state = -1;

let writer;

let counter = 0;
const resolution = 2;

function mousePressed(){
  state = USER;
  x = [];
}

function mouseReleased() {

  counter = 0;

  state = FOURIER;

  F = new Fourier(x);

  //escribir_txt();

  console.log(`N = ${F.N}`);

  

}

function setup() {

  createCanvas(800,600);
  background(0);

  
 
  
}

function keyPressed() {

  // 's'
  if(keyCode === 83) {
    F.export('dft.txt');
  }

}

function draw() {

  background(0);

  if(state == USER) {

    if(counter % resolution == 0){
      x.push(new Complex(mouseX - width/2, mouseY - height/2));
    }

    counter++;

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

