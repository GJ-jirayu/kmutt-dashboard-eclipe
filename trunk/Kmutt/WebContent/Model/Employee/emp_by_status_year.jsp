<%@ page language="java" contentType="text/html; charset=UTF-8"
       pageEncoding="UTF-8"%>
<%
          th.ac.kmutt.service.connectionJNDI jndi = new th.ac.kmutt.service.connectionJNDI();

          //String query="call emp_by_status_year('CALENDAR_YEAR','2557','All','All','5')";
		  //String emp_paramTypeYear = "CALENDAR_YEAR";
		  //String emp_paramYear = "2556";
		  //String emp_paramPos = "All";
		  //String emp_paramTypeLine = "All";
		  //String emp_paramSize = "5";
          
          String emp_paramTypeYear 	= request.getParameter("emp_paramTypeYear");
		   String emp_paramYear 		= request.getParameter("emp_paramYear");
		   String emp_paramPos 		= request.getParameter("emp_paramPos");
		   String emp_paramTypeLine 	= request.getParameter("emp_paramTypeLine");
		   String emp_paramSize 		= request.getParameter("emp_paramSize");
		  String query="call emp_by_status_year('"+emp_paramTypeYear+"',"+emp_paramYear+",'"+emp_paramPos+"','"+emp_paramTypeLine+"',"+emp_paramSize+")";
          String columns="1,2,3";
           
     jndi.selectByIndexDwh(query, columns);
     out.println(jndi.getData());
    
%>