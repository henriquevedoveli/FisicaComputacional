class Astro {
    constructor(r,d,o){
        this.v = p5.Vector.random3D();

        this.raio = r;
        this.distancia = d;
        this.velocidadeOrbita = o;
        this.angulo = random(TWO_PI);
        this.v.mult(this.distancia);
        this.astros = null;
    }


    orbita() {
        this.angulo = this.angulo + this.velocidadeOrbita;
        if (this.astros != null) {
            for (let i = 0; i < this.astros.length; i++){
                this.astros[i].orbita();

            }
        }
    }

    addAstro(total, level) {
        this.astros = []
        for (let i = 0; i < total; i++) {
          let r = this.raio / (level * 3);
          let d = random(this.raio + r, (this.raio + r) * 5); // distancia aleatoria entre 
          let o = random(-0.1, 0.1);

          this.astros[i] = new Astro(r, d, o);
          if (level < 2) {
            let num = int(random(0, 3));
            this.astros[i].addAstro(num, level + 1);
          }
        }
      }
    
    show() {
        push();
        noStroke();
        let v2 = createVector(1, 0, 1);
        let p = this.v.cross(v2);

        if (p.x != 0 || p.y != 0 || p.z != 0) {
            rotate(this.angulo, p);
        }
        stroke(255);

        translate(this.v.x, this.v.y, this.v.z);
        noStroke();
        fill(255);
        sphere(this.raio);
        if (this.astros != null) {
          for (let i = 0; i < this.astros.length; i++) {
            this.astros[i].show();
          }
        }
    pop();
    }
}






