<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
          th.ac.kmutt.service.connectionJNDI jndi = new th.ac.kmutt.service.connectionJNDI();
           
          //String query="call fn_balance_sheet_ratio_assets(2557)"; 
		  //String fn_paramYear 	= "2556";
      
		  String fn_paramYear 		= request.getParameter("fn_paramYear");
		  String query="call fn_balance_sheet_ratio_assets("+fn_paramYear+")";
          String columns="1,2,3,4,5";
          
     jndi.selectByIndexDwh(query, columns);
     out.println(jndi.getData());
%>