<%@ page language="java" contentType="text/html; charset=UTF-8"
       pageEncoding="UTF-8"%>
<%
          th.ac.kmutt.service.connectionJNDI jndi = new th.ac.kmutt.service.connectionJNDI();
           
          //String query="call p_new_student_by_school(2556,'1','001')";
          //String paramYear = "2556";
		 //String paramSemesterNew = "1";		  
		  //String paramEduLevel = "001";
          
          String paramYear 		= request.getParameter("paramYear");
		  String paramSemesterNew 	= request.getParameter("paramSemesterNew");
		  String paramEduLevel 	= request.getParameter("paramEduLevel");
		  String query="call p_new_student_by_school("+paramYear+",\'"+paramSemesterNew+"\',\'"+paramEduLevel+"\')";
          String columns="1,5,7";
           
     jndi.selectByIndexDwh(query, columns);
   
     out.println(jndi.getData());
    
%>