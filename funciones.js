const fs = require('fs');
const express = require('express');
const app = express();

listaEstudiantes = [];

const crear = (estudiante)=>{
    listar();
    let est = {
        nombre: estudiante.nombre,
        matematicas: estudiante.matematicas,
        ingles: estudiante.ingles,
        programacion: estudiante.programacion
    }
    let duplicado = listaEstudiantes.find(nom => nom.nombre == estudiante.nombre)
    if (!duplicado) {
        listaEstudiantes.push(est);
        console.log(listaEstudiantes);
        guardar();
    }else{
        console.log('Estudiante ya existe en la BD');
    }
    
}

const listar = () =>{
    try{
        listaEstudiantes = require('./listado.json');
    }catch(err){
        listaEstudiantes = [];
    }
}

const mostrar = () =>{
    listar();
    console.log('Listado de Notas');
    listaEstudiantes.forEach(estudiante => {
        console.log('Nombre '+estudiante.nombre);
        console.log('Notas');
        console.log(' Matematicas '+estudiante.matematicas);
        console.log(' Ingles '+estudiante.ingles);
        console.log(' Programacion '+estudiante.programacion+'\n');
    });
}

const buscar = (nomb) =>{
    listar();
    if (est = listaEstudiantes.find(nom => nom.nombre == nomb)) {
        console.log('Nombre '+est.nombre);
        console.log('Notas');
        console.log(' Matematicas '+est.matematicas);
        console.log(' Ingles '+est.ingles);
        console.log(' Programacion '+est.programacion);
    }else
        console.log('Estudiante no existe en la BD');  
}

const gano = (materia) =>{
    listar();
    console.log('Listado de estudiantes que ganaron '+materia+'\n');
    let ganan = listaEstudiantes.filter(mat => mat[materia] >=3)
    if (ganan.length) {
        ganan.forEach(estudiante => {
            console.log('Nombre '+estudiante.nombre);
            console.log(' Nota '+materia+': '+estudiante[materia]+'\n');
        });  
    }else
        console.log('Ningun estudiante gano la materia '+materia+'\n');
}

const promedio = (nomb) =>{
    listar();
    if (est = listaEstudiantes.find(nom => nom.nombre == nomb)) {
        console.log('Nombre '+est.nombre);
        console.log(' Promedio de notas '+((est.matematicas+est.ingles+est.programacion)/3)+'\n');
    }else
        console.log('Estudiante no existe en la BD');  
}

const promedioMayor = () =>{
    listar();   
    const mayorTres = (est) =>{return ((est.matematicas+est.ingles+est.programacion)/3) > 3;}
    let promMayor = listaEstudiantes.filter(mayorTres);
    var texto = 'Listado de estudiantes con promedio mayor a 3'+'<br>';
    if (promMayor.length) {
        promMayor.forEach(est => {
            texto = texto + 'Nombre '+est.nombre+' ';
            texto = texto + ' promedio de notas '+((est.matematicas+est.ingles+est.programacion)/3)+'<br><br>';
        }); 
    }else
    texto = texto + 'Ningun estudiante tiene promedio por encima de 3'; 
        
    app.get('/', function (req, res) {
        res.send(texto)
    })
    app.listen(3000)
}

const guardar = () => {
    let datos = JSON.stringify(listaEstudiantes);
    fs.writeFile('listado.json', datos, (err)=>{
        if (err) throw (err);
        console.log('Archivo Creado con exito');
    });
}

module.exports = {
    crear,
    mostrar,
    buscar,
    gano,
    promedio,
    promedioMayor
}