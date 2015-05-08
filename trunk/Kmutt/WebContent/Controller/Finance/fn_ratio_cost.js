$(document).ready(function(){
	
	var addClassAsOfTabs = function(childNo){
		$("div#tabs ul").each(function(){
			$("li",this).removeClass("TabsActive");
			$("li",this).eq(childNo).addClass("TabsActive");
		});
	};
	
	$("a[href='#tabs-3']").click(function(){
		
		addClassAsOfTabs(2);
		
	$.ajax({
		url : "fn_ratio_cost.html",
		type:"get",
		async:false,
		datetype:"html",
		success:function(data){
			
			$("#tabs-3").html(data);	
			
			$(".detailChartdepexpcost").hide();
			$(".detailChartdepreccost").hide();
			
			$(".Year").html($("#embfn_paramYear").val());

			$.ajax({
				url: "../../Model/Parameter/fn_paramOrgName.jsp",
				type: "get",
				dataType: "json",
				data:{"fn_paramOrg":$("#embfn_paramOrg").val()},
				success:function(data){
					 $(".OrgExp").html(data).val();
					 $(".OrgRec").html(data).val();
				}
			});
				
			$.ajax({
				url: "../../Model/Parameter/fn_paramDepName.jsp",
				type: "get",
				dataType: "json",
				data:{"fn_paramDep":$("#embfn_paramDep").val()},
				success:function(data){
					 $(".DepExp").html(data).val();
					 $(".DepRec").html(data).val();
				}
			});
			
			var fn_ratio_cost_exp = function(arfn_paramYear,arfn_paramArea,arfn_paramOrg,arfn_paramDep){
				$.ajax({
					url: "../../Model/Finance/fn_ratio_cost_exp.jsp",
					type: "get",
					dataType: "json",
					data:{"fn_paramYear":arfn_paramYear,"fn_paramArea":arfn_paramArea,"fn_paramOrg":arfn_paramOrg,"fn_paramDep":arfn_paramDep},
					success:function(data){
						if(data != ""){
							 option=[];		
							 option['labelHeightAdjust']= '-5' ;
							 option['ticks']="[0,20,40,60,80,100]";
							 option['intervals']="[40,60,100]";
							 option['intervalColors']="['#59e159','#ffff37','#ff0000']";
							 $("#Chart_fn_ratio_cost_exp").css({"text-align":"left"});
							 gaugeChart("Chart_fn_ratio_cost_exp",data,option);
							 $("#fn_ratio_cost_exp_val").html(data).val();
						}else{
							$("#Chart_fn_ratio_cost_exp").css({"text-align":"center"});
							$("#Chart_fn_ratio_cost_exp").text('ไม่มีข้อมูล');
						}
					}
				});
			};
			fn_ratio_cost_exp($("#embfn_paramYear").val(),$("#embfn_paramArea").val(),$("#embfn_paramOrg").val(),$("#embfn_paramDep").val());		 		                   

			$.ajax({
				url: "../../Model/Finance/fn_ratio_cost_exp_fac.jsp",
				type: "get",
				dataType: "json",
				data:{"fn_paramYear":$("#embfn_paramYear").val(),"fn_paramArea":$("#embfn_paramArea").val(),"fn_paramOrg":$("#embfn_paramOrg").val()},
				success:function(data){
				if(data != ""){
					option=[];					
					 option['themeCustom']=["#0e8394","#cf3065","#54ad5d"];
					 option['barWidth']=10;
//					 option['pointLabels']=true;
					 option['pointLabelsFont']='12px';
					 option['fontSize']='12px';
					 option['pointLabelsColor']="#000000";
					 option['location']='n';
					 option['placement']='outside';
					 option['tooltip']=true;
					 option['clickable']=true;
					 option['numberRows']=1;
					 option['barPadding']=0;
					 option['pointLabelsDicimal']=true;
					 $("#Chart_fn_ratio_cost_exp_fac_unit").show();
					 $("#Chart_fn_ratio_cost_exp_fac").css({"text-align":"left"});
					 barChart("Chart_fn_ratio_cost_exp_fac",data,option);
				}else{
					$("#Chart_fn_ratio_cost_exp_fac_unit").hide();
					$("#Chart_fn_ratio_cost_exp_fac").css({"text-align":"center"});
					$("#Chart_fn_ratio_cost_exp_fac").text('ไม่มีข้อมูล');
				}

	                    $('#Chart_fn_ratio_cost_exp_fac').bind('jqplotDataClick',                
	                    		 function (ev, seriesIndex, pointIndex, data) {    
                            	 option=[];
                                 option['param'] = {"fn_paramYear":$("#embfn_paramYear").val(),"fn_paramArea":$("#embfn_paramArea").val(),"fn_paramOrg":$("#embfn_paramOrg").val()};
                                 var cateparamExpOrgCode = getCate("../../Model/Finance/fn_ratio_cost_exp_fac_code.jsp",pointIndex,option);
	                             var cateparamExpOrgName = getCate("../../Model/Finance/fn_ratio_cost_exp_fac_name.jsp",pointIndex,option);
	                             
	                           	$(".OrgExp").html(cateparamExpOrgName).val();
	                           	
	                           	 $("#Chart_fn_ratio_cost_exp").empty();
	                           	 $("#Chart_fn_ratio_cost_exp_fac_year").empty();
								 $("#Chart_fn_ratio_cost_exp_dep").empty();
								 $("#Chart_fn_ratio_cost_exp_dep_year").empty();
								 
								 fn_ratio_cost_exp($("#embfn_paramYear").val(),$("#embfn_paramArea").val(),cateparamExpOrgCode,$("#embfn_paramDep").val());
								 fn_ratio_cost_exp_fac_year($("#embfn_paramYear").val(),$("#embfn_paramArea").val(),cateparamExpOrgCode,$("#embfn_paramDep").val());
								 fn_ratio_cost_exp_dep($("#embfn_paramYear").val(),$("#embfn_paramArea").val(),cateparamExpOrgCode,$("#embfn_paramDep").val());
								 fn_ratio_cost_exp_dep_year($("#embfn_paramYear").val(),$("#embfn_paramArea").val(),cateparamExpOrgCode,$("#embfn_paramDep").val());
								 
								 $(".detailChartdepexpcost").show();

	                      	}
	                     );
					 
					}
				});
			
			var fn_ratio_cost_exp_fac_year = function(arfn_paramYear,arfn_paramArea,arfn_paramOrg){
			$.ajax({
				url: "../../Model/Finance/fn_ratio_cost_exp_fac_year.jsp",
				type: "get",
				dataType: "json",
				data:{"fn_paramYear":arfn_paramYear,"fn_paramArea":arfn_paramArea,"fn_paramOrg":arfn_paramOrg},
				success:function(data){
				if(data != ""){
					 option=[];					
					 option['themeCustom']=["#21d1eb","#0e8394","#eeb5c8","#cf3065","#8fc995","#54ad5d"];
					 option['barWidth']=10;
//					 option['pointLabels']=true;
					 option['pointLabelsFont']='12px';
					 option['fontSize']='12px';
					 option['pointLabelsColor']="#000000";
					 option['location']='n';
					 option['placement']='outside';
					 option['tooltip']=true;
					 option['clickable']=true;
					 option['numberRows']=2;
					 option['barPadding']=0;
					 option['pointLabelsDicimal']=true;
					 $("#Chart_fn_ratio_cost_exp_fac_year_unit").show();
					 $("#Chart_fn_ratio_cost_exp_fac_year").css({"text-align":"left"});
					 barChart("Chart_fn_ratio_cost_exp_fac_year",data,option);
				}else{
					$("#Chart_fn_ratio_cost_exp_fac_year_unit").hide();
					$("#Chart_fn_ratio_cost_exp_fac_year").css({"text-align":"center"});
					$("#Chart_fn_ratio_cost_exp_fac_year").text('ไม่มีข้อมูล');
				}
					}
				});
			};
			fn_ratio_cost_exp_fac_year($("#embfn_paramYear").val(),$("#embfn_paramArea").val(),$("#embfn_paramOrg").val());
					
			var fn_ratio_cost_exp_dep = function(arfn_paramYear,arfn_paramArea,arfn_paramOrg){
			$.ajax({
				url: "../../Model/Finance/fn_ratio_cost_exp_dep.jsp",
				type: "get",
				dataType: "json",
				data:{"fn_paramYear":arfn_paramYear,"fn_paramArea":arfn_paramArea,"fn_paramOrg":arfn_paramOrg,"fn_paramDep":$("#embfn_paramDep").val()},
				success:function(data){
				if(data != ""){
					 option=[];					
					 option['themeCustom']=["#0e8394","#cf3065","#54ad5d"];
					 option['barWidth']=10;
//					 option['pointLabels']=true;
					 option['pointLabelsFont']='12px';
					 option['fontSize']='12px';
					 option['pointLabelsColor']="#000000";
					 option['location']='n';
					 option['placement']='outside';
					 option['tooltip']=true;
					 option['clickable']=true;
					 option['numberRows']=1;
					 option['barPadding']=0;
					 option['pointLabelsDicimal']=true;
					 $("#Chart_fn_ratio_cost_exp_dep_unit").show();
					 $("#Chart_fn_ratio_cost_exp_dep").css({"text-align":"left"});
					 barChart("Chart_fn_ratio_cost_exp_dep",data,option);
				}else{
					$("#Chart_fn_ratio_cost_exp_dep_unit").hide();
					$("#Chart_fn_ratio_cost_exp_dep").css({"text-align":"center"});
					$("#Chart_fn_ratio_cost_exp_dep").text('ไม่มีข้อมูล');
				}

	                    $('#Chart_fn_ratio_cost_exp_dep').bind('jqplotDataClick',                
	                    	function (ev, seriesIndex, pointIndex, data) {    
	                            
	                    	option=[];
	                        option['param']= {"fn_paramYear":arfn_paramYear,"fn_paramArea":arfn_paramArea,"fn_paramOrg":arfn_paramOrg,"fn_paramDep":$("#embfn_paramDep").val()};
	                        
	                            var cateparamExpDepCode = getCate("../../Model/Finance/fn_ratio_cost_exp_dep_code.jsp",pointIndex,option);
	                            
	                        	$.ajax({
	                				url: "../../Model/Parameter/fn_paramDepName.jsp",
	                				type: "get",
	                				dataType: "json",
	                				data:{"fn_paramDep":cateparamExpDepCode},
	                				success:function(data){
	                					 $(".DepExp").html(data).val();
	                				}
	                			});
	                           	
	                           	 $("#Chart_fn_ratio_cost_exp").empty();
	                           	 $("#Chart_fn_ratio_cost_exp_dep_year").empty();
	                           	 
                           	fn_ratio_cost_exp($("#embfn_paramYear").val(),$("#embfn_paramArea").val(),$("#embfn_paramOrg").val(),cateparamExpDepCode);
                           	fn_ratio_cost_exp_dep_year(arfn_paramYear,arfn_paramArea,arfn_paramOrg,cateparamExpDepCode);
	                      	}
	                      );
					}
				});
			};
			fn_ratio_cost_exp_dep($("#embfn_paramYear").val(),$("#embfn_paramArea").val(),$("#embfn_paramOrg").val(),$("#embfn_paramDep").val());
			
			var fn_ratio_cost_exp_dep_year = function(arfn_paramYear,arfn_paramArea,arfn_paramOrg,arfn_paramDep){
			$.ajax({
				url: "../../Model/Finance/fn_ratio_cost_exp_dep_year.jsp",
				type: "get",
				dataType: "json",
				data:{"fn_paramYear":arfn_paramYear,"fn_paramArea":arfn_paramArea,"fn_paramOrg":arfn_paramOrg,"fn_paramDep":arfn_paramDep},
				success:function(data){
				if(data != ""){
					 option=[];					
					 option['themeCustom']=["#21d1eb","#0e8394","#eeb5c8","#cf3065","#8fc995","#54ad5d"];
					 option['barWidth']=10;
//					 option['pointLabels']=true;
					 option['pointLabelsFont']='12px';
					 option['fontSize']='12px';
					 option['pointLabelsColor']="#000000";
					 option['location']='n';
					 option['placement']='outside';
					 option['tooltip']=true;
					 option['clickable']=true;
					 option['numberRows']=2;
					 option['barPadding']=0;
					 option['pointLabelsDicimal']=true;
					 $("#Chart_fn_ratio_cost_exp_dep_year_unit").show();
					 $("#Chart_fn_ratio_cost_exp_dep_year").css({"text-align":"left"});
					 barChart("Chart_fn_ratio_cost_exp_dep_year",data,option);
					 
				}else{
					$("#Chart_fn_ratio_cost_exp_dep_year_unit").hide();
					$("#Chart_fn_ratio_cost_exp_dep_year").css({"text-align":"center"});
					$("#Chart_fn_ratio_cost_exp_dep_year").text('ไม่มีข้อมูล');
				}
					}
				});
			};
			fn_ratio_cost_exp_dep_year($("#embfn_paramYear").val(),$("#embfn_paramArea").val(),$("#embfn_paramOrg").val(),$("#embfn_paramDep").val());
			
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			
			var fn_ratio_cost_rec = function(arfn_paramYear,arfn_paramArea,arfn_paramOrg,arfn_paramDep){
				$.ajax({
					url: "../../Model/Finance/fn_ratio_cost_rec.jsp",
					type: "get",
					dataType: "json",
					data:{"fn_paramYear":arfn_paramYear,"fn_paramArea":arfn_paramArea,"fn_paramOrg":arfn_paramOrg,"fn_paramDep":arfn_paramDep},
					success:function(data){
					if(data != ""){
						option=[];		
						 option['labelHeightAdjust']= '-5' ;
						 option['ticks']="[0,20,40,60,80,100]";
						 option['intervals']="[40,60,100]";
						 option['intervalColors']="['#59e159','#ffff37','#ff0000']";
						 $("#Chart_fn_ratio_cost_rec").css({"text-align":"left"});
						 $("#fn_ratio_cost_rec_val").html(data).val();
						 gaugeChart("Chart_fn_ratio_cost_rec",data,option);
					}else{
						$("#Chart_fn_ratio_cost_rec").css({"text-align":"center"});
						$("#Chart_fn_ratio_cost_rec").text('ไม่มีข้อมูล');
					}
					}
				});
			};
			fn_ratio_cost_rec($("#embfn_paramYear").val(),$("#embfn_paramArea").val(),$("#embfn_paramOrg").val(),$("#embfn_paramDep").val());
			
			$.ajax({
				url: "../../Model/Finance/fn_ratio_cost_rec_fac.jsp",
				type: "get",
				dataType: "json",
				data:{"fn_paramYear":$("#embfn_paramYear").val(),"fn_paramArea":$("#embfn_paramArea").val(),"fn_paramOrg":$("#embfn_paramOrg").val()},
				success:function(data){
				if(data != ""){
					option=[];					
					 option['themeCustom']=["#0e8394","#cf3065","#54ad5d"];
					 option['barWidth']=10;
//					 option['pointLabels']=true;
					 option['pointLabelsFont']='12px';
					 option['fontSize']='12px';
					 option['pointLabelsColor']="#000000";
					 option['location']='n';
					 option['placement']='outside';
					 option['tooltip']=true;
					 option['clickable']=true;
					 option['numberRows']=1;
					 option['barPadding']=0;
					 option['pointLabelsDicimal']=true;
					 $("#Chart_fn_ratio_cost_rec_fac_unit").show();
					 $("#Chart_fn_ratio_cost_rec_fac").css({"text-align":"left"});
					 barChart("Chart_fn_ratio_cost_rec_fac",data,option);
				}else{
					$("#Chart_fn_ratio_cost_rec_fac_unit").hide();
					$("#Chart_fn_ratio_cost_rec_fac").css({"text-align":"center"});
					$("#Chart_fn_ratio_cost_rec_fac").text('ไม่มีข้อมูล');
				}
				
	                    $('#Chart_fn_ratio_cost_rec_fac').bind('jqplotDataClick',                
	                    		 function (ev, seriesIndex, pointIndex, data) {    
	                            	 option=[];
	                                 option['param']= {"fn_paramYear":$("#embfn_paramYear").val(),"fn_paramArea":$("#embfn_paramArea").val(),"fn_paramOrg":$("#embfn_paramOrg").val()};
	                             var cateparamOrgName = getCate("../../Model/Finance/fn_ratio_cost_rec_fac_name.jsp",pointIndex,option);
	                           	 var cateparamOrgCode = getCate("../../Model/Finance/fn_ratio_cost_rec_fac_code.jsp",pointIndex,option);
	                           	 
	                           	$(".OrgRec").html(cateparamOrgName).val();
	                           	
	                           	 $("#Chart_fn_ratio_cost_rec").empty();
	                           	 $("#Chart_fn_ratio_cost_rec_fac_year").empty();
								 $("#Chart_fn_ratio_cost_rec_dep").empty();
								 $("#Chart_fn_ratio_cost_rec_dep_year").empty();
								 
								 fn_ratio_cost_rec($("#embfn_paramYear").val(),$("#embfn_paramArea").val(),cateparamOrgCode,$("#embfn_paramDep").val());
								 fn_ratio_cost_rec_fac_year($("#embfn_paramYear").val(),$("#embfn_paramArea").val(),cateparamOrgCode);
								 fn_ratio_cost_rec_dep($("#embfn_paramYear").val(),$("#embfn_paramArea").val(),cateparamOrgCode,$("#embfn_paramDep").val());
								 fn_ratio_cost_rec_dep_year($("#embfn_paramYear").val(),$("#embfn_paramArea").val(),cateparamOrgCode,$("#embfn_paramDep").val());
								 
								 $(".detailChartdepreccost").show();
								 
	                      	}
	                     );
					 
					}
				});
			
			var fn_ratio_cost_rec_fac_year = function(arfn_paramYear,arfn_paramArea,arfn_paramOrg){
			$.ajax({
				url: "../../Model/Finance/fn_ratio_cost_rec_fac_year.jsp",
				type: "get",
				dataType: "json",
				data:{"fn_paramYear":arfn_paramYear,"fn_paramArea":arfn_paramArea,"fn_paramOrg":arfn_paramOrg},
				success:function(data){
				if(data != ""){
					 option=[];					
					 option['themeCustom']=["#21d1eb","#0e8394","#eeb5c8","#cf3065","#8fc995","#54ad5d"];
					 option['barWidth']=10;
//					 option['pointLabels']=true;
					 option['pointLabelsFont']='12px';
					 option['fontSize']='12px';
					 option['pointLabelsColor']="#000000";
					 option['location']='n';
					 option['placement']='outside';
					 option['tooltip']=true;
					 option['clickable']=true;
					 option['numberRows']=2;
					 option['barPadding']=0;
					 option['pointLabelsDicimal']=true;
					 $("#Chart_fn_ratio_cost_rec_fac_year_unit").show();
					 $("#Chart_fn_ratio_cost_rec_fac_year").css({"text-align":"left"});
					 barChart("Chart_fn_ratio_cost_rec_fac_year",data,option);
				}else{
					$("#Chart_fn_ratio_cost_rec_fac_year_unit").hide();
					$("#Chart_fn_ratio_cost_rec_fac_year").css({"text-align":"center"});
					$("#Chart_fn_ratio_cost_rec_fac_year").text('ไม่มีข้อมูล');
				}
					}
				});
			};
			fn_ratio_cost_rec_fac_year($("#embfn_paramYear").val(),$("#embfn_paramArea").val(),$("#embfn_paramOrg").val());
					
			var fn_ratio_cost_rec_dep = function(arfn_paramYear,arfn_paramArea,arfn_paramOrg){
			$.ajax({
				url: "../../Model/Finance/fn_ratio_cost_rec_dep.jsp",
				type: "get",
				dataType: "json",
				data:{"fn_paramYear":arfn_paramYear,"fn_paramArea":arfn_paramArea,"fn_paramOrg":arfn_paramOrg,"fn_paramDep":$("#embfn_paramDep").val()},
				success:function(data){
				if(data != ""){
					 option=[];					
					 option['themeCustom']=["#0e8394","#cf3065","#54ad5d"];
					 option['barWidth']=10;
//					 option['pointLabels']=true;
					 option['pointLabelsFont']='12px';
					 option['fontSize']='12px';
					 option['pointLabelsColor']="#000000";
					 option['location']='n';
					 option['placement']='outside';
					 option['tooltip']=true;
					 option['clickable']=true;
					 option['numberRows']=1;
					 option['barPadding']=0;
					 option['pointLabelsDicimal']=true;
					 $("#Chart_fn_ratio_cost_rec_dep_unit").show();
					 $("#Chart_fn_ratio_cost_rec_dep").css({"text-align":"left"});
					 barChart("Chart_fn_ratio_cost_rec_dep",data,option);
				}else{
					$("#Chart_fn_ratio_cost_rec_dep_unit").hide();
					$("#Chart_fn_ratio_cost_rec_dep").css({"text-align":"center"});
					$("#Chart_fn_ratio_cost_rec_dep").text('ไม่มีข้อมูล');
				}
	                    $('#Chart_fn_ratio_cost_rec_dep').bind('jqplotDataClick',                
	                    		 function (ev, seriesIndex, pointIndex, data) {    
	                             option=[];
	                             option['param']= {"fn_paramYear":arfn_paramYear,"fn_paramArea":arfn_paramArea,"fn_paramOrg":arfn_paramOrg,"fn_paramDep":$("#embfn_paramDep").val()};
	                             var cateparamDepCode = getCate("../../Model/Finance/fn_ratio_cost_rec_dep_code.jsp",pointIndex,option);
	                           	 
		                        	$.ajax({
		                				url: "../../Model/Parameter/fn_paramDepName.jsp",
		                				type: "get",
		                				dataType: "json",
		                				data:{"fn_paramDep":cateparamDepCode},
		                				success:function(data){
		                					 $(".DepRec").html(data).val();
		                				}
		                			});
	                           	
	                           	 $("#Chart_fn_ratio_cost_rec").empty();
	                           	 $("#Chart_fn_ratio_cost_rec_dep_year").empty();
	                           	 
	                           	fn_ratio_cost_rec(arfn_paramYear,arfn_paramArea,arfn_paramOrg,cateparamDepCode);
	                           	fn_ratio_cost_rec_dep_year(arfn_paramYear,arfn_paramArea,arfn_paramOrg,cateparamDepCode);                        
	                      	}
	                      );
					}
				});
			};
			fn_ratio_cost_rec_dep($("#embfn_paramYear").val(),$("#embfn_paramArea").val(),$("#embfn_paramOrg").val(),$("#embfn_paramDep").val());
			
			var fn_ratio_cost_rec_dep_year = function(arfn_paramYear,arfn_paramArea,arfn_paramOrg,arfn_paramDep){
			$.ajax({
				url: "../../Model/Finance/fn_ratio_cost_rec_dep_year.jsp",
				type: "get",
				dataType: "json",
				data:{"fn_paramYear":arfn_paramYear,"fn_paramArea":arfn_paramArea,"fn_paramOrg":arfn_paramOrg,"fn_paramDep":arfn_paramDep},
				success:function(data){
				if(data != ""){
					 option=[];					
					 option['themeCustom']=["#21d1eb","#0e8394","#eeb5c8","#cf3065","#8fc995","#54ad5d"];
					 option['barWidth']=10;
//					 option['pointLabels']=true;
					 option['pointLabelsFont']='12px';
					 option['fontSize']='12px';
					 option['pointLabelsColor']="#000000";
					 option['location']='n';
					 option['placement']='outside';
					 option['tooltip']=true;
					 option['clickable']=true;
					 option['numberRows']=2;
					 option['barPadding']=0;
					 option['pointLabelsDicimal']=true;
					 $("#Chart_fn_ratio_cost_rec_dep_year_unit").show();
					 $("#Chart_fn_ratio_cost_rec_dep_year").css({"text-align":"left"});
					 barChart("Chart_fn_ratio_cost_rec_dep_year",data,option);
				}else{
					$("#Chart_fn_ratio_cost_rec_dep_year_unit").hide();
					$("#Chart_fn_ratio_cost_rec_dep_year").css({"text-align":"center"});
					$("#Chart_fn_ratio_cost_rec_dep_year").text('ไม่มีข้อมูล');
				}
					}
				});
			};
			fn_ratio_cost_rec_dep_year($("#embfn_paramYear").val(),$("#embfn_paramArea").val(),$("#embfn_paramOrg").val(),$("#embfn_paramDep").val());
			
			
		}
		});
	});
});