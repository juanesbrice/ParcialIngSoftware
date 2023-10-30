const express = require('express');
// app conectar por el puerto local el express
// especificar los middleware a utilizar
const app = express();
const API_VERSION= 'api/v1';
const userRoutes = require("./routes/user");
const serviceRoutes=  require("./routes/service");
const authRoutes=  require("./routes/auth");
const concesionarioRoutes=  require("./routes/concesionario");
const vehiculoRoutes=  require("./routes/vehiculo");
//Pruebas con extension REST Client
app.use(express.json());
//Pruebas desde postman
app.use(express.urlencoded({extended:true}));

//http://localhost:3100/api/v1/users
app.use(`/${API_VERSION}/users`, userRoutes)

//http://localhost:3100/api/v1/services
app.use(`/${API_VERSION}/services`, serviceRoutes)

//http://localhost:3100/api/v1/auth
app.use(`/${API_VERSION}/auth`, authRoutes)


//http://localhost:3100/api/v1/concesionario
app.use(`/${API_VERSION}/concesionario`, concesionarioRoutes)

//http://localhost:3100/api/v1/concesionario
app.use(`/${API_VERSION}/vehiculo`, vehiculoRoutes)

module.exports = app;
