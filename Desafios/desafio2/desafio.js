const fs = require("fs");


class Contenedor {
    constructor(archivo) {
        this.archivo = archivo;
    }

    save(obj) {
        let archivo = this.archivo;
        fs.promises.readFile(`./${archivo}`, "utf-8")
        .then( contenido => {
            if (contenido.length) { 
                let longit = JSON.parse(contenido).length;
                obj.id = JSON.parse(contenido)[longit - 1].id + 1;
                async function agregar() {
                    try {
                        let contenidoNuevo = JSON.parse(contenido);
                        contenidoNuevo.push(obj); 
                        await fs.promises.writeFile(`./${archivo}`, JSON.stringify(contenidoNuevo, null, 2))
                        console.log(`Id del producto: ${obj.id}`);
                    }
                    catch (e) {
                        console.log(e);
                    }
                }
                agregar(); 
            } else {
                obj.id = 1;
                async function iniciarJson() {
                    try {
                        let contenidoNuevo = [obj];
                        await fs.promises.writeFile(`./${archivo}`,  JSON.stringify(contenidoNuevo, null, 2))
                        console.log(`Id del producto: ${obj.id}`);
                    }
                    catch(err) {
                        console.log("Hubo un error", err);
                    }   
                }
                iniciarJson(); 
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }

    getById(id) {
        let archivo = this.archivo;
        fs.promises.readFile(`./${archivo}`, "utf-8")
        .then(contenido => {
            const resultado = JSON.parse(contenido).find(element => element.id === id)
            if (resultado) {
                console.log(resultado);
            }
            else {
                console.log(null);
            }
        })
        .catch(err => {
            console.log("No se pudo encontrar", err)
        }
        )
    }

    getAll() {
        let archivo = this.archivo;
        fs.promises.readFile(`./${archivo}`, "utf-8")
        .then(contenido => {
            console.log(JSON.parse(contenido))
        }
        )
        .catch(err => {
            console.log("No se pudo encontrar", err)
        }
        )
    }

    deleteById(id) {
        let archivo = this.archivo;
        fs.promises.readFile(`./${archivo}`, "utf-8")
        .then(contenido => {
            const resultado = JSON.parse(contenido).find(element => element.id === id)
            if (resultado) {
                const contenidoNuevo = JSON.parse(contenido).filter(element => element.id !== id)
                fs.promises.writeFile(`./${archivo}`, JSON.stringify(contenidoNuevo, null, 2))
                console.log(`Id del producto: ${resultado.id}`);
            } else {
                console.log(null);
            }
        })
    }  
}

const cont = new Contenedor("prueba.txt");
cont.save({ title: "Mariano", precio: 100, thumbnail: "www.mariano.com.ar"});