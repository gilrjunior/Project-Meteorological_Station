const mongoose = require("./connection")

//STATION DATA MODEL

const stationSchema = new mongoose.Schema({

    temperatura: {

        type: String

    },
    umidade: {

        type: String

    },
    createAt: {

        type: Date,
        default: new Date().now()

    }

})

station = mongoose.model("sensorvalues", stationSchema)

module.exports = station