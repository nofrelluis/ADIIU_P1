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
    if ((username==null)||(password==null)){
        sessionStorage.setAttribute("level", 0);
    }
    return false;
}

function privada(){
    var x = document.getElementById("privada");
    validate();
    if (sessionStorage.getAttribute("level")>=1){
        x.style.display = "block";
    }else {
        x.style.display = "none";
    }
}

