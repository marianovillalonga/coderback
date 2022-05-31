const fin = () => console.log('terminé')
const mostrarLetras = (string, fnc) => {
    for (let i = 0; i < string.length; i++) {
        setTimeout(() => {
            console.log(string[i])
        }, 1000 * i)
    }
    
    setTimeout(() => {
        fnc()
    }, 1000 * string.length)
}

console.log("Iniciando...");
mostrarLetras("Hola", () => {
    mostrarLetras("Hola", () => {
        mostrarLetras("Hola", () => {
                console.log("fin");
                fin();
        });
    });
});


