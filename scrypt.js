// Seleccionamos el contenedor donde se añadirán las cajas
var container = document.getElementById('box-container');

// Definimos la cantidad de cajas que queremos generar
var numBoxes = 20;


// Creamos un bucle for para generar las cajas
for (var i = 1; i <= numBoxes; i++) {
// Creamos un elemento div para cada caja
var box = document.createElement('div');
// Le asignamos una clase para darle estilo con CSS
box.classList.add('box');
// Le asignamos un texto con el número de caja
box.textContent = 'Alumno' + i;
// Añadimos la caja al contenedor
container.appendChild(box);
}

console.log('hola mundo')

let contador = 0;

while (contador <= 10) {
    console.log(contador);
    contador++;
}

do {
    console.log(contador);
    contador++;
} while (contador < 10)

/*
Cuando ejecutemos este script,
}    */

for (let i = 0; i < 10; i++) {
    console.log('For ' + i);
}
