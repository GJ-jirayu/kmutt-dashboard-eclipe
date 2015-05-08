<%@ page language="java" contentType="text/html; charset=UTF-8"
       pageEncoding="UTF-8"%>
<%
          th.ac.kmutt.service.connectionJNDI jndi = new th.ac.kmutt.service.connectionJNDI();
           
          //String query="call p_teacher_per_ftes_by_faculty(2556,'1')";
          //String paramYear = "2556";
		  //String paramSemesterAll = "1";
          
          String paramYear 		= request.getParameter("paramYear");
		  String paramSemesterAll 	= request.getParameter("paramSemesterAll");
		  String query="call p_teacher_per_ftes_by_faculty("+paramYear+",'"+paramSemesterAll+"')";
          String columns="1,2,3";       
           
     jndi.selectByIndexDwh(query, columns);
   
     out.println(jndi.getData());
    
%>