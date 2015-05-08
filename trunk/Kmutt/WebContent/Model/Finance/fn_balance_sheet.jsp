<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
          th.ac.kmutt.service.connectionJNDI jndi = new th.ac.kmutt.service.connectionJNDI();
           
          //String query="call fn_balance_sheet(2557,3)"; 
			//String fn_paramYear 	= "2556";
			//String fn_paramMonth 	= "12";
      
		  String fn_paramYear 		= request.getParameter("fn_paramYear");
	      String fn_paramMonth 		= request.getParameter("fn_paramMonth");
		  String query="call fn_balance_sheet("+fn_paramYear+","+fn_paramMonth+")";
          String columns="1,2,3,4,5,6,7,8,9";
     jndi.selectByIndexDwh(query, columns);
     out.println(jndi.getData());
%>