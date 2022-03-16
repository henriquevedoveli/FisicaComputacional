# FisicaComputacional

## Árvore Fractal
As árvores podem ser um exemplo de fractal presente na natureza, elas são formadas pela repetição de um processo geométrico simples. Cada galho de árvore apresenta a mesma forma de uma parte maior da planta, como se fosse um nova árvore. O processo de formação das árvores consiste em sucessivas ramificações a partir do galho anterior. A cada ramificação, os novos ramos possuem comprimento e espessura menores em relação ao ramo do qual se originaram.

<p align="center">
  <img src="/imgs/FractalTree.png" alt="drawing" width="300"/>
</p>

---

## Fractal de Koch

O fractal de Koch foi um dos primeiros fractais a serem descritos, podemos obter esse fractal através de um segmento de reta que será submetido a recorrentes iterações, como se descreve a seguir:

* Divide-se o segmento de reta em três segmentos de igual comprimento.
* Desenha-se um triângulo equilátero, em que o segmento central, referido no primeiro passo, servirá de base.
* Apaga-se o segmento que serviu de base ao triângulo do segundo passo.

Utilizando as regras acima foi obtido as seguintes figuras:

<p align="center">
  <img src="/imgs/koch1.png" alt="drawing" width="300"/>
  <img src="/imgs/koch2.png" alt="drawing" width="300"/>
  <img src="/imgs/koch3.png" alt="drawing" width="300"/>
  <img src="/imgs/koch4.png" alt="drawing" width="300"/>
</p>

---

## Conjunto de Mandelbrot
O conjunto de Madelbrot foi definido por Pierre Fatou que estudou processo recursivos do tipo z <sub>n</sub>, sendo z um número complexo. Começando com z<sub>0</sub> gera-se uma sequência de pontos no plano complexo chamada órbita de z<sub>0</sub>. Fatou tentou, sem sucesso, desenhar a mão a órbita de z<sub>0</sub> para vários valores de c, mas provou que quando um ponto atinge uma distância da origem maior do que 2, a órbita tende para o infinito.

O conjunto de Mandelbrot é o conjunto de valores de $c$ no plano complexo para o qual a órbita do crítico z = 0 sob iteração do mapa quadrático permanece limitado. Sendo assim, um número complexo, c é um membro do conjunto de Mandelbrot se, ao começar com z<sub>0</sub> = 0 e aplicar a iteração repetidamente, o valor absoluto de z<sub>n</sub> permanece limitado para todo n > 0. Portanto:

<p align="center">
  <img src="/imgs/mandelbrot.png" alt="drawing" width="500"/>
</p>

---
## Conjunto de Julia
O Conjunto de Julia é um conjunto complementar definido por uma função e é definida por uma função f é usualmente denotado por J(f). O conjunto consiste dos valores tais que uma perturbação arbitrariamente pequena pode causar mudanças drásticas na sequencia de valores iterados da função. Assim, o comportamento da função do conjunto de Julia é caótica. 

O Conjunto de Julia tem uma realção com o Conjunto de Mandelbrot, pois como consequência da definição do conjunto de Mandelbrot, há uma correspondência estreita entre a geometria do conjunto de Mandelbrot em um determinado ponto e a estrutura do conjunto de Julia correspondente. Por exemplo, um ponto está no conjunto Mandelbrot exatamente quando o conjunto Julia correspondente é conectado.

<p align="center">
  <img src="/imgs/JuliaSet.png" alt="drawing" width="500"/>
</p>

---
## Mapa Logístico
O mapa logístico ou aplicação logística é uma regra matemática que associa a um dado número _x<sub>n</sub>_ um outro número _x<sub>n+1</sub>_, através da equação: 

<p align="center">
x<sub>n+1</sub> = r x<sub>n</sub> (1-x<sub>n</sub>)
</p>

onde r é um parâmetro. Ele é um exemplo de mapa discreto, sendo comumente utilizado na introdução à teoria do caos. Além de funcionar como um modelo populacional, através do trabalho pioneiro de May, o estudo das dinâmicas deste mapa passaram a poder ser aplicadas em diversas áreas como biologia, ciclos econômicos, eletrônica, geração de números aleatórios, análises de espectro de energia, análise numérica, criptografia, entre outras áreas.

A explicação para a tantas áreas apresentarem aplicações para o mapa logístico é a simplicidade de sua função, polinomial de grau 2, somada à enorme variedade de dinâmicas apresentadas, principalmente aquelas associadas à dinâmicas caóticas. 

---

## Pendulo Simples e Duplo

