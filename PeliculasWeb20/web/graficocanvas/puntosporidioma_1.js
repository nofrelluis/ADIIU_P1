function dibujacion() {
    createTable();
}

function pinta() {
    /*console.log("segundo albaricoque");
     var a;
     var b;
     var c;
     var d;
     $.ajax({url:"http://localhost:8080/PeliculasWeb20/bdpeliculas?op=cantidadporfranja&par=0-10",
     success: function(result){
     res = JSON.parse(result);
     //console.log(res);
     //$("#puntosporidioma").html(a.cantidadporfranja);
     a = res.cantidadporfranja;
     }});
     $.ajax({url:"http://localhost:8080/PeliculasWeb20/PeliculasWeb20/bdpeliculas?op=cantidadporfranja&par=11-25",
     success: function(result){
     res = JSON.parse(result);
     b = res.cantidadporfranja;
     }});
     $.ajax({url:"http://localhost:8080/PeliculasWeb20/PeliculasWeb20/bdpeliculas?op=cantidadporfranja&par=26-50",
     success: function(result){
     res = JSON.parse(result);
     c = res.cantidadporfranja;
     }});
     $.ajax({url:"http://localhost:8080/PeliculasWeb20/PeliculasWeb20/bdpeliculas?op=cantidadporfranja&par=51-200",
     success: function(result){
     res = JSON.parse(result);
     d = res.cantidadporfranja;
     }});
     
     var canvas = document.getElementById('canvas');
     pintarTorta(a,b,c,d,canvas,px,py);
     */
}




function createTable()
{



    var ctx = document.getElementById('canvas');
    var width = ctx.width;
    var height = ctx.height;
    var contenido = ctx.getContext('2d');

    var a;
    var b;
    var c;
    var d;
    var contador = 0;
    console.log(contador);
    /*$.ajax({url: "http://localhost:8080/PeliculasWeb20/bdpeliculas?op=cantidadporfranja&par=0-10",
        success: function (result) {
            res = JSON.parse(result);
            //console.log(res);
            //$("#puntosporidioma").html(a.cantidadporfranja);
            a = res.cantidadporfranja;
            contador++;
            if (contador == 4) {
                pintarTorta(a, b, c, d, contenido);
            }
            console.log(contador);
        }});
    $.ajax({url: "http://localhost:8080/PeliculasWeb20/bdpeliculas?op=cantidadporfranja&par=11-25",
        success: function (result) {
            res = JSON.parse(result);
            b = res.cantidadporfranja;
            contador++;
            if (contador == 4) {
                pintarTorta(a, b, c, d, contenido);
            }
            console.log(contador);
        }});
    $.ajax({url: "http://localhost:8080/PeliculasWeb20/bdpeliculas?op=cantidadporfranja&par=26-50",
        success: function (result) {
            res = JSON.parse(result);
            c = res.cantidadporfranja;
            contador++;
            if (contador == 4) {
                pintarTorta(a, b, c, d, contenido);
            }
            console.log(contador);
        }});
    $.ajax({url: "http://localhost:8080/PeliculasWeb20/bdpeliculas?op=cantidadporfranja&par=51-200",
        success: function (result) {
            res = JSON.parse(result);
            d = res.cantidadporfranja;
            contador++;
            if (contador == 4) {
                pintarTorta(a, b, c, d, contenido);
            }
            console.log(contador);
        }});*/
    console.log(a);
    pintarTorta(1, 1, 1, 1, contenido);

    //pintarBarras();
    
    $.ajax({url: "http://localhost:8080/PeliculasWeb20/bdpeliculas?op=todosporedad&par=30",
        success: function (result) {
            res = JSON.parse(result);
            pintarBarras(res);
            console.log(contador);
        }});
    


    function pintarTorta(nes, nca, nde, nen, contenido) {
        var total = nes + nca + nde + nen;
        var pes = (1.0 * nes) / total;
        var ang = 0;
        var rad = 50;
        var cx = 100;
        var cy = 100;
        contenido.beginPath();
        contenido.arc(cx, cy, rad, ang, 2 * pes * Math.PI);
        contenido.strokeStyle = "#f54c4c";
        contenido.lineWidth = rad * 2;
        contenido.stroke();
        ang = ang + (2 * pes * Math.PI);
        var pca = (1.0 * nca) / total;
        contenido.beginPath();
        contenido.arc(cx, cy, rad, ang, ang + (2 * pca * Math.PI));
        contenido.strokeStyle = "#f3f01f";
        contenido.lineWidth = rad * 2;
        contenido.stroke();
        ang = ang + (2 * pca * Math.PI);
        var pen = (1.0 * nen) / total;
        contenido.beginPath();
        contenido.arc(cx, cy, rad, ang, ang + (2 * pen * Math.PI));
        contenido.strokeStyle = "#2f9ef4";
        contenido.lineWidth = rad * 2;
        contenido.stroke();
        ang = ang + (2 * pen * Math.PI);
        var ped = (1.0 * nde) / total;
        contenido.beginPath();
        contenido.arc(cx, cy, rad, ang, ang + (2 * ped * Math.PI));
        contenido.strokeStyle = "#2ff434";
        contenido.lineWidth = rad * 2;
        contenido.stroke();
    }
    
    function pintarBarras(actores){
        var cantidad = 10;
        var x = 300;
        var y = 200;
        var w = 30;
        var sep = 20;
        
        var data = [];
        //var actor = actores.todosporedad[1].vals[1];
        console.log(actores);
        contenido.beginPath();
        contenido.scale(1,-1);
        var num = 0;
        for(var i = 0; i < cantidad; i++){
            //contenido.beginPath();
            var valor = actores.todosporedad[i].vals[0];
            console.log(valor);
            valor.replace(" ", "_")
            
            var url = "http://localhost:8080/PeliculasWeb20/bdpeliculas?op=pelisdepersona&par=" + valor;
            $.ajax({url: url,
                success: function (result) {
                    console.log(result);
                    res = JSON.parse(result);
                    console.log(res);
                    var count = Object.keys(res.pelisdepersona).length;
                    console.log(count);
                    data.push(count);
                    //contenido.fillRect(x + (w + sep) * i,-y,w,(count * 10));
                    
                    num++;
                    if(num === cantidad){
                    pintar(data);
                    }
                }});
            
            
        }
        
        //contenido.stroke();
    }
    
    function pintar(array){
        var x = 300;
        var y = 200;
        var w = 30;
        var sep = 20;
        
        contenido.beginPath();
        contenido.scale(1,-1);
        for(var i = 0; i < array.length; i++){
            contenido.fillRect(x + (w + sep) * i,-y,w,(array[i] * 10));
        }
        contenido.stroke();
        
    }
}
