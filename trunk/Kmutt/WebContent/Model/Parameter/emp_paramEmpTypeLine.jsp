<%@ page language="java" contentType="text/html; charset=UTF-8"
       pageEncoding="UTF-8"%>
<%
          th.ac.kmutt.service.connectionJNDI jndi = new th.ac.kmutt.service.connectionJNDI();

// String paramEmpTypeGroup = "212";			
			String paramEmpTypeGroup = request.getParameter("paramEmpTypeGroup");
			String query="call emp_paramEmpTypeLine('"+paramEmpTypeGroup+"')"; 
         	 String columns="1,2";
           
     jndi.selectByIndexDwh(query, columns);
   
     out.println(jndi.getData());
    
%>