<%@ page language="java" contentType="text/html; charset=UTF-8"
       pageEncoding="UTF-8"%>
<%
          th.ac.kmutt.service.connectionJNDI jndi = new th.ac.kmutt.service.connectionJNDI();
		  //String query="call p_new_student_vs_plan_by_year(2556,'1','N','001','2')";
		  //String paramYear = "2556";
		  //String paramSemesterNew = "1";
		  //String paramForeign = "N";
		  //String paramEduLevel = "001";
		  //String paramYearSub = "3";		        
          
          String paramYear 		= request.getParameter("paramYear");
		  String paramSemesterNew 	= request.getParameter("paramSemesterNew");
		  String paramForeign	= request.getParameter("paramForeign");
		  String paramEduLevel 	= request.getParameter("paramEduLevel");
		  String paramYearSub 	= request.getParameter("paramYearSub");
		  String query="call p_new_student_vs_plan_by_year("+paramYear+",\'"+paramSemesterNew+"\',\'"+paramForeign+"\',\'"+paramEduLevel+"\',\'"+paramYearSub+"\')";   
           
          String columns="1,2,3";
           
     jndi.selectByIndexDwh(query, columns);
     out.println(jndi.getData());
    
%>