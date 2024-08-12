

class Hospital {
    constructor(nombre, direccion) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.pacientes = [];
        this.medicos = [];
        this.enfermeros = [];
    }

    agregarPaciente(paciente) {
        this.pacientes.push(paciente);
    }

    agregarMedico(medico) {
        this.medicos.push(medico);
    }

    agregarEnfermero(enfermero) {
        this.enfermeros.push(enfermero);
    }

    mostrainfo(){
        console.log(`Nombre: ${this.nombre}, Direccion: ${this.direccion}`);
    }
}

class Paciente {
    constructor(nombre, direccion, id) {
        this.nombre = nombre;
        this.id = id;
        this.direccion = direccion;
        this.medicoAsignado = [];
    }

    asignarMedico(medico){
        this.medicoAsignado.push(medico);
    }

    info(){
        console.log(`Nombre: ${this.nombre}, Direccion: ${this.direccion}, Numero de paciente: ${this.id}`);
    }
}

class Medico {
    constructor(nombre, especialidad) {
        this.nombre = nombre;
        this.especialidad = especialidad;
        this.pacientesAsignados = [];
    }

    asignarPaciente(paciente) {
        this.pacientesAsignados.push(paciente);
        paciente.asignarMedico(this);
    }

    solicitarAnalisis(paciente, analisis){
        console.log(`El medico ${this.nombre} solicita un analisis para el paciente ${paciente.nombre}`);
    }

    mostrarinfo(){
        console.log(`Nombre: ${this.nombre}, Especialidad: ${this.especialidad}`);
    }
}

class Enfermero {
    constructor(nombre) {
        this.nombre = nombre;
        this.pacientesAsignados = [];
    }

    asistirMedico(medico){
        console.log(`El enfermero ${this.nombre} asiste al medico ${medico.nombre}`);
    }

    informacion(){
        console.log(`Nombre: ${this.nombre}`);
    }
}

class Analisis {
    constructor(tipo, resultado, fecha) {
        this.tipo = tipo;
        this.resultado = resultado;
        this.fecha = fecha;
    }

    mostrarinfo() { // Asegúrate de que el nombre del método coincida con la llamada
        console.log(`Tipo: ${this.tipo}, Resultado: ${this.resultado}, Fecha: ${this.fecha}`);
    }

    obtenerResultados() {
        console.log(`El resultado del analisis es: ${this.resultado}`);
    }
}

class BaseDatos {
    constructor(){
        this.pacientes = [];
        this.medicos = [];
        this.enfermeros = [];
    }

    guardarInfo(paciente, medico, enfermero){
        this.pacientes.push(paciente);
        this.medicos.push(medico);
        this.enfermeros.push(enfermero);
    }
}

// Ejemplo de uso
const hospital = new Hospital('Hospital Central', 'Calle Falsa 123');
const paciente1 = new Paciente('Juan Perez', 'Calle Real 456', 1);
const medico1 = new Medico('Dra. Rodriguez', 'Cardiología');
const enfermero1 = new Enfermero('Luis Sanchez');
const analisis1 = new Analisis('Sangre', 'Normal', '2024-08-12');

// Agregando datos al hospital
hospital.agregarPaciente(paciente1);
hospital.agregarMedico(medico1);
hospital.agregarEnfermero(enfermero1);

// Asignando paciente y solicitando análisis
medico1.asignarPaciente(paciente1);
medico1.solicitarAnalisis(paciente1, analisis1);

// Asistencia del enfermero al médico
enfermero1.asistirMedico(medico1);

// Mostrando información
hospital.mostrainfo();
paciente1.info();
medico1.mostrarinfo();
analisis1.mostrarinfo();
enfermero1.informacion();

// Guardando en la base de datos
const baseDatos = new BaseDatos();
baseDatos.guardarInfo(paciente1, medico1, enfermero1);


