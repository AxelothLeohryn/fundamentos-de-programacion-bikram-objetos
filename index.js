const Coche = { marca: 'Toyota', modelo: 'Corolla', matricula: 'ABC 123' };
const Casa = { codPostal: 28232, calle: 'Gran Vía', portal: 8, piso: 4 };
const FullStackDeveloper = { lenguajes: ['Javascript', 'CSS', 'HTML'], proyectos: ['demo-web', 'lista-contactos', 'landing-page'] };
const Perro = {
    nombre: 'Rex', raza: 'Pastor Alemán', color: 'Marrón', edad: 8, ladrar: () => console.log('Guau!'), popo: function () {
        return Math.random() * 3
    }
};

let marcaPortatil = Portatil.marca;
let marcaPortatil2 = Portatil['marca'];
let grupos = Concierto.grupos;
let RGB = [Led.rojo, Led.verde, Led.azul];

Portatil.modelo = 'P345';
Concierto.cartelera.push("Guns N' Roses");
Concierto.fecha = new Date();
Impresora.imprimiendo = { nombreArchivo: 'Documento', copias: 2, numPaginas: 3 };

const Noticia = { titular: 'Alumnos aprenden JS en 2 semanas', cuerpo: 'Los milagros existen' };
const Persona = { nombre: 'Alejandro', apellidos: 'Sanchez Sergueev', edad: 25 };
const Avion = { numPasajeros: 200, despegar: () => console.log('despegando'), volar: () => console.log('llegando al destino'), aterrizar: () => console.log('aterrizando') };
const Paquete = { contenido: ['movil', 'cargador', 'cable', 'instrucciones'] };
const Pais = { numHabitantes: 42000000, continente: 'Europa', gentilicio: 'Español' };

let codError = O_Error.codigo;
let integrantes = Grupo.integrantes;
let nivelesTinta = Impresora.tinta;
let pixeles = Pantalla.pixeles;
let especificaciones = Movil['especificaciones'];

Grupo.numIntegrantes = 5;
Pantalla.dimensiones = '1920x1080';
Led.encendido = Led.encendido ? Led.encendido === false : Led.encendido === true;
Movil.temperatura = '20º';
