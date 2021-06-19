import numpy as np
import matplotlib.pyplot as plt

def f(x, r):
    return r*x*(1-x) # equação logística discreta com parâmetro r
 
# initial condition for x
ys = []
rs = np.linspace(0, 4, 10000) # cria um vetor no intervalo de 0 a 4

for r in rs:
    x = 0.1
    for i in range(500):
        x = f(x, r)
 
    for i in range(50):
        x = f(x, r)
        ys.append([r, x])
 
ys = np.array(ys)
plt.plot(ys[:,0], ys[:,1], '.', color = 'black',  ms = 0.2, mew = 0.9)
plt.title('$x_{eq}$ vs $r$',fontsize=18)
plt.xlabel('$r$',fontsize=14)
plt.ylabel('$x_{eq}$',fontsize=14)
plt.show()
plt.savefig()