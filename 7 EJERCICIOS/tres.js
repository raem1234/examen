class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    validacionProducto() {
        return this.precio > 0 && this.nombre != null && this.nombre !== "";
    }
}

class Cliente {
    constructor(nombre, direccion, contacto) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.contacto = contacto;
    }

    mostrarInfo() {
        console.log(`Nombre: ${this.nombre}, Dirección: ${this.direccion}, Contacto: ${this.contacto}`);
    }
}

class Pago {
    constructor(tipo, fecha, ...args) {  // Usamos el operador spread (...) para manejar múltiples argumentos
        this.tipo = tipo;
        this.fecha = fecha;

        if (tipo === 'tarjeta') {
            this.numero = args[0];
            this.fechaCaducidad = args[1];
        } else if (tipo === 'efectivo') {
            this.moneda = args[0];
        } else if (tipo === 'cheque') {
            this.nombreBanco = args[0];
            this.numeroCuenta = args[1];
        }
    }

    mostrarInfo() {
        console.log(`Tipo de pago: ${this.tipo}`);
    }
}

class Pedido {
    constructor(cliente, productos, fecha) {
        this.cliente = cliente;
        this.productos = productos;
        this.fecha = fecha;
        this.estado = 'pendiente';
        this.pagos = [];
    }

    agregarPago(pago) {
        this.pagos.push(pago);
        if (this.pagos.length > 0) {
            this.estado = 'pagado';
        }
    }

    mostrarInfo() {
        console.log(`Pedido del cliente: ${this.cliente.nombre}, Estado: ${this.estado}`);
    }
}

// Creación de instancias
const producto1 = new Producto('Camiseta', 20);
const cliente1 = new Cliente('Juan Pérez', 'Calle Falsa 123', '123-456-7890');
const pedido1 = new Pedido(cliente1, [producto1], new Date());

const pagoTarjeta = new Pago('tarjeta', new Date(), '1234567890123456', '12/25');
pedido1.agregarPago(pagoTarjeta);

// Mostrando la información
producto1.validacionProducto() ? console.log('Producto válido') : console.log('Producto inválido');
cliente1.mostrarInfo();
pagoTarjeta.mostrarInfo();
pedido1.mostrarInfo();
