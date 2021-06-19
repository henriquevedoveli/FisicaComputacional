import numpy as np
import matplotlib.pyplot as plt

################################
columns = 500
rows = 500
maxIter = 75
################################

def mandelbrot(Re, Im, maxIter):
    c = complex(Re, Im)
    z = 0.0j

    for i in range(maxIter):
        z = z * z + c
        img = z.real*z.real + z.imag*z.imag
        if img >= 4:
            return i

    return maxIter

result = np.zeros([rows, columns])

for rowIndex, Re in enumerate(np.linspace(-2,1,num=rows)):
    for columnIndex, Im in enumerate(np.linspace(-1,1, num=columns)):
        result[rowIndex, columnIndex] = mandelbrot(Re, Im, maxIter)


plt.figure(dpi=100)
plt.imshow(result.T, cmap='gray', interpolation='bilinear', extent=[-2,1,-1,1])
plt.xlabel('Re')
plt.ylabel('Im')
plt.show()