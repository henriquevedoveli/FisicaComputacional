# O Conjunto de Julia e um conjunto complementar definido por uma funcao
# e eh definida por uma funcao f eh usualmente denotado por J(f).

# O conjunto de Julia consiste dos valores tais que uma perturbacao arbitrariamente 
# pequena pode causar mudanças drásticas na sequencia de valores iterados da funcao. 
# Assim, o comportamento da funcao do conjunto de Julia ele é caotico. 

from PIL import Image
   
# setando altura, largura e zoom
w, h, zoom = 1920,1080,1

# criando a imagem
bitmap = Image.new("RGB", (w, h), 'blue')

pix = bitmap.load()
    
# setando as variaveis para a realizacao das edos
cX, cY = -0.835, -0.23
moveX, moveY = 0.0, 0.0
maxIter = 255

for x in range(w):
    for y in range(h):
        zx = 1.5*(x - w/2)/(0.5*zoom*w) + moveX
        zy = 1.0*(y - h/2)/(0.5*zoom*h) + moveY
        i = maxIter
        while zx*zx + zy*zy < 4 and i > 1:
            tmp = zx*zx - zy*zy + cX
            zy,zx = 2.0*zx*zy + cY, tmp
            i -= 1

        # convertendo um byte para RGB 
        pix[x,y] = (i << 21) + (i << 10) + i*8

# mostrando e salvando a imagem
bitmap.show()
bitmap.save('JuliaSet.png')
