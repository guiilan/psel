from PIL import Image
import numpy as np

# Pegando a imagem usando PIL e convertendo p RGB 
img = Image.open('Syngenta.bmp').convert('RGB')

#pegando as cores da imagem
# Array pra armazenar as corres
  
colors = []

for color in img.getdata():
    if color not in colors:
        colors.append(color)



print(colors)

# assim chegamos a conclusão que a cor procurada é rgb(96, 192, 0)

# agora podemos verficar a quantidade de cada cor através do getcolors()

print(img.getcolors(maxcolors=3))

#verificanos que a cor rgb(96, 192, 0) se repete 298x



