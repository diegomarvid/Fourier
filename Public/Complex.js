const BINOMIAL = 0;

const POLAR = 1;

class Complex {

    constructor(a, b, mode){

        
        //ON BINOMIAL   
        // z = a + bi

        //ON POLAR
        //z = a < b;

        this.a = a;
        this.b = b;
        this.mode = mode;

        if(mode = null) {
            this.mode = BINOMIAL;
        }

        if(this.mode == BINOMIAL) {
            this.str = `${this.a} + ${this.b}i`;
        } else {
            this.str = `${this.a} < ${this.b}`;
        }

    }

    static poltobin(z) {

        if(z.mode == BINOMIAL) {
            return z;
        }

        let re = z.a * cos(z.b);
        let im = z.a * sin(z.b);

        return new Complex(re, im, BINOMIAL);

    }

    static bintopol(z) {
 
        if(z.mode == POLAR) {
            return z;
        }

        let r = sqrt(z.a * z.a + z.b * z.b);
        let phi = atan2(z.b, z.a);

        return new Complex(r, phi, POLAR);

    }

    mult(z, mode) {

        let z1 = Complex.bintopol(this);
        let z2 = Complex.bintopol(z);

        let r = z1.a * z2.a;
        let phi = z1.b + z2.b;

        let w = new Complex(r, phi, POLAR);

        if(mode == null) {
            return w;
        }

        if(mode == POLAR) {
            return w;
        } else {
            return Complex.poltobin(w);
        }
    }

    add(z, mode) {

        let z1 = Complex.poltobin(this);
        let z2 = Complex.poltobin(z);

        let re = z1.a + z2.a;
        let im = z1.b + z2.b;

        let w = new Complex(re, im, BINOMIAL);

        //Si no se especifica retorna en modo binomial
        if(mode == null) {
            return w;
        }

        if(mode == BINOMIAL) {
            return w;
        } else {
            return Complex.bintopol(w);
        }

    }



}

