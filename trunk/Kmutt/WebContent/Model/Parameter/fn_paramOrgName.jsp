<%@ page language="java" contentType="text/html; charset=UTF-8"
       pageEncoding="UTF-8"%>
<%
          th.ac.kmutt.service.connectionJNDI jndi = new th.ac.kmutt.service.connectionJNDI();
		
		  //String paramFnOrg = "10100000";

		  String fn_paramOrg = request.getParameter("fn_paramOrg");
          String query="call fn_paramOrgName('"+fn_paramOrg+"')"; 
          String columns="1";
           
     jndi.selectByIndexDwh(query, columns);
   
     out.println(jndi.getData());
    
%>