# As arvores podem ser um exemplo de fractal presente na natureza
# Elas sao formadas pela repeticao de um processo geometrico simples.

# Cada galho de arvore apresenta a mesma forma de uma parte maior da 
# planta, como se fosse um nova arvore. O processo de formacao das arvores
# consiste em sucessivas ramificacoes a partir do galho anterior. A cada 
# ramificacao, os novos ramos possuem comprimento e espessura menores em 
# relacao ao ramo do qual se originaram.

# BIBLIOTECAS NECESSARIAS
import turtle
from turtle import Screen

##################
height = 600
width = 800
velocidade = 20
colorBg = 'black'
colorTree = 'white'
##################

screen = Screen()
screen.setup(width, height)
turtle.bgcolor(colorBg)
turtle.color(colorTree)

turtle.penup()
turtle.goto(0, -screen.window_height()/2+50)
turtle.pendown()
turtle.left(90)
turtle.speed(velocidade)


def tree(i):
    if i < 10:
        return
    else:
        turtle.forward(i)
        turtle.left(30)
        tree(3 * i / 4)
        turtle.right(60)
        tree(3 * i / 4)
        turtle.left(30)
        turtle.backward(i)


tree(150)
turtle.done()
