<%@ page language="java" contentType="text/html; charset=UTF-8"
       pageEncoding="UTF-8"%>
<%
          th.ac.kmutt.service.connectionJNDI jndi = new th.ac.kmutt.service.connectionJNDI();

          //String query="call emp_by_lv('CALENDAR_YEAR','2556','111','All','All')"; 
		  // String emp_paramTypeYear = "CALENDAR_YEAR";
		  // String emp_paramYear = "2556";
		  // String emp_paramType = "1";
		  // String emp_paramLine = "104";
		  // String emp_paramDep = "All";
          
           String emp_paramTypeYear 	= request.getParameter("emp_paramTypeYear");
		   String emp_paramYear 		= request.getParameter("emp_paramYear");
		   String emp_paramEmpTypeGroup = request.getParameter("emp_paramEmpTypeGroup");
		   String emp_paramEmpTypeLine 	= request.getParameter("emp_paramEmpTypeLine");
		   String emp_paramDep 			= request.getParameter("emp_paramDep");
		   String query="call emp_by_lv('"+emp_paramTypeYear+"',"+emp_paramYear+",'"+emp_paramEmpTypeGroup+"','"+emp_paramEmpTypeLine+"','"+emp_paramDep+"')";
          String columns="1,2,3";
           
     jndi.selectByIndexDwh(query, columns);
     out.println(jndi.getData());
    
%>