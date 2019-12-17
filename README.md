# Fourier
 
Librería de DFT. 

Para crear un objeto Fourier se debe hacer 

> Let F = new Fourier(x, 100,200);

Donde x es la señal en tiempo discreto, 100 es la coordenada en 'x'
y 200 es la coordenada en 'y' del objeto. 

La señal x debe ser un objeto Complex. 

Para poder observar los epicycles de la transformada se hace:

> F.show_epycicles();

Si además se quiere dibujar el camino que hace para poder observar la forma generada
se debe llamar con el parámetro true. 

> F.show_epycicles(true);



