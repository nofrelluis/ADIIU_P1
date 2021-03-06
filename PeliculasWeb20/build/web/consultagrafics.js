$(document).ready(function () {   
    pintarEspera();
    Mapa();
    Edad();
    Pelis();
});

function pintarEspera() {
    $('#mapa').append('<img src="imatges/espera.gif"/>');
    $('#graficoEdad').append('<img src="imatges/espera.gif"/>');
    $('#graficoPeliculas').append('<img src="imatges/espera.gif"/>');
}

function Edad(){
    var contador = 0;
    
    var edad = sessionStorage.getItem("Edades");
    if(edad != null){
        edad = JSON.parse("[" + edad + "]");
        $('#graficoEdad').empty();
        pintarTorta(edad);
    } else {
    var edad = [0,0,0,0];
        
        $.ajax({url: "http://localhost:8080/PeliculasWeb20/bdpeliculas?op=cantidadporfranja&par=0-19",
            success: function (result) {
                console.log(result);
                var res = JSON.parse(result);
                edad[0] = res.cantidadporfranja;
                contador++;
                if (contador == 4) {
                    sessionStorage.setItem("Edades", edad);
                    $('#graficoEdad').empty();
                    pintarTorta(edad);
                }
            }});
        $.ajax({url: "http://localhost:8080/PeliculasWeb20/bdpeliculas?op=cantidadporfranja&par=20-40",
            success: function (result) {
                console.log(result);
                var res = JSON.parse(result);
                edad[1] = res.cantidadporfranja;
                contador++;
                if (contador == 4) {
                    sessionStorage.setItem("Edades", edad);
                    $('#graficoEdad').empty();
                    pintarTorta(edad);
                }
            }});
        $.ajax({url: "http://localhost:8080/PeliculasWeb20/bdpeliculas?op=cantidadporfranja&par=41-60",
            success: function (result) {
                console.log(result);
                var res = JSON.parse(result);
                edad[2] = res.cantidadporfranja;
                contador++;
                if (contador == 4) {
                    sessionStorage.setItem("Edades", edad);
                    $('#graficoEdad').empty();
                    pintarTorta(edad);
                }
            }});
        $.ajax({url: "http://localhost:8080/PeliculasWeb20/bdpeliculas?op=cantidadporfranja&par=61-1500",
            success: function (result) {
                console.log(result);
                var res = JSON.parse(result);
                edad[3] = res.cantidadporfranja;
                contador++;
                if (contador == 4) {
                    sessionStorage.setItem("Edades", edad);
                    $('#graficoEdad').empty();
                    pintarTorta(edad);
                }
            }});     
    }
}

function pintarTorta(data) {
    console.log(data);
    Highcharts.chart('graficoEdad', {
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
            data: [{
                    name: '0-19 anys',
                    y: data[0],
                }, {
                    name: '20-40 anys',
                    y: data[1]
                }, {
                    name: '41-60 anys',
                    y: data[2]
                }, { 
                    name: '+60 anys',
                    y: data[3]
                }]
        }]
    });
}

function Pelis(){
    var peliculas = sessionStorage.getItem("Peliculas");
    if(peliculas != null){
        console.log(peliculas);
        $('#graficoPeliculas').empty();
        peliculas = JSON.parse(peliculas)
        pintarHighchart(peliculas);
    } else {

        $.ajax({url: "http://localhost:8080/PeliculasWeb20/bdpeliculas?op=getpersonaspopular",
        success: function (result) {
            console.log(result);
            var res = JSON.parse(result);
            consultasActores(res);
        }});
    }
}
    
