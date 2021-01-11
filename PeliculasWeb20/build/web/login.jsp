<%-- 
    Document   : login
    Created on : 06-ene-2021, 20:34:54
    Author     : dmiltim
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script type="text/javascript" charset="utf-8" src="loginAction.js"></script>
        <title>JSP Page</title>
    </head>
    <body>
        <br>
        <br>
        <br>
        <br>
         <form method= "get" action="loginAction.jsp">
            <label for="fname">Usuario:</label>
            <input type="text" id="usuario" name="usuario"><br><br>
            <label for="lname">Contraseña:</label>
            <input type="password" id="contrasena" name="contrasena"><br><br>
            <input type="submit" value="Submit">
          </form> 
        <h1>Ja tens accés per tot!</h1>
    </body>
</html>
