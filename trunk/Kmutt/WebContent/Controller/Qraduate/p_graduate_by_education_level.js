$(document).ready(function(){

	var addClassAsOfTabs = function(childNo){
		$("div#tabs ul").each(function(){
			$("li",this).removeClass("TabsActive");
			$("li",this).eq(childNo).addClass("TabsActive");
		});
	};
	
	var option = new Array();
	
//	$("#btnSubmit").click(function(){
//		setTimeout(function() {
//			$("a[href='#tabs-1']").trigger("click");
//		}, 500);
//		
//	});
	
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
		url : "p_graduate_by_education_level.html",
		type:"get",
		async:false,
		datetype:"html",
		success:function(data){
			$("#tabs-1").html(data);
			
			$.ajax({
				url: "../../Model/Qraduate/p_graduate_by_year_and_education_level.jsp",
				type: "get",
				dataType: "json",
				data:{"paramYear":$("#embparamYearList").val(), "paramSemesterGra":$("#embparamSemesterGraList").val(), "paramForeign":$("#embparamForeignList").val() ,"paramEduLevel":$("#embparamEducationList").val(), "paramYearSub":$("#embparamYearSubList").val()},
				success:function(data){
					//console.log(data);
					if(data != ""){
						 option=[];
						 option['themeCustom']=["#f4841f","#9d897d","#d7bd9d"];
						 option['pointLabels']=true;
						 option['pointLabelsFont']='12px';
						 option['fontSize']='12px';
						 option['pointLabelsColor']="#000000";
						 option['location']='n';
						 option['placement']='outside';
						 option['clickable']=true;
						 option['tooltip']=true;
						 option['maxY']=true;
						 lineChart("Chart_p_graduate_by_year_and_education_level",data,option);
					}else{
						$("#Chart_p_graduate_by_year_and_education_level").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"140px"});
						$("#Chart_p_graduate_by_year_and_education_level").text('ปีการศึกษาที่เลือก "ยังไม่มีข้อมูล"');
					}

			
					//bind function click here start.
                    var i=0;
                    $('#Chart_p_graduate_by_year_and_education_level').bind('jqplotDataClick',                
                    		 function (ev, seriesIndex, pointIndex, data) {    
                             if((i%2)!=0){
                            	 option=[];
                                 option['param']={"paramYear":$("#embparamYearList").val(), "paramSemesterGra":$("#embparamSemesterGraList").val(), "paramForeign":$("#embparamForeignList").val() ,"paramEduLevel":$("#embparamEducationList").val(), "paramYearSub":$("#embparamYearSubList").val()};
                           	 var cateparamYear = getCate("../../Model/Qraduate/p_graduate_by_year_and_education_level.jsp",pointIndex,option);
                           	 //console.log(cateparamYear);
							 
                           	$(".Year").html(cateparamYear).val();
                           	
                           	 $("#Chart_p_graduate_by_faculty_and_education_level").empty();
							 $("#Chart_p_graduate_by_faculty").empty();

                           	 p_graduate_by_faculty_and_education_level(cateparamYear,$("#embparamSemesterGraList").val(),$("#embparamForeignList").val(),$("#embparamEducationList").val());
							 p_graduate_by_faculty(cateparamYear,$("#embparamSemesterGraList").val(),$("#embparamForeignList").val(),$("#embparamEducationList").val());
                             }
                             i++;                                 
                      	}
                      );
                   //bind function click here end.
		
					}
				});
				
			var p_graduate_by_faculty_and_education_level = function(arparamYear,arparamSemesterGra,arparamForeign,arparamEduLevel){		
			$.ajax({
				url: "../../Model/Qraduate/p_graduate_by_faculty_and_education_level.jsp",
				type: "get",
				dataType: "json",
				data:{"paramYear":arparamYear, "paramSemesterGra":arparamSemesterGra, "paramForeign":arparamForeign,"paramEduLevel":arparamEduLevel},
				success:function(data){
					if(data != ""){
						$("#Chart_p_graduate_by_faculty_and_education_level").css({"margin-top":"0px","font-weight":"normal","width":"540px","height":"350px","margin-left":"auto","margin-right":"auto","text-align":"left"});
						option=[];
						option['themeCustom']=["#f4841f","#9d897d","#d7bd9d"];
						 option['barWidth']=20;
						 option['pointLabels']=true;
						 option['pointLabelsFont']='12px';
						 option['pointLabelsColor']="#000000";
						 option['fontSize']='12px';
						 option['stackSeries']=true;
						 option['max']=100;
						 option['placement']='outside';
						 option['location']='n';
						 option['tooltip']=true;
						 option['ticks'] = ['0', '20', '40', '60', '80', '100'];
	                     barChartHorizontal("Chart_p_graduate_by_faculty_and_education_level",data,option);
					}else{
						$("#Chart_p_graduate_by_faculty_and_education_level").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"140px"});
						$("#Chart_p_graduate_by_faculty_and_education_level").text('ปีการศึกษาหรือเทอมที่เลือก "ยังไม่มีข้อมูล"');
					}
					 
					}
				});
			};
			p_graduate_by_faculty_and_education_level($("#embparamYearList").val(),$("#embparamSemesterGraList").val(),$("#embparamForeignList").val(),$("#embparamEducationList").val());
		
			var p_graduate_by_faculty = function(arparamYear,arparamSemesterGra,arparamForeign,arparamEduLevel){	
			$.ajax({
				url: "../../Model/Qraduate/p_graduate_by_faculty.jsp",
				type: "get",
				dataType: "json",
				data:{"paramYear":arparamYear, "paramSemesterGra":arparamSemesterGra, "paramForeign":arparamForeign,"paramEduLevel":arparamEduLevel},
				success:function(data){
					if(data != ""){
						$("#Chart_p_graduate_by_faculty").css({"margin-top":"0px","font-weight":"normal","width":"540px","height":"350px","margin-left":"auto","margin-right":"auto","text-align":"left"});
						option=[];
						option['themeCustom']=["#0071c1","#01b0f1","#1d7a67","#00af50","#ffcce6","#f491bc","#ffc68c","#ffc000","#79c6ff","#97e2ff","#66c6b3","#62ffa9","#e27e76","#cae9a7","#fb9a3b","#ffe082"];
						 option['showDataLabels']=true;
						 option['fontSize']='12px';
						 option['pointLabelsColor']="#000000";
						 option['tooltip']=true;
						 donutChart("Chart_p_graduate_by_faculty",data,option);
					}else{
						$("#Chart_p_graduate_by_faculty").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"140px"});
						$("#Chart_p_graduate_by_faculty").text('ปีการศึกษาหรือเทอมที่เลือก "ยังไม่มีข้อมูล"');
					}
					
					}
				});	
			};
			p_graduate_by_faculty($("#embparamYearList").val(),$("#embparamSemesterGraList").val(),$("#embparamForeignList").val(),$("#embparamEducationList").val());		
			}
		});
	});
});