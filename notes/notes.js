const fs = require('fs');

let listardoNotas = [];
let buscarNota = '';
let foundNota = false;

const cargarDB = () => {
    try {
        listardoNotas = require('../db/data.json');
    } catch (err) {
        listardoNotas = [];
    }
}

const getNotas = () => {
    cargarDB();
    return listardoNotas;
}

const guardarDB = () => {
    let data = JSON.stringify(listardoNotas);

    const dataFile = new Uint8Array(Buffer.from(data));
    fs.writeFile(`db/data.json`, dataFile, (err) => {
        if (err) throw new Error(err)
        return (`file saved`);
    });
}

const crear = (descript) => {
    cargarDB();

    let nota = {
        desc: descript,
        complete: false
    };
    listardoNotas.push(nota);
    guardarDB();
    return listardoNotas;
}

const updateNota = (desc, complete) => {
    cargarDB();
    let index = listardoNotas.findIndex(nota => nota.desc === desc)
    if (index >= 0) {
        listardoNotas[index].complete = complete
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const filtrarPorDesc = (obj) => {
    if (obj.desc !== buscarNota) {
        return true;
    } else {
        foundNota = true;
        return false;
    }
}

const deleteNota = (desc) => {
    cargarDB();
    buscarNota = desc;
    var arrayFilt = listardoNotas.filter(filtrarPorDesc);
    listardoNotas = arrayFilt;
    guardarDB();
    if (foundNota) {
        return true;
    }
    return false;
}

module.exports = {
    crear,
    guardarDB,
    cargarDB,
    getNotas,
    updateNota,
    deleteNota
}