var actores = [];
var gif=document.getElementById('#gifprivada');
var gra=document.getElementById('#graficoNumPeliculas');


function dibujar(){
    actores = sessionStorage.getItem("actores");
    var data = sessionStorage.getItem("numPelis");
    console.log(data);
    if(data != null){
        data = JSON.parse(data);
        //$('#gifprivada').empty();   
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

function isIn(actor){
    for (var i = 0; i < actores.length; i++) {
        if(actores[i].name == actor){
            imprimirDatos(actores[i]);
            return true;
        }
    }
    return false;
}

function imprimirDatos(actor){
            var n;
            document.getElementById("name").innerHTML = actor.name;
            document.getElementById("birth").innerHTML = actor.birth;
            document.getElementById("nPelis").innerHTML = actor.nMovies;
            if(actor.death == -1) n = "-"; 
            else n = actor.death;
            document.getElementById("death").innerHTML = n;    
}

function buscar(actor){
    //gif.style.display = "block";
    if(!isIn(actor)){
        $('#gifprivada').append('<img src="imatges/espera.gif" width="80%"/>');
        console.log("buscando");
        actor.replace(" ", "_");
        $.ajax({url: "http://localhost:8080/PeliculasWeb20/bdpeliculas?op=getdatospersona&par="+actor,
            success: function (result) {
                console.log(result);
                if(result != -1){
                    var res = JSON.parse(result);
                    actores.push(res);
                    sessionStorage.setItem("actores", JSON.stringify(actores));

                    var data = sessionStorage.getItem("numPelis");
                    if(data != null){
                        data = JSON.parse(data);
                    } else {
                        data = [];
                    }
                    console.log(data);
                    data.push(JSON.parse("{\"name\": \""+res.name + "\",\"y\": " + res.nMovies + "}"));
                    sessionStorage.setItem("numPelis",JSON.stringify(data));
                    $('#gifprivada').empty();
                    console.log("ha buscado");
                    pintarTorta(data);
                    
                    imprimirDatos(res);
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
                text: null
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