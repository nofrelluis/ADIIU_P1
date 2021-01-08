var actores = []

function dibujar(){
    actores = sessionStorage.getItem("actores");
    var data = sessionStorage.getItem("numPelis");
    console.log(data);
    if(data != null){
        data = JSON.parse(data);
        pintarTorta(data);
    }
    console.log(actores);
    if(actores != null){
        actores = JSON.parse(actores);
    } else{
        actores = [];
    }
}

function buscarActor(){
    var actor = document.getElementById("actor").value;
    buscar(actor);
}

function buscar(actor){
    if(actores.indexOf(actor)==-1){
        console.log("buscando");
        actor.replace(" ", "_");
        $.ajax({url: "http://localhost:8080/PeliculasWeb20/bdpeliculas?op=numpelisdepersona&par="+actor,
            success: function (result) {
                console.log(result);
                if(result != "-1"){
                    res = JSON.parse(result);
                    actores.push(actor);
                    sessionStorage.setItem("actores", JSON.stringify(actores));

                    var data = sessionStorage.getItem("numPelis");
                    if(data != null){
                        data = JSON.parse(data);
                    } else {
                        data = [];
                    }

                    data.push(res);
                    sessionStorage.setItem("numPelis",JSON.stringify(data));
                    pintarTorta(data);
                    }
            }});
    }
}

function pintarTorta(data) {
        console.log(data);
        Highcharts.chart('graficoNumPeliculas', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Edad'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.y}</b>'
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    }
                }
            },
            series: [{
                name: 'Cantidad',
                colorByPoint: true,
                data: data
            }]
        });
                /*
        $.ajax({url: "http://localhost:8080/PeliculasWeb20/bdpeliculas?op=todosporedad&par=30",
        success: function (result) {
            console.log(result);
            res = JSON.parse(result);
            pintarBarras(res);
        }});*/
    }