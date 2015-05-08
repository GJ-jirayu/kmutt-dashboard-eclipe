$(document).ready(function(){
	
	$(".jqplot-yaxis-tick").css("color","#000000");
	
	var addClassAsOfTabs = function(childNo){
		$("div#tabs ul").each(function(){
			$("li",this).removeClass("TabsActive");
			$("li",this).eq(childNo).addClass("TabsActive");
		});
	};
//	$("#btnSubmit").click(function(){
//		setTimeout(function() {
//			$("a[href='#tabs-1']").trigger("click");
//		}, 500);
//				
//	});
	
	//theme=["#008080","#800000", "#FFA500"];
	
	var option = new Array();
// -------------tabs-1.html-------------
	$("a[href='#tabs-1']").click(function(){
		$("#ParamYear").show();
		$("#ParamSem").show();
		$("#ParamEdu").show();
		$("#ParamAdmissType").show();
		$("#ParamYearSub").show();
		
		addClassAsOfTabs(0);
	$.ajax({
		url : "p_candidate_qualifier_register.html",
		type:"get",
		async:false,
		datetype:"html",
		success:function(data){
			$("#tabs-1").html(data);

			$.ajax({
				url: "../../Model/NewStudent/p_candidate_qualifier_register_by_totals.jsp",
				type: "get",
				dataType: "json",
				data:{"paramYear":$("#embparamYearList").val(), "paramSemesterNew":$("#embparamSemesterNewList").val() ,"paramEduLevel":$("#embparamEducationList").val(), "paramAdmisType":$("#embparamAdmissionTypeList").val(), "paramYearSub":$("#embparamYearSubList").val()},
				success:function(data){
					if(data != ""){
						option=[];
						 option['themeCustom']=["#1f77b4","#aec7e8","#FF8B00"];
						 option['barWidth']=30;
						 option['pointLabels']=true;
						 option['pointLabelsFont']='12px';
						 option['fontSize']='12px';
						 option['pointLabelsColor']="#000000";
	 					 option['location']='n';
	 					 option['placement']='outside';
	 					 option['clickable']=true;
	 					
	 					 option['tooltip']=true;
	 					option['pointLabelsRotate']=-45;
	 					barLineChart("Chart_p_candidate_qualifier_register_by_totals",data,option);
					}else{
						$("#Chart_p_candidate_qualifier_register_by_totals").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"140px"});
						$("#Chart_p_candidate_qualifier_register_by_totals").text('ปีการศึกษาหรือเทอมที่เลือก "ยังไม่มีข้อมูล"');
					}
					 
					 
					 //bind function click here start.
                     var i=0;
                     $('#Chart_p_candidate_qualifier_register_by_totals').bind('jqplotDataClick',                
                     		 function (ev, seriesIndex, pointIndex, data) {    
                              if((i%2)!=0){
                            	  option=[];
                            	  option['param']={"paramYear":$("#embparamYearList").val(), "paramSemesterNew":$("#embparamSemesterNewList").val() ,"paramEduLevel":$("#embparamEducationList").val(), "paramAdmisType":$("#embparamAdmissionTypeList").val(), "paramYearSub":$("#embparamYearSubList").val()};
                            	var cateparamYear = getCate("../../Model/NewStudent/p_candidate_qualifier_register_by_totals.jsp",pointIndex,option);
                            	//console.log(cateparamYear);
                            	//alert(cateparamYear);
                            	$(".Year").html(cateparamYear).val();
                            $("#Chart_p_candidate_qualifier_register_by_faculty").empty();
 							
 							 p_candidate_qualifier_register_by_faculty(cateparamYear,$("#embparamSemesterNewList").val(),$("#embparamEducationList").val(),$("#embparamAdmissionTypeList").val());
                              }
                              i++;                                 
                       	}
                       );
                    //bind function click here end.
					}
				});
			var p_candidate_qualifier_register_by_faculty = function(arparamYear,arparamSemesterNew,arparamEduLevel,arparamAdmisType){
			$.ajax({
				url: "../../Model/NewStudent/p_candidate_qualifier_register_by_faculty.jsp",
				type: "get",
				dataType: "json",
				data:{"paramYear":arparamYear,"paramSemesterNew":arparamSemesterNew,"paramEduLevel":arparamEduLevel,"paramAdmisType":arparamAdmisType},
				success:function(data){
					if(data != ""){
						$("#Chart_p_candidate_qualifier_register_by_faculty").css({"margin-top":"0px","font-weight":"normal","width":"1120px","height":"350px","margin-left":"auto","margin-right":"auto","text-align":"left"});
						option=[];
						 option['themeCustom']=["#1f77b4","#aec7e8","#FF8B00"];
						 option['barWidth']=30;
						 option['pointLabels']=true;
						 option['pointLabelsFont']='12px';
						 option['fontSize']='12px';
						 option['pointLabelsColor']="#000000";
						 option['location']='n';
						 option['placement']='outside';
						 option['tooltip']=true;
						 option['pointLabelsRotate']=-45;
						 barLineChart("Chart_p_candidate_qualifier_register_by_faculty",data,option);
						 
					}else{
						$("#Chart_p_candidate_qualifier_register_by_faculty").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"140px"});	
						$("#Chart_p_candidate_qualifier_register_by_faculty").text('ปีการศึกษาหรือเทอมที่เลือก "ยังไม่มีข้อมูล"');
					}
					                    
					}
				});
			};
			p_candidate_qualifier_register_by_faculty($("#embparamYearList").val(),$("#embparamSemesterNewList").val(),$("#embparamEducationList").val(),$("#embparamAdmissionTypeList").val());
			}
		});
	});
});