function consultasActores(actores){
        var cantidad = 5;
        var data = [];
        console.log(actores);

        var num = 0;
        for(var i = 0; i < cantidad; i++){
            //contenido.beginPath();
            var valor = actores.personasdepeli[i].vals[1];
            var nombre = actores.personasdepeli[i].vals[0].normalize("NFD").replace(/[\u0300-\u036f]/g, ""); //Con esta funcion borramos las tildes y simbolos no soportados del nombre
            console.log(valor);
            //valor.replace(" ", "_")

            var url = "http://localhost:8080/PeliculasWeb20/bdpeliculas?op=getnumpelisdepersonacodigo&par=" + valor + "," + nombre.replace(" ", "_");
            $.ajax({url: url,
                success: function (result) {
                    console.log(result);
                    var res = JSON.parse(result);
                    //var res = "{\"name\":\""+ actores.personasdepeli[i].vals[0] +"\", \"y\": " + aux.y + "}";
                    console.log(res);
                    data.push(res);                    
                    num++;
                    if(num === cantidad){
                        sessionStorage.setItem("Peliculas",JSON.stringify(data));
                        $('#graficoPeliculas').empty();
                        pintarHighchart(data);
                    }
                }});


        }

        //contenido.stroke();
    }

    function pintarHighchart(data){
        var names = [];
        var valores = [];
        for (w in data) {
            names.push(data[w].name);
            valores.push(data[w].y);
            console.log(w);
            console.log(names[w]);
        }
        Highcharts.chart('graficoPeliculas', {
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        subtitle: {
            text: null
        },
        xAxis: {
            categories: names,
            title: {
                text: 'name'
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Nombre de pel·lícules',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ''
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        credits: {
            enabled: false
        },
        series: [{name: 'Actors',
                data: valores }]
    });
}

function Mapa(){
    
    var mapas= sessionStorage.getItem("Mapas");
    //mapas = null;
    if(mapas != null){
        console.log(mapas);
        $('#mapa').empty();
        mapas = JSON.parse(mapas);
        pintarMapa(mapas);
    } else {
    
        var contador= 0;
        var ciudades = ["Tirana-al","Andorra la Vella-ad","Vienna-at","Minsk-by","Brussels-be","Sarajevo-ba","Sofia-bg","Zagreb-hr","Nicosia-cy",
                        "Prague-cz","Copenhagen-dk","Tallin-ee","Helsinki-fi","Paris-fr","Berlin-de","Athens-gr","Budapest-hu","Reykjav?k-is","Dublin-ie","Rome-it",
                        "Riga-lv","Vaduz-li","Luxembourg-lu","Chisinau-md","Monaco-mc","Podgorica-me","Amsterdam-nl","Skopje-mk","Oslo-no","Warsaw-pl","Lisbon-pt","Bucharest-ro",
                        "Moscow-ru","San Marino-sm","Belgrade-rs","Bratislava-sk","Ljubljana-si","Madrid-es","Stockholm-se","Bern-ch","Ankara-tr","Kiev-ua","London-gb"];
        var ciutat= [];
        for (var i = 0; i < ciudades.length; i++){
        $.ajax({url: "http://localhost:8080/PeliculasWeb20/bdpeliculas?op=gpspoblacion&par="+ciudades[i],
            success: function (result) {

                res = JSON.parse(result);
                console.log(res);
                ciutat.push(res);
                contador++;
                if (contador == ciudades.length) {
                    sessionStorage.setItem("Mapas", JSON.stringify(ciutat));
                    $('#mapa').empty();
                    pintarMapa(ciutat);
                }
            }});
        }
    }
}

function pintarMapa(data){
    
    var datos = [];
     
    var punto = "{\"name\": \"Basemap\", \"borderColor\": \"#A0A0A0\",\"nullColor\": \"rgba(200, 200, 200, 0.3)\",\"showInLegend\": false}";   
        datos.push(JSON.parse(punto));
    punto = "{\"name\": \"Separators\", \"type\": \"mapline\",\"nullColor\": \"#707070\",\"showInLegend\": false,\"enableMouseTracking\": false}";   
    datos.push(JSON.parse(punto));
        
    for (var i= 0; i < data.length; i++){
        console.log(i);
        punto = "{\"type\": \"mappoint\", \"name\": \""+data[i].name+"\",\"marker\": {\"symbol\": \"circle\"}, \"color\": \"#222\", \"data\":["+JSON.stringify(data[i])+"]}";   
        datos.push(JSON.parse(punto));
       
    }
    console.log(datos);
    Highcharts.mapChart('mapa', {

    chart: {
        map: 'custom/europe'
    },

    title: {
        text: null
    },

    mapNavigation: {
        enabled: false
    },

    tooltip: {
        headerFormat: '',
        pointFormat: '<b>{point.name}</b><br>Lat: {point.lat}, Lon: {point.lon}'
    },
    legend: {
                    align: 'right',
                    verticalAlign: 'top',
                    x: -15,
                    y: 0,
                    floating: true,
                    layout: 'vertical',
                    valueDecimals: 0,
                    backgroundColor: ( // theme
                        Highcharts.defaultOptions &&
                        Highcharts.defaultOptions.legend &&
                        Highcharts.defaultOptions.legend.backgroundColor
                    ) || 'rgba(255, 255, 255, 0.85)'
                },
    
    series: datos
    
});
    
}
