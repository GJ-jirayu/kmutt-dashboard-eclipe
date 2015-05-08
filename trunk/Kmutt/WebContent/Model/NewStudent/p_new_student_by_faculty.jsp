<%@ page language="java" contentType="text/html; charset=UTF-8"
       pageEncoding="UTF-8"%>
<%
          th.ac.kmutt.service.connectionJNDI jndi = new th.ac.kmutt.service.connectionJNDI();
           
          //String query="call p_new_student_by_faculty(2555,'1','001','1')"; 
			//String paramYear 		= "2556";
			//String paramSemesterNew 	= "1";
			//String paramEduLevel 	= "001";
			//String paramAdmisType   = "All";
      
			String paramYear 		= request.getParameter("paramYear");
			String paramSemesterNew = request.getParameter("paramSemesterNew");
			String paramEduLevel 	= request.getParameter("paramEduLevel");
			String paramAdmisType 	= request.getParameter("paramAdmisType");
		  String query="call p_new_student_by_faculty("+paramYear+",'"+paramSemesterNew+"','"+paramEduLevel+"','"+paramAdmisType+"')";
          String columns="1,2";
           
     jndi.selectByIndexDwh(query, columns);
   
     out.println(jndi.getData());
    
%>