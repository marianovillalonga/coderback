/* const mostrar = params => console.log(`Log: ${params}`); 
mostrar("Hola");


const promediar = (nota1, nota2) => (nota1 + nota2) / 2;
console.log(promediar(10, 5));


const getPersona = () => ({nombre: nombre, apellido: apellido});
console.log(getPersona());
 */
/* const operacion = (num1, num2, operacion) => {
    setTimeout(() => {
        return operacion(num1, num2)
        collback(null,resultado);
    }, 1000); */

const sumar = (num1, num2) => num1 + num2
const restar = (num1, num2) => num1 - num2
const multiplicar = (num1, num2) => num1 * num2
const dividir = (num1, num2) => num1 / num2
const modulo = (num1, num2) => num1 % num2

Promise.all([
    operacion(10, 5, sumar),
    operacion(10, 5, restar),
    operacion(10, 5, multiplicar),
    operacion(10, 5, dividir),
    operacion(10, 5, modulo)
]).then(resultados => {
    console.log(resultados);
}).catch(err => {
    console.log(err);
});


function dividir(dividendo,divisor) {
    return new Promise((resolve, reject) => {
        if(divisor === 0) {
            reject('No se puede dividir por 0');
        }
        resolve(dividendo / divisor);
    });
}

dividir(10, 0).then(resultado => {
    console.log(resultado);
}).catch(err => {
    console.log(err);
});