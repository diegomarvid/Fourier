
class Fourier {

  constructor(x, xc, yc) {

    this.dft = this.fft(x);

    this.dft.sort((a, b) => b.A - a.A);

    this.N = this.dft.length;

    this.t = 0;
    this.dt = TWO_PI / this.N;

    this.epycicles = [];

    this.crear_epycicles(xc, yc);

    this.wave = [];

  }


  //x is a complex number
  fft(x){

  let X = [];
  const N = x.length;

  let Wn = new Complex(1, 0 , POLAR);

  //Xk = sum 0 to N-1 xn * e ^ i*2*pi*k*n / N

  //z = xn * Wn
  let z;
  let Xk;

  for (let k = 0; k < N; k++) {

    Xk = new Complex(0, 0, BINOMIAL);

    for (let n = 0; n < N; n++) {

      Wn.b = - (TWO_PI * k * n) / N;

      z = x[n].mult(Wn);

      Xk = Xk.add(z, POLAR);

    }

    //Divido modulo entre N
    Xk.a = Xk.a / N;

    

    let f = k;
    let A = Xk.a;
    let phi = Xk.b;

    X[k] = {f, A, phi } ;
  }

  return X;
}


crear_epycicles(x, y) {


  let x_center;
  let y_center;

  if(x == null) {
    x_center = width / 2;
  }

  if(y == null) {
    y_center = height / 2;
  }
  

  for (let i = 0; i < this.dft.length; i++) {

    //Arbitrario
    this.epycicles[i] = new Epycicle(x_center, y_center, this.dft[i].A, this.dft[i].f, this.dft[i].phi);

    x_center = this.epycicles[i].x;
    y_center = this.epycicles[i].y;
    
  }


}

show_epycicles(isWave){

  let i;

  

  for(i = 0; i < this.epycicles.length; i++){

    if( i != 0){
      this.epycicles[i].x_center = this.epycicles[i - 1].x;
      this.epycicles[i].y_center = this.epycicles[i - 1].y;      
    }

    this.epycicles[i].show(this.t);
  
  }

  if(isWave == true) {
    this.wave.push(createVector(this.epycicles[i - 1].x, this.epycicles[i - 1].y));
    this.show_wave();
  } else{
    this.wave = [];
  }
  

  this.t += this.dt;

  if(this.t > TWO_PI) {
    this.t = 0;
    this.wave = [];
  }

  

}


show_wave() {


  beginShape();
  stroke(255);
  noFill();

  for(let i = 0; i < this.wave.length; i++) {
    
    vertex(this.wave[i].x, this.wave[i].y);
  }

  endShape();



}


}




