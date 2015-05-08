<%@ page language="java" contentType="text/html; charset=UTF-8"
       pageEncoding="UTF-8"%>
<html>
 <head>
   <title>DB Test</title>
 </head>
 <body>

 <%
         th.ac.kmutt.service.connectionJNDI jndi = new th.ac.kmutt.service.connectionJNDI();
      
           //String query="SELECT current date FROM sysibm.sysdummy1";
           String query="select * from ADMIN_CONFIG";
           //String query="call xxx("+param1+","param2")";
           String columns="1,2,3";
           
     jndi.selectByIndexDwh(query, columns);
   
     out.println(jndi.getData());
    
 %>




 </body>
</html>