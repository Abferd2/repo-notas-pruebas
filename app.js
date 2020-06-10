const argv = require('./config/yargs').argv;
const { crear, getNotas, updateNota, deleteNota } = require('./notes/notes');
var colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('crear nota');
        let notas = crear(argv.descripcion);
        console.log(notas);

        break;
    case 'listar':
        console.log('listar notas');
        let listado = getNotas();
        for (let nota of listado) {
            console.log(colors.green('==============NOTA================='));
            console.log(`nota: ${nota.desc}`);
            console.log(`estado: ${nota.complete}`);
            console.log(colors.green('===================================\n'));
        }
        break;
    case 'update':
        console.log('actualizar nota');
        let actualizado = updateNota(argv.descripcion, argv.complete);
        console.log(actualizado);

        break;
    case 'delete':
        console.log('borrar nota');
        let borrarNota = deleteNota(argv.descripcion);
        console.log(`Nota borrada: ${borrarNota}`);

        break;

    default:
        console.log('command not found');

}