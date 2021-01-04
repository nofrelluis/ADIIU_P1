function dibujacion() {
    createTable();
}

function createTable()
{
    var contador = 0;
    
    
    
    var edad = sessionStorage.getItem("Edades");
    if(edad != null){
        edad = JSON.parse("[" + edad + "]");
        pintarTorta(edad);
    } else {
    var edad = [0,0,0,0];
        
        $.ajax({url: "http://localhost:8080/PeliculasWeb20/bdpeliculas?op=cantidadporfranja&par=0-19",
            success: function (result) {
                console.log(result);
                res = JSON.parse(result);
                edad[0] = res.cantidadporfranja;
                contador++;
                if (contador == 4) {
                    sessionStorage.setItem("Edades", edad);
                    pintarTorta(edad);
                }
            }});
        $.ajax({url: "http://localhost:8080/PeliculasWeb20/bdpeliculas?op=cantidadporfranja&par=20-40",
            success: function (result) {
                console.log(result);
                res = JSON.parse(result);
                edad[1] = res.cantidadporfranja;
                contador++;
                if (contador == 4) {
                    sessionStorage.setItem("Edades", edad);
                    pintarTorta(edad);
                }
            }});
        $.ajax({url: "http://localhost:8080/PeliculasWeb20/bdpeliculas?op=cantidadporfranja&par=41-60",
            success: function (result) {
                console.log(result);
                res = JSON.parse(result);
                edad[2] = res.cantidadporfranja;
                contador++;
                if (contador == 4) {
                    sessionStorage.setItem("Edades", edad);
                    pintarTorta(edad);
                }
            }});
        $.ajax({url: "http://localhost:8080/PeliculasWeb20/bdpeliculas?op=cantidadporfranja&par=61-1500",
            success: function (result) {
                console.log(result);
                res = JSON.parse(result);
                edad[3] = res.cantidadporfranja;
                contador++;
                if (contador == 4) {
                    sessionStorage.setItem("Edades", edad);
                    pintarTorta(edad);
                }
            }});
    
        
    }
    
    


    function pintarTorta(data) {
        console.log(data);
        Highcharts.chart('container', {
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
                data: [{
                        name: '0-19',
                        y: data[0],
                    }, {
                        name: '20-40',
                        y: data[1]
                    }, {
                        name: '41-60',
                        y: data[2]
                    }, {
                        name: '+60',
                        y: data[3]
                    }]
            }]
        });
        /*
        var a = edad.toString();
        console.log(a);
        console.log(parse)*/
        
        /*$.ajax({url: "http://localhost:8080/PeliculasWeb20/bdpeliculas?op=todosporedad&par=30",
        success: function (result) {
            console.log(result);
            res = JSON.parse(result);
            pintarBarras(res);
        }});*/
    }
    
    function pintarBarras(actores){
        var cantidad = 5;
        var data = [];
        console.log(actores);
        
        var num = 0;
        for(var i = 0; i < cantidad; i++){
            //contenido.beginPath();
            var valor = actores.todosporedad[i].vals[0];
            console.log(valor);
            valor.replace(" ", "_")
            
            var url = "http://localhost:8080/PeliculasWeb20/bdpeliculas?op=numpelisdepersona&par=" + valor;
            $.ajax({url: url,
                success: function (result) {
                    console.log(result);
                    res = JSON.parse(result);
                    console.log(res);
                    data.push(res);                    
                    num++;
                    if(num === cantidad){
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
            valores.push(data[w].data[0]);
            console.log(w);
            console.log(names[w]);
        }
        Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'NumPeliculas'
        },
        subtitle: {
            text: 'numero'
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
                text: 'Population',
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
        series: [{name: 'Numero pelis',
                data: valores }]
    });
    }
}
