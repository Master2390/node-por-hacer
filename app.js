const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');

const element = argv._[0];
switch (element) {
    case 'listar':
        let listado = porHacer.getListado();

        for (const tarea of listado) {
            console.log("============== Por Hacer ==============".green);
            console.log(tarea.descripcion);
            console.log("Estatus: ", tarea.completado);
            console.log("=======================================".green);
        }
        break;
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'actualizar':
        console.log(porHacer.actualizar(argv.descripcion, argv.completado));
        break;
    case 'borrar':
        console.log(porHacer.borrar(argv.descripcion));
        break;
    case 'filtrar':
        {
            let listado = porHacer.getfilter(argv.completado);
            console.log(`====== Tarea con Estatus: ${argv.completado} ======`.green);
            for (const tarea of listado) {
                console.log("=======================================".green);
                console.log(tarea.descripcion);
                console.log("=======================================".green);
            }
            break;
        }
    default:
        console.log('Comando no Admitido');
        break;
}