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
		$("#ParamFore").show();
		$("#ParamEdu").show();
		$("#ParamYearSub").show();
		
		addClassAsOfTabs(2);
		
	$.ajax({
		url : "p_graduate_work.html",
		type:"get",
		async:false,
		datetype:"html",
		success:function(data){
			$("#tabs-3").html(data);
			$.ajax({
				url: "../../Model/Qraduate/p_graduate_work_by_years.jsp",
				type: "get",
				dataType: "json",
				data:{"paramYear":$("#embparamYearList").val(), "paramForeign":$("#embparamForeignList").val() ,"paramEduLevel":$("#embparamEducationList").val(), "paramYearSub":$("#embparamYearSubList").val()},
				success:function(data){
					$("#Chart_p_graduate_work_by_years").empty();
					if(data != ""){
						 option=[];
						 option['themeCustom']=["#968379","#FFD840","#FF9D40"];
						 option['pointLabels']=true;
						 option['pointLabelsFont']='12px';
						 option['fontSize']='12px';        
						 option['location']='n';
						 option['placement']='outside';
						 option['pointLabelsColor']="#000000";
						 option['pointLabelsDicimal']=true;
						 option['clickable']=true;
						 option['tooltip']=true;
						 option['max']='100';
						 option['ticksY']=['0', '20', '40', '60', '80', '100'];
						 lineChart("Chart_p_graduate_work_by_years",data,option);
					}else{
						$("#Chart_p_graduate_work_by_years").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"420px"});
						$("#Chart_p_graduate_work_by_years").text('ปีการศึกษาที่เลือก "ยังไม่มีข้อมูล"');
					}
					
					 
					 //bind function click here start.
                    var i=0;
                    $('#Chart_p_graduate_work_by_years').bind('jqplotDataClick',                
                    		 function (ev, seriesIndex, pointIndex, data) {    
                             if((i%2)!=0){
                            	 option=[];
                                 option['param']={"paramYear":$("#embparamYearList").val(), "paramForeign":$("#embparamForeignList").val() ,"paramEduLevel":$("#embparamEducationList").val(), "paramYearSub":$("#embparamYearSubList").val()};
                           	 var cateparamYear = getCate("../../Model/Qraduate/p_graduate_work_by_years.jsp",pointIndex,option);
                           	 //console.log(cateparamYear);
							 
                           	$(".Year").html(cateparamYear).val();
                           	 
                           	 $("#Chart_p_graduate_work_by_faculty").empty();
							 $("#Chart_p_employer_survey_by_faculty").empty();

                           	 p_graduate_work_by_faculty(cateparamYear,$("#embparamForeignList").val(),$("#embparamEducationList").val());
							 p_employer_survey_by_faculty(cateparamYear,$("#embparamForeignList").val(),$("#embparamEducationList").val());
                             }
                             i++;                          
							}
                      );
                   //bind function click here end.
				   
					}
				});
			
			var p_graduate_work_by_faculty = function(arparamYear,arparamForeign,arparamEduLevel){
			$.ajax({
				url: "../../Model/Qraduate/p_graduate_work_by_faculty.jsp",
				type: "get",
				dataType: "json",
				data:{"paramYear":arparamYear, "paramForeign":arparamForeign,"paramEduLevel":arparamEduLevel},
				
				success:function(data){
					if(data != ""){
						$("#Chart_p_graduate_work_by_faculty").css({"margin-top":"0px","font-weight":"normal","width":"540px","height":"350px","margin-left":"auto","margin-right":"auto","text-align":"left"});
						option=[];
						 option['themeCustom']=["#968379","#FFD840","#FF9D40"];
						 option['pointLabels']=true;
						 option['pointLabelsFont']='12px';
						 option['fontSize']='12px';
						 option['location']='n';
						 option['placement']='outside';
						 option['pointLabelsColor']="#000000";
						 option['pointLabelsDicimal']=true;
						 option['tooltip']=true;
						 option['max']='100';
						 option['ticksY']=['0', '20', '40', '60', '80', '100'];
						 lineChart("Chart_p_graduate_work_by_faculty",data,option);
					}else{
						$("#Chart_p_graduate_work_by_faculty").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"140px"});
						$("#Chart_p_graduate_work_by_faculty").text('ปีการศึกษาที่เลือก "ยังไม่มีข้อมูล"');
					}
					 
					}
				});		
			};
			p_graduate_work_by_faculty($("#embparamYearList").val(),$("#embparamForeignList").val(),$("#embparamEducationList").val());
			
			var p_employer_survey_by_faculty = function(arparamYear,arparamForeign,arparamEduLevel){
			$.ajax({
				url: "../../Model/Qraduate/p_employer_survey_by_faculty.jsp",
				type: "get",
				dataType: "json",
				data:{"paramYear":arparamYear, "paramForeign":arparamForeign,"paramEduLevel":arparamEduLevel},
				success:function(data){
					if(data != ""){
						$("#Chart_p_employer_survey_by_faculty").css({"margin-top":"0px","font-weight":"normal","width":"1120px","height":"900px","margin-left":"auto","margin-right":"auto","text-align":"left"});
						option=[];
						 option['themeCustom']=["#e9dea1","#b1d39b","#7cc046","#3fa576","#2c6f55"];
						 //option['themeCustom']=["#4c99d1","#b3d47b","#f7f8ac","#aee1f4","#f4c5a7"];
						 option['location']='n';
						 option['placement']='outside';
						 option['pointLabels']=true;
						 option['pointLabelsFont']='12px';
						 option['fontSize']='12px';
						 option['pointLabelsColor']="#000000";
						 option['pointLabelsDicimal']=true;
						 option['tooltip']=true;
						 option['stackSeries']=false;
						 option['ticks'] = ['0', '1', '2', '3', '4', '5'];
						 barChartHorizontal("Chart_p_employer_survey_by_faculty",data,option);
					}else{
						$("#Chart_p_employer_survey_by_faculty").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"420px"});
						$("#Chart_p_employer_survey_by_faculty").text('ปีการศึกษาที่เลือก "ยังไม่มีข้อมูล"');
					}
					 
					}
				});
				};
			p_employer_survey_by_faculty($("#embparamYearList").val(),$("#embparamForeignList").val(),$("#embparamEducationList").val());
			}
		});
	});
});