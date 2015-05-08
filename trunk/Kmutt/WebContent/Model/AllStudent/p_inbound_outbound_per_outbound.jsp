<%@ page language="java" contentType="text/html; charset=UTF-8"
       pageEncoding="UTF-8"%>
<%
          th.ac.kmutt.service.connectionJNDI jndi = new th.ac.kmutt.service.connectionJNDI();
		           
          //String query="call p_inbound_outbound_per_outbound(2556,'All','All')";
		  //String paramYear = "2556";
		  //String paramFaculty = "All";
		  //String paramDepartment = "All";
          
          String paramYear 		= request.getParameter("paramYear");
		  String paramFaculty 	= request.getParameter("paramFaculty");
		  String paramDepartment	= request.getParameter("paramDepartment");
		  String query="call p_inbound_outbound_per_outbound("+paramYear+",'"+paramFaculty+"','"+paramDepartment+"')";
          String columns="1,2,3";       
           
     jndi.selectByIndexDwh(query, columns);
   
     out.println(jndi.getData());
    
%>