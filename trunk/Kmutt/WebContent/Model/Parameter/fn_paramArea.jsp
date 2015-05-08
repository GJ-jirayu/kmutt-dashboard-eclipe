<%@ page language="java" contentType="text/html; charset=UTF-8"
       pageEncoding="UTF-8"%>
<%
          th.ac.kmutt.service.connectionJNDI jndi = new th.ac.kmutt.service.connectionJNDI();
		
		  //String paramFnOrg = "10700000";

		  String paramFnArea = request.getParameter("paramFnArea");
          String query="call fn_paramArea('"+paramFnArea+"')"; 
          String columns="1,2";
           
     jndi.selectByIndexDwh(query, columns);
   
     out.println(jndi.getData());
    
%>