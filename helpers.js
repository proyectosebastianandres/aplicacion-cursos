const hbs = require('hbs');

hbs.registerHelper('cursoInscrito', function (conditional, options) {
  conditional.map( (value, indice) => {
    if(parseFloat(value) == options.hash.value){
        options.fn()
    }
    }) 
});


hbs.registerHelper('cursoDisponible', function (conditional, options) {

  if (options.hash.value === conditional) {
    return options.fn(this)
  } else {
    return options.inverse(this);
  }
});


hbs.registerHelper('Rol', function (conditional, options) {

    if (options.hash.value === conditional) {
      return options.fn(this)
    } else {
      return options.inverse(this);
    }
  });