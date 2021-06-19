// Baseado no automato celular de John Conway conhecido como
// Game of Life, a partir de regras simples e possivel reprodzir
// as alteracoes e mudancas em grupos de seres vivos

// Regras:
// 1. Qualquer celula viva com menos de dois vizinhos morre de solidao
// 2. Qualquer celula viva com mais de tres vizinhos vivos morre de superpopulacao.
// 3. Qualquer celula morta com exatamente tres vizinhos vivos se torna uma celula viva.
// 4. Qualquer celula viva com dois ou tres vizinhos vivos continua no mesmo estado para a prexima geracao.

function make2DArray(cols, rows) {
  
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    	arr[i] = new Array(rows);
  }
  	return arr;
}

let grid;
let cols;
let rows;
let res = 4; //resolucao minima

function setup() {
	createCanvas(800,600)
	cols = width / res;
	rows = height / res;

	grid = make2DArray(cols, rows);
  	for (let i = 0; i < cols; i++) {
    	for (let j = 0; j < rows; j++) {
      		grid[i][j] = floor(random(2));
    }
  }
}

function draw() {
	background(0);
	for(let i = 0; i < cols; i++){
		for(let j = 0; j < rows; j++) {
			let x = i * res;
			let y = j * res;
			if (grid[i][j] == 1){
				fill(255);
				stroke(0);
				rect(x, y, res - 1, res	- 1 );
			}
		}
	}
let next = make2DArray(cols, rows);

  // Calcula o proximo baseado no grid
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let state = grid[i][j];
      // Contagem dos vizinhos vivos
      let sum = 0;
      let neighbors = countNeighbors(grid, i, j);

      if (state == 0 && neighbors == 3) {
        next[i][j] = 1;
      } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
        next[i][j] = 0;
      } else {
        next[i][j] = state;
      }
    }
  }

  grid = next;
}

function countNeighbors(grid, x, y) {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let col = (x + i + cols) % cols;
      let row = (y + j + rows) % rows;
      sum += grid[col][row];
    }
  }
  sum -= grid[x][y];
  return sum;
}


