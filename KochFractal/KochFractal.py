# O Fractal de Koch foi um dos primeiros fractais a serem descritos. 
# Conhecido tambem como floco de neve de Koch sua construcao e feita
# a partir de um segmento de reta que sera submetido a seguintes iteracoes:
# 1. Divide o segmento de reta em três segmentos de igual comprimento.
# 2. Se desenha um triangulo equilatero, em seu segmento centrar.
# 3. Se apaga o segmento que serviu de base ao triângulo do segundo passo.

import turtle
from turtle import Screen
import time

size = 600
# valores maiores que o tamanho 1 iter
# valores igual o tamanho 2 iteraçõe1
# tamanho divido por 3 3 iterações
# quanto menor mais fractais tera

tamanhoMin = 15
turtle.bgcolor("black")
screen = Screen()

x = size*2
screen.setup(x, x)


t = turtle.Turtle()

def fractal(tamanho):
    if tamanho < tamanhoMin:
        t.fd(tamanho)
        return

    tamanho2 = tamanho/3

    fractal(tamanho2)
    t.lt(60)
    fractal(tamanho2)
    t.rt(120)
    fractal(tamanho2)
    t.left(60)
    fractal(tamanho2)


t.color('white')
turtle.speed(0)
t.hideturtle()
t.up() # levanta a caneta
t.goto(-size/2, 175)
t.down() # abaixa a caneta

for i in range(3):
    fractal(size)
    t.rt(120)

time.sleep(30)
