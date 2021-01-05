<%-- 
    Document   : grafico
    Created on : 06-nov-2019, 16:45:15
    Author     : dsst
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Dibujo con Canvas por Untitled.es</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/proj4js/2.3.6/proj4.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="http://code.highcharts.com/highcharts.js"></script>
        <script src="http://code.highcharts.com/maps/modules/map.js"></script>
        <script src="https://code.highcharts.com/mapdata/custom/europe.js"></script>
        <script type="text/javascript" charset="utf-8" src="puntosporidioma_1.js">
        </script>
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
        <jsp:include page="<%= lloc%>"/>
        <figure class="highcharts-figure">
            <div id="graficoEdad"></div>
            <div id="graficoPeliculas"></div>
            <div id="mapa"></div>
            <p class="highcharts-description">
                
            </p>
        </figure>
        <%--canvas id="canvas" style="margin-left:10%" width="870" height="522"></canvas--%>  
    </body>
</html>
