const express = require("express");
const station = require("../database/stationSchema")
const router = express.Router();

    router.get("/",(req, res) => {

        station.findOne().sort({_id: "desc"}).then((last_data) => {


            var information = new Object({

                temp_atual: last_data.temperatura,
                temp_min: last_data.temperatura,
                temp_max : 0,
                umid_atual: last_data.umidade,
                umid_min: last_data.umidade,
                umid_max: 0,
                velVento: last_data.velVento,
                dirVento: last_data.dirVento[0]+last_data.dirVento[1],
                qtdAgua: last_data.qtdAgua

            })

            var year = String(new Date().getFullYear());
            var day = String(new Date().getDate()).padStart(2, "0");
            var month = String(new Date().getMonth()+1).padStart(2, "0");

            var start = new Date("2023-05-30"); //new Date(`${year}-${month}-${day}`);
            var end = new Date("2023-05-31"); //new Date(`${year}-${month}-${day}`);

            //end.setDate(end.getDate()+1)

            station.find({createdAt: {$gte:start, $lte: end}}).then((today_data) => {
 
                information.temp_min = today_data[0].temperatura;
                information.temp_max = today_data[0].temperatura;
                information.umid_min = today_data[0].umidade;
                information.umid_max = today_data[0].umidade;
                       

                for(let i = 1; i < today_data.length; i++){
                 
                    information.temp_min = today_data[i].temperatura < information.temp_min ? today_data[i].temperatura : information.temp_min;
                    information.temp_max = today_data[i].temperatura > information.temp_max ? today_data[i].temperatura : information.temp_max;
                    information.umid_min = today_data[i].umidade < information.umid_min ? today_data[i].umidade : information.umid_min;
                    information.umid_max = today_data[i].umidade > information.umid_max ? today_data[i].umidade : information.umid_max;

                }

                const today = new Object({

                    labels: today_data.map((dado) => dado.createdAt),
                    temp: today_data.map((dado) => dado.temperatura),
                    umid: today_data.map((dado) => dado.umidade),
                    preci: today_data.map((dado) => dado.qtdAgua)

                })

                res.render("homepage/index", {information: information, today: today});

            }).catch((err) => {

                console.log(err)
                res.render("homepage/index", {information: information});

            })

        }).catch((err) => {

            console.log("Error "+err);

        })


    })


//EXPORTS
module.exports = router;