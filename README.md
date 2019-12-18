# Fourier
 
Librería de DFT. 

Para crear un objeto Fourier se debe hacer 
```javascript
let F = new Fourier(x);
```

Donde x es la señal en tiempo discreto, siendo esta un objeto Complex. 

Por defecto se crea el objeto en el centro de la pantalla pero se puede trasladar añadiendo
parámetros de coordenadas de la siguiente forma:

```javascript
let F = new Fourier(x, 200, 300);
```

Donde 200 es la coordenada en el eje 'x' y 300 en el eje 'y'. 

Si se quiere cambiar los colores se deben crear objetos color() para poder modificarlos,
un ejemplo de inicializacion es el siguiente:

```javascript
let color_center = color(255, 100);

let color_line = color(255);
 
let color_wave = color(20,200,50);
 
let F = new Fourier(x, width / 2, height / 2, color_center, color_line, color_wave);
 ```

Para poder observar los epicycles de la transformada se hace:

```javascript
F.show_epycicles();
```

Si además se quiere dibujar el camino que hace para poder observar la forma generada
se debe llamar con el parámetro true. 

```javascript
F.show_epycicles(true);
```

Para poder exportar la dft existe la funcion export:

```javascrpt
F.export("dft.txt");
```

El formato del texto exportado es de la forma `%f + %fi/n`
Esto significa que por cada linea se encuentra el complejo asociado de la transformada discreta
de Fourier. La primera linea corresponde a frecuencia cero y asi en adelante.



