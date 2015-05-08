<%@ page language="java" contentType="text/html; charset=UTF-8"
       pageEncoding="UTF-8"%>
<%
          th.ac.kmutt.service.connectionJNDI jndi = new th.ac.kmutt.service.connectionJNDI();

		  String paramEmpPosIsm = request.getParameter("paramEmpPosIsm");
          String query="call emp_paramTypeLineIsm('"+paramEmpPosIsm+"')"; 
          String columns="1,2";
           
     jndi.selectByIndexDwh(query, columns);
   
     out.println(jndi.getData());
    
%>