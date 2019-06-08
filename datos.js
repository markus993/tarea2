const opciones = {
    matematicas:{
        default:0,
        alias:'m'
    },
    ingles:{
        default:0,
        alias:'i'
    },
    programacion:{
        demand:true,
        alias:'p'
    }
}

const argv = require('yargs')
.command('promedio','Calcular el promedio', opciones)
.argv

console.log('El promedio es '+(argv.m+argv.i+argv.p)/3);

let obtenerPromedio = (nota1,nota2,nota3)=>(nota1+nota2+nota3)/3;

module.exports = {
   obtenerPromedio,
   argv
};