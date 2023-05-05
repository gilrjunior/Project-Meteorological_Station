const express = require("express");
const app = express();
const session = require("express-session");
const main = require("./routes/main");

//CONFIG
    //SESSION
    app.use(session({

        secret: "estacao_metereologica",
        resave: true,
        saveUninitialized: true

    }))

//STATICS

    app.use(express.static(__dirname+'/public'));

//ROUTES

    app.use(main);

//OTHERS

const port = process.env.PORT || 8000

app.listen(port, () => {

    console.log('Server on'); 

})