Movimento periódico é o movimento de um corpo que retorna regularmente para uma posição após um intervalo de tempo fixo. Um pêndulo simples é um modelo idealizado consistindo de um objeto de massa $ m$ que pode oscilar em torno de um ponto de equilíbrio, suspenso por um fio de comprimento l.

Em Física e Matemática, na área de sistemas dinâmicos, um duplo pêndulo é um sistema com dois pêndulos sendo um deles anexo no extremo do outro. Este é um sistema físico simples que apresentam um complexo comportamento dinâmico com alta sensibilidade em torno das condições iniciais. O movimento do pêndulo duplo é regido por um conjunto fechado de equações diferenciais ordinárias. Para sistemas com energia específica, seu comportamento é caótico. 

<p align="center">
  <img src="/imgs/penduloDuplo.png" alt="drawing" width="500"/>
</p>

---
## Atractor de Lorenz

O Atractor de Lorenz foi introduzido por Edward Lorenz em 1963, que o derivou a partir das equações simplificadas de rolos de convecção que ocorrem nas equações da atmosfera. É um mapa caótico que mostra como o estado de um sistema dinâmico evolui no tempo num padrão complexo, não-repetitivo e cuja forma é conhecida por se assemelhar a uma borboleta.

Trata-se de um sistema não-linear, tridimensional e determinístico que exibe comportamento caótico e demonstra aquilo a que hoje se chama um atractor estranho.

<p align="center">
  <img src="/imgs/AtratordeLorenz.png" alt="drawing" width="500"/>
</p>

---
## Jogo da Vida de John Conway

O jogo da vida é um autômato celular desenvolvido pelo matemático britânico John Horton Conway em 1970. O jogo foi criado de modo a reproduzir, através de regras simples, as alterações e mudanças em grupos de seres vivos, tendo aplicações em diversas áreas da ciência.

As regras definidas são aplicadas a cada nova "geração"; assim, a partir de uma imagem em um tabuleiro bi-dimensional definida pelo jogador, percebem-se mudanças muitas vezes inesperadas e belas a cada nova geração, variando de padrões fixos a caóticos.
As regras do jogo são as seguintes:

* Qualquer célula viva com menos de dois vizinhos vivos morre de solidão.
* Qualquer célula viva com mais de três vizinhos vivos morre de superpopulação.
* Qualquer célula com exatamente três vizinhos vivos se torna uma célula viva.
* Qualquer célula com dois vizinhos vivos continua no mesmo estado para a próxima geração.

---
## Sistema Solar

A gravidade é uma força fundamental de atração que age entre todos os objetos por causa de suas massas, isto é, a quantidade de matéria de que são constituídos. A gravidade mantém os objetos celestes unidos e ligados, como os gases quentes contidos pelo Sol e os planetas, confinados às suas órbitas. A gravidade da Lua causa as marés oceânicas na Terra. Por causa da gravitação, os objetos sobre a Terra são atraídos para seu centro. 

Para simular a relação gravitacional entre um astro e outros astros menores, simulando algo parecido com o Sistema Solar, foi construído um sistema que não leva um conta a massa dos corpos, e a velocidade de translação é dada aleatoriamente. 

<p align="center">
  <img src="/imgs/SistemaSolar.png" alt="drawing" width="500"/>
</p>

---
## Perceptron 
O perceptron é um tipo de rede neural artificial inventada em 1958 por Frank Rosenblatt no Cornell Aeronautical Laboratory. Ele pode ser visto como o tipo mais simples de rede neural feedforward: um classificador linear. O perceptron é um classificador binário que mapeia sua entrada x (um vetor de valor real) para um valor de saída f(x) (uma valor binário simples) através de uma matriz. 

Onde _w_ é um vetor de peso real e _w * x_ é o produto escalar (que computa uma soma com pesos) _b_ é o viés (do inglês "bias"), um termo constante que não depende de qualquer valor de entrada. Ele pode ser usado porque resulta em algumas funções lógicas, como os operadores booleanos AND, OR e NOT, que são linearmente separáveis, isto é, eles podem ser realizadas usando um único Perceptron.

<p align="center">
  <img src="/imgs/operadores.png" alt="drawing" width="300"/>
</p>

---

## XOR
Apesar do Perceptron ser utilizado com operadores lógicos AND, OR e NOT, quando o operador lógico não é linearmente separável como o XOR não pode ser alcançado por um único Perceptron. No entanto, esse problema poderia ser superado usando mais de um Perceptron organizado em redes neurais feed-forward. Uma vez que é impossível desenhar uma linha para dividir as regiões contendo 1 ou 0, a função XOR não é linearmente separável.

<p align="center">
  <img src="/imgs/xor.jpg" alt="drawing" width="150"/>
</p>

