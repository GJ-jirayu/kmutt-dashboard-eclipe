$(document).ready(function(){
	var addClassAsOfTabs = function(childNo){
		$("div#tabs ul").each(function(){
			$("li",this).removeClass("TabsActive");
			$("li",this).eq(childNo).addClass("TabsActive");
		});
	};
	
	var option = new Array();
// -------------tabs-1.html-------------
	$("a[href='#tabs-5']").click(function(){
		
		$(".ParamLeftSub").hide();

		$("#ParamYear").show();
		$("#ParamSem").show();
		$("#ParamYearSub").show();
		
		addClassAsOfTabs(4);
	$.ajax({
		url : "p_teacher_per_ftes.html",
		type:"get",
		async:false,
		datetype:"html",
		success:function(data){
			$("#tabs-5").html(data);
			$.ajax({
				url: "../../Model/AllStudent/p_teacher_per_ftes_by_year.jsp",
				type: "get",
				dataType: "json",
				data:{"paramYear":$("#embparamYearList").val(), "paramSemesterAll":$("#embparamSemesterAllList").val(), "paramYearSub":$("#embparamYearSubList").val()},
				success:function(data){
					if(data != ""){
						option=[];
						 option['themeCustom']=["#1d2e5f","#FF4045","#BF3033","#FF7376"];
						 option['pointLabels']=true;
						 option['pointLabelsFont']='12px';
						 option['pointLabelsDicimal']=true;
						 option['fontSize']='12px';
						 option['pointLabelsColor']="#000000";
						 option['location']='n';
						 option['placement']='outside';
						 option['clickable']=true;
						 option['tooltip']=true;
	                     lineChart("Chart_p_teacher_per_ftes_by_year",data,option);
					}else{
						$("#Chart_p_teacher_per_ftes_by_year").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"140px"});
						$("#Chart_p_teacher_per_ftes_by_year").text('ปีการศึกษาที่เลือก "ยังไม่มีข้อมูล"');
					}
					 
			
				//bind function click here start.
                     var i=0;
                     $('#Chart_p_teacher_per_ftes_by_year').bind('jqplotDataClick',                
                     		 function (ev, seriesIndex, pointIndex, data) {    
                              if((i%2)!=0){
                             	option=[];
                                option['param']={"paramYear":$("#embparamYearList").val(), "paramSemesterAll":$("#embparamSemesterAllList").val(), "paramYearSub":$("#embparamYearSubList").val()};
                            	var cateparamYear = getCate("../../Model/AllStudent/p_teacher_per_ftes_by_year.jsp",pointIndex,option);
                            	//console.log(cateparamYear);
                            	$(".Year").html(cateparamYear).val();
                            $("#Chart_p_teacher_per_ftes_by_faculty").empty();
 							
 							 p_teacher_per_ftes_by_faculty(cateparamYear,$("#embparamSemesterAllList").val());
                              }
                              i++;                                 
                       	}
                       );
                    //bind function click here end.	
					}
				});
		var p_teacher_per_ftes_by_faculty = function(arparamYear,arparamSemesterAll){
			$.ajax({
				url: "../../Model/AllStudent/p_teacher_per_ftes_by_faculty.jsp",
				type: "get",
				dataType: "json",
				data:{"paramYear":arparamYear,"paramSemesterAll":arparamSemesterAll},
				success:function(data){
					if(data != ""){
						$("#Chart_p_teacher_per_ftes_by_faculty").css({"margin-top":"0px","font-weight":"normal","width":"540px","height":"350px","margin-left":"auto","margin-right":"auto","text-align":"left"});
						 option=[];
						 option['themeCustom']=["#1d2e5f","#FF4045","#BF3033","#FF7376"];
						 option['pointLabels']=true;
						 option['pointLabelsFont']='12px';
						 option['pointLabelsDicimal']=true;
						 option['fontSize']='12px';
						 option['cateRotate']=-45;
						 option['pointLabelsColor']="#000000";
						 option['location']='n';
						 option['placement']='outside';
						 option['tooltip']=true;
	                     lineChart("Chart_p_teacher_per_ftes_by_faculty",data,option);
					}else{
						$("#Chart_p_teacher_per_ftes_by_faculty").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"140px"});
						$("#Chart_p_teacher_per_ftes_by_faculty").text('ปีการศึกษาหรือเทอมที่เลือก "ยังไม่มีข้อมูล"');
					}
					
					}
				});
			};
			p_teacher_per_ftes_by_faculty($("#embparamYearList").val(),$("#embparamSemesterAllList").val());
			
			$.ajax({
				url: "../../Model/AllStudent/p_teacher_ftes_by_year.jsp",
				type: "get",
				dataType: "json",
				data:{"paramYear":$("#embparamYearList").val(), "paramSemesterAll":$("#embparamSemesterAllList").val(), "paramYearSub":$("#embparamYearSubList").val()},
				success:function(data){
					if(data != ""){
						option=[];
						 option['fontSize']='12px';
						 option['title']=["ปีการศึกษา","จำนวน นศ.เต็มเวลา (FTES)","จำนวนอาจารย์ประจำ","สัดส่วนอาจารย์ต่อ FTES"];
						 option['contentType']=["String","Number","Number","Number"];
						 option['colsWidth']=["30","60","50","50"];
	                     option['height']='150';
	                     option['text-align']='center';
						 table("Chart_p_teacher_ftes_by_year",data,option);
					}else{
						$("#Chart_p_teacher_ftes_by_year").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"140px"});
						$("#Chart_p_teacher_ftes_by_year").text('ปีการศึกษาที่เลือก "ยังไม่มีข้อมูล"');
					}
					 
					}
				});
			
			}
		});
	});
});