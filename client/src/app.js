const express = require('express'); //referencia a framework express
const app = express(); //se crea la aplicacion de express 
const log = require("morgan");  //para saber los clientes conectados 
const boddyParser = require('body-parser'); 
const path = require('path');

const indexRoutes = require('./routers/index.js');  //referencia a las rutas 

app.set('port', process.env.PORT || 4000 ); //asigno puerto 3000

//Middleware utiliza morgan 
app.use(log('dev'));
app.use(boddyParser.urlencoded({extended: false}));
//Rutas
app.use('/', indexRoutes);

app.listen(app.get('port'),  () => {
    console.log('El servidor esta funcionando en el puerto ', app.get('port'));
}
);

//establecer sistema de vistas 
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs')





// desplegar mensaje de conectado 