<%-- 
    Document   : privada
    Created on : 06-ene-2021, 20:37:59
    Author     : dmiltim
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script type="text/javascript" charset="utf-8" src="privada.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="http://code.highcharts.com/highcharts.js"></script>
        <script src="js/jquery-3.3.1.min.js" type="text/javascript"></script>
        <script src="js/jquery.tagcanvas.min.js" type="text/javascript"></script>
        
        <script type="text/javascript">
            function getParPerNom(name) {
                /*name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                        results = regex.exec(location.search);
                return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));*/
            }
        </script>
        <script type="text/javascript">
            $(document).ready(function () {
                if (!$('#myCanvas').tagcanvas({
                    textColour: '#ff0000',
                    outlineThickness: 1,
                    outlineColour: '#000000',
                    maxSpeed: 0.03,
                    depth: 0.75
                }, 'tags')) {
                    $('#myCanvasContainer').hide();
                }
            });
            $(document).ready(function () {
                $("#param").html(getParPerNom("persona"))
            });
        </script>
        <style>
        * {box-sizing: border-box;}

            body { 
                margin: 0;
                font-family: Arial, Helvetica, sans-serif;                
            }
            
            .fitxa{
                position: fixed;               
                border-radius: 15px;
                background-color: #f2f2f2;
                padding: 20px;
                width: 35%;
                margin-left: 20px;
            }
            
            .highcharts-figure{
                width: 50%;
                float: right;
                margin-right: 20px;
            }
            
            #myCanvas{
                position: fixed;
                width: 35%;
                height:35%;
                margin-left: 20px;
                margin-top: 180px;
                border-radius:15px;
                float:right;
                font-size: 1px;
                background-color: #f2f2f2;
            }
        </style> 
        
        <title>JSP Page</title>
    </head>
    <body onload="dibujar()">
        <%@include file="/capcalera.jsp"%>
        <h1>Parte privada</h1>
        <cloud>

        </cloud>
            <form method= "get" onsubmit="buscarActor(); return false;" class="fitxa">
                <label for="actor">Actor</label>
                <input type="text" id="actor" name="actor"><br><br>
                <input type="submit" value="Submit">
                <br>
                <div>
                    <label>Nom: </label> 
                    <label id = "name"></label> 
                    <br/>
                    <label>Naixement: </label> 
                    <label id = "birth"></label> 
                    <br/>
                    <label>Defunció: </label> 
                    <label id = "death"></label> 
                    <br/>
                    <label>Nº pel·licules: </label> 
                    <label id = "nPelis"></label> 
                </div>
            </form> 

    <br/>
        <figure class="highcharts-figure">
            <div id="graficoNumPeliculas"></div>
                
            </p>
        </figure>
    
        <br/>
        <p id="param"></p>
        <br/>
        <div id="myCanvasContainer">
            <%--<canvas width="300" height="300" id="myCanvas" style="background: url('imatges/fons.jpg')">--%>
            <canvas  id="myCanvas" style="background: url('imatges/nico.jpeg');background-size: 470px 300px">  
                <p>In Internet Explorer versions up to 8, things inside the canvas are inaccessible!</p>
            </canvas>
        </div>

        <div id="tags">
            <ul>
                <li><a onclick="buscar('Sigvaldi J. Karason');return false;">Sigvaldi J. Karason</a></li>
                <li><a onclick="buscar('Magnus Scheving');return false;">Magnus Scheving</a></li>
                <li><a onclick="buscar('Stefan Karl Stefansson');return false;">Stefan Karl Stefansson</a></li>
                <li><a onclick="buscar('Bjorn Thors');return false;">Bjorn Thors</a></li>
                <li><a onclick="buscar('Bergur Thor Ingolfsson');return false;">Bergur Thor Ingolfsson</a></li>
            </ul>
        </div>
    </body>
</html>
