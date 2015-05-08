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
		$("#ParamEdu").show();
		$("#ParamYearSub").show();
		
		addClassAsOfTabs(2);
		
	$.ajax({
		url : "p_all_student_by_fee_type.html",
		type:"get",
		async:false,
		datetype:"html",
		success:function(data){
			$("#tabs-3").html(data);
			$.ajax({
				url: "../../Model/AllStudent/p_all_student_by_year_and_fee_type.jsp",
				type: "get",
				dataType: "json",
				data:{"paramYear":$("#embparamYearList").val(),"paramSemesterAll":$("#embparamSemesterAllList").val(),"paramEduLevel":$("#embparamEducationList").val(), "paramYearSub":$("#embparamYearSubList").val()},
				success:function(data){
					if(data != ""){
						 option=[];
						 option['themeCustom']=["#b696b0","#6e7fad","#5f5984"];
						 option['pointLabels']=true;
						 option['pointLabelsFont']='12px';
						 option['fontSize']='12px';
						 option['pointLabelsColor']="#000000";
						 option['location']='n';
						 option['placement']='outside';
						 option['clickable']=true;
						 option['tooltip']=true;
	                     barChart("Chart_p_all_student_by_year_and_fee_type",data,option);
					}else{
						$("#Chart_p_all_student_by_year_and_fee_type").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"140px"});
						$("#Chart_p_all_student_by_year_and_fee_type").text('ปีการศึกษาหรือเทอมที่เลือก "ยังไม่มีข้อมูล"');
					}
					
					 
					  //bind function click here start.
                     var i=0;
                     $('#Chart_p_all_student_by_year_and_fee_type').bind('jqplotDataClick',                
                     		 function (ev, seriesIndex, pointIndex, data) {    
                              if((i%2)!=0){
                             	option=[];
                                option['param']={"paramYear":$("#embparamYearList").val(),"paramSemesterAll":$("#embparamSemesterAllList").val(),"paramEduLevel":$("#embparamEducationList").val(), "paramYearSub":$("#embparamYearSubList").val()};
                            	var cateparamYear = getCate("../../Model/AllStudent/p_all_student_by_year_and_fee_type.jsp",pointIndex,option);
                            	//console.log(cateparamYear);
                            	$(".Year").html(cateparamYear).val();
                            $("#Chart_p_all_student_by_faculty_and_fee_type").empty();
 							
 							 p_all_student_by_faculty_and_fee_type(cateparamYear,$("#embparamSemesterAllList").val(),$("#embparamEducationList").val());
                              }
                              i++;                                 
                       	}
                       );
                    //bind function click here end.
					}
				});
				
			var p_all_student_by_faculty_and_fee_type = function(arparamYear,arparamSemesterAll,arparamEduLevel){
			$.ajax({
				url: "../../Model/AllStudent/p_all_student_by_faculty_and_fee_type.jsp",
				type: "get",
				dataType: "json",
				data:{"paramYear":arparamYear,"paramSemesterAll":arparamSemesterAll,"paramEduLevel":arparamEduLevel},
				success:function(data){
					if(data != ""){
						$("#Chart_p_all_student_by_faculty_and_fee_type").css({"margin-top":"0px","font-weight":"normal","width":"540px","height":"350px","margin-left":"auto","margin-right":"auto","text-align":"left"});
						 option=[];
						 option['themeCustom']=["#b696b0","#6e7fad","#5f5984"];
						 option['barWidth']=20;
						 option['pointLabels']=true;
						 option['pointLabelsFont']='12px';
						 option['tooltip']=true;
						 option['fontSize']='12px';
						 option['stackSeries']=true;
						 option['max']=100;
						 option['pointLabelsColor']="#000000";
						 option['location']='n';
						 option['placement']='outside';
						 option['ticks'] = ['0', '20', '40', '60', '80', '100'];
	                     barChartHorizontal("Chart_p_all_student_by_faculty_and_fee_type",data,option);
					}else{
						$("#Chart_p_all_student_by_faculty_and_fee_type").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"140px"});
						$("#Chart_p_all_student_by_faculty_and_fee_type").text('ปีการศึกษาหรือเทอมที่เลือก "ยังไม่มีข้อมูล"');
					}
					
					}
				});
			};
			p_all_student_by_faculty_and_fee_type($("#embparamYearList").val(),$("#embparamSemesterAllList").val(),$("#embparamEducationList").val());
			}
		});
	});
});