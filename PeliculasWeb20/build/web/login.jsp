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
        <style>
            input[type=text], select {
                width: 100%;
                padding: 12px 20px;
                margin: 8px 0;
                display: inline-block;
                border: 1px solid #ccc;
                border-radius: 4px;
                box-sizing: border-box;
            }
            
            input[type=password], select {
                width: 100%;
                padding: 12px 20px;
                margin: 8px 0;
                display: inline-block;
                border: 1px solid #ccc;
                border-radius: 4px;
                box-sizing: border-box;
            }

            input[type=submit] {
                width: 100%;
                background-color: #4CAF50;
                color: white;
                padding: 14px 20px;
                margin: 8px 0;
                border: none;
                border-radius: 4px;
                cursor: pointer;
            }

            input[type=submit]:hover {
                background-color: #45a049;
            }

            .form{
                position: fixed;
                border-radius: 5px;
                background-color: #f2f2f2;
                padding: 20px;
                width: 400px;
                left: 50%;
                margin-left: -200px;
            }
        </style>
    </head>
    <body>
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
        <br>
        <br>
        <br>
        <br>
         <form method= "get" action="loginAction.jsp" class="form">
            <label for="fname">Usuario:</label>
            <input type="text" id="usuario" name="usuario"><br><br>
            <label for="lname">Contraseña:</label>
            <input type="password" id="contrasena" name="contrasena"><br><br>
            <input type="submit" value="Submit">
          </form> 
    </body>
</html>
