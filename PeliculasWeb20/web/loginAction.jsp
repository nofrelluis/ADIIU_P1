
<%@page import = "perbd.DBActionsUsers" pageEncoding="UTF-8"%>
<%
    String usuario = request.getParameter("usuario");
    String contrasena = request.getParameter("contrasena");
    DBActionsUsers dbau = new DBActionsUsers();
    
    int res = dbau.getUserAccess(usuario + "-" + contrasena);
    System.out.println(res);
    if(res >= 0){
        session.setAttribute("user", usuario);
        session.setAttribute("pass", contrasena);
        session.setAttribute("level", res + "");
        response.setStatus(response.SC_MOVED_TEMPORARILY);
        response.setHeader("Location", request.getContextPath());
    } else{
        session.setAttribute("level", res + "");
        response.setStatus(response.SC_MOVED_TEMPORARILY);
        response.setHeader("Location", request.getContextPath() + "/login.jsp");
    }
%>

    
