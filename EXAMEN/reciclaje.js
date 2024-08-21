class CentroReciclaje {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }

    NombreCentro() {
        return this.nombre;
    }

    TipoCentroReciclaje() {
        return this.tipo;
    }
}

class Material {
    constructor(nombrereciclaje, nombreCentro, tipoCentro) {
        this.nombrereciclaje = nombrereciclaje;
        this.centro = new CentroReciclaje(nombreCentro, tipoCentro);
    }

    Detalles() {
        return `Material ${this.nombrereciclaje}, Centro ${this.centro.NombreCentro()}, Tipo ${this.centro.TipoCentroReciclaje()}`;
    }
}

function mostrarDetalles() {
    let nombreMaterial = document.getElementById('material').value;
    let nombreCentro = document.getElementById('centro').value;
    let tipoCentro = 'reciclaje organico';

    let material = new Material(nombreMaterial, nombreCentro, tipoCentro);
    console.log(material.Detalles());

    
}
