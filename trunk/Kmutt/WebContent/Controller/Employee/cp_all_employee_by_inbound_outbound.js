$(document).ready(function(){
	
	var addClassAsOfTabs = function(childNo){
		$("div#tabs ul").each(function(){
			$("li",this).removeClass("TabsActive");
			$("li",this).eq(childNo).addClass("TabsActive");
		});
	};
	
// -------------tabs-1.html-------------
	$("a[href='#tabs-5']").click(function(){
		
		$(".ParamLeftSub").hide();

		$("#EmpParamTypeYear").show();
		$("#EmpParamYear").show();
		$("#EmpParamPos").show();
		$("#EmpParamYearSub").show();
		
		addClassAsOfTabs(4);
	$.ajax({
		url : "cp_all_employee_by_inbound_outbound.html",
		type:"get",
		async:false,
		datetype:"html",
		success:function(data){
			
			$("#tabs-5").html(data);
			
			$.ajax({
				url: "../../Model/Employee/emp_by_in_out_year.jsp",
				type: "get",
				dataType: "json",
				data:{"emp_paramTypeYear":$("#embemp_paramTypeYear").val(),"emp_paramYear":$("#embemp_paramYear").val(),"emp_paramPos":$("#embemp_paramPos").val(),"emp_paramSize":$("#embemp_paramSizeList").val()},
				success:function(data){
				if(data != ""){
					option=[];
					 option['themeCustom']=["#0e8394","#cf3065","#f6a23e"];
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
					 $("#Chart_emp_by_in_out_year").css({"text-align":"left"});
					barLineChart("Chart_emp_by_in_out_year",data,option);	
				}else{
//					$("#Chart_emp_by_in_out_year").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"140px"});
					$("#Chart_emp_by_in_out_year").css({"text-align":"center"});
					$("#Chart_emp_by_in_out_year").text('ไม่มีข้อมูล');
				}
					 var i=0;
	                    $('#Chart_emp_by_in_out_year').bind('jqplotDataClick',                
	                    		 function (ev, seriesIndex, pointIndex, data) {    
	                             if((i%2)!=0){
	                            	 option=[];
	                                 option['param']= {"emp_paramTypeYear":$("#embemp_paramTypeYear").val(),"emp_paramYear":$("#embemp_paramYear").val(),"emp_paramPos":$("#embemp_paramPos").val(),"emp_paramSize":$("#embemp_paramSizeList").val()};
	                           	 var cateparamYear = getCate("../../Model/Employee/emp_by_in_out_year.jsp",pointIndex,option);
	                           	 
	                           	$(".Year").html(cateparamYear).val();
	                           
	                           	//console.log(cateparamYear);
	                           	 $("#Chart_emp_by_in_out_fac").empty();

	                           	emp_by_in_out_fac($("#embemp_paramTypeYear").val(),cateparamYear,$("#embemp_paramPos").val());
	                             }
	                             i++;                                 
	                      	}
	                      );
						 
					}
				});
		
			var emp_by_in_out_fac = function(aremp_paramTypeYear,aremp_paramYear,aremp_paramPos){
			$.ajax({
				url: "../../Model/Employee/emp_by_in_out_fac.jsp",
				type: "get",
				dataType: "json",
				data:{"emp_paramTypeYear":aremp_paramTypeYear,"emp_paramYear":aremp_paramYear,"emp_paramPos":aremp_paramPos},
				success:function(data){
				if(data != ""){
					option=[];
					option['themeCustom']=["#0e8394","#cf3065","#f6a23e"];
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
					 $("#Chart_emp_by_in_out_fac").css({"text-align":"left"});
					barLineChart("Chart_emp_by_in_out_fac",data,option);
				}else{
//					$("#Chart_emp_by_in_out_fac").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"140px"});
					$("#Chart_emp_by_in_out_fac").css({"text-align":"center"});
					$("#Chart_emp_by_in_out_fac").text('ไม่มีข้อมูล');
				}	 
					}
				});
			};
			emp_by_in_out_fac($("#embemp_paramTypeYear").val(),$("#embemp_paramYear").val(),$("#embemp_paramPos").val());
		}
		});
	});
});