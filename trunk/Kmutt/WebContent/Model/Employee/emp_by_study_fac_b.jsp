<%@ page language="java" contentType="text/html; charset=UTF-8"
       pageEncoding="UTF-8"%>
<%
          th.ac.kmutt.service.connectionJNDI jndi = new th.ac.kmutt.service.connectionJNDI();

          //String query="call emp_by_study_fac_b('CALENDAR_YEAR','2556','All','All')";
		  //String emp_paramTypeYear = "CALENDAR_YEAR";
		  //String emp_paramYear = "2556";
		  //String emp_paramPos = "All";
		  //String emp_paramBou = "All";
          
           String emp_paramTypeYear 	= request.getParameter("emp_paramTypeYear");
		   String emp_paramYear 		= request.getParameter("emp_paramYear");
		   String emp_paramPos 			= request.getParameter("emp_paramPos");
		   String emp_paramBou 			= request.getParameter("emp_paramBou");
		  String query="call emp_by_study_fac_b('"+emp_paramTypeYear+"',"+emp_paramYear+",'"+emp_paramPos+"','"+emp_paramBou+"')";
          String columns="1,2,3";
           
     jndi.selectByIndexDwh(query, columns);
     out.println(jndi.getData());
    
%>