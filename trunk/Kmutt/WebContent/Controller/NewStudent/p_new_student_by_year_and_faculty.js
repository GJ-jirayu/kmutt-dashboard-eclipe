$(document).ready(function(){
	
	var addClassAsOfTabs = function(childNo){
		$("div#tabs ul").each(function(){
			$("li",this).removeClass("TabsActive");
			$("li",this).eq(childNo).addClass("TabsActive");
		});
	};
	
	var option = new Array();
	
// -------------tabs-1.html-------------
	$("a[href='#tabs-4']").click(function(){
		$(".ParamLeftSub").hide();
		
		$("#ParamYear").show();
		$("#ParamSem").show();
		$("#ParamFore").show();
		$("#ParamEdu").show();
		$("#ParamYearSub").show();
		
		addClassAsOfTabs(3);
	$.ajax({
		url : "p_new_student_by_year_and_faculty.html",
		type:"get",
		async:false,
		datetype:"html",
		success:function(data){
			$("#tabs-4").html(data);
			$.ajax({
				url: "../../Model/NewStudent/p_new_student_by_year_and_faculty.jsp",
				type: "get",
				dataType: "json",
				data:{"paramYear":$("#embparamYearList").val(), "paramSemesterNew":$("#embparamSemesterNewList").val(), "paramForeign":$("#embparamForeignList").val() ,"paramEduLevel":$("#embparamEducationList").val(), "paramYearSub":$("#embparamYearSubList").val()},
				success:function(data){
					if(data != ""){
						option=[];
						 //option['themeCustom']=["#0071c1","#01b0f1","#1d7a67","#00af50","#92d14f","#a62c23","#f57c21","#ffc000","#79c6ff","#97e2ff","#66c6b3","#62ffa9","#e27e76","#cae9a7","#fb9a3b","#ffe082"];
						option['themeCustom']=["#0071c1","#01b0f1","#1d7a67","#00af50","#ffcce6","#f491bc","#ffc68c","#ffc000","#79c6ff","#97e2ff","#66c6b3","#62ffa9","#e27e76","#cae9a7","#fb9a3b","#ffe082"];
						 option['pointLabels']=true;
						 option['pointLabelsFont']='12px';
						 option['fontSize']='12px';
						 option['pointLabelsColor']="#000000";
						 option['tooltip']=true;
						 option['placement']='outside';
						 option['location']='n';
						 option['maxY']=true;
	                     lineChart("Chart_p_new_student_by_year_and_faculty",data,option);
					}else{
						$("#Chart_p_new_student_by_year_and_faculty").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"140px"});
						$("#Chart_p_new_student_by_year_and_faculty").text('ปีการศึกษาที่เลือก "ยังไม่มีข้อมูล"');
					}
					 
					}
				});		
			
				$.ajax({
					url: "../../Model/NewStudent/p_new_student_by_year_and_faculty_table.jsp",
					type: "get",
					dataType: "json",
					data:{"paramYear":$("#embparamYearList").val(), "paramSemesterNew":$("#embparamSemesterNewList").val(), "paramForeign":$("#embparamForeignList").val() ,"paramEduLevel":$("#embparamEducationList").val(), "paramYearSub":$("#embparamYearSubList").val()},
					success:function(data){		
						//console.log(data); 
						if(data != ""){
							option=[];
							if( ($("#embparamYearSubList").val()) == 3){
								 option['title']=["คณะ",($("#embparamYearList").val()-2),($("#embparamYearList").val()-1),($("#embparamYearList").val())];
								 option['contentType']=["String","Number","Number","Number"];
								 option['colsWidth']=["50","50","50","50"];
							}else if( ($("#embparamYearSubList").val()) == 4 ){
								 option['title']=["คณะ",($("#embparamYearList").val()-3),($("#embparamYearList").val()-2),($("#embparamYearList").val()-1),($("#embparamYearList").val())];
								 option['contentType']=["String","Number","Number","Number","Number"];
								 option['colsWidth']=["50","50","50","50","50"];
							}else if( ($("#embparamYearSubList").val()) == 5 ){
								 option['title']=["คณะ",($("#embparamYearList").val()-4),($("#embparamYearList").val()-3),($("#embparamYearList").val()-2),($("#embparamYearList").val()-1),($("#embparamYearList").val())];
								 option['contentType']=["String","Number","Number","Number","Number","Number"];
								 option['colsWidth']=["50","50","50","50","50","50"];
							}						                         				
							option['text-align']='left';
	                         option['height']='320';
	                         //option["runNumber"]=true;
							 table("Chart_p_new_student_by_year_and_faculty_table",data,option);
						}else{
							$("#Chart_p_new_student_by_year_and_faculty_table").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"140px"});
							$("#Chart_p_new_student_by_year_and_faculty_table").text('ปีการศึกษาที่เลือก "ยังไม่มีข้อมูล"');
						}
						
						}
				});
				
			}
		});
	});
});

