$(document).ready(function(){

	var addClassAsOfTabs = function(childNo){
		$("div#tabs ul").each(function(){
			$("li",this).removeClass("TabsActive");
			$("li",this).eq(childNo).addClass("TabsActive");
		});
	};
	
	var option = new Array();
// -------------tabs-1.html-------------
	$("a[href='#tabs-6']").click(function(){
		
		$(".ParamLeftSub").hide();

		$("#ParamYear").show();
		$("#ParamFaculty").show();
		$("#ParamDep").show();
		$("#ParamYearSub").show();
		
		addClassAsOfTabs(5);
		
	$.ajax({
		url : "p_inbound_outbound.html",
		type:"get",
		async:false,
		datetype:"html",
		success:function(data){
			$("#tabs-6").html(data);
			
			$.ajax({
				url: "../../Model/AllStudent/p_inbound_outbound_per_all_student.jsp",
				type: "get",
				dataType: "json",
				data:{"paramYear":$("#embparamYearList").val(), "paramFaculty":$("#embparamFacultyList").val(), "paramDepartment":$("#embparamDepartmentList").val() , "paramYearSub":$("#embparamYearSubList").val()},
				success:function(data){
					if(data != ""){
						option=[];					
						 //option['themeCustom']=["#005278","#f58321"];
						 option['themeCustom']=["#0e8394","#cf3065"];
						 option['barWidth']=30;
						 option['pointLabels']=true;
						 option['pointLabelsFont']='12px';
						 option['fontSize']='12px';
						 option['pointLabelsColor']="#000000";
						 option['location']='n';
	  					 option['placement']='outside';
	  					option['tooltip']=true;
	  					option['clickable']=true;
						 barChart("Chart_p_inbound_outbound_per_all_student",data,option);		
					}else{
						$("#Chart_p_inbound_outbound_per_outbound").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"140px"});
						$("#Chart_p_inbound_outbound_per_outbound").text('ปีการศึกษาที่เลือก "ยังไม่มีข้อมูล"');
					}
					
					 
					 
					 				//bind function click here start.
                     var i=0;
                     $('#Chart_p_inbound_outbound_per_all_student').bind('jqplotDataClick',                
                     		 function (ev, seriesIndex, pointIndex, data) {    
                              if((i%2)!=0){
                             	option=[];
                                option['param']={"paramYear":$("#embparamYearList").val(), "paramFaculty":$("#embparamFacultyList").val(), "paramDepartment":$("#embparamDepartmentList").val() , "paramYearSub":$("#embparamYearSubList").val()};
                            	var cateparamYear = getCate("../../Model/AllStudent/p_inbound_outbound_per_all_student.jsp",pointIndex,option);
                            	//console.log(cateparamYear);
                            	$(".Year").html(cateparamYear).val();
								
                            $("#Chart_p_inbound_outbound_per_inbound").empty();
							$("#Chart_p_inbound_outbound_per_outbound").empty();
 							
 							 p_inbound_outbound_per_inbound(cateparamYear,$("#embparamFacultyList").val(),$("#embparamDepartmentList").val());
							 p_inbound_outbound_per_outbound(cateparamYear,$("#embparamFacultyList").val(),$("#embparamDepartmentList").val());
                              }
                              i++;                                 
                       	}
                       );
                    //bind function click here end.	
					 
					}
				});
			
			var p_inbound_outbound_per_inbound = function(arparamYear,arparamFaculty,arparamDepartment){
			$.ajax({
				url: "../../Model/AllStudent/p_inbound_outbound_per_inbound.jsp",
				type: "get",
				dataType: "json",
				data:{"paramYear":arparamYear,"paramFaculty":arparamFaculty,"paramDepartment":arparamDepartment},
				success:function(data){
					if(data != ""){
						option=[];
						option['themeCustom']=["#808080"];
						 option['mapType']="world_mill_en";		
							option['initial']="#808080";
							 option['pointLabels']=true;
							 option['pointLabelsFont']='12px';
							 option['pointLabelsColor']="#000000";
							 option['fontSize']='12px';
							 //option['selected']="#F4A582";
							//	option['scale']="['#C8EEFF', '#0071A4']";
							//	option['markerStyle']={
							//		      initial: {
								//	          fill: '#F8E23B',
								//	          stroke: '#383f47'
								//	        }
								//	      };
						 map("Chart_p_inbound_outbound_per_inbound",data,option);		
					}else{
						$("#Chart_p_inbound_outbound_per_inbound").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"140px"});
						$("#Chart_p_inbound_outbound_per_inbound").text('ปีการศึกษาที่เลือก "ยังไม่มีข้อมูล"');
					}
					 	
					}
				});
			};
			p_inbound_outbound_per_inbound($("#embparamYearList").val(),$("#embparamFacultyList").val(),$("#embparamDepartmentList").val());
			
			var p_inbound_outbound_per_outbound = function(arparamYear,arparamFaculty,arparamDepartment){
			$.ajax({
				url: "../../Model/AllStudent/p_inbound_outbound_per_outbound.jsp",
				type: "get",
				dataType: "json",
				data:{"paramYear":arparamYear,"paramFaculty":arparamFaculty,"paramDepartment":arparamDepartment},
				success:function(data){
					if(data != ""){
						option=[];
						option['themeCustom']=["#808080"];
						 option['mapType']="world_mill_en";
						 // option['tooltipTextColor']='white';
						 option['initial']="#808080";
						 option['pointLabels']=true;
						 option['pointLabelsFont']='12px';
						 option['pointLabelsColor']="#000000";
						 option['fontSize']='12px';
						 //option['selected']="#F4A582";
						//	option['scale']="['#C8EEFF', '#0071A4']";
						//	option['markerStyle']={
						//	      initial: {
							//	          fill: '#F8E23B',
						//		          stroke: '#383f47'
							//	        }
							//	      };
						 map("Chart_p_inbound_outbound_per_outbound",data,option);	
					}else{
						$("#Chart_p_inbound_outbound_per_outbound").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"140px"});
						$("#Chart_p_inbound_outbound_per_outbound").text('ปีการศึกษาที่เลือก "ยังไม่มีข้อมูล"');
					}
					 		
					}
				});
			};
			p_inbound_outbound_per_outbound($("#embparamYearList").val(),$("#embparamFacultyList").val(),$("#embparamDepartmentList").val());
			
			}
		});
	});
});