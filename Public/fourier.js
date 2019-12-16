
//x is a complex number
function dft(x){

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
