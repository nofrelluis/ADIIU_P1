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
        <title>JSP Page</title>
    </head>
    <body>
         <%
            session.setAttribute("user", "miquel");
            session.setAttribute("pass", "patata");
            session.setAttribute("level", "1");
        %>
        <h1>Ja tens accés per tot!</h1>
    </body>
</html>
