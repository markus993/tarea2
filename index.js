const {argv} = require('./yargs')
const funciones = require('./funciones')

let comando = argv._[0];

switch (comando) {
    case 'crear':
        funciones.crear(argv);
        break;
        
    case 'mostrar':
        funciones.mostrar();
        break;
    
    case 'buscar':
        funciones.buscar(argv.nombre);
        break;

    case 'gano':
        funciones.gano(argv.materia);
        break;

    case 'ganoMat':
        funciones.gano('matematicas');
        break;

    case 'promedio':
        funciones.promedio(argv.nombre);
        break;
        
    case 'promedioMayor':
        funciones.promedioMayor();
        break;
    
    default:
        console.log('No existe funcion: '+comando);
        
}
