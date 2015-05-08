<%@ page language="java" contentType="text/html; charset=UTF-8"
       pageEncoding="UTF-8"%>
<%
          th.ac.kmutt.service.connectionJNDI jndi = new th.ac.kmutt.service.connectionJNDI();

          //String query="call p_new_student_by_school_table_province(2556,'All','All')";
          //String paramYear = "2556";
		  //String paramSemesterNew = "1";		  
		  //String paramEduLevel = "001";
          //String paramProvince = "All";
          
          String paramYear 		= request.getParameter("paramYear");
		  String paramSemesterNew 	= request.getParameter("paramSemesterNew");
		  String paramEduLevel 	= request.getParameter("paramEduLevel");
		  String paramProvince 	= request.getParameter("paramProvince");
		  String query="call p_new_student_by_school_table_province("+paramYear+",'"+paramSemesterNew+"','"+paramEduLevel+"','"+paramProvince+"')";
          String columns="1,2,3,4,5,6";
           
     jndi.selectByIndexDwh(query, columns);
   
     out.println(jndi.getData());
    
%>