class Avion {
    constructor(nombre, capacidad) {
        this.nombre = nombre;
        this.capacidad = capacidad;
    }

    mostrarInfo() {
        console.log(`Avión: ${this.nombre}, Capacidad: ${this.capacidad}`);
    }
}

class Pasajero {
    constructor(nombre, apellidos, edad) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.tickets = [];
    }

    mostrarInfo() {
        console.log(`Pasajero: ${this.nombre} ${this.apellidos}, Edad: ${this.edad}`);
    }

    agregarTicket(vuelo) {
        this.tickets.push(vuelo);
    }
}

class Vuelo {
    constructor(avion, fecha, ofertas, asiento) {
        this.avion = avion;
        this.fecha = fecha;
        this.ofertas = ofertas;
        this.asiento = asiento;
    }

    mostrarInfo() {
        console.log(`Vuelo: Avión: ${this.avion.nombre}, Fecha: ${this.fecha.toLocaleDateString()}, Ofertas: ${this.ofertas.join(', ')}, Asiento: ${this.asiento.numero}${this.asiento.letra}`);
    }
}

class Asiento {
    constructor(numero, letra) {
        this.numero = numero;
        this.letra = letra;
    }

    mostrarInfo() {
        console.log(`Asiento: ${this.numero}${this.letra}`);
    }
}
///////////////////////////////////////////////
const avion1 = new Avion("Avianca", 400);
const fechaVuelo = new Date();
const asiento1 = new Asiento(10, 'A');
const vuelo1 = new Vuelo(avion1, fechaVuelo, ["descuento en tickets"], asiento1);
const pasajero1 = new Pasajero("Juan", "Pérez", 30);

////////////////////////////////////////////////////////////////////////////////
pasajero1.agregarTicket(vuelo1);

////////////////////////////////////////////////////////////////////////////////
avion1.mostrarInfo();
pasajero1.mostrarInfo();
vuelo1.mostrarInfo();
asiento1.mostrarInfo();
