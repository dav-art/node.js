const opt = {
    base: {
        demand: true,
        alias: 'b',

    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', opt)
    .command('crear', 'crea  la tabla de multiplicar', opt)
    .help()
    .argv;
module.exports = {
    argv
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