<%@ page language="java" contentType="text/html; charset=UTF-8"
       pageEncoding="UTF-8"%>
<%
          th.ac.kmutt.service.connectionJNDI jndi = new th.ac.kmutt.service.connectionJNDI();           
          //String query="call p_employer_survey_by_faculty(2555,'001')";
		  //String paramYear = "2555";
		  //String paramEduLevel = "001";
          
          String paramYear 		= request.getParameter("paramYear");		 
		  String paramEduLevel 	= request.getParameter("paramEduLevel");
		  String query="call p_employer_survey_by_faculty("+paramYear+",'"+paramEduLevel+"')";
          String columns="2,3,4";       
           
     jndi.selectByIndexDwh(query, columns);
   
     out.println(jndi.getData());
    
%>