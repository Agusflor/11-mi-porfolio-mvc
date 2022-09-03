const express = require('express');
const app = express();
let path= require('path');
const { dirname } = require("path");
/*Enrutadores */
let rutasIndex = require('./routes/main');
/* Vistas */
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", 'ejs' );
/* Middlewares */
app.use(express.static(path.join(__dirname, "public")));
/* Rutas */
app.use('/',rutasIndex)

app.listen(3000, ()=>{
    console.log('Servidor funcionando')
});
module.exports= app;