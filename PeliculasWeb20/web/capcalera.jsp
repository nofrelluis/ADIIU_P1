<%-- 
    Document   : capcalera
    Created on : 06-nov-2019, 15:29:53
    Author     : dsst
--%>

<%@page import="java.util.Date"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
            * {box-sizing: border-box;}

            body { 
                margin: 0;
                font-family: Arial, Helvetica, sans-serif;                
            }

            .header {
                overflow: hidden;
                background-color: #222;
                position:fixed;
                top: 0px;
                float: left;
                margin: 0;
                width: 100%; 
                border-bottom: none;
                z-index: 999;
                <%--padding: 20px 10px;--%>
            }

            .header a {
                float: left;
                color: #ddd;
                text-align: center;
                padding: 4px;
                text-decoration: none;
                font-size: 18px;                
            }

            .header a.logo {
                font-size: 25px;
                font-weight: bold;
                background-color: white;
                line-height: 4px;
                margin: 2px;
                width: 130px;
            }

            .header a:hover {
                background-color: #ddd;
                color: #222;
            }

            .header-right {
                float: right;
                margin: 2px;
                margin-right: 10px;
                line-height: 48px;
            }

            @media screen and (max-width: 500px) {
                .header a {
                    float: none;
                    display: block;
                    text-align: left;
                }

                .header-right {                   
                    float: none;
                }
            }
        </style>
    </head>
    <body>
        <%
            // Si es una página de la intranet y no permiso redirecciona al inicio
            String s = request.getRequestURI();
            String servletlloc = request.getContextPath();
            if (s.startsWith(servletlloc + "/privada.jsp")) {
                String user = (String) session.getAttribute("user");
                String pass = (String) session.getAttribute("pass");
                if ((user == null) || (pass == null)) {
                    out.println(s + "    " + servletlloc);
                    response.setStatus(response.SC_MOVED_TEMPORARILY);
                    response.setHeader("Location", request.getContextPath());
                } else {
                    String level = (String) session.getAttribute("level");
                    if (Integer.parseInt(level) < 1) {
                        response.setStatus(response.SC_MOVED_TEMPORARILY);
                        response.setHeader("Location", request.getContextPath());
                    }
                }
            }
        %>
        <div class="header">
            <a href="<%= request.getContextPath() %>" class="logo">
                <img alt="Company Logo" src="<%= request.getContextPath() %>/imatges/logo.png" width="100%" height="40%">
            </a>
            <div class="header-right">
                <a href="<%= request.getContextPath() %>/contact.jsp">Contact</a>
                <a href="<%= request.getContextPath() %>/about.jsp">About</a>                
                <a href="<%= request.getContextPath() %>/privada.jsp">Privada</a>
                <a href="<%= request.getContextPath() %>/login.jsp">Login</a>
            </div>
        </div>

        <%--<div style="padding-left:20px">
            <h1>Date: <%= (new Date()).toString() %> <br> </h1>
            <hr>
        </div>--%>
    </body>
</html>
