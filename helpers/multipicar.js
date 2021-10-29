const fs = require('fs');

require('colors');

const crearArchivoTabla = async (base = 5, listar = false, limit) =>{
    try {
        let fileContent = '', consola = '';


        for (let index = 1; index <= limit; index++) {
            
            fileContent += `${base} x ${index} = ${index * base}\n`;
            consola += `${base} ${'x'.green} ${index} ${'='.green} ${index * base}\n`;
    
        }
    
        if (listar) {
            console.log(consola); 
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, fileContent);
    
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivoTabla
}