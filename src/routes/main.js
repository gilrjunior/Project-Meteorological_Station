const express = require("express");
const station = require("../database/stationSchema")
const router = express.Router();

    router.get("/", (req, res) => {

        station.findOne().sort({_id: "desc"}).then((information) => {

            res.render("homepage/index", information);
            
        }).catch((err) => {

            console.log("Error "+err);

        })

    })


//EXPORTS
module.exports = router;