function loadFunction(){

    var ano = String(new Date().getFullYear());
    var dia = String(new Date().getDate()).padStart(2, "0");
    var mes = String(new Date().getMonth()+1).padStart(2, "0");

    var data = document.getElementById("data");

    data.innerText = `${dia}/${mes}/${ano}`

}

function change7(){

    var g1 = document.getElementById("G1");
    var g2 = document.getElementById("G2");
    var g3 = document.getElementById("G3");

    g1.src = "/img/graphic/dayHumidity7.png";
    g2.src = "/img/graphic/dayRain7.png";
    g3.src = "/img/graphic/dayTemp7.png";

}

function change30(){

    var g1 = document.getElementById("G1");
    var g2 = document.getElementById("G2");
    var g3 = document.getElementById("G3");

    g1.src = "/img/graphic/dayHumidity30.png";
    g2.src = "/img/graphic/dayRain30.png";
    g3.src = "/img/graphic/dayTemp30.png";


}

function changeY(){

    var g1 = document.getElementById("G1");
    var g2 = document.getElementById("G2");
    var g3 = document.getElementById("G3");

    g1.src = "/img/graphic/monthHumidity.png";
    g2.src = "/img/graphic/monthRain.png";
    g3.src = "/img/graphic/monthTemp.png";



}

function refresh() {

    location.reload();
    
}