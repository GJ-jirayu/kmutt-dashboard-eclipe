<%@ page language="java" contentType="text/html; charset=UTF-8"
       pageEncoding="UTF-8"%>
<%
          th.ac.kmutt.service.connectionJNDI jndi = new th.ac.kmutt.service.connectionJNDI();           
          //String query="call curriculum_schedule_type_by_field(2555,'001')";
		  //String paramYear = "2556";
		  //String paramEduLevel = "All";
          
          String paramYear 		= request.getParameter("paramYear");
		  String paramEduLevel 	= request.getParameter("paramEduLevel");
		  String query="call curriculum_schedule_type_by_field("+paramYear+",'"+paramEduLevel+"')";
          String columns="1,2,3";
           
     jndi.selectByIndexDwh(query, columns);
   
     out.println(jndi.getData());
    
%>