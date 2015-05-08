

$(document).ready(function(){
	
	$("#tabs5").tabs();
	
	function addCommas(nStr){
		nStr += '';
		x = nStr.split('.');
		x1 = x[0];
		x2 = x.length > 1 ? '.' + x[1] : '';
		var rgx = /(\d+)(\d{3})/;
		while (rgx.test(x1)) {
			x1 = x1.replace(rgx, '$1' + ',' + '$2');
		}
		return x1 + x2;
	};
	//alert(addCommas(1234567));
	
	setTimeout(function(){
		
		$("a[href='#tabs8-1']").trigger("click");
	},50);
	
	$("a[href='#tabs8-1']").click(function(){
		
		$.ajax({
			url : "cp_all_employee_by_level_bar.html",
			type:"get",
			async:false,
			datetype:"html",
			success:function(data){
				$("#tabs8-1").html(data);
				
				$.ajax({
					url: "../../Model/Employee/emp_by_lv.jsp",
					type: "get",
					dataType: "json",
					data:{"emp_paramTypeYear":$("#embemp_paramTypeYear").val(),"emp_paramYear":$("#embemp_paramYear").val(),"emp_paramEmpTypeGroup":$("#embemp_paramEmpTypeGroup").val(),"emp_paramEmpTypeLine":$("#embemp_paramEmpTypeLine").val(),"emp_paramDep":$("#embemp_paramDep").val()},
					success:function(data){
					if(data != ""){	
						option=[];					
						option['themeCustom']=["#0071c1","#01b0f1","#1d7a67","#00af50","#ffcce6","#f491bc","#ffc68c","#ffc000","#79c6ff","#97e2ff","#66c6b3","#62ffa9","#e27e76","#cae9a7","#fb9a3b","#ffe082"];
						option['barWidth']=30;
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
						option['stackSeries']=true;
						$("#Chart_emp_by_lv_bar_year").css({"text-align":"left"});
						barChart("Chart_emp_by_lv_bar_year",data,option);	
					}else{
//						$("#Chart_emp_by_lv_bar_year").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"140px"});
						$("#Chart_emp_by_lv_bar_year").css({"text-align":"center"});
						$("#Chart_emp_by_lv_bar_year").text('ไม่มีข้อมูล');
					}
					$.ajax({
						url: "../../Model/Employee/emp_typegroup.jsp",
						type: "get",
						dataType: "json",
						data:{"emp_paramEmpTypeGroup":$("#embemp_paramEmpTypeGroup").val()},
						success:function(data){		
							//console.log(data);
							//alert(data);
							$(".typegroup").html(data).val();
							}
						});
					
						}
					});			
			}
			});
		});
	
	$("a[href='#tabs8-2']").click(function(){
		$.ajax({
			url : "cp_all_employee_by_level_line.html",
			type:"get",
			async:false,
			datetype:"html",
			success:function(data){
				$("#tabs8-2").html(data);
				
				$.ajax({
					url: "../../Model/Employee/emp_by_lv.jsp",
					type: "get",
					dataType: "json",
					data:{"emp_paramTypeYear":$("#embemp_paramTypeYear").val(),"emp_paramYear":$("#embemp_paramYear").val(),"emp_paramEmpTypeGroup":$("#embemp_paramEmpTypeGroup").val(),"emp_paramEmpTypeLine":$("#embemp_paramEmpTypeLine").val(),"emp_paramDep":$("#embemp_paramDep").val()},
					success:function(data){
					if(data != ""){	
						option=[];
						option['themeCustom']=["#0071c1","#01b0f1","#1d7a67","#00af50","#ffcce6","#f491bc","#ffc68c","#ffc000","#79c6ff","#97e2ff","#66c6b3","#62ffa9","#e27e76","#cae9a7","#fb9a3b","#ffe082"];
						option['pointLabels']=true;
						option['pointLabelsFont']='12px';
						option['fontSize']='12px';
						option['pointLabelsColor']="#000000";
						option['tooltip']=true;
						option['placement']='outside';
						option['location']='n';
						option['maxY']=true;
						$("#Chart_emp_by_lv_line_year").css({"text-align":"left"});
	                    lineChart("Chart_emp_by_lv_line_year",data,option);
					}else{
//						$("#Chart_emp_by_lv_line_year").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"140px"});
						$("#Chart_emp_by_lv_line_year").css({"text-align":"center"});
						$("#Chart_emp_by_lv_line_year").text('ไม่มีข้อมูล');
					}
						}
					});	
				
				$.ajax({
					url: "../../Model/Employee/emp_typegroup.jsp",
					type: "get",
					dataType: "json",
					data:{"emp_paramEmpTypeGroup":$("#embemp_paramEmpTypeGroup").val()},
					success:function(data){		
						//console.log(data);
						//alert(data);
						$(".typegroup").html(data).val();
						}
					});
				
			}
			});
		});
	
});