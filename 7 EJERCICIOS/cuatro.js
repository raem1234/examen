class Autor {
    constructor(nombre, nacionalidad, fechaNacimiento) {
        this.nombre = nombre;
        this.nacionalidad = nacionalidad;
        this.fechaNacimiento = fechaNacimiento;
    }

    info() {
        return `Nombre: ${this.nombre}, Nacionalidad: ${this.nacionalidad}, Fecha de Nacimiento: ${this.fechaNacimiento}`;
    }
}

class Libro {
    constructor(titulo, autor, id, tipo) {
        this.titulo = titulo;
        this.autor = autor;
        this.id = id; // Identificador único para el libro
        this.tipo = tipo;
        this.estado = 'disponible'; // Estado inicial del libro
    }

    cambiarEstado(nuevoEstado) {
        this.estado = nuevoEstado;
    }

    info() {
        return `Título: ${this.titulo}, Autor: ${this.autor.nombre}, ID: ${this.id}, Tipo: ${this.tipo}, Estado: ${this.estado}`;
    }
}

class Lector {
    constructor(nombre, numDocumento, maximoLibrosPrestados = 3) {
        this.nombre = nombre;
        this.numDocumento = numDocumento;
        this.maximoLibrosPrestados = maximoLibrosPrestados;
        this.prestamos = [];
    }

    puedePedirPrestado() {
        return this.prestamos.filter(prestamo => !prestamo.devuelto).length < this.maximoLibrosPrestados;
    }

    agregarPrestamo(prestamo) {
        this.prestamos.push(prestamo);
    }

    info() {
        return `Nombre: ${this.nombre}, Documento: ${this.numDocumento}, Préstamos Activos: ${this.prestamos.length}`;
    }
}

class Biblioteca {
    constructor() {
        this.autores = [];
        this.libros = [];
        this.lectores = [];
    }

    agregarLibro(libro) {
        this.libros.push(libro);
    }

    agregarLector(lector) {
        this.lectores.push(lector);
    }

    agregarAutor(autor) {
        this.autores.push(autor);
    }
}

class Prestamo {
    constructor(libro, lector, fechaPrestamo, fechaDevolucionEsperada) {
        this.libro = libro;
        this.lector = lector;
        this.fechaPrestamo = fechaPrestamo;
        this.fechaDevolucionEsperada = fechaDevolucionEsperada;
        this.devuelto = false;
    }

    devolverLibro() {
        this.devuelto = true;
        this.libro.cambiarEstado('disponible');
        return `El libro "${this.libro.titulo}" ha sido devuelto.`;
    }

    calcularMulta(fechaDevolucionReal) {
        const diasRetraso = (fechaDevolucionReal - this.fechaDevolucionEsperada) / (1000 * 60 * 60 * 24);
        return diasRetraso > 0 ? diasRetraso * 2 : 0;
    }

    info() {
        return `Libro: ${this.libro.titulo}, Lector: ${this.lector.nombre}, Devuelto: ${this.devuelto}`;
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
const autor1 = new Autor('Gabriel García Márquez', 'Colombiano', '1927-03-06');
const libro1 = new Libro('doce cuentos peregrinos', autor1, 1, 'Relatos');
const lector1 = new Lector('manuel erazo', '4598278293');
////////////////////////////////////////////////////////////////////////////////////////////////////////
const biblioteca = new Biblioteca();
biblioteca.agregarLibro(libro1);
biblioteca.agregarLector(lector1);
biblioteca.agregarAutor(autor1);
////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log(autor1.info()); // Información del autor
console.log(libro1.info()); // Información del libro
console.log(lector1.info()); // Información del lector

////////////////////////prestamo/////////////////////////////////////////////////////////////////// 
const fechaPrestamo = new Date();
const fechaDevolucionEsperada = new Date();
fechaDevolucionEsperada.setDate(fechaDevolucionEsperada.getDate() + 30);//get date dia especifico y el set establecer el día del mes para una fecha específica. 

const prestamo = new Prestamo(libro1, lector1, fechaPrestamo, fechaDevolucionEsperada);
lector1.agregarPrestamo(prestamo);
libro1.cambiarEstado('prestado');

// Mostrar información del préstamo
console.log(prestamo.info());

// Devolver libro
console.log(prestamo.devolverLibro());


