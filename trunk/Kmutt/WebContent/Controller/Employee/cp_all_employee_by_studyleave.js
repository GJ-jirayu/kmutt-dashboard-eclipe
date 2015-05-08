$(document).ready(function(){
	
	var addClassAsOfTabs = function(childNo){
		$("div#tabs ul").each(function(){
			$("li",this).removeClass("TabsActive");
			$("li",this).eq(childNo).addClass("TabsActive");
		});
	};
	
// -------------tabs-1.html-------------
	$("a[href='#tabs-6']").click(function(){
		
		$(".ParamLeftSub").hide();

		$("#EmpParamTypeYear").show();
		$("#EmpParamYear").show();
		$("#EmpParamPos").show();
		$("#EmpParamBou").show();
		$("#EmpParamYearSub").show();
		
		addClassAsOfTabs(5);
	$.ajax({
		url : "cp_all_employee_by_studyleave.html",
		type:"get",
		async:false,
		datetype:"html",
		success:function(data){
			
			$("#tabs-6").html(data);
			
			$.ajax({
				url: "../../Model/Employee/emp_by_study_year.jsp",
				type: "get",
				dataType: "json",
				data:{"emp_paramTypeYear":$("#embemp_paramTypeYear").val(),"emp_paramYear":$("#embemp_paramYear").val(),"emp_paramPos":$("#embemp_paramPos").val(),"emp_paramBou":$("#embemp_paramBou").val(),"emp_paramSize":$("#embemp_paramSizeList").val()},
				success:function(data){
				if(data != ""){
					option=[];					
					option['themeCustom']=["#adc4cc","#bed0a6","#4298b5","#92b06a"];
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
					$("#Chart_emp_by_study_year").css({"text-align":"left"});
					barChart("Chart_emp_by_study_year",data,option);
				}else{
//					$("#Chart_emp_by_study_year").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"140px"});
					$("#Chart_emp_by_study_year").css({"text-align":"center"});
					$("#Chart_emp_by_study_year").text('ไม่มีข้อมูล');
				}       
					var i=0;
                    $('#Chart_emp_by_study_year').bind('jqplotDataClick',                
                    		 function (ev, seriesIndex, pointIndex, data) {    
                             if((i%2)!=0){
                            	 option=[];
                                 option['param']= {"emp_paramTypeYear":$("#embemp_paramTypeYear").val(),"emp_paramYear":$("#embemp_paramYear").val(),"emp_paramPos":$("#embemp_paramPos").val(),"emp_paramBou":$("#embemp_paramBou").val(),"emp_paramSize":$("#embemp_paramSizeList").val()};
                           	 var cateparamYear = getCate("../../Model/Employee/emp_by_study_year.jsp",pointIndex,option);
                           	 
                           	$(".Year").html(cateparamYear).val();
                           
                           	//console.log(cateparamYear);
                           	 $("#Chart_emp_by_study_fac_a").empty();
							 $("#Chart_emp_by_study_fac_b").empty();

							 emp_by_study_fac_a($("#embemp_paramTypeYear").val(),cateparamYear,$("#embemp_paramPos").val(),$("#embemp_paramBou").val());
							 emp_by_study_fac_b($("#embemp_paramTypeYear").val(),cateparamYear,$("#embemp_paramPos").val(),$("#embemp_paramBou").val());
                             }
                             i++;                                 
                      	}
                      );
					
					}
				});
				
			var emp_by_study_fac_a = function(aremp_paramTypeYear,aremp_paramYear,aremp_paramPos,aremp_paramBou){
			$.ajax({
				url: "../../Model/Employee/emp_by_study_fac_a.jsp",
				type: "get",
				dataType: "json",
				data:{"emp_paramTypeYear":aremp_paramTypeYear,"emp_paramYear":aremp_paramYear,"emp_paramPos":aremp_paramPos,"emp_paramBou":aremp_paramBou},
				success:function(data){
				if(data != ""){
					//console.log(data1);
					option=[];					
					option['themeCustom']=["#adc4cc","#bed0a6","#4298b5","#92b06a"];
					option['barWidth']=25;
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
					$("#Chart_emp_by_study_fac_a").css({"text-align":"left"});
					barChart("Chart_emp_by_study_fac_a",data,option);	
				}else{
//					$("#Chart_emp_by_study_fac_a").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"140px"});
					$("#Chart_emp_by_study_fac_a").css({"text-align":"center"});
					$("#Chart_emp_by_study_fac_a").text('ไม่มีข้อมูล');
				}           
					}
				});
			};
			emp_by_study_fac_a($("#embemp_paramTypeYear").val(),$("#embemp_paramYear").val(),$("#embemp_paramPos").val(),$("#embemp_paramBou").val());
			
			var emp_by_study_fac_b = function(aremp_paramTypeYear,aremp_paramYear,aremp_paramPos,aremp_paramBou){
			$.ajax({
				url: "../../Model/Employee/emp_by_study_fac_b.jsp",
				type: "get",
				dataType: "json",
				data:{"emp_paramTypeYear":aremp_paramTypeYear,"emp_paramYear":aremp_paramYear,"emp_paramPos":aremp_paramPos,"emp_paramBou":aremp_paramBou},
				success:function(data){
				if(data != ""){
					//console.log(data1);
					option=[];					
					option['themeCustom']=["#adc4cc","#bed0a6","#4298b5","#92b06a"];
					option['barWidth']=25;
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
					$("#Chart_emp_by_study_fac_b").css({"text-align":"left"});
					barChart("Chart_emp_by_study_fac_b",data,option);	
				}else{
//					$("#Chart_emp_by_study_fac_b").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"140px"});
					$("#Chart_emp_by_study_fac_b").css({"text-align":"center"});
					$("#Chart_emp_by_study_fac_b").text('ไม่มีข้อมูล');
				}           
					}
				});
		};
		emp_by_study_fac_b($("#embemp_paramTypeYear").val(),$("#embemp_paramYear").val(),$("#embemp_paramPos").val(),$("#embemp_paramBou").val());
		
		$.ajax({
			url: "../../Model/Employee/emp_pos.jsp",
			type: "get",
			dataType: "json",
			data:{"emp_paramPos":$("#embemp_paramPos").val()},
			success:function(data){		
				//console.log(data);
				//alert(data);
				$(".pos").html(data).val();
				}
			});
		
		}
		});
	});
});