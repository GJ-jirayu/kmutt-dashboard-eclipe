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
		$("#ParamEdu").show();
		$("#ParamYearSub").show();
		$("#submit").show();
		addClassAsOfTabs(0);
	$.ajax({
		url : "curriculum_arrange_type.html",
		type:"get",
		async:false,
		datetype:"html",
		success:function(data){
			$("#tabs-1").html(data);
			
			$.ajax({
				url: "../../Model/Curriculum/curriculum_arrange_type_by_year.jsp",
				type: "get",
				dataType: "json",
				data:{"paramYear":$("#embparamYearList").val(),"paramEduLevel":$("#embparamEducationList").val()},
				success:function(data){
					
					if(data != ""){
						option=[];
						option['themeCustom']=["#b0d099","#4fc0a7","#19a381","#1b7b67"];
						 option['pointLabelsFont']='12px';
						 option['fontSize']='12px';
						 option['showDataLabels']=true;
						 option['placement']='outside';
						 option['location']='n';
						 option['pointLabelsColor']='#000000';
						 option['tooltip']=true;
						 option['numberRows']=1;
						 donutChart("Chart_curriculum_arrange_type_by_year",data,option);
					}else{
						$("#Chart_curriculum_arrange_type_by_year").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"140px"});
						$("#Chart_curriculum_arrange_type_by_year").text('ปีการศึกษาที่เลือก "ยังไม่มีข้อมูล"');
					}
					}
				});
			
			$.ajax({
				url: "../../Model/Curriculum/curriculum_arrange_type_by_field.jsp",
				type: "get",
				dataType: "json",
				data:{"paramYear":$("#embparamYearList").val(),"paramEduLevel":$("#embparamEducationList").val()},
				success:function(data){
					
					if(data != ""){
						 option=[];
						 option['themeCustom']=["#b0d099","#4fc0a7","#19a381","#1b7b67"];
						 option['barWidth']=20;
						 option['pointLabels']=true;
						 option['pointLabelsFont']='12px';
						 option['fontSize']='12px';
						 option['stackSeries']=true;
						 option['max']=100;
						 option['placement']='outside';
						 option['location']='n';
						 option['pointLabelsColor']='#000000';
						 option['tooltip']=true;
						 option['ticks'] = ['0', '20', '40', '60', '80', '100'];
						 barChartHorizontal("Chart_curriculum_arrange_type_by_field",data,option);
					}else{
						$("#Chart_curriculum_arrange_type_by_field").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"140px"});
						$("#Chart_curriculum_arrange_type_by_field").text('ปีการศึกษาที่เลือก "ยังไม่มีข้อมูล"');
					}
					
					                   
					}
				});
			
			}
		});
	});
});