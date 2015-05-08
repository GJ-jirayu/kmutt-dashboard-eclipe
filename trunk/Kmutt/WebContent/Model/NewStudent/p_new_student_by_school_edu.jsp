<%@ page language="java" contentType="text/html; charset=UTF-8"
       pageEncoding="UTF-8"%>
<%
          th.ac.kmutt.service.connectionJNDI jndi = new th.ac.kmutt.service.connectionJNDI();

          //String query="call p_new_student_by_school_EDU('001')";		  
		  //String paramEduLevel = "001";
          
		  String paramEduLevel 	= request.getParameter("paramEduLevel");
		  String query="call p_new_student_by_school_EDU('"+paramEduLevel+"')";
          String columns="2";
           
     jndi.selectByIndexDwh(query, columns);
   
     out.println(jndi.getData());
    
%>