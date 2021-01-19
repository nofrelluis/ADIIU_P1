
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Detalls</title>
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
                padding-bottom: 110px;
            }
            
            #Nofre{
                margin-left: 90px;
            }
            
            #Juan{
                left:100%;
                margin-left: -540px;
            }
            
            .info a.pmail {
                position: absolute;
                width: 100px;
                top: 100px;
                left: 70px;
            }
            
            .info a.pDNI {
                position: absolute;
                width: 100px;
                top: 45px;
                left: 65px;
            }
            
            .info a.mail {
                position: absolute;
                top:115px;
                left: 130px;
            }
            
            .info a.DNI {
                position: absolute;
                top:60px;
                left: 130px;
            }
            
            .linia{
                position: absolute;
                top: 150px;
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
        <div class="info" id="Nofre">
            Nofre Lluis Bibiloni clar
            <br/>
            <a href="<%= request.getContextPath() %>" class="pDNI">
                <img alt="DNI" src="<%= request.getContextPath() %>/imatges/DNI.png" width="60%">
            </a>
            <a class="DNI">43480599L</a>
            <br/>
            <a href="<%= request.getContextPath() %>" class="pmail">
                <img alt="email" src="<%= request.getContextPath() %>/imatges/mail.png" width="50%">
            </a>
            <a class="mail">nofrelluis@gmail.com</a>          
        </div>
        <div class="info" id="Juan">
            Juan Jorquera Riera
            <br/>
            <a href="<%= request.getContextPath() %>" class="pDNI">
                <img alt="DNI" src="<%= request.getContextPath() %>/imatges/DNI.png" width="60%">
            </a>
            <a class="DNI">45190977W</a>
            <br/>
            <a href="<%= request.getContextPath() %>" class="pmail">
                <img alt="email" src="<%= request.getContextPath() %>/imatges/mail.png" width="50%">
            </a>
            <a class="mail">juanjorquerariera@gmail.com</a>           
        </div>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
        <hr/>
    </body>
</html>
