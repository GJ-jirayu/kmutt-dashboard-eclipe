<%@ page language="java" contentType="text/html; charset=UTF-8"
       pageEncoding="UTF-8"%>
<%
          th.ac.kmutt.service.connectionJNDI jndi = new th.ac.kmutt.service.connectionJNDI();
           
          //String query="call fn_revenu_expense(2555,12)"; 
      	  //String fn_paramOrg 		= "All";
		  //String fn_paramDep 		= "All";
          
          
		  String fn_paramYear 		= request.getParameter("fn_paramYear");
		  String fn_paramMonth 		= request.getParameter("fn_paramMonth");
		  String fn_paramArea 		= request.getParameter("fn_paramArea");
		  String fn_paramOrg 		= request.getParameter("fn_paramOrg");
		  String fn_paramDep 		= request.getParameter("fn_paramDep");
		  String query="call fn_revenu_expense("+fn_paramYear+","+fn_paramMonth+",'"+fn_paramArea+"','"+fn_paramOrg+"','"+fn_paramDep+"')";
          String columns="1,2,3,4,5,6,7,8,9";
           
     jndi.selectByIndexDwh(query, columns);
   
     out.println(jndi.getData());
    
%>