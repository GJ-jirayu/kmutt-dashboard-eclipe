<%@ page language="java" contentType="text/html; charset=UTF-8"
       pageEncoding="UTF-8"%>
<%
          th.ac.kmutt.service.connectionJNDI jndi = new th.ac.kmutt.service.connectionJNDI();
           
          //String query="call p_all_student_by_faculty_and_schedule_type(2556,'1','001')";
    	  //String paramYear = "2556";
    	  //String paramSemesterAll = "1";
		  //String paramEduLevel = "001";       
          
          String paramYear 		= request.getParameter("paramYear");
          String paramSemesterAll 	= request.getParameter("paramSemesterAll");
		  String paramEduLevel 	= request.getParameter("paramEduLevel");
		  String query="call p_all_student_by_faculty_and_schedule_type("+paramYear+",\'"+paramSemesterAll+"\','"+paramEduLevel+"')";
          String columns="1,2,3";       
           
     jndi.selectByIndexDwh(query, columns);
   
     out.println(jndi.getData());
    
%>