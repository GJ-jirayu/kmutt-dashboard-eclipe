<%@ page language="java" contentType="text/html; charset=UTF-8"
       pageEncoding="UTF-8"%>
<%
          th.ac.kmutt.service.connectionJNDI jndi = new th.ac.kmutt.service.connectionJNDI();

          //String query="call p_new_student_by_school_table_region(2556,'All','All','All')";
          //String paramYear = "2556";
		  //String paramSemesterNew = "All";		  
		  //String paramEduLevel = "All";
          //String paramREG = "All";
          
          String paramYear 		= request.getParameter("paramYear");
		  String paramSemesterNew 	= request.getParameter("paramSemesterNew");
		  String paramEduLevel 	= request.getParameter("paramEduLevel");
		  String paramREG 	= request.getParameter("paramREG");
		  String query="call p_new_student_by_school_table_region("+paramYear+",'"+paramSemesterNew+"','"+paramEduLevel+"','"+paramREG+"')";
          String columns="1,2,3,4,5,6";
           
     jndi.selectByIndexDwh(query, columns);
   
     out.println(jndi.getData());
    
%>