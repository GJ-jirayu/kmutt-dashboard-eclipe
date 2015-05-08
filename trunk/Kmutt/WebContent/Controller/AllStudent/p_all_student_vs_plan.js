$(document).ready(function(){
	var addClassAsOfTabs = function(childNo){
		$("div#tabs ul").each(function(){
			$("li",this).removeClass("TabsActive");
			$("li",this).eq(childNo).addClass("TabsActive");
		});
	};
	
	var option = new Array();
	
	//ShowParameter 㹢�ͤ���
//		var textparamYear = '';
//		var textparamYearSub = '';
//		$("#btnSubmit").click(function(){
//			setTimeout(function() {
//				$("a[href='#tabs-1']").trigger("click");
//				textparamYear = $("#paramYear").val();
//				textparamYearSub = $("#paramSize").val();
//				$(".ShowParamYear").html(textparamYear);
//				$(".ShowparamYearSub").html(textparamYearSub);
//			}, 500);
//			
//		});
	//ShowParameter 㹢�ͤ���
	
// -------------tabs-1.html-------------
	$("a[href='#tabs-1']").click(function(){
		$(".ParamLeftSub").hide();
		
		$("#ParamYear").show();
		$("#ParamSem").show();
		$("#ParamFore").show();
		$("#ParamEdu").show();
		$("#ParamYearSub").show();
		
		addClassAsOfTabs(0);
	$.ajax({
		url : "p_all_student_vs_plan.html",
		type:"get",
		async:false,
		datetype:"html",
		success:function(data){
			$("#tabs-1").html(data);
			$.ajax({
				url: "../../Model/AllStudent/p_all_student_vs_plan_by_year.jsp",
				type: "get",
				dataType: "json",
				data:{"paramYear":$("#embparamYearList").val(), "paramSemesterAll":$("#embparamSemesterAllList").val(), "paramForeign":$("#embparamForeignList").val() ,"paramEduLevel":$("#embparamEducationList").val(), "paramYearSub":$("#embparamYearSubList").val()},
				success:function(data){
					if(data != ""){
						option=[];
						option['themeCustom']=["#0071c1","#FFA840"];
						 option['barWidth']=30;
						 option['pointLabels']=true;
						 option['pointLabelsFont']='12px';
						 option['fontSize']='12px';	
						 option['pointLabelsColor']="#000000";
						 option['location']='n';
	  					 option['placement']='outside';
	  					 option['clickable']=true;
	  					option['tooltip']=true;
	                     barLineChart("Chart_p_all_student_vs_plan_by_year",data,option);		
					}else{
						$("#Chart_p_all_student_vs_plan_by_year").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"140px"});
						$("#Chart_p_all_student_vs_plan_by_year").text('ปีการศึกษาหรือเทอมที่เลือก "ยังไม่มีข้อมูล"');
					}
							
                     
                   //bind function click here start.
                    var i=0;
                    $('#Chart_p_all_student_vs_plan_by_year').bind('jqplotDataClick',                
                    		 function (ev, seriesIndex, pointIndex, data) {    
                             if((i%2)!=0){
                            	 option=[];
                            	 //option['param']={"paramYear":"2555", "paramSemesterAll":"1", "paramForeign":"N" ,"paramEduLevel":"001", "paramYearSub":"3"};
                                 option['param']={"paramYear":$("#embparamYearList").val(), "paramSemesterAll":$("#embparamSemesterAllList").val(), "paramForeign":$("#embparamForeignList").val() ,"paramEduLevel":$("#embparamEducationList").val(), "paramYearSub":$("#embparamYearSubList").val()};
                           	 var cateparamYear = getCate("../../Model/AllStudent/p_all_student_vs_plan_by_year.jsp",pointIndex,option);
                           	 //console.log(cateparamYear);
                             //console.log(getCate("../../Model/AllStudent/p_all_student_vs_plan_by_year.jsp",pointIndex));
                             //console.log(getSeries("../../Model/AllStudent/p_all_student_vs_plan_by_year.jsp",seriesIndex)); 
                             //alert(pointIndex);
                           	 
                           	$(".Year").html(cateparamYear).val();
                           	
                           	 $("#Chart_p_all_student_by_education_level_and_student_type").empty();
							 $("#Chart_p_all_student_vs_plan_by_faculty").empty();

                           	 p_all_student_by_education_level_and_student_type(cateparamYear,$("#embparamSemesterAllList").val(),$("#embparamForeignList").val(),$("#embparamEducationList").val());
							 p_all_student_vs_plan_by_faculty(cateparamYear,$("#embparamSemesterAllList").val(),$("#embparamForeignList").val(),$("#embparamEducationList").val());
                             }
                             i++;                                 
                      	}
                      );
                   //bind function click here end.
					}
				});
		
		var p_all_student_by_education_level_and_student_type = function(arparamYear,arparamSemesterAll,arparamForeign,arparamEduLevel){	
			$.ajax({
				url: "../../Model/AllStudent/p_all_student_by_education_level_and_student_type.jsp",
				type: "get",
				dataType: "json",
				data:{"paramYear":arparamYear, "paramSemesterAll":arparamSemesterAll, "paramForeign":arparamForeign,"paramEduLevel":arparamEduLevel},
				success:function(data){
					if(data != ""){
						$("#Chart_p_all_student_by_education_level_and_student_type").css({"margin-top":"0px","font-weight":"normal","width":"540px","height":"350px","margin-left":"auto","margin-right":"auto","text-align":"left"});
						option=[];					
						 //option['themeCustom']=["#4763a9","#eba511"];
						option['themeCustom']=["#f28ab8","#a2b0cc"];
						 option['barWidth']=30;
						 option['pointLabels']=true;
						 option['pointLabelsFont']='12px';
						 option['fontSize']='12px';
						 option['pointLabelsColor']="#000000";
						 option['location']='n';
	  					 option['placement']='outside';
	  					option['tooltip']=true;
	                     barChart("Chart_p_all_student_by_education_level_and_student_type",data,option);
					}else{
						$("#Chart_p_all_student_by_education_level_and_student_type").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"140px"});
						$("#Chart_p_all_student_by_education_level_and_student_type").text('ปีการศึกษาหรือเทอมที่เลือก "ยังไม่มีข้อมูล"');
					}
					 
					}
				});
		};
		p_all_student_by_education_level_and_student_type($("#embparamYearList").val(),$("#embparamSemesterAllList").val(),$("#embparamForeignList").val(),$("#embparamEducationList").val());
		
		var p_all_student_vs_plan_by_faculty = function(arparamYear,arparamSemesterAll,arparamForeign,arparamEduLevel){
			$.ajax({
				url: "../../Model/AllStudent/p_all_student_vs_plan_by_faculty.jsp",
				type: "get",
				dataType: "json",
				data:{"paramYear":arparamYear, "paramSemesterAll":arparamSemesterAll, "paramForeign":arparamForeign,"paramEduLevel":arparamEduLevel},
				success:function(data){
					if(data != ""){
						$("#Chart_p_all_student_vs_plan_by_faculty").css({"margin-top":"0px","font-weight":"normal","width":"1120px","height":"350px","margin-left":"auto","margin-right":"auto","text-align":"left"});
						 option=[];
						 option['themeCustom']=["#FFA840","#0071c1","#b16363"];
						 option['barWidth']=30;
						 option['pointLabels']=true;
						 option['pointLabelsFont']='12px';
						 option['fontSize']='12px';
						 option['pointLabelsColor']="#000000";
						 option['location']='n';
	  					 option['placement']='outside';
	  					option['tooltip']=true;
	  					option['y2axis']=true;
	  					option['pointLabelsRotate']=-45;
	  					barLineChart("Chart_p_all_student_vs_plan_by_faculty",data,option);
					}else{
						$("#Chart_p_all_student_vs_plan_by_faculty").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"140px"});
						$("#Chart_p_all_student_vs_plan_by_faculty").text('ปีการศึกษาหรือเทอมที่เลือก "ยังไม่มีข้อมูล"');
					}
					
					}
				});
			};
		p_all_student_vs_plan_by_faculty($("#embparamYearList").val(),$("#embparamSemesterAllList").val(),$("#embparamForeignList").val(),$("#embparamEducationList").val());
			}
		});
	});
});