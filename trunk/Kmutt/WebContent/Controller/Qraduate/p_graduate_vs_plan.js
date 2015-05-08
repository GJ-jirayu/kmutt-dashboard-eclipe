$(document).ready(function(){

	var addClassAsOfTabs = function(childNo){
		$("div#tabs ul").each(function(){
			$("li",this).removeClass("TabsActive");
			$("li",this).eq(childNo).addClass("TabsActive");
		});
	};
	
	var option = new Array();
// -------------tabs-1.html-------------
	$("a[href='#tabs-2']").click(function(){
		
		$(".ParamLeftSub").hide();

		$("#ParamYear").show();
		$("#ParamSem").show();
		$("#ParamFore").show();
		$("#ParamEdu").show();
		$("#ParamYearSub").show();
		
		addClassAsOfTabs(1);
	$.ajax({
		url : "p_graduate_vs_plan.html",
		type:"get",
		async:false,
		datetype:"html",
		success:function(data){
			$("#tabs-2").html(data);
			$.ajax({
				url: "../../Model/Qraduate/p_graduate_vs_plan_by_year.jsp",
				type: "get",
				dataType: "json",
				data:{"paramYear":$("#embparamYearList").val(), "paramSemesterGra":$("#embparamSemesterGraList").val(), "paramForeign":$("#embparamForeignList").val() ,"paramEduLevel":$("#embparamEducationList").val(), "paramYearSub":$("#embparamYearSubList").val()},
				success:function(data){
					if(data != ""){
						option=[];
						option['themeCustom']=["#0071c1","#FFA840"];
						 option['barWidth']=30;
						 option['pointLabels']=true;
						 option['pointLabelsFont']='12px';
						 option['fontSize']='12px';
						 option['location']='n';
						 option['placement']='outside';
						 option['pointLabelsColor']="#000000";
						 option['clickable']=true;
						 option['tooltip']=true;
						 barLineChart("Chart_p_graduate_vs_plan_by_year",data,option);
					}else{
						$("#Chart_p_graduate_vs_plan_by_year").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"140px"});
						$("#Chart_p_graduate_vs_plan_by_year").text('ปีการศึกษาที่เลือก "ยังไม่มีข้อมูล"');
					}
					
					 
					  //bind function click here start.
                    var i=0;
                    $('#Chart_p_graduate_vs_plan_by_year').bind('jqplotDataClick',                
                    		 function (ev, seriesIndex, pointIndex, data) {    
                             if((i%2)!=0){
                            	 option=[];
                                 option['param']={"paramYear":$("#embparamYearList").val(), "paramSemesterGra":$("#embparamSemesterGraList").val(), "paramForeign":$("#embparamForeignList").val() ,"paramEduLevel":$("#embparamEducationList").val(), "paramYearSub":$("#embparamYearSubList").val()};
                           	 var cateparamYear = getCate("../../Model/Qraduate/p_graduate_vs_plan_by_year.jsp",pointIndex,option);
                           	 //console.log(cateparamYear);
							 
                           	$(".Year").html(cateparamYear).val();
                           	 
                           	 $("#Chart_p_graduate_by_study_time").empty();
							 $("#Chart_p_graduate_vs_plan_by_faculty").empty();

                           	 p_graduate_by_study_time(cateparamYear,$("#embparamSemesterGraList").val(),$("#embparamForeignList").val(),$("#embparamEducationList").val());
							 p_graduate_vs_plan_by_faculty(cateparamYear,$("#embparamSemesterGraList").val(),$("#embparamForeignList").val(),$("#embparamEducationList").val());
                             }
                             i++;                          
							}
                      );
                   //bind function click here end.
					}
				});
				
			var p_graduate_by_study_time = function(arparamYear,arparamSemesterGra,arparamForeign,arparamEduLevel){	
			$.ajax({
				url: "../../Model/Qraduate/p_graduate_by_study_time.jsp",
				type: "get",
				dataType: "json",
				data:{"paramYear":arparamYear, "paramSemesterGra":arparamSemesterGra, "paramForeign":arparamForeign,"paramEduLevel":arparamEduLevel},
				success:function(data){
					if(data != ""){
						$("#Chart_p_graduate_by_study_time").css({"margin-top":"0px","font-weight":"normal","width":"540px","height":"350px","margin-left":"auto","margin-right":"auto","text-align":"left"});
						 option=[];
						 option['themeCustom']=["#598c9a","#b6967e"];
						 option['showDataLabels']=true;
						 option['fontSize']='12px';         
						 option['pointLabelsColor']="#000000";
						 option['location']='n';
						 option['placement']='outside';
						 option['tooltip']=true;
						 option['numberRows']=1;
						 donutChart("Chart_p_graduate_by_study_time",data,option);
					}else{
						$("#Chart_p_graduate_by_study_time").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"140px"});
						$("#Chart_p_graduate_by_study_time").text('ปีการศึกษาหรือเทอมที่เลือก "ยังไม่มีข้อมูล"');
					}
					
					}
				});	
			};
			p_graduate_by_study_time($("#embparamYearList").val(),$("#embparamSemesterGraList").val(),$("#embparamForeignList").val(),$("#embparamEducationList").val());
		
			var p_graduate_vs_plan_by_faculty = function(arparamYear,arparamSemesterGra,arparamForeign,arparamEduLevel){	
			$.ajax({
				url: "../../Model/Qraduate/p_graduate_vs_plan_by_faculty.jsp",
				type: "get",
				dataType: "json",
				data:{"paramYear":arparamYear, "paramSemesterGra":arparamSemesterGra, "paramForeign":arparamForeign,"paramEduLevel":arparamEduLevel},
				success:function(data){
					if(data != ""){
						$("#Chart_p_graduate_vs_plan_by_faculty").css({"margin-top":"0px","font-weight":"normal","width":"1120px","height":"350px","margin-left":"auto","margin-right":"auto","text-align":"left"});
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
						 barLineChart("Chart_p_graduate_vs_plan_by_faculty",data,option);
					}else{
						$("#Chart_p_graduate_vs_plan_by_faculty").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"140px"});
						$("#Chart_p_graduate_vs_plan_by_faculty").text('ปีการศึกษาหรือเทอมที่เลือก "ยังไม่มีข้อมูล"');
					}
					 					
					}
				});
			};
			p_graduate_vs_plan_by_faculty($("#embparamYearList").val(),$("#embparamSemesterGraList").val(),$("#embparamForeignList").val(),$("#embparamEducationList").val());	
			}
		});
	});
});