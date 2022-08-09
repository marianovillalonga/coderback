/* function mostrarLista(lista){

    const mostrarLista = (lista) => lista || "Lista vacia";
    
    console.log(mostrarLista([{
        nombre: "Juan",
        edad: 30
    },{
        nombre: "Pedro",
        edad: 20
    }]))
    
    console.log(mostrarLista())

    function crearMultiplicador(producto1){
        return (producto2)=>producto1*producto2
    }

    const duplicar=crearMultiplicador(1500)
    const triplicar=crearMultiplicador(2000)
    
    console.log(duplicar(2))
    console.log(triplicar(3))
    
    mostrarLista();
} */

class Persona{
    constructor(nombre,cantidad,suma){
        
        this.nombre=nombre;
        this.cantidad=cantidad || 0;
        this.suma=cantidad*suma;
    }
    
    mostrarInfo(){
        console.log(`${this.nombre} tiene ${this.cantidad} y su total es ${this.suma}`)
    }
}   

/* class Contador {
    constructor(nombre) {
        this.nombre = nombre
        this.cuenta = 0
    }

    static valorc = 0;

    obtenerResponsable = () => {
        return console.log(this.nombre);
    }

    obtenerCuentaIndividual = () => {
        return console.log(this.cuenta);
    }

    obtenerCuentaGlobal = () => {
        return console.log(Contador.valorc);
    }

    contar = () => {
        Contador.valorc += 1;
        this.cuenta += 1;
    }
}


 */