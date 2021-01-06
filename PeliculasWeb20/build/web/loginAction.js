function validate(){
    var username = document.getElementById("usuario").value;
    var password = document.getElementById("contraseña").value;
    
    $.ajax({url: "http://localhost:8080/PeliculasWeb20/bdpeliculas?op=getuseraccess&par="+username+"-"+password,
            success: function (result) {
                console.log(result);
                var res = JSON.parse(result);
                console.log(res);
                console.log(res.getuseraccess.nivel);
                sessionStorage.setAttribute("level", res.getuseraccess.nivel);
            }});
    
    return false;
}


