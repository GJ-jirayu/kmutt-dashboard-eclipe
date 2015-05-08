<%@ page language="java" contentType="text/html; charset=UTF-8"
       pageEncoding="UTF-8"%>
<%
          th.ac.kmutt.service.connectionJNDI jndi = new th.ac.kmutt.service.connectionJNDI();
           
          //String query="call p_graduate_by_faculty_and_education_level(2556,'1','N','All')";
		  //String paramYear = "2556";
		  //String paramSemesterGra = "1";
		  //String paramForeign = "N";
		  //String paramEduLevel = "All";
          
          String paramYear 		= request.getParameter("paramYear");
		  String paramSemesterGra 	= request.getParameter("paramSemesterGra");
		  String paramForeign	= request.getParameter("paramForeign");
		  String paramEduLevel 	= request.getParameter("paramEduLevel");
		  String query="call p_graduate_by_faculty_and_education_level("+paramYear+",\'"+paramSemesterGra+"\',\'"+paramForeign+"\',\'"+paramEduLevel+"\')";
          String columns="1,2,3";       
           
     jndi.selectByIndexDwh(query, columns);
     out.println(jndi.getData());
    
%>