<%@ page language="java" contentType="text/html; charset=UTF-8"
       pageEncoding="UTF-8"%>
<%
          th.ac.kmutt.service.connectionJNDI jndi = new th.ac.kmutt.service.connectionJNDI();

          //String query="call fn_cost_ratio_year_a('2554','All','All')";
		  //String fn_paramYear = "2554";
		  //String fn_paramOrg = "All";
		  //String fn_paramDep = "All";
          
         String fn_paramYear 		= request.getParameter("fn_paramYear");
         String fn_paramArea 		= request.getParameter("fn_paramArea");
		 String fn_paramOrg 		= request.getParameter("fn_paramOrg");
		 String fn_paramDep 		= request.getParameter("fn_paramDep");
		  String query="call fn_cost_ratio_exp("+fn_paramYear+",'"+fn_paramArea+"','"+fn_paramOrg+"','"+fn_paramDep+"')";
          String columns="1";
           
     jndi.selectByIndexDwh(query, columns);
     out.println(jndi.getData());
    
%>