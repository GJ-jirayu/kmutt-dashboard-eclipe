<%@ page language="java" contentType="text/html; charset=UTF-8"
       pageEncoding="UTF-8"%>
<%
          th.ac.kmutt.service.connectionJNDI jndi = new th.ac.kmutt.service.connectionJNDI();

          //String query="call p_graduate_work_by_faculty(2555,'All','All')";
		  //String paramYear = "2555";
		  //String paramForeign = "All";
		  //String paramEduLevel = "All";
          
          String paramYear 		= request.getParameter("paramYear");		 
		  String paramForeign	= request.getParameter("paramForeign");
		  String paramEduLevel 	= request.getParameter("paramEduLevel");
		  String query="call p_graduate_work_by_faculty("+paramYear+",\'"+paramForeign+"\',\'"+paramEduLevel+"\')";
          String columns="1,2,3";       
           
     jndi.selectByIndexDwh(query, columns);
   
     out.println(jndi.getData());
    
%>