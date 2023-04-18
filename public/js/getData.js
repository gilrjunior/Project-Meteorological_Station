function gData(){

    var ano = String(new Date().getFullYear());
    var dia = String(new Date().getDate()).padStart(2, "0");
    var mes = String(new Date().getMonth()+1).padStart(2, "0");

    var data = document.getElementById("data");

    data.innerText = `${dia}/${mes}/${ano}`


}