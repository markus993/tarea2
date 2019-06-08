const nombre = {
    demand: true,
    alias: 'n'
}


const matematicas = {
    demand: true,
    alias: 'm'
}

const ingles = {
    demand: true,
    alias: 'i'
}

const programacion = {
    demand: true,
    alias: 'p'
}

const creacion = {
    nombre,
    matematicas,
    ingles,
    programacion
}

const buscar = {
    nombre
}


const materia = {
    demand: true,
    alias: 'm'
}

const buscaMateria = {
    materia
}

const argv = require('yargs')
.command('crear','Crear un estudiante en la BD',creacion)
.command('mostrar','Muestra los estudiantes en la BD')
.command('buscar','Busca un estudiante en la BD',buscar)
.command('gano','Busca estudiantes en la BD que hayan ganado la materia buscada',buscaMateria)
.command('promedio','Muestra el promedio del estudiantes en la BD',buscar)
.argv;

module.exports={
    argv
}