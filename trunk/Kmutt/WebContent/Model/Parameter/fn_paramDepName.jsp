<%@ page language="java" contentType="text/html; charset=UTF-8"
       pageEncoding="UTF-8"%>
<%
          th.ac.kmutt.service.connectionJNDI jndi = new th.ac.kmutt.service.connectionJNDI();
		
		  // String fn_paramDep = "10700000";

		  String fn_paramDep = request.getParameter("fn_paramDep");
          String query="call fn_paramDepName('"+fn_paramDep+"')"; 
          String columns="1";
           
     jndi.selectByIndexDwh(query, columns);
   
     out.println(jndi.getData());
    
%>