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

function draw() {

  background(0);

  if(state == USER) {

    

    //Podria evaluar cargar cada dos valores en vez de uno
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

function escribir_txt() {

  writer = createWriter('dft.txt');

  F.dft.sort((a, b) => a.f - b.f);

  let c = new Complex(0, 0, POLAR);

  for(let i = 0; i < F.N; i++) {
    
    c.a = F.dft[i].A;
    c.b = F.dft[i].phi;

    writer.write(Complex.poltobin(c).str + "\n");
  }

  F.dft.sort((a, b) => b.A - a.A);

  writer.close();


}




