const argv = require('./config/yargs').argv;
const colors = require('colors');


const { creararchivo, listartabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listartabla(argv.base, argv.limite);
        break;
    case 'crear':
        creararchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado ${archivo.green}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');

}




//let argv2 = process.argv;
//console.log('limite', argv.limite);


/*let data = '';
for (let i = 1; i <= 10; i++) {


    data += `${base} * ${i} = ${base*i}\n `;

}

fs.writeFile(`tablas/tabla${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`el aerchivo ${base} se creo`);
});
*/