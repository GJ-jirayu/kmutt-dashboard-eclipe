$(document).ready(function(){
	
	var addClassAsOfTabs = function(childNo){
		$("div#tabs ul").each(function(){
			$("li",this).removeClass("TabsActive");
			$("li",this).eq(childNo).addClass("TabsActive");
		});
	};
	
// -------------tabs-1.html-------------
	$("a[href='#tabs-8']").click(function(){
		
		$(".ParamLeftSub").hide();

		$("#EmpParamTypeYear").show();
		$("#EmpParamYear").show();
		$("#EmpParamEmpTypeGroup").show();
		$("#EmpParamEmpTypeLine").show();
		$("#EmpParamDep").show();
		
		addClassAsOfTabs(7);
	$.ajax({
		url : "cp_all_employee_by_level.html",
		type:"get",
		async:false,
		datetype:"html",
		success:function(data){
			
			$("#tabs-8").html(data);
			
			$.ajax({
				url: "../../Model/Employee/emp_by_lv_short.jsp",
				type: "get",
				dataType: "json",
				data:{"emp_paramTypeYear":$("#embemp_paramTypeYear").val(),"emp_paramYear":$("#embemp_paramYear").val(),"emp_paramEmpTypeGroup":$("#embemp_paramEmpTypeGroup").val(),"emp_paramEmpTypeLine":$("#embemp_paramEmpTypeLine").val(),"emp_paramDep":$("#embemp_paramDep").val()},
				success:function(data){
				if(data != ""){
					option=[];					
					option['themeCustom']=["#4298b5"];
					//option['barWidth']=30;
					option['pointLabels']=true;
					option['pointLabelsFont']='12px';
					option['fontSize']='12px';
					option['pointLabelsColor']="#000000";
					option['location']='n';
					option['placement']='outside';
					option['tooltip']=true;
					option['clickable']=true;
					option['numberRows']=1;
					option['barPadding']=0;
					//option['stackSeries']=true;
					option['cateRotate']=-45;
					
					$("#Chart_emp_by_lv_total").css({"text-align":"left"});
					barChart("Chart_emp_by_lv_total",data,option);	
					
//					$("#Chart_emp_by_lv_age").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"140px"});
					$("#Chart_emp_by_lv_age").css({"text-align":"left"});
					$("#Chart_emp_by_lv_age").text('ไม่มีข้อมูล');
					
				}else{
//					$("#Chart_emp_by_lv_total").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"140px"});
					$("#Chart_emp_by_lv_total").css({"text-align":"center"});
					$("#Chart_emp_by_lv_total").text('ไม่มีข้อมูล');
					
//					$("#Chart_emp_by_lv_age").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"140px"});
					$("#Chart_emp_by_lv_age").css({"text-align":"center"});
					$("#Chart_emp_by_lv_age").text('ไม่มีข้อมูล');
				}
					}
				});	
			
				//option=[];
				//option['themeCustom']=["#0071c1","#01b0f1","#1d7a67","#00af50","#ffcce6","#f491bc","#ffc68c","#ffc000","#79c6ff","#97e2ff","#66c6b3","#62ffa9","#e27e76","#cae9a7","#fb9a3b","#ffe082"];
				//option['pointLabels']=true;
				//option['pointLabelsFont']='12px';
				//option['fontSize']='12px';
				//option['pointLabelsColor']="#000000";
				//option['tooltip']=true;
				//option['placement']='outside';
				//option['location']='n';
				//option['maxY']=true;
				//option['showLine']=false;
                //lineChart("Chart_emp_by_lv_age",data,option);	
				
		}
		});
	});
});