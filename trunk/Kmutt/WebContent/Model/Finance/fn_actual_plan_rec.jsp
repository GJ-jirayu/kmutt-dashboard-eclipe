<%@ page language="java" contentType="text/html; charset=UTF-8"
       pageEncoding="UTF-8"%>
<%
          th.ac.kmutt.service.connectionJNDI jndi = new th.ac.kmutt.service.connectionJNDI();
           
          //String query="call fn_actual_plan_rec('2557-09-30','All','All','All')"; 
          
		  String fn_paramDay 		= request.getParameter("fn_paramDay");
		  String fn_paramArea 		= request.getParameter("fn_paramArea");
		  String fn_paramOrg 		= request.getParameter("fn_paramOrg");
		  String fn_paramDep 		= request.getParameter("fn_paramDep");
		  String query="call fn_actual_plan_rec('"+fn_paramDay+"','"+fn_paramArea+"','"+fn_paramOrg+"','"+fn_paramDep+"')";
          String columns="1,2,3";
           
     jndi.selectByIndexDwh(query, columns);
   
     out.println(jndi.getData());
    
%>