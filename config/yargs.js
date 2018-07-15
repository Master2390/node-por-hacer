const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Titulo de la tarea'
};

const completado = {
    default: 'true',
    alias: 'c',
    desc: 'Marcar como completada la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('filtrar', 'Actualiza el estado completado de una tarea', {
        completado
    })
    .command('borrar', 'Eliminar tarea', {
        descripcion
    }).help().argv;

module.exports = {
    argv
}