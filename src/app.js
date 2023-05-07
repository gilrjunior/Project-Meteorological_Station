const express = require("express");
const app = express();
const session = require("express-session");
const main = require("./routes/main");
require('dotenv').config();

//CONFIG
    //SESSION
    app.use(session({

        secret: "estacao_metereologica",
        resave: true,
        saveUninitialized: true

    }))

//STATICS

    app.use(express.static(__dirname+'/public'));
    app.use(express.static(__dirname+'/controller'));

//ROUTES

    app.use(main);

//OTHERS

app.listen(process.env.PORT || 8000, () => {

    console.log('Server on'); 

})