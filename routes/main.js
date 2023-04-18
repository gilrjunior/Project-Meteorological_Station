const express = require("express")
const app = express()
const router = express.Router()


    router.get("/", (req, res) => {

        res.sendFile(__dirname+'/views/index.html')

    })


//EXPORT
module.exports = router