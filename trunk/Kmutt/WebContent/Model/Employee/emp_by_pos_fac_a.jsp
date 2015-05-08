<%@ page language="java" contentType="text/html; charset=UTF-8"
       pageEncoding="UTF-8"%>
<%
          th.ac.kmutt.service.connectionJNDI jndi = new th.ac.kmutt.service.connectionJNDI();

          //String query="call emp_by_pos_fac_a('CALENDAR_YEAR','2556','All','All','5')"; 
		  //String emp_paramTypeYear = "CALENDAR_YEAR";
		  //String emp_paramYear = "2556";
		  //String emp_paramPos = "All";
		  //String emp_paramTypeLine = "All";
          
           String emp_paramTypeYear 	= request.getParameter("emp_paramTypeYear");
		   String emp_paramYear 		= request.getParameter("emp_paramYear");
		   String emp_paramPosIsm 		= request.getParameter("emp_paramPosIsm");
		   String emp_paramTypeLineIsm 	= request.getParameter("emp_paramTypeLineIsm");
		  String query="call emp_by_pos_fac_a('"+emp_paramTypeYear+"',"+emp_paramYear+",'"+emp_paramPosIsm+"','"+emp_paramTypeLineIsm+"')";
          String columns="1,2,3";
           
     jndi.selectByIndexDwh(query, columns);
     out.println(jndi.getData());
    
%>