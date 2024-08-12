class Persona {
    constructor(nombre, apellido, edad, sexo, docuidentidad, rol = '') {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.sexo = sexo;
      this.docuidentidad = docuidentidad;
      this.rol = rol; 
    }
  
    info() {
      return `Nombre: ${this.nombre} Apellido: ${this.apellido} Edad: ${this.edad} Sexo: ${this.sexo} Documento de Identidad: ${this.docuidentidad} Rol: ${this.rol}`;
    }
  }
  
  class Matrimonio {
    constructor(fecha, lugar) {
      this.fecha = fecha;
      this.lugar = lugar;
      this.tipos = []; //AGREGACION
    }
  
    info() {
      let personasInfo = '';
      for (let i = 0; i < this.tipos.length; i++) {
        personasInfo += this.tipos[i].info();
        if (i < this.tipos.length - 1) {
          personasInfo += ', ';
        }
      }
      return `Fecha: ${this.fecha} Lugar: ${this.lugar} Personas: ${personasInfo}`;
    }
  
    agregarPersona(persona) {
      this.tipos.push(persona);
    }
  }
  
  
  const uno = new Persona("Manuel", "Erazo", 30, "M", "00000000", "Esposo");
  const dos = new Persona("Luna", "López", 28, "F", "11111111", "Esposa");
  const tres = new Persona("Juan", "Pérez", 45, "M", "22222222", "Juez");
  const matrimonio = new Matrimonio("2030-02-28", "Beelen");
  matrimonio.agregarPersona(uno);
  matrimonio.agregarPersona(dos);
  matrimonio.agregarPersona(tres);
  
  console.log(matrimonio.info());
  