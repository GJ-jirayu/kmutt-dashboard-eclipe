<%@ page language="java" contentType="text/html; charset=UTF-8"
       pageEncoding="UTF-8"%>
<%
          th.ac.kmutt.service.connectionJNDI jndi = new th.ac.kmutt.service.connectionJNDI();
			
          //String query="call p_all_student_by_education_level_and_student_type(2556,'1','Y','All')";
		  //String paramYear = "2556";
		  //String paramSemesterAll = "1";
		  //String paramForeign = "Y";
		  //String paramEduLevel = "All";
          
          String paramYear 		= request.getParameter("paramYear");
		  String paramSemesterAll 	= request.getParameter("paramSemesterAll");
		  String paramForeign		= request.getParameter("paramForeign");
		  String paramEduLevel 	= request.getParameter("paramEduLevel");
		  
		  String query="call p_all_student_by_education_level_and_student_type("+paramYear+",\'"+paramSemesterAll+"\',\'"+paramForeign+"\',\'"+paramEduLevel+"\')";
          String columns="1,2,3";
           
     jndi.selectByIndexDwh(query, columns);
     out.println(jndi.getData());
    
%>