class Pendulo {
  constructor(x, y, r) {
    this.origem = createVector(x, y);
    this.posicao = createVector();
    this.r = r;
    this.angulo = PI / 4;

    this.aVel = 0.0;
    this.aAce = 0.0;
    this.amortecimento = 1;
    this.raioBola = 48.0;
  }

  update() {
    let gravidae = 0.4;
    this.aAce = ((-1 * gravidae) / this.r) * sin(this.angulo); // calcula aceleracao 
    this.aVel += this.aAce // Atualiza velocidae
    this.aVel *= this.amortecimento; // amortecimento
    this.angulo += this.aVel; // novo angulo
  }

  show() {
    this.posicao.set(this.r * sin(this.angulo), this.r * cos(this.angulo), 0); // convertendo coor polar para cartesiana
    this.posicao.add(this.origem);

    stroke(255);
    strokeWeight(2);
    // braço do pendulo
    line(this.origem.x, this.origem.y, this.posicao.x, this.posicao.y);
    ellipseMode(CENTER);
    fill(125);
    // bola do pendulo
    ellipse(this.posicao.x, this.posicao.y, this.raioBola, this.raioBola);
  }
}