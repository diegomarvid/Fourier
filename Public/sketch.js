
let dt = 0.01;
let t = 0;

let epycicles = [];

let x = []
let X = [];

let wave = [];

const USER = 0;
const FOURIER = 1;

let drawing = [];
let state = -1;

function mousePressed(){
  state = USER;
  drawing = [];
  x = [];
  t = 0;
  wave = [];
  epycicles = [];
}

function mouseReleased() {

  state = FOURIER;

  const skip = 2;

  for(let i = 0; i < drawing.length; i += skip) {
    x.push(new Complex(drawing[i].x, drawing[i].y, BINOMIAL));
  }

  X = dft(x);

  console.log(`N = ${X.length}`);

  X.sort((a, b) => b.A - a.A);

  crear_epycicles(X);

  dt = TWO_PI / X.length;

  


}

function setup() {

  createCanvas(800,600);
  background(0);
 
  
}

function draw() {

  background(0);

  if(state == USER) {

    let point = createVector(mouseX - width /2, mouseY - height / 2);
    drawing.push(point);

    stroke(255);
    noFill();
    beginShape();
    for (let v of drawing) {
      vertex(v.x + width / 2, v.y + height / 2);
    }
    endShape();

  } else if(state == FOURIER) {

    let v = show_epycicles(X);

    wave.unshift(v);
  
    show_wave(v);
  
    t += dt;
  
    if(t > TWO_PI) {
      t = 0;
      wave = [];
    }


  }

 

}

function crear_x() {


  //  let z1 = new Complex(100, 0, BINOMIAL);
  //  let z2 = new Complex(-100, 0, BINOMIAL);

  //  x = [z1, z1, z1, z2, z2, z2, z1, z1, z1, z2, z2, z2];

  for(let i = 0; i < 100; i++){
    x[i] = new Complex(random(-100, 100), random(-100, 100), BINOMIAL);
  }

  // console.log(x);

  //x = [new Complex(1,0,BINOMIAL), new Complex(0,0,BINOMIAL)];

}


function crear_epycicles(X) {

  let x_center = width / 2 ;
  let y_center = height / 2;
  
  for (let i = 0; i < X.length; i++) {

    //Arbitrario
    epycicles[i] = new Epycicle(x_center, y_center, X[i].A, X[i].f, X[i].phi);

    x_center = epycicles[i].x;
    y_center = epycicles[i].y;
    
  }


}

function show_epycicles(X){

  let i;

  for(i = 0; i < epycicles.length; i++){

    if( i != 0){
      epycicles[i].x_center = epycicles[i - 1].x;
      epycicles[i].y_center = epycicles[i - 1].y;
    }

    epycicles[i].show();
  
  }

  return createVector(epycicles[i - 1].x, epycicles[i - 1].y);

}

function show_wave() {

  

  
  beginShape();
  stroke(255);
  noFill();

  //line(epycicle.x , epycicle.y, 200, wave[0]);

  for(let i = 0; i < wave.length; i++) {
    //vertex(width / 2 + 100 + i, wave[i]);
    vertex(wave[i].x, wave[i].y);
  }

  endShape();

 

}


