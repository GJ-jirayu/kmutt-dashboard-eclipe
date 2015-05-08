<%@ page language="java" contentType="text/html; charset=UTF-8"
       pageEncoding="UTF-8"%>
<%
          th.ac.kmutt.service.connectionJNDI jndi = new th.ac.kmutt.service.connectionJNDI();
           
          //String query="call p_new_student_by_paramADMTYPE('All')";
		  //String paramAdmisType   = "All";
      
		  String paramAdmisType 	= request.getParameter("paramAdmisType");
		  String query="call p_new_student_by_paramADMTYPE('"+paramAdmisType+"')";
          String columns="2";
           
     jndi.selectByIndexDwh(query, columns);
   
     out.println(jndi.getData());
    
%>