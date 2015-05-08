<%@ page language="java" contentType="text/html; charset=UTF-8"
       pageEncoding="UTF-8"%>
<%
          th.ac.kmutt.service.connectionJNDI jndi = new th.ac.kmutt.service.connectionJNDI();

          //String query="call emp_paramPos('All')"; 
		  //String emp_paramPos = "All";
          
		   String emp_paramEmpTypeGroup 	= request.getParameter("emp_paramEmpTypeGroup");
		  String query="call emp_typegroup('"+emp_paramEmpTypeGroup+"')";
          String columns="2";
           
     jndi.selectByIndexDwh(query, columns);
     out.println(jndi.getData());
    
%>