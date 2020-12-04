const fs = require('fs');
const colors = require('colors');


let listartabla = (base, limite = 10) => {


    console.log('ra'.green);
    console.log('rafdeeeeee');
    console.log('raffffffffffffffffffffffffff');
    for (let i = 1; i <= limite; i++) {

        console.log(`${base} * ${i} = ${base*i}\n `);

    }


}

let creararchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {

            reject('no es un numero')
            return;
        }



        let data = '';

        for (let i = 1; i <= limite; i++) {


            data += `${base} * ${i} = ${base*i}\n `;

        }

        fs.writeFile(`tablas/tabla${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla ${base}.txt`);
        });
    });

}


module.exports = {

    creararchivo,
    listartabla

}