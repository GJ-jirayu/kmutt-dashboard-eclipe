<%@ page language="java" contentType="text/html; charset=UTF-8"
       pageEncoding="UTF-8"%>
<%
          th.ac.kmutt.service.connectionJNDI jndi = new th.ac.kmutt.service.connectionJNDI();
		
		  // String fn_paramDep = "10700000";

		  String fn_paramArea = request.getParameter("fn_paramArea");
          String query="call fn_paramAreaName('"+fn_paramArea+"')"; 
          String columns="1";
           
     jndi.selectByIndexDwh(query, columns);
   
     out.println(jndi.getData());
    
%>