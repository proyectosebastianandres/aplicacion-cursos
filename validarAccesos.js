let baseusuarios = require('./dataBase/usuariosRegistrados');

function existeUsuario (datosUsuario) {
    let datosSesion = {};
    baseusuarios.map( (usuario,index) => {
        if((datosUsuario.correo == usuario.correo) && (datosUsuario.contrasena == usuario.contrasena)){
            datosSesion = {
                datosUsuario: {
                    nombre: usuario.nombre,
                    correo: usuario.correo,
                    rol: usuario.rol,
                    tel: usuario.telefono,
                },
                usuarioExiste: true
            };
        }
    })
    
    return datosSesion;
}

module.exports = {
    existeUsuario : existeUsuario
}
