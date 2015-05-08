<%@ page language="java" contentType="text/html; charset=UTF-8"
       pageEncoding="UTF-8"%>
<%
          th.ac.kmutt.service.connectionJNDI jndi = new th.ac.kmutt.service.connectionJNDI();
           
          String query="call p_new_student_by_year_and_faculty_table_year(2556)";
          //String paramYear = "2556";
		  //String paramYearSub = "3";		        
          
          //String paramYear 		= request.getParameter("paramYear");
		  //String query="call p_new_student_by_year_and_faculty_table_year("+paramYear+")";
          String columns="1,2,3";
           
     jndi.selectByIndexDwh(query, columns);
   
     out.println(jndi.getData());
    
%>


