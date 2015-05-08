$(document).ready(function() {
	$(".ParamLeftSub").hide();
	$("#btnSubmit").button();
	$("#tabs").tabs();
	
// paramYear
function cerateParamYear(){
	$.ajax({
		url:"../../Model/Parameter/paramYear.jsp",
		type:"get",
		dataType:"json",
		async:false,
		success:function(data){
			var htmlParamYear="";
			//htmlParamYear
			htmlParamYear+="<select id=\"paramYear\">";
				//loop [json]data into <option>
			$.each(data,function(index,indexEntry){
//				alert(index+":"+indexEntry[0]);
				if(index==0){
					htmlParamYear+="<option selected=\"selected\">";
					htmlParamYear+=indexEntry[0];
					htmlParamYear+="</option>";
				}else{
					htmlParamYear+="<option>";
					htmlParamYear+=indexEntry;
					htmlParamYear+="</option>";	
				}					
			});
			htmlParamYear+="</select>";
			$("#paramYearList").html(htmlParamYear);
			$("#paramYear").kendoDropDownList();
		}
	});
}
cerateParamYear();
//paramYear

//paramSemesterNew
function cerateParamSemesterNew(){
	$.ajax({
		url:"../../Model/Parameter/paramSemesterNew.jsp",
		type:"get",
		dataType:"json",
		async:false,
		success:function(data){
			var htmlParamSemesterNew="";
			//htmlParamYear
			htmlParamSemesterNew+="<select id=\"paramSemesterNew\">";
				//loop [json]data into <option>
			$.each(data,function(index,indexEntry){
//				alert(index+":"+indexEntry[0]);
					htmlParamSemesterNew+="<option selected=\"\" ";
					//htmlParamSemesterNew+="<option ";
					htmlParamSemesterNew+= "value=\" "+indexEntry[0]+" \" ";
					htmlParamSemesterNew+= ">";
					htmlParamSemesterNew+=indexEntry[1];
					htmlParamSemesterNew+="</option>";					
			});
			htmlParamSemesterNew+="</select>";
			$("#paramSemesterNewList").html(htmlParamSemesterNew);
			$("#paramSemesterNew").kendoDropDownList();
		}
	});
}
cerateParamSemesterNew();
//paramSemesterNew

//paramSemesterAll
function cerateParamSemesterAll(){
	$.ajax({
		url:"../../Model/Parameter/paramSemesterAll.jsp",
		type:"get",
		dataType:"json",
		async:false,
		success:function(data){
			var htmlParamSemesterAll="";
			//htmlParamYear
			htmlParamSemesterAll+="<select id=\"paramSemesterAll\">";
				//loop [json]data into <option>
			$.each(data,function(index,indexEntry){
//				alert(index+":"+indexEntry[0]);
					//htmlParamSemesterAll+="<option selected=\"selected\" ";
					htmlParamSemesterAll+="<option ";
					htmlParamSemesterAll+= "value=\" "+indexEntry[0]+" \" ";
					htmlParamSemesterAll+= ">";
					htmlParamSemesterAll+=indexEntry[1];
					htmlParamSemesterAll+="</option>";					
			});
			htmlParamSemesterAll+="</select>";
			$("#paramSemesterAllList").html(htmlParamSemesterAll);
			$("#paramSemesterAll").kendoDropDownList();
		}
	});
}
cerateParamSemesterAll();
//paramSemesterAll

//paramSemesterGra
function cerateParamSemester(){
	$.ajax({
		url:"../../Model/Parameter/paramSemesterGra.jsp",
		type:"get",
		dataType:"json",
		async:false,
		success:function(data){
			var htmlParamSemesterGra="";
			//htmlParamYear
			htmlParamSemesterGra+="<select id=\"paramSemesterGra\">";
				//loop [json]data into <option>
			$.each(data,function(index,indexEntry){
//				alert(index+":"+indexEntry[0]);
					htmlParamSemesterGra+="<option selected=\"selected\" ";
					htmlParamSemesterGra+= "value=\" "+indexEntry[0]+" \" ";
					htmlParamSemesterGra+= ">";
					htmlParamSemesterGra+=indexEntry[1];
					htmlParamSemesterGra+="</option>";					
			});
			htmlParamSemesterGra+="</select>";
			$("#paramSemesterGraList").html(htmlParamSemesterGra);
			$("#paramSemesterGra").kendoDropDownList();
		}
	});
}
cerateParamSemester();
//paramSemesterGra

//paramEducation
function cerateParamEducation(){
	$.ajax({
		url:"../../Model/Parameter/paramEducation.jsp",
		type:"get",
		dataType:"json",
		async:false,
		success:function(data){
			var htmlParamEducation="";
			//htmlParamYear
			htmlParamEducation+="<select id=\"paramEducation\">";
				//loop [json]data into <option>
			$.each(data,function(index,indexEntry){
//				alert(index+":"+indexEntry[0]);			
					htmlParamEducation+=" <option selected=\"selected\" ";
					htmlParamEducation+= "value=\" "+indexEntry[0]+" \" ";
					htmlParamEducation+= ">";
					htmlParamEducation+=indexEntry[1];
					htmlParamEducation+="</option>";			
			});
			htmlParamEducation+="</select>";
			$("#paramEducationList").html(htmlParamEducation);
			$("#paramEducation").kendoDropDownList();
		}
	});
}
cerateParamEducation();
//paramEducation

//paramAdmissionType
function cerateParamAdmissionType(){
	$.ajax({
		url:"../../Model/Parameter/paramAdmissionType.jsp",
		type:"get",
		dataType:"json",
		async:false,
		success:function(data){
			var htmlParamAdmissionType="";
			//htmlParamYear
			htmlParamAdmissionType+="<select id=\"paramAdmissionType\">";
				//loop [json]data into <option>
			$.each(data,function(index,indexEntry){
//				alert(index+":"+indexEntry[0]);
					htmlParamAdmissionType+="<option selected=\"selected\" ";
					htmlParamAdmissionType+= "value=\" "+indexEntry[0]+" \" ";
					htmlParamAdmissionType+= ">";
					htmlParamAdmissionType+=indexEntry[1];
					htmlParamAdmissionType+="</option>";				
			});
			htmlParamAdmissionType+="</select>";
			$("#paramAdmissionTypeList").html(htmlParamAdmissionType);
			$("#paramAdmissionType").kendoDropDownList();
		}
	});
}
cerateParamAdmissionType();
//paramAdmissionType


//paramForeign
function cerateParamForeign(){
	$.ajax({
		url:"../../Model/Parameter/paramForeign.jsp",
		type:"get",
		dataType:"json",
		async:false,
		success:function(data){
			var htmlParamForeign="";
			//htmlParamYear
			htmlParamForeign+="<select id=\"paramForeign\">";
				//loop [json]data into <option>
			$.each(data,function(index,indexEntry){
//				alert(index+":"+indexEntry[0]);
					//htmlParamForeign+="<option ";
					htmlParamForeign+="<option selected=\"selected\" ";
					htmlParamForeign+= "value=\" "+indexEntry[0]+" \" ";
					htmlParamForeign+= ">";
					htmlParamForeign+=indexEntry[1];
					htmlParamForeign+="</option>";				
			});
			htmlParamForeign+="</select>";
			$("#paramForeignList").html(htmlParamForeign);
			$("#paramForeign").kendoDropDownList();
		}
	});
}
cerateParamForeign();
//paramForeign

//paramFaculty
function cerateParamFaculty(){
	$.ajax({
		url:"../../Model/Parameter/paramFaculty.jsp",
		type:"get",
		dataType:"json",
		async:false,
		success:function(data){
			var htmlParamFaculty="";
			//htmlParamYear
			htmlParamFaculty+="<select id=\"paramFaculty\">";
				//loop [json]data into <option>
			$.each(data,function(index,indexEntry){
//				alert(index+":"+indexEntry[0]);
				
					htmlParamFaculty+="<option selected=\"selected\" ";
					htmlParamFaculty+= "value=\" "+indexEntry[0]+" \" ";
					htmlParamFaculty+= ">";
					htmlParamFaculty+=indexEntry[1];
					htmlParamFaculty+="</option>";
				
			});
			htmlParamFaculty+="</select>";
			$("#paramFacultyList").html(htmlParamFaculty);
			$("#paramFaculty").kendoDropDownList();
		}
	});
	$("#ParamFaculty").hide();
}
cerateParamFaculty();
//paramFaculty

//paramDepartment
function cerateParamDepartment(){
	$.ajax({
		url:"../../Model/Parameter/paramDepartment.jsp",
		type:"get",
		dataType:"json",
		async:false,
		success:function(data){
			var htmlParamDepartment="";
			//htmlParamYear
			htmlParamDepartment+="<select id=\"paramDepartment\">";
				//loop [json]data into <option>
			$.each(data,function(index,indexEntry){
//				alert(index+":"+indexEntry[0]);				
					htmlParamDepartment+="<option selected=\"selected\" ";
					htmlParamDepartment+= "value=\" "+indexEntry[0]+" \" ";
					htmlParamDepartment+= ">";
					htmlParamDepartment+=indexEntry[1];
					htmlParamDepartment+="</option>";					
			});
			htmlParamDepartment+="</select>";
			$("#paramDepartmentList").html(htmlParamDepartment);
			$("#paramDepartment").kendoDropDownList();
			$("#paramSize").kendoDropDownList();
		}
	});
	$("#ParamDep").hide();
}
cerateParamDepartment();


$("form#formAction").submit(function(){		
	$(".empParam").remove();
	$("body").append("<input type=\"hidden\" id=\"embparamYearList\" 			name=\"embparamYearList\" 			class=\"empParam\" value="+$("#paramYear").val()+">");
	$("body").append("<input type=\"hidden\" id=\"embparamSemesterNewList\" 	name=\"embparamSemesterNewList\" 	class=\"empParam\" value="+$("#paramSemesterNew").val()+">");
	$("body").append("<input type=\"hidden\" id=\"embparamSemesterAllList\" 	name=\"embparamSemesterAllList\" 	class=\"empParam\" value="+$("#paramSemesterAll").val()+">");
	$("body").append("<input type=\"hidden\" id=\"embparamSemesterGraList\" 	name=\"embparamSemesterGraList\" 	class=\"empParam\" value="+$("#paramSemesterGra").val()+">");
	$("body").append("<input type=\"hidden\" id=\"embparamForeignList\"			name=\"embparamForeignList\" 		class=\"empParam\" value="+$("#paramForeign").val()+">");
	$("body").append("<input type=\"hidden\" id=\"embparamEducationList\" 		name=\"embparamEducationList\" 		class=\"empParam\" value="+$("#paramEducation").val()+">");
	$("body").append("<input type=\"hidden\" id=\"embparamAdmissionTypeList\" 	name=\"embparamAdmissionTypeList\"	class=\"empParam\" value="+$("#paramAdmissionType").val()+">");
	$("body").append("<input type=\"hidden\" id=\"embparamYearSubList\" 		name=\"embparamYearSubList\"		class=\"empParam\" value="+$("#paramSize").val()+">");
	$("body").append("<input type=\"hidden\" id=\"embparamFacultyList\" 		name=\"embparamFacultyList\"		class=\"empParam\" value="+$("#paramFaculty").val()+">");
	$("body").append("<input type=\"hidden\" id=\"embparamDepartmentList\" 		name=\"embparamDepartmentList\"		class=\"empParam\" value="+$("#paramDepartment").val()+">");	
	
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


});