<%@ page language="java" contentType="text/html; charset=UTF-8"
       pageEncoding="UTF-8"%>
<%
          th.ac.kmutt.service.connectionJNDI jndi = new th.ac.kmutt.service.connectionJNDI();

          String query="call fn_paramYear"; 
          String columns="1";
           
     jndi.selectByIndexDwh(query, columns);
   
     out.println(jndi.getData());
    
%>