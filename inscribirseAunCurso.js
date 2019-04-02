const fs= require('fs');

let listado = require('./dataBase/usuariosRegistrados.json');

function inscribirseAunCurso (datoCurso, idEstudiante) {
    let cursoExiste = false;
    listado.find( (persona) => {
        if(persona.identidad === idEstudiante){
            persona.cursosRegistrados.find( (value) => {
                if(value === datoCurso){
                    cursoExiste = true;
                    return cursoExiste;
                }                
            }); 
            
        if(cursoExiste){
            console.log('Ya estás registrado');
        } else {
            persona.cursosRegistrados.push(datoCurso);
            guardar(); 
         }
        }
    })
}

const guardar = () => {
    let datos = JSON.stringify(listado);

    fs.writeFile('./dataBase/usuariosRegistrados.json', datos, (err) =>{
        if(err) throw err;
        console.log('Datos almacenados correctamente');
    })
}


module.exports = {
    inscribirseAunCurso : inscribirseAunCurso
}