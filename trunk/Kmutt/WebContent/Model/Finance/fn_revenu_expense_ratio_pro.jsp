<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
          th.ac.kmutt.service.connectionJNDI jndi = new th.ac.kmutt.service.connectionJNDI();
           
          //String query="call fn_revenu_expense_ratio_pro(2557)"; 
		  //String fn_paramYear 	= "2556";
		  //String fn_paramOrg 		= "All";
		  //String fn_paramDep 		= "All";
      
		  String fn_paramYear 		= request.getParameter("fn_paramYear");
		  String fn_paramArea 		= request.getParameter("fn_paramArea");
		  String fn_paramOrg 		= request.getParameter("fn_paramOrg");
		  String fn_paramDep 		= request.getParameter("fn_paramDep");
		  String query="call fn_revenu_expense_ratio_pro("+fn_paramYear+",'"+fn_paramArea+"','"+fn_paramOrg+"','"+fn_paramDep+"')";
          String columns="1,2,3,4,5";
          
     jndi.selectByIndexDwh(query, columns);
     out.println(jndi.getData());
%>