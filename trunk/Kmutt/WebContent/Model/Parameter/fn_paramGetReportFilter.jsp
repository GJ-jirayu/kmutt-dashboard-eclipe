<%@ page language="java" contentType="text/html; charset=UTF-8"
       pageEncoding="UTF-8"%>
<%
          th.ac.kmutt.service.connectionJNDI jndi = new th.ac.kmutt.service.connectionJNDI();
	
		  String paramUser = "pentaho";

		  //String paramUser = request.getRemoteUser();
          String query="call fn_getReportFilter('"+paramUser+"')"; 
          String columns="1,2,3";
           
     jndi.selectByIndexDwh(query, columns);
   
     out.println(jndi.getData());
    
%>