const {obtenerPromedio, argv} = require('./datos')
const express = require('express')
const app = express()

//console.log(argv);
console.log(argv);

if (argv._[0]=='promedio') {
    texto='El promedio de  es '+obtenerPromedio(argv.i,argv.m,argv.p);
} else {
    texto='Promedio no calculado';
}
 
app.get('/', function (req, res) {
    res.send(texto)
})

app.listen(3000)