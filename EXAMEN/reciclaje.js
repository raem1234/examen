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
    constructor(nombrereciclaje, centro) {
        this.nombrereciclaje = nombrereciclaje;
        this.centro = new CentroReciclaje(centros ) 
    }

    Detalles() {
        return `Material: ${this.nombrereciclaje}, Centro de Reciclaje: ${this.centro.TipoCentroReciclaje()}`;
    }
}

function mostrarDetalles() {
    let nombreMaterial = document.getElementById('material').value;
    let nombreCentro = document.getElementById('centro').value;
    let tipoCentro = 'Tipo de Reciclaje'; 
    let centroReciclaje = new CentroReciclaje(nombreCentro, tipoCentro);
    let material = new Material(nombreMaterial, centroReciclaje);
    console.log(material.Detalles());
}
