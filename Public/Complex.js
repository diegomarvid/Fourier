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

        if(this.mode == BINOMIAL) {
            this.str = `${this.a} + ${this.b}i`;
        } else {
            this.str = `${this.a} < ${this.b}`;
        }

    }

    poltobin(z) {

        if(z.mode == BINOMIAL) {
            return z;
        }

        //console.log("error");

        let re = z.a * cos(z.b);
        let im = z.a * sin(z.b);

        //console.log(`Conversion: ${re} + ${im}i`);

        return new Complex(re, im, BINOMIAL);

    }

    bintopol(z) {

        if(z.mode == POLAR) {
            return z;
        }

        let r = sqrt(z.a * z.a + z.b * z.b);
        let phi = atan2(z.b, z.a);

        return new Complex(r, phi, POLAR);

    }

    mult(z, mode) {

        let z1 = this.bintopol(this);
        let z2 = this.bintopol(z);

        let r = z1.a * z2.a;
        let phi = z1.b + z2.b;

        let w = new Complex(r, phi, POLAR);

        if(mode == null) {
            return w;
        }

        if(mode == POLAR) {
            return w;
        } else {
            return this.poltobin(w);
        }
    }

    add(z, mode) {

        let z1 = this.poltobin(this);
        let z2 = this.poltobin(z);

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
            return this.bintopol(w);
        }

    }



}

