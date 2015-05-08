$(document).ready(function(){
	
	var addClassAsOfTabs = function(childNo){
		$("div#tabs ul").each(function(){
			$("li",this).removeClass("TabsActive");
			$("li",this).eq(childNo).addClass("TabsActive");
		});
	};
	
	var option = new Array();
	
// -------------tabs-1.html-------------
	$("a[href='#tabs-3']").click(function(){
		$(".ParamLeftSub").hide();
		
		$("#ParamYear").show();
		$("#ParamSem").show();
		$("#ParamFore").show();
		$("#ParamEdu").show();
		$("#ParamYearSub").show();
		
		addClassAsOfTabs(2);

	$.ajax({
		url : "p_new_student_plan.html",
		type:"get",
		async:false,
		datetype:"html",
		success:function(data){
			$("#tabs-3").html(data);
			$.ajax({
				url: "../../Model/NewStudent/p_new_student_plan_by_year.jsp",
				type: "get",
				dataType: "json",
				data:{"paramYear":$("#embparamYearList").val(), "paramSemesterNew":$("#embparamSemesterNewList").val(), "paramForeign":$("#embparamForeignList").val() ,"paramEduLevel":$("#embparamEducationList").val(), "paramYearSub":$("#embparamYearSubList").val()},
				success:function(data){
					if(data != ""){
						option=[];
						 option['themeCustom']=["#0071c1","#FFA840"];
						 option['barWidth']=30;
						 option['pointLabels']=true;
						 option['pointLabelsFont']='12px';
						 option['clickable']=true;
						 option['fontSize']='12px';
						 option['pointLabelsColor']="#000000";
						 option['location']='n';
	  					 option['placement']='outside';
	  					option['tooltip']=true;
	  					barLineChart("Chart_p_new_student_vs_plan_by_year",data,option);
					}else{
						$("#Chart_p_new_student_vs_plan_by_year").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"140px"});
						$("#Chart_p_new_student_vs_plan_by_year").text('ปีการศึกษาหรือเทอมที่เลือก "ยังไม่มีข้อมูล"');
					}
					 
					 
					 //bind function click here start.
                     var i=0;
                     $('#Chart_p_new_student_vs_plan_by_year').bind('jqplotDataClick',                
                     		 function (ev, seriesIndex, pointIndex, data) {    
                              if((i%2)!=0){
                             	option=[];
                                option['param']={"paramYear":$("#embparamYearList").val(), "paramSemesterNew":$("#embparamSemesterNewList").val(), "paramForeign":$("#embparamForeignList").val() ,"paramEduLevel":$("#embparamEducationList").val(), "paramYearSub":$("#embparamYearSubList").val()};
                            	var cateparamYear = getCate("../../Model/NewStudent/p_new_student_plan_by_year.jsp",pointIndex,option);
                            	console.log(cateparamYear);
 							 
                            $(".Year").html(cateparamYear).val();
                            	
                            $("#Chart_p_new_student_top_n_school").empty();
							$("#Chart_p_new_student_vs_plan_by_faculty").empty();
 							
 							 p_new_student_plan_top_n_school(cateparamYear,$("#embparamSemesterNewList").val(),$("#embparamEducationList").val(),$("#paramTop").val());
							 p_new_student_plan_by_faculty(cateparamYear,$("#embparamSemesterNewList").val(),$("#embparamForeignList").val(),$("#embparamEducationList").val());
                              }
                              i++;                                 
                       	}
                       );
                    //bind function click here end.
					 
					}
				});
			
			
			var p_new_student_plan_top_n_school = function(arparamYear,arparamSemesterNew,arparamEduLevel,arparamTop){
			$.ajax({
				url: "../../Model/NewStudent/p_new_student_plan_top_n_school.jsp",
				type: "get",
				dataType: "json",
				data:{"paramYear":arparamYear, "paramSemesterNew":arparamSemesterNew,"paramEduLevel":arparamEduLevel,"paramTop":arparamTop},
				success:function(data){
					if(data != ""){
						$("#Chart_p_new_student_top_n_school").css({"margin-top":"0px","font-weight":"normal","width":"540px","height":"350px","margin-left":"auto","margin-right":"auto","text-align":"left"});
						 option=[];
						 option['themeCustom']=["#0071c1","#01b0f1","#00af50","#92d14f","#ffc000","#79c6ff","#97e2ff","#62ffa9","#cae9a7","#ffe082"];
						 option['showDataLabels']=true;
						 option['pointLabelsColor']="#000000";
						 option['tooltip']=true;
						 donutChart("Chart_p_new_student_top_n_school",data,option);
					}else{
						$("#Chart_p_new_student_top_n_school").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"140px"});
						$("#Chart_p_new_student_top_n_school").text('ปีการศึกษาหรือเทอมที่เลือก "ยังไม่มีข้อมูล"');
					}
					 
					}
				});
			};
			p_new_student_plan_top_n_school($("#embparamYearList").val(),$("#embparamSemesterNewList").val(),$("#embparamEducationList").val(),$("#paramTop").val());
			$("#paramTop").change(function(){
				p_new_student_plan_top_n_school($("#embparamYearList").val(),$("#embparamSemesterNewList").val(),$("#embparamEducationList").val(),$("#paramTop").val());
			});
			
			var p_new_student_plan_by_faculty = function(arparamYear,arparamSemesterNew,arparamForeign,arparamEduLevel){
			$.ajax({
				url: "../../Model/NewStudent/p_new_student_plan_by_faculty.jsp",
				type: "get",
				dataType: "json",
				data:{"paramYear":arparamYear , "paramSemesterNew":arparamSemesterNew , "paramForeign":arparamForeign ,"paramEduLevel":arparamEduLevel },
				success:function(data){
					if(data != ""){
						$("#Chart_p_new_student_vs_plan_by_faculty").css({"margin-top":"0px","font-weight":"normal","width":"1120px","height":"350px","margin-left":"auto","margin-right":"auto","text-align":"left"});
						option=[];
						 option['themeCustom']=["#FFA840","#0071c1","#b16363"];
						 option['barWidth']=30;
						 option['pointLabels']=true;
						 option['pointLabelsFont']='12px';
						 option['clickable']=false;
						 option['fontSize']='12px';
						 option['background']=true;
						 option['pointLabelsColor']="#000000";
						 option['location']='n';
	  					 option['placement']='outside';
	  					option['tooltip']=true;
	  					option['y2axis']=true;
	  					option['pointLabelsRotate']=-45;
	  					//option['pointLabelsDicimal']=true;
	  					barLineChart("Chart_p_new_student_vs_plan_by_faculty",data,option);
					}else{
						$("#Chart_p_new_student_vs_plan_by_faculty").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"140px"});
						$("#Chart_p_new_student_vs_plan_by_faculty").text('ปีการศึกษาหรือเทอมที่เลือก "ยังไม่มีข้อมูล"');
					}
					 
					}
				});
			};
			p_new_student_plan_by_faculty($("#embparamYearList").val(),$("#embparamSemesterNewList").val(),$("#embparamForeignList").val(),$("#embparamEducationList").val());
			}
		});
	});
});