<%@ page language="java" contentType="text/html; charset=UTF-8"
       pageEncoding="UTF-8"%>
<%
		
		th.ac.kmutt.service.connectionJNDI jndi = new th.ac.kmutt.service.connectionJNDI();
		
		  
          //String query="call p_new_student_by_year_and_faculty_table(2556,'All','All','All',5)";
          //String paramYear = "2556";
		  //String paramSemesterNew = "All";
		  //String paramForeign = "All";
		  //String paramEduLevel = "All";
		  //String paramYearSub = "5";         
          
          String paramYear 		= request.getParameter("paramYear");
		  String paramSemesterNew 	= request.getParameter("paramSemesterNew");
		  String paramForeign	= request.getParameter("paramForeign");
		  String paramEduLevel 	= request.getParameter("paramEduLevel");
		  String paramYearSub 	= request.getParameter("paramYearSub"); 
		  
		  String columns = "";
		  
		  if(paramYearSub.equals("3")){
			  columns = "1,2,3,4";
          }else if(paramYearSub.equals("4")){
        	  columns = "1,2,3,4,5";
          }else if(paramYearSub.equals("5")){
        	  columns = "1,2,3,4,5,6";
          };
          
		  String query="call p_new_student_by_year_and_faculty_tb("+paramYear+",'"+paramSemesterNew+"','"+paramForeign+"','"+paramEduLevel+"','"+paramYearSub+"')";
          		   
     jndi.selectByIndexDwh(query, columns);
     out.println(jndi.getData());
   // out.println(columns);
%>


