const express = require("express")
const app = express()
const session = require("express-session")
const main = require("./routes/main")
const handlebars = require('express-handlebars')

//CONFIG
    //SESSION
    app.use(session({

        secret: "estacao_metereologica",
        resave: true,
        saveUninitialized: true

    }))

//STATICS
    app.use(express.static(__dirname+'/public'))

//ROUTES

app.get("/", (req, res) => {

    res.sendFile(__dirname+'/views/index.html')

})

//OTHERS

const port = process.env.PORT || 8000

app.listen(port, () => {

    console.log('Servidor ativo...')    

})