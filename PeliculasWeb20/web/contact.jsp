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
        <style>
        * {box-sizing: border-box;}

            body { 
                margin: 0;
                font-family: Arial, Helvetica, sans-serif;                
            }
            
            .info{
                position: fixed;               
                border-radius: 15px;
                background-color: #f2f2f2;
                font-size: 20px;
                padding: 20px;
                width: 35%;                
                padding-bottom: 100px;
            }
            
            #Nofre{
                margin-left: 90px;
            }
            
            #Juan{
                left:100%;
                margin-left: -540px;
            }
            
            .info a.icon {
                position: absolute;
                width: 100px;
                top: 55px;
                left: 70px;
            }
            
            .info a.mail {
                position: absolute;
                top:70px;
                left: 130px;
            }
            
            #text{
                padding: 20px;
                font-size: 22px;
                color: #222;
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
        <br>
        <div class="info" id="Nofre">
            Nofre Lluis Bibiloni clar
            <br/>
            <a href="<%= request.getContextPath() %>" class="icon">
                <img alt="email" src="<%= request.getContextPath() %>/imatges/mail.png" width="50%">
            </a>
            <a class="mail">nofrelluis@gmail.com</a>    
        </div>
        <div class="info" id="Juan">
            Juan Jorquera Riera
            <br/>
            <a href="<%= request.getContextPath() %>" class="icon">
                <img alt="email" src="<%= request.getContextPath() %>/imatges/mail.png" width="50%">
            </a>
            <a class="mail">juanjorquerariera@gmail.com</a>           
        </div>
    </body>
</html>
