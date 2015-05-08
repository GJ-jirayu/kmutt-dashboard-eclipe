$(document).ready(function() {
	$(".ParamLeftSub").hide();
	$("#btnSubmit").button();
	$("#tabs").tabs();
	
// EmpParamTypeYear
function cerateEmpParamTypeYear(){
	
	$.ajax({
		url:"../../Model/Parameter/emp_paramTypeYear.jsp",
		type:"get",
		dataType:"json",
		async:false,
		success:function(data){
			
			var htmlEmpParamTypeYear="";
			htmlEmpParamTypeYear+="<select id=\"emp_paramTypeYear\">";
			$.each(data,function(index,indexEntry){
				htmlEmpParamTypeYear+=" <option selected=\"selected\" ";
				htmlEmpParamTypeYear+= "value=\" "+indexEntry[0]+" \" ";
				htmlEmpParamTypeYear+= ">";
				htmlEmpParamTypeYear+=indexEntry[1];
				htmlEmpParamTypeYear+="</option>";			
			});
			htmlEmpParamTypeYear+="</select>";
			$("#emp_paramTypeYearList").html(htmlEmpParamTypeYear);
			$("#emp_paramTypeYear").kendoDropDownList();
			$("#emp_paramSize").kendoDropDownList();
		}
	});
	
}
cerateEmpParamTypeYear();
//EmpParamTypeYear

//EmpParamTypeYear
function cerateEmpParamYear(){
	$.ajax({
		url:"../../Model/Parameter/emp_paramYear.jsp",
		type:"get",
		dataType:"json",
		async:false,
		success:function(data){
			var htmlEmpParamYear="";
			htmlEmpParamYear+="<select id=\"emp_paramYear\">";
			$.each(data,function(index,indexEntry){
				if(index==0){
					htmlEmpParamYear+="<option selected=\"selected\">";
					htmlEmpParamYear+=indexEntry[0];
					htmlEmpParamYear+="</option>";
				}else{
					htmlEmpParamYear+="<option>";
					htmlEmpParamYear+=indexEntry;
					htmlEmpParamYear+="</option>";	
				}					
			});
			htmlEmpParamYear+="</select>";
			$("#emp_paramYearList").html(htmlEmpParamYear);
			$("#emp_paramYear").kendoDropDownList();
		}
	});
}
cerateEmpParamYear();
//EmpParamYear

//EmpParamPos
function cerateEmpParamPos(){
	
	$.ajax({
		url:"../../Model/Parameter/emp_paramPos.jsp",
		type:"get",
		dataType:"json",
		async:false,
		success:function(data){
			
			var htmlEmpParamPos="";
			htmlEmpParamPos+="<select id=\"emp_paramPos\">";
			$.each(data,function(index,indexEntry){
				htmlEmpParamPos+=" <option selected=\"selected\" ";
				htmlEmpParamPos+= "value=\""+indexEntry[0]+"\" ";
				htmlEmpParamPos+= ">";
				htmlEmpParamPos+=indexEntry[1];
				htmlEmpParamPos+="</option>";			
			});
			htmlEmpParamPos+="</select>";
			$("#emp_paramPosList").html(htmlEmpParamPos);
			$("#emp_paramPos").kendoDropDownList();
		}
	});
	
}
cerateEmpParamPos();
//EmpParamPos

//EmpParamTypeLine
function cerateEmpParamTypeLine(paramEmpPos){
	
	$.ajax({
		url:"../../Model/Parameter/emp_paramTypeLine.jsp",
		type:"get",
		dataType:"json",
		data:{"paramEmpPos": paramEmpPos},
		async:false,
		success:function(data){
			
			var htmlEmpParamTypeLine="";
			htmlEmpParamTypeLine+="<select id=\"emp_paramTypeLine\">";
			$.each(data,function(index,indexEntry){
				htmlEmpParamTypeLine+=" <option selected=\"selected\" ";
				htmlEmpParamTypeLine+= "value=\" "+indexEntry[0]+" \" ";
				htmlEmpParamTypeLine+= ">";
				htmlEmpParamTypeLine+=indexEntry[1];
				htmlEmpParamTypeLine+="</option>";			
			});
			htmlEmpParamTypeLine+="</select>";
			$("#emp_paramTypeLineList").html(htmlEmpParamTypeLine);
			$("#emp_paramTypeLine").kendoDropDownList();
		}
	});
	
}
cerateEmpParamTypeLine('All');
//EmpParamTypeLine

//EmpParamPosIsm
function cerateEmpParamPosIsm(){
	
	$.ajax({
		url:"../../Model/Parameter/emp_paramPosIsm.jsp",
		type:"get",
		dataType:"json",
		async:false,
		success:function(data){
			
			var htmlEmpParamPosIsm="";
			htmlEmpParamPosIsm+="<select id=\"emp_paramPosIsm\">";
			$.each(data,function(index,indexEntry){		
				htmlEmpParamPosIsm+=" <option selected=\"selected\" ";
				htmlEmpParamPosIsm+= "value=\""+indexEntry[0]+"\" ";
				htmlEmpParamPosIsm+= ">";
				htmlEmpParamPosIsm+=indexEntry[1];
				htmlEmpParamPosIsm+="</option>";			
			});
			htmlEmpParamPosIsm+="</select>";
			$("#emp_paramPosIsmList").html(htmlEmpParamPosIsm);
			$("#emp_paramPosIsm").kendoDropDownList();
		}
	});
	
}
cerateEmpParamPosIsm();
//EmpParamPosIsm

//EmpParamTypeLineIsm
function cerateEmpParamTypeLineIsm(paramEmpPosIsm){
	
	$.ajax({
		url:"../../Model/Parameter/emp_paramTypeLineIsm.jsp",
		type:"get",
		dataType:"json",
		data:{"paramEmpPosIsm": paramEmpPosIsm},
		async:false,
		success:function(data){
			
			var htmlEmpParamTypeLineIsm="";
			htmlEmpParamTypeLineIsm+="<select id=\"emp_paramTypeLineIsm\">";
			$.each(data,function(index,indexEntry){	
				htmlEmpParamTypeLineIsm+=" <option selected=\"selected\" ";
				htmlEmpParamTypeLineIsm+= "value=\" "+indexEntry[0]+" \" ";
				htmlEmpParamTypeLineIsm+= ">";
				htmlEmpParamTypeLineIsm+=indexEntry[1];
				htmlEmpParamTypeLineIsm+="</option>";			
			});
			htmlEmpParamTypeLineIsm+="</select>";
			$("#emp_paramTypeLineIsmList").html(htmlEmpParamTypeLineIsm);
			$("#emp_paramTypeLineIsm").kendoDropDownList();
		}
	});
	
}
cerateEmpParamTypeLineIsm('All');
//EmpParamTypeLineIsm

//EmpParamEdu
function cerateEmpParamEdu(){
	
	$.ajax({
		url:"../../Model/Parameter/emp_paramEdu.jsp",
		type:"get",
		dataType:"json",
		async:false,
		success:function(data){
			var htmlEmpParamEdu="";
			htmlEmpParamEdu+="<select id=\"emp_paramEdu\">";
			$.each(data,function(index,indexEntry){			
				htmlEmpParamEdu+=" <option selected=\"selected\" ";
				htmlEmpParamEdu+= "value=\""+indexEntry[0]+"\" ";
				htmlEmpParamEdu+= ">";
				htmlEmpParamEdu+=indexEntry[1];
				htmlEmpParamEdu+="</option>";			
			});
			htmlEmpParamEdu+="</select>";
			$("#emp_paramEduList").html(htmlEmpParamEdu);
			$("#emp_paramEdu").kendoDropDownList();
		}
	});
	
}
cerateEmpParamEdu();
//EmpParamEdu

//EmpParamBou
function cerateEmpParamBou(){
	
	$.ajax({
		url:"../../Model/Parameter/emp_paramBou.jsp",
		type:"get",
		dataType:"json",
		async:false,
		success:function(data){
			
			var htmlEmpParamBou="";
			htmlEmpParamBou+="<select id=\"emp_paramBou\">";
			$.each(data,function(index,indexEntry){
				htmlEmpParamBou+=" <option selected=\"selected\" ";
				htmlEmpParamBou+= "value=\""+indexEntry[0]+"\" ";
				htmlEmpParamBou+= ">";
				htmlEmpParamBou+=indexEntry[1];
				htmlEmpParamBou+="</option>";			
			});
			htmlEmpParamBou+="</select>";
			$("#emp_paramBouList").html(htmlEmpParamBou);
			$("#emp_paramBou").kendoDropDownList();
		}
	});
	
}
cerateEmpParamBou();
//EmpParamBou

//EmpParamEmpTypeGroup
function cerateEmpTypeGroup(){
	
	$.ajax({
		url:"../../Model/Parameter/emp_paramEmpTypeGroup.jsp",
		type:"get",
		dataType:"json",
		async:false,
		success:function(data){
			
			var htmlEmpParamEmpTypeGroup="";
			htmlEmpParamEmpTypeGroup+="<select id=\"emp_paramEmpTypeGroup\">";
			$.each(data,function(index,indexEntry){
				htmlEmpParamEmpTypeGroup+=" <option selected=\"selected\" ";
				htmlEmpParamEmpTypeGroup+= "value=\""+indexEntry[0]+"\" ";
				htmlEmpParamEmpTypeGroup+= ">";
				htmlEmpParamEmpTypeGroup+=indexEntry[1];
				htmlEmpParamEmpTypeGroup+="</option>";			
			});
			htmlEmpParamEmpTypeGroup+="</select>";
			$("#emp_paramEmpTypeGroupList").html(htmlEmpParamEmpTypeGroup);
			$("#emp_paramEmpTypeGroup").kendoDropDownList();
		}
	});
	
}
cerateEmpTypeGroup();
//EmpParamEmpTypeGroup

//EmpParamTypeLine
function cerateEmpTypeLine(paramEmpTypeGroup){

	$.ajax({
		url:"../../Model/Parameter/emp_paramEmpTypeLine.jsp",
		type:"get",
		dataType:"json",
		data:{"paramEmpTypeGroup": paramEmpTypeGroup},
		async:false,
		success:function(data){
			
			var htmlEmpTypeLine="";
			htmlEmpTypeLine+="<select id=\"emp_paramEmpTypeLine\">";
			$.each(data,function(index,indexEntry){
				htmlEmpTypeLine+=" <option selected=\"selected\" ";
				htmlEmpTypeLine+= "value=\" "+indexEntry[0]+" \" ";
				htmlEmpTypeLine+= ">";
				htmlEmpTypeLine+=indexEntry[1];
				htmlEmpTypeLine+="</option>";			
			});
			htmlEmpTypeLine+="</select>";
			$("#emp_paramEmpTypeLineList").html(htmlEmpTypeLine);
			$("#emp_paramEmpTypeLine").kendoDropDownList();
		}
	});
	
}
cerateEmpTypeLine('111');
//EmpParamTypeLine

//EmpParamDep
function cerateEmpParamDep(){
	
	$.ajax({
		url:"../../Model/Parameter/emp_paramDep.jsp",
		type:"get",
		dataType:"json",
		async:false,
		success:function(data){
			
			var htmlEmpParamDep="";
			htmlEmpParamDep+="<select id=\"emp_paramDep\">";
			$.each(data,function(index,indexEntry){
				htmlEmpParamDep+=" <option selected=\"selected\" ";
				htmlEmpParamDep+= "value=\""+indexEntry[0]+"\" ";
				htmlEmpParamDep+= ">";
				htmlEmpParamDep+=indexEntry[1];
				htmlEmpParamDep+="</option>";			
			});
			htmlEmpParamDep+="</select>";
			$("#emp_paramDepList").html(htmlEmpParamDep);
			$("#emp_paramDep").kendoDropDownList();
			
		}
	});
	
}
cerateEmpParamDep();
//EmpParamDep

$("form#formAction").submit(function(){		
	$(".empParam").remove();
	//hidden
	$("body").append("<input type=\"hidden\" id=\"embemp_paramTypeYear\" 			name=\"embemp_paramTypeYear\" 			class=\"empParam\" value="+$("#emp_paramTypeYear").val()+">");
	$("body").append("<input type=\"hidden\" id=\"embemp_paramYear\" 				name=\"embemp_paramYear\" 				class=\"empParam\" value="+$("#emp_paramYear").val()+">");
	$("body").append("<input type=\"hidden\" id=\"embemp_paramPos\" 				name=\"embemp_paramPos\" 				class=\"empParam\" value="+$("#emp_paramPos").val()+">");
	$("body").append("<input type=\"hidden\" id=\"embemp_paramTypeLine\" 			name=\"embemp_paramTypeLine\" 			class=\"empParam\" value="+$("#emp_paramTypeLine").val()+">");
	$("body").append("<input type=\"hidden\" id=\"embemp_paramPosIsm\" 			name=\"embemp_paramPosIsm\" 			class=\"empParam\" value="+$("#emp_paramPosIsm").val()+">");
	$("body").append("<input type=\"hidden\" id=\"embemp_paramTypeLineIsm\" 		name=\"embemp_paramTypeLineIsm\" 		class=\"empParam\" value="+$("#emp_paramTypeLineIsm").val()+">");
	$("body").append("<input type=\"hidden\" id=\"embemp_paramEdu\" 				name=\"embemp_paramEdu\" 				class=\"empParam\" value="+$("#emp_paramEdu").val()+">");
	$("body").append("<input type=\"hidden\" id=\"embemp_paramBou\" 				name=\"embemp_paramBou\" 				class=\"empParam\" value="+$("#emp_paramBou").val()+">");
	$("body").append("<input type=\"hidden\" id=\"embemp_paramEmpTypeGroup\" 		name=\"embemp_paramEmpTypeGroup\" 		class=\"empParam\" value="+$("#emp_paramEmpTypeGroup").val()+">");
	$("body").append("<input type=\"hidden\" id=\"embemp_paramEmpTypeLine\" 		name=\"embemp_paramEmpTypeLine\" 		class=\"empParam\" value="+$("#emp_paramEmpTypeLine").val()+">");
	$("body").append("<input type=\"hidden\" id=\"embemp_paramDep\" 				name=\"embemp_paramDep\" 				class=\"empParam\" value="+$("#emp_paramDep").val()+">");
	$("body").append("<input type=\"hidden\" id=\"embemp_paramSizeList\" 			name=\"embemp_paramSizeList\"			class=\"empParam\" value="+$("#emp_paramSize").val()+">");

	$("div#tabs ul").each(function(){
		if($("li",this).eq(0).hasClass("TabsActive")){
			$("[href='#tabs-1']").trigger("click");
		}else if($("li",this).eq(1).hasClass("TabsActive")){
			$("[href='#tabs-2']").trigger("click");
		}else if($("li",this).eq(2).hasClass("TabsActive")){
			$("[href='#tabs-3']").trigger("click");
		}else if($("li",this).eq(3).hasClass("TabsActive")){
			$("[href='#tabs-4']").trigger("click");
		}else if($("li",this).eq(4).hasClass("TabsActive")){
			$("[href='#tabs-5']").trigger("click");
		}else if($("li",this).eq(5).hasClass("TabsActive")){
			$("[href='#tabs-6']").trigger("click");
		}else if($("li",this).eq(6).hasClass("TabsActive")){
			$("[href='#tabs-7']").trigger("click");
		}else if($("li",this).eq(7).hasClass("TabsActive")){
			$("[href='#tabs-8']").trigger("click");
		}else{
			false;
		}
	});
	
return false;
});




setTimeout(function(){
	 $("#btnSubmit").trigger("click");
},500);

setTimeout(function(){
	$("a[href='#tabs-1']").trigger("click");
},800);

	$("#emp_paramPos").change(function(){
		//alert($(this).val());
		cerateEmpParamTypeLine($(this).val());		
	});

	$("#emp_paramPosIsm").change(function(){
		//alert($(this).val());
		cerateEmpParamTypeLineIsm($(this).val());		
	});
	
	$("#emp_paramEmpTypeGroup").change(function(){
		//alert($(this).val());
		cerateEmpTypeLine($(this).val());		
	});
	
	$("#emp_paramType").change(function(){
		//alert($(this).val());
		cerateEmpParamLine($(this).val());		
	});
});