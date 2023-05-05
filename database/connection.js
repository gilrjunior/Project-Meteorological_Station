const mongoose = require("mongoose");

//DATABASE CONNECTION SETUP
mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://Gilmar:YkMQKiygJuEqhdUB@estacaometeorologica.yhlhf5g.mongodb.net/test", {

    useNewUrlParser: true

}).then(() => {

    console.log("Connected to the database");

}).catch((err) => {

    console.log("Error "+err);

})

module.exports = mongoose;

