<%-- 
    Document   : index
    Created on : 06-nov-2019, 15:18:30
    Author     : dsst
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Portal de películas</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/proj4js/2.3.6/proj4.js"></script>
        <script src="http://code.highcharts.com/highcharts.js"></script>
        <script src="http://code.highcharts.com/maps/modules/map.js"></script>
        <script src="https://code.highcharts.com/mapdata/custom/europe.js"></script>
        <script type="text/javascript" charset="utf-8" src="graficocanvas/puntosporidioma_1.js"></script>
        <style>
            * {box-sizing: border-box;}

            body { 
                margin: 0;
                font-family: Arial, Helvetica, sans-serif;                
            }
            
            .highcharts-figure a{
                font-size: 22px;
                color: #222;
            }
            
            #mapa,#graficoEdad,#graficoPeliculas {
                width:60%;
                margin-left: 100px;
                
            }
            
        </style>
    </head>
    <body onload="dibujacion()">
        <%
            String lloc = request.getServletContext().getContextPath();
            int num = lloc.length() - lloc.replaceAll("/", "").length();
            lloc = "";
            for (int i = 0; i < num - 1; i++) {
                lloc = lloc + "/..";
            }
            lloc = lloc + "/capcalera.jsp";
        %>
        <br>
        <br>
        <br>
        <br>
        <jsp:include page="<%= lloc%>"/>   
        
        <figure class="highcharts-figure">
                   
            <a class="tmapa">Mapa de Europa</a>
            <hr/>
            <div id="mapa"></div>
            <a class="tEdad">Distribució d'edat dels actors</a>
            <hr/>
            <div id="graficoEdad"></div>
            <a class="tpelis">Nombre de pel·lícules</a>
            <hr/>
            <p>En aquesta gràfica es mostren el nombre de pel·lícules en les que han participat cada un dels actors de la pel·lícula més ben valorada de la base de dades</p>
            <div id="graficoPeliculas"></div> 
            
        </figure>
        <%--<H1>
            &nbsp;&nbsp;&nbsp;&nbsp;<a href="graficocanvas/grafico.jsp">Ejemplo de gràfico en canvas de JavaScript </a>
            <br>
        </H1>--%>
    </body>
</html>
