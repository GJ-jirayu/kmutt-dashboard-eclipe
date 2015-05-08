<%@ page language="java" contentType="text/html; charset=UTF-8"
       pageEncoding="UTF-8"%>
<%
          th.ac.kmutt.service.connectionJNDI jndi = new th.ac.kmutt.service.connectionJNDI();
           
            //String query="call p_new_student_by_faculty_and_grade_range(2555,'1','001','2')";
			//String paramYear 		= "2555";
			//String paramSemesterNew 	= "1";
			//String paramEduLevel 	= "All";
			//String paramAdmisType   = "All";
        
			String paramYear 		= request.getParameter("paramYear");
			String paramSemesterNew = request.getParameter("paramSemesterNew");
			String paramEduLevel 	= request.getParameter("paramEduLevel");
			String paramAdmisType 	= request.getParameter("paramAdmisType");
		String query="call p_new_student_by_faculty_and_grade_range("+paramYear+",'"+paramSemesterNew+"','"+paramEduLevel+"','"+paramAdmisType+"')";
        String columns="1,2,3";
           
     jndi.selectByIndexDwh(query, columns);
   
     out.println(jndi.getData());
    
%>