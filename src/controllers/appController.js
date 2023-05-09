var myLineChart = [];


function loadFunction(){

    var ano = String(new Date().getFullYear());
    var dia = String(new Date().getDate()).padStart(2, "0");
    var mes = String(new Date().getMonth()+1).padStart(2, "0");

    var data = document.getElementById("data");

    chart7days(true);

    data.innerText = `${dia}/${mes}/${ano}`

}

function refresh() {

    location.reload();
    
}

function standartChart(labels, data){

    for(var i = 1; i < 4; i++){

        var name = ""

        if(i == 1){
            name = "Temperatura °C"
        }else if(i == 2){
            name = "Umidade %"
        }else{
            name = "Preciptação"
        }

        const ctx = document.getElementById('ch'+i);

        myLineChart[i-1] = new Chart(ctx, {
            type: 'line',
            data: {
            labels: labels,
            datasets: [{
                label: name,
                data: data,
                borderWidth: 2,
                borderColor: "#3B8952"
            }]
            },
            options: {
                scales: {
                    y: {
                    min: 16
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: name
                    }
                }
            }
        })


    }

}

function chart7days(load){

    if(!load){

        deleteCharts();
        
    }

    var labels = [String(new Date().getDate()-6).padStart(2, "0"), String(new Date().getDate()-5).padStart(2, "0"), String(new Date().getDate()-4).padStart(2, "0"), String(new Date().getDate()-3).padStart(2, "0"), String(new Date().getDate()-2).padStart(2, "0"), String(new Date().getDate()-1).padStart(2, "0"), String(new Date().getDate()).padStart(2, "0")]
    var data = [28, 29, 24, 22, 19, 21, 23]
    
    standartChart(labels, data);

}

function chart30days(){

    deleteCharts();

    var labels = [01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
    var data = [25, 29, 24, 22, 19, 21, 23,20, 29, 19, 22, 19, 21, 18,28, 29, 27, 22, 19, 21, 23,21, 22, 24, 22, 19, 21, 23,28, 25, 24, 22, 19, 21, 23]

    standartChart(labels, data);

}

function chart365days(){


    deleteCharts();

    var labels = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    var data = [25, 29, 24, 22, 19, 21, 23,20, 29, 19, 22, 19]

    standartChart(labels, data);

}

function deleteCharts(){

    myLineChart[0].destroy();
    myLineChart[1].destroy();
    myLineChart[2].destroy();

}
