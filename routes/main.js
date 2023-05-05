const express = require("express");
const app = express();
const router = express.Router();


    router.get("/", (req, res) => {

        res.sendFile('C:/Users/User/Desktop/Projetos 5/Project-Meteorological_Station-node/views/index.html');

    })


//EXPORT
module.exports = router;