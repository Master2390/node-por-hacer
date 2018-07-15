let fs = require('fs');

let listadoTareas = [];

const getfilter = (status) => {
    cargarDB();
    let filterList = listadoTareas.filter(value => value.completado === status);
    return filterList;
}

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoTareas.findIndex(index => index.descripcion === descripcion);
    if (index >= 0) {
        listadoTareas.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoTareas.findIndex(index => index.descripcion === descripcion);
    if (index >= 0) {
        listadoTareas[index].completado = completado;
        guardarDB();
        return true
    } else {
        return false;
    }
}

const getListado = () => {
    cargarDB();
    return listadoTareas;
}

const cargarDB = () => {
    try {
        listadoTareas = require('../db/data.json');
    } catch (e) {
        listadoTareas = [];
    }

}

const guardarDB = () => {
    let data = JSON.stringify(listadoTareas);
    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new Error("No se Grabo ", err)
    })
}

const crear = (descripcion) => {
    cargarDB();

    let porHacer = {
        descripcion,
        completado: 'false'
    }

    listadoTareas.push(porHacer);

    guardarDB();

    return porHacer;
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar,
    getfilter
}