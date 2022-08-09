const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]


const precio = productos.map(producto => producto.precio);
productos.join(', ');

const suma = precio.reduce((acumulador, valorActual) => acumulador + valorActual);

const promedio = suma / precio.length;

const productoBarato = Math.min(...precio);
const productoCaro = Math.max(...precio);


console.log(productos,
     "la suma total es de "+ "$" +suma, 
     "el promedio es: " + promedio ,
     "El menor precio es de " + productoBarato, 
     "El mayor precio es de " + productoCaro
);

