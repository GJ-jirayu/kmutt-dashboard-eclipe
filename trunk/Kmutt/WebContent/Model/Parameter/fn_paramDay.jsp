<%@ page language="java" contentType="text/html; charset=UTF-8"
       pageEncoding="UTF-8"%>
<%
          th.ac.kmutt.service.connectionJNDI jndi = new th.ac.kmutt.service.connectionJNDI();
		
		  //String paramFnYear = "2556";
		  //String paramFnMonth = "9";

		  String paramFnYear = request.getParameter("paramFnYear");
		  String paramFnMonth = request.getParameter("paramFnMonth");
          String query="call fn_paramDay("+paramFnYear+","+paramFnMonth+")"; 
          String columns="1,2";
           
     jndi.selectByIndexDwh(query, columns);
     out.println(jndi.getData());
    
%>