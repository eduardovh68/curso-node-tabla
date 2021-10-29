const {crearArchivoTabla} = require('./helpers/multipicar');
const argv = require('./config/yargs');

console.clear()


let base = argv.base;
let listar = argv.listar;
let limit = argv.hasta;

crearArchivoTabla(base,listar,limit)
.then(nombreArchivo => console.log(nombreArchivo, 'creado'))
.catch(err => console.log(err));