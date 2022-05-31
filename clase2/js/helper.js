class usuario {
    constructor(id, nombre, apellido, libro, mascotas) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.libro = libro;
        this.mascotas = mascotas;
    }

    getId() {
        return console.log(this.id);
    }

    getNombre() {
        return console.log(this.nombre);
    }

    getApellido() {
        return console.log(this.apellido);
    }

    getLibro() {
        return console.log(this.libro); 
    }

    getMascotas() {
        return console.log(this.mascotas);
    }

    addMascota(mascota) {
        this.mascotas.push(mascota);
    }

    countMascota() {
        return console.log(this.mascotas.length);
    }

    addLibro(libro) {
        this.libro.push(libro);
    }

    getnombreApellido() {
        console.log(`Mi nombre es ${this.nombre} y mi apellido es ${this.apellido}`)
    }

    getLibrosName(){
        let namelibro = this.libros.map( libros => libros.nombre);
        return console.log(namelibro);
    }
}