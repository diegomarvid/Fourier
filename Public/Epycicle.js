
class Epycicle {

    
    constructor(x, y, A, f, phi) {

        this.x_center = x;
        this.y_center = y;
        this.A = A;
        this.f = f;
        this.phi = phi;

        this.x = 0;
        this.y = 0;

    }

    update() {

        this.x = this.A * cos(this.f * t + this.phi) + this.x_center;
        this.y = this.A * sin(this.f * t + this.phi ) + this.y_center;

    }

    show() {

        //translate(this.x_center, this.y_center);

        stroke(255, 100);
        noFill();
        ellipse(this.x_center, this.y_center, this.A * 2);

        this.update();

        //Dibujo linea
        stroke(255);
        fill(255);
        line(this.x_center, this.y_center, this.x, this.y);

    }



}