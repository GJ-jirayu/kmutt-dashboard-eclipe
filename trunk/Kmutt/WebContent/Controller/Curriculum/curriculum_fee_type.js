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
		$("#ParamEdu").show();
		$("#ParamYearSub").show();
		
		addClassAsOfTabs(1);
		
	$.ajax({
		url : "curriculum_fee_type.html",
		type:"get",
		async:false,
		datetype:"html",
		success:function(data){
			$("#tabs-2").html(data);
			$.ajax({
				url: "../../Model/Curriculum/curriculum_fee_type_by_year.jsp",
				type: "get",
				dataType: "json",
				data:{"paramYear":$("#embparamYearList").val(),"paramEduLevel":$("#embparamEducationList").val()},
				success:function(data){
					if(data != ""){
						option=[];
						option['themeCustom']=["#b696b0","#6e7fad","#5f5984"];
						 option['placement']='outside';
						 option['location']='n';
						 option['pointLabelsFont']='12px';
						 option['fontSize']='12px';
						 option['showDataLabels']=true;
						 option['pointLabelsColor']='#000000';
						 option['tooltip']=true;
						 option['numberRows']=1;
						 donutChart("Chart_curriculum_fee_type_by_year",data,option);
					}else{
						$("#Chart_curriculum_fee_type_by_year").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"140px"});
						$("#Chart_curriculum_fee_type_by_year").text('ปีการศึกษาที่เลือก "ยังไม่มีข้อมูล"');
					}
					}
				});
			
			$.ajax({
				url: "../../Model/NewStudent/p_new_student_by_school_edu.jsp",
				type: "get",
				dataType: "json",
				data:{"paramEduLevel":$("#embparamEducationList").val()},
				success:function(data){		
					//console.log(data);
					//alert(data);
					$(".edu").html(data).val();
					}
				});
			
			$.ajax({
				url: "../../Model/Curriculum/curriculum_fee_type_by_field.jsp",
				type: "get",
				dataType: "json",
				data:{"paramYear":$("#embparamYearList").val(),"paramEduLevel":$("#embparamEducationList").val()},
				success:function(data){
					if(data != ""){
						option=[];
						option['themeCustom']=["#b696b0","#6e7fad","#5f5984"];
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
						 barChartHorizontal("Chart_curriculum_fee_type_by_field",data,option);
					}else{
						$("#Chart_curriculum_fee_type_by_field").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"140px"});
						$("#Chart_curriculum_fee_type_by_field").text('ปีการศึกษาที่เลือก "ยังไม่มีข้อมูล"');
					}
					                    
					}
				});
			
			}
		});
	});
});