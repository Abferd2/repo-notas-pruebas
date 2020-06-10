const opt = {
    descripcion: {
        alias: 'd',
        demand: true,
        desc: 'descrpt de la nota'
    }
}
const opt2 = {
    descripcion: {
        alias: 'd',
        demand: true,
        desc: 'descrpt de la nota'
    },
    complete: {
        alias: 'c',
        default: true,
        desc: 'marcar status de la nota'
    }
}

const argv = require('yargs')
    .command('crear', 'crea notas', opt)
    .command('update', 'actualiza notas', opt2)
    .command('delete', 'borrar nota', opt)
    .help().argv;

module.exports = {
    argv
}