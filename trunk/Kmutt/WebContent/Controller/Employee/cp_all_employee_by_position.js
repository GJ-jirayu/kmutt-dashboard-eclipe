$(document).ready(function(){
	
	var addClassAsOfTabs = function(childNo){
		$("div#tabs ul").each(function(){
			$("li",this).removeClass("TabsActive");
			$("li",this).eq(childNo).addClass("TabsActive");
		});
	};
	
// -------------tabs-1.html-------------
	$("a[href='#tabs-3']").click(function(){
		
		$(".ParamLeftSub").hide();

		$("#EmpParamTypeYear").show();
		$("#EmpParamYear").show();
		$("#EmpParamPosIsm").show();
		$("#EmpParamTypeLineIsm").show();
		$("#EmpParamYearSub").show();
		
		addClassAsOfTabs(2);
	$.ajax({
		url : "cp_all_employee_by_position.html",
		type:"get",
		async:false,
		datetype:"html",
		success:function(data){
			
			$("#tabs-3").html(data);
			
			$.ajax({
				url: "../../Model/Employee/emp_by_pos_year.jsp",
				type: "get",
				dataType: "json",
				data:{"emp_paramTypeYear":$("#embemp_paramTypeYear").val(),"emp_paramYear":$("#embemp_paramYear").val(),"emp_paramPosIsm":$("#embemp_paramPosIsm").val(),"emp_paramTypeLineIsm":$("#embemp_paramTypeLineIsm").val(),"emp_paramSize":$("#embemp_paramSizeList").val()},
				success:function(data){	
					if(data != ""){
					 option=[];		
					 option['themeCustom']=["#588c7e","#f2e394","#f2ae72","#d96459","#8c4646"];
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
					 $("#Chart_emp_by_pos_year").css({"text-align":"left"});
					 stackLineChart("Chart_emp_by_pos_year",data,option);	
				}else{
//					$("#Chart_emp_by_pos_year").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"140px"});
					$("#Chart_emp_by_pos_year").css({"text-align":"center"});
					$("#Chart_emp_by_pos_year").text('ไม่มีข้อมูล');
				}
						 
						 var i=0;
		                    $('#Chart_emp_by_pos_year').bind('jqplotDataClick',                
		                    		 function (ev, seriesIndex, pointIndex, data) {    
		                             if((i%2)!=0){
		                            	 option=[];
		                                 option['param']= {"emp_paramTypeYear":$("#embemp_paramTypeYear").val(),"emp_paramYear":$("#embemp_paramYear").val(),"emp_paramPosIsm":$("#embemp_paramPosIsm").val(),"emp_paramTypeLineIsm":$("#embemp_paramTypeLineIsm").val(),"emp_paramSize":$("#embemp_paramSizeList").val()};
		                           	 var cateparamYear = getCate("../../Model/Employee/emp_by_pos_year.jsp",pointIndex,option);
		                           	 
		                           	$(".Year").html(cateparamYear).val();
		                           
		                           	//console.log(cateparamYear);
		                           	 $("#Chart_emp_by_pos_fac_a").empty();
									 $("#Chart_emp_by_pos_fac_b").empty();

									 emp_by_pos_fac_a($("#embemp_paramTypeYear").val(),cateparamYear,$("#embemp_paramPosIsm").val(),$("#embemp_paramTypeLineIsm").val());
									 emp_by_pos_fac_b($("#embemp_paramTypeYear").val(),cateparamYear,$("#embemp_paramPosIsm").val(),$("#embemp_paramTypeLineIsm").val());
		                             }
		                             i++;                                 
		                      	}
		                      );
		                    
					}
				});
			
			var emp_by_pos_fac_a = function(aremp_paramTypeYear,aremp_paramYear,aremp_paramPosIsm,aremp_paramTypeLineIsm){	
			$.ajax({
				url: "../../Model/Employee/emp_by_pos_fac_a.jsp",
				type: "get",
				dataType: "json",
				data:{"emp_paramTypeYear":aremp_paramTypeYear,"emp_paramYear":aremp_paramYear,"emp_paramPosIsm":aremp_paramPosIsm,"emp_paramTypeLineIsm":aremp_paramTypeLineIsm},
				success:function(data){
					if(data != ""){
					option=[];		
					option['themeCustom']=["#588c7e","#f2e394","#f2ae72","#d96459","#8c4646"];
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
					 option['cateRotate']=-45;
					 $("#Chart_emp_by_pos_fac_a").css({"text-align":"left"});
					 stackLineChart("Chart_emp_by_pos_fac_a",data,option);	
				}else{
//					$("#Chart_emp_by_pos_fac_a").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"140px"});
					$("#Chart_emp_by_pos_fac_a").css({"text-align":"center"});
					$("#Chart_emp_by_pos_fac_a").text('ไม่มีข้อมูล');
				}
					}
				});
			};
			emp_by_pos_fac_a($("#embemp_paramTypeYear").val(),$("#embemp_paramYear").val(),$("#embemp_paramPosIsm").val(),$("#embemp_paramTypeLineIsm").val());
			
			var emp_by_pos_fac_b = function(aremp_paramTypeYear,aremp_paramYear,aremp_paramPosIsm,aremp_paramTypeLineIsm){
			$.ajax({
				url: "../../Model/Employee/emp_by_pos_fac_b.jsp",
				type: "get",
				dataType: "json",
				data:{"emp_paramTypeYear":aremp_paramTypeYear,"emp_paramYear":aremp_paramYear,"emp_paramPosIsm":aremp_paramPosIsm,"emp_paramTypeLineIsm":aremp_paramTypeLineIsm},
				success:function(data){
					if(data != ""){
					 option=[];
					 option['themeCustom']=["#588c7e","#f2e394","#f2ae72","#d96459","#8c4646"];
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
					 $("#Chart_emp_by_pos_fac_b").css({"text-align":"left"});
					 barChartHorizontal("Chart_emp_by_pos_fac_b",data,option);	
				}else{
//					$("#Chart_emp_by_pos_fac_b").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"140px"});
					$("#Chart_emp_by_pos_fac_b").css({"text-align":"center"});
					$("#Chart_emp_by_pos_fac_b").text('ไม่มีข้อมูล');
				}

					}
				});
		};
		emp_by_pos_fac_b($("#embemp_paramTypeYear").val(),$("#embemp_paramYear").val(),$("#embemp_paramPosIsm").val(),$("#embemp_paramTypeLineIsm").val());
		
		$.ajax({
			url: "../../Model/Employee/emp_posism.jsp",
			type: "get",
			dataType: "json",
			data:{"emp_paramPosIsm":$("#embemp_paramPosIsm").val()},
			success:function(data){		
				//console.log(data);
				//alert(data);
				$(".posism").html(data).val();
				}
			});
		
		}
		});
	});
});