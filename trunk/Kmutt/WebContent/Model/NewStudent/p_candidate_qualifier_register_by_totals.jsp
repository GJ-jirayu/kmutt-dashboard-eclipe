<%@ page language="java" contentType="text/html; charset=UTF-8"
       pageEncoding="UTF-8"%>
<%
          th.ac.kmutt.service.connectionJNDI jndi = new th.ac.kmutt.service.connectionJNDI();
  		            
          	//String query = "call p_candidate_qualifier_register_by_totals(2555,'1','001','2','3')"; 
          	//String paramYear 		= "2555";
		    //String paramSemesterNew 	= "All";
		    //String paramEduLevel 	= "001";
		    //String paramAdmisType = "2";
		    //String paramYearSub 	= "3";		
		    
          	String paramYear 		= request.getParameter("paramYear");
		    String paramSemesterNew = request.getParameter("paramSemesterNew");
		    String paramEduLevel 	= request.getParameter("paramEduLevel");
		    String paramAdmisType 	= request.getParameter("paramAdmisType");
		    String paramYearSub 	= request.getParameter("paramYearSub");
		  //out.println("This ParamYear:"+paramYear);
		    String query = "call p_candidate_qualifier_register_by_totals("+paramYear+",\'"+paramSemesterNew+"\',\'"+paramEduLevel+"\',\'"+paramAdmisType+"\',\'"+paramYearSub+"\')";
          	
          String columns="1,2,3";
           
     jndi.selectByIndexDwh(query, columns);
   
     out.println(jndi.getData());
    
%>