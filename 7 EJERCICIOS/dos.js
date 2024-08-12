class Cargo {
    constructor(nombreTitulo) {
      this.nombreTitulo = nombreTitulo;
    }
  
    info() {
      return this.nombreTitulo;
    }
  }
  
class Trabajador {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
      this.cargo = [] 
    }
    carg(){
        
            let mostrarInfo = '';
            for (let i = 0; i < this.cargo.length; i++) {
                mostrarInfo += this.cargo[i].info();
              if (i < this.cargo.length - 1) {
                mostrarInfo += ', ';
              }
            } 
            return mostrarInfo;    
    }
    agregarCargo(deber){
        this.cargo.push(deber)
    }
    sueldo() {
      return 1000;
    }
    mostrarInfo() {
      console.log(`Trabajador: ${this.nombre}, Edad: ${this.edad}, Cargo: ${this.carg()}`);
    }
  }
  class appEmpresa {
    constructor(nombre) {
      this.nombre = nombre;
     
    } 
    mostrarInfo() {
      console.log(`Empresa: ${this.nombre}`);
    }
  }
  class Cliente {
    constructor(nombre, num) {
      this.nombre = nombre;
      this.num = num;
      
    
    }
    mostrarInfo() {
      console.log(`Cliente: ${this.nombre}, Número: ${this.num}`);
    }
  }
  
  
  const trabajador = new Trabajador("Juan Pérez", 30);
  const cargo1 = new Cargo("Desarrollador");
  trabajador.agregarCargo(cargo1);
    const app = new appEmpresa("LOSQUESON");
  const cliente = new Cliente("Ana López", "+57 316 727782");
  
  trabajador.mostrarInfo();
  app.mostrarInfo();
  cliente.mostrarInfo();
  
  console.log("Sueldo de Juan Pérez:", trabajador.sueldo());
  
  
