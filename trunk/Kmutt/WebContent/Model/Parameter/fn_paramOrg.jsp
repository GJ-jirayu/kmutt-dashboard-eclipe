<%@ page language="java" contentType="text/html; charset=UTF-8"
       pageEncoding="UTF-8"%>
<%
          th.ac.kmutt.service.connectionJNDI jndi = new th.ac.kmutt.service.connectionJNDI();
		
		  // String paramFnDep = "All";
		  String paramFnArea = request.getParameter("paramFnArea");
		  String paramFnOrg = request.getParameter("paramFnOrg");
          String query="call fn_paramOrg('"+paramFnArea+"','"+paramFnOrg+"')"; 
          String columns="1,2";
           
     jndi.selectByIndexDwh(query, columns);
   
     out.println(jndi.getData());
    
%>