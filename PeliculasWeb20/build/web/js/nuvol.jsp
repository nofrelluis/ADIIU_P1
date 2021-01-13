<%-- 
    Document   : index
    Created on : 28-nov-2018, 8:57:32
    Author     : mascport
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Exemple de núvol de paraules</title>
        <script src="js/jquery-3.3.1.min.js" type="text/javascript"></script>
        <script src="js/jquery.tagcanvas.min.js" type="text/javascript"></script>
        <script type="text/javascript">
            function getParPerNom(name) {
                name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                        results = regex.exec(location.search);
                return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
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
    </head>
    <body>
        <h1>Exemple de núvol de paraules</h1>
        <br/>
        <p id="param"></p>
        <br/>
        <div id="myCanvasContainer">
            <canvas width="300" height="300" id="myCanvas" style="background: url('imatges/fons.jpg')">
                <p>In Internet Explorer versions up to 8, things inside the canvas are inaccessible!</p>
            </canvas>
        </div>

        <div id="tags">
            <ul>
                <li><a href="http://www.google.com" target="_blank">Google</a></li>
                <li><a href="http://www.uib.es">primer UIB</a></li>
                <li><a href="http://www.uib.es">segon UIB</a></li>
                <li><a href="http://www.uib.es">tercer UIB</a></li>
                <li><a href="http://www.uib.es">quart UIB</a></li>
                <li><a href="index.jsp?persona=Fernández">paràmetre</a></li>
            </ul>
        </div>
    </body>
</html>
