![equation](http://www.sciweavers.org/tex2img.php?eq=1%2Bsin%28mc%5E2%29&bc=White&fc=Black&im=jpg&fs=12&ff=arev&edit=)
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
O conjunto de Madelbrot foi definido por Pierre Fatou que estudou processo recursivos do tipo $ z_n^2+c $, sendo $ z $ um número complexo. Começando com $ z_0 $ gera-se uma sequência de pontos no plano complexo chamada órbita de $z_0$. Fatou tentou, sem sucesso, desenhar a mão a órbita de $z_0$ para vários valores de $c$, mas provou que quando um ponto atinge uma distância da origem maior do que 2, a órbita tende para o infinito.

O conjunto de Mandelbrot é o conjunto de valores de $c$ no plano complexo para o qual a órbita do crítico $z = 0$ sob iteração do mapa quadrático permanece limitado. Sendo assim, um número complexo, $c$ é um membro do conjunto de Mandelbrot se, ao começar com $z_0 = 0$ e aplicar a iteração repetidamente, o valor absoluto de $z_n$ permanece limitado para todo $n> 0$. Portanto:
