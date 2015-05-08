<%@ page language="java" contentType="text/html; charset=UTF-8"
       pageEncoding="UTF-8"%>
<%
          th.ac.kmutt.service.connectionJNDI jndi = new th.ac.kmutt.service.connectionJNDI();

          //String query="call p_new_student_by_school_region_head(2556,'1','001','All')";
          //String paramYear = "2556";
		  //String paramSemesterNew = "1";		  
		  //String paramEduLevel = "001";
          //String paramREG = "All";
          
          String paramYear 		= request.getParameter("paramYear");
		  String paramSemesterNew 	= request.getParameter("paramSemesterNew");
		  String paramEduLevel 	= request.getParameter("paramEduLevel");
		  String paramREG 		= request.getParameter("paramREG");
		  String query="call p_new_student_by_school_region_head("+paramYear+",'"+paramSemesterNew+"','"+paramEduLevel+"','"+paramREG+"')";
          String columns="3";
           
     jndi.selectByIndexDwh(query, columns);
   
     out.println(jndi.getData());
    
%>