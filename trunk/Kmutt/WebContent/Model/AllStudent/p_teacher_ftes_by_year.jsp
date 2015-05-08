<%@ page language="java" contentType="text/html; charset=UTF-8"
       pageEncoding="UTF-8"%>
<%
          th.ac.kmutt.service.connectionJNDI jndi = new th.ac.kmutt.service.connectionJNDI();

          //String query="call p_teacher_ftes_by_year(2555,'1','3')";
          //String paramYear = "2555";
		  //String paramSemesterAll = "All";
		  //String paramYearSub = "3";		        
          
          String paramYear 		= request.getParameter("paramYear");
		  String paramSemesterAll 	= request.getParameter("paramSemesterAll");
		  String paramYearSub 	= request.getParameter("paramYearSub");
		  String query="call p_teacher_ftes_by_year("+paramYear+",'"+paramSemesterAll+"','"+paramYearSub+"')";
          String columns="1,2,3,4";       
           
     jndi.selectByIndexDwh(query, columns);
   
     out.println(jndi.getData());
    
%>