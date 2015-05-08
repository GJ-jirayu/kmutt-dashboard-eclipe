<%@ page language="java" contentType="text/html; charset=UTF-8"
       pageEncoding="UTF-8"%>
<%
          th.ac.kmutt.service.connectionJNDI jndi = new th.ac.kmutt.service.connectionJNDI();
           
          //String query="call p_new_student_top_n_school(2556,'1','001',5)";
		  //String paramYear = "2556";
		  //String paramSemesterNew = "1";
		  //String paramEduLevel = "001";       
          //String paramTop 	= "10";
          
          String paramYear 		= request.getParameter("paramYear");
		  String paramSemesterNew 	= request.getParameter("paramSemesterNew");
		  String paramEduLevel 	= request.getParameter("paramEduLevel");
		  String paramTop 	= request.getParameter("paramTop");
		  String query="call p_new_student_top_n_school("+paramYear+",'"+paramSemesterNew+"','"+paramEduLevel+"','"+paramTop+"')";
          String columns="1,2";
           
     jndi.selectByIndexDwh(query, columns);
   
     out.println(jndi.getData());
    
%>