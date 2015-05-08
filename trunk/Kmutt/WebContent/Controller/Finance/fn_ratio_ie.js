$(document).ready(function(){
	
	var addClassAsOfTabs = function(childNo){
		$("div#tabs ul").each(function(){
			$("li",this).removeClass("TabsActive");
			$("li",this).eq(childNo).addClass("TabsActive");
		});
	};
	
	$("a[href='#tabs-2']").click(function(){
		
		addClassAsOfTabs(1);
		
	$.ajax({
		url : "fn_ratio_ie.html",
		type:"get",
		async:false,
		datetype:"html",
		success:function(data){
			
			$("#tabs-2").html(data);
			
			$(".detailChartdepie").hide();
			
			$(".Year").html($("#embfn_paramYear").val());
			
			$.ajax({
				url: "../../Model/Parameter/fn_paramAreaName.jsp",
				type: "get",
				dataType: "json",
				data:{"fn_paramArea":$("#embfn_paramArea").val()},
				success:function(data){
					 $(".Area").html(data).val();
				}
			});
			
			$.ajax({
				url: "../../Model/Parameter/fn_paramOrgName.jsp",
				type: "get",
				dataType: "json",
				data:{"fn_paramOrg":$("#embfn_paramOrg").val()},
				success:function(data){
					 $(".Org").html(data).val();
				}
			});
				
			$.ajax({
				url: "../../Model/Parameter/fn_paramDepName.jsp",
				type: "get",
				dataType: "json",
				data:{"fn_paramDep":$("#embfn_paramDep").val()},
				success:function(data){
					 $(".Dep").html(data).val();
				}
			});
			
			var fn_ratio_ie = function(arfn_paramYear,arfn_paramArea,arfn_paramOrg,arfn_paramDep){
				$.ajax({
					url: "../../Model/Finance/fn_ratio_ie.jsp",
					type: "get",
					dataType: "json",
					data:{"fn_paramYear":arfn_paramYear,"fn_paramArea":arfn_paramArea,"fn_paramOrg":arfn_paramOrg,"fn_paramDep":arfn_paramDep},
					success:function(data){
						if(data != ""){
							option=[];		
							 option['labelHeightAdjust']= '-5' ;
							 option['ticks']="[0, 0.5,1.0,1.5,2.0]";
							 option['intervals']="[0,1,2.0]";
							 option['intervalColors']="['#ff0000','#ff0000','#59e159']";
							 $("#Chart_fn_ratio_ie").css({"text-align":"left"});
							 gaugeChart("Chart_fn_ratio_ie",data,option);	
							 $("#fn_ratio_ie_val").html(data).val();
						}else{
							$("#Chart_fn_ratio_ie").css({"text-align":"center"});
							$("#Chart_fn_ratio_ie").text('ไม่มีข้อมูล');
						}
					}
				});	
			};
			fn_ratio_ie($("#embfn_paramYear").val(),$("#embfn_paramArea").val(),$("#embfn_paramOrg").val(),$("#embfn_paramDep").val());
				
				$.ajax({
					url: "../../Model/Finance/fn_ratio_ie_fac.jsp",
					type: "get",
					dataType: "json",
					data:{"fn_paramYear":$("#embfn_paramYear").val(),"fn_paramArea":$("#embfn_paramArea").val(),"fn_paramOrg":$("#embfn_paramOrg").val()},
					success:function(data){
						if(data != ""){
							 option=[];					
							 option['themeCustom']=["#0e8394","#cf3065","#54ad5d"];
							 option['barWidth']=10;
//							 option['pointLabels']=true;
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
		  					$("#Chart_fn_ratio_ie_fac_unit").show();
		  					$("#Chart_fn_ratio_ie_fac").css({"text-align":"left"});
							 barChart("Chart_fn_ratio_ie_fac",data,option);
						}else{
							$("#Chart_fn_ratio_ie_fac_unit").hide();
							$("#Chart_fn_ratio_ie_fac").css({"text-align":"center"});
							$("#Chart_fn_ratio_ie_fac").text('ไม่มีข้อมูล');
						}
						
	                    $('#Chart_fn_ratio_ie_fac').bind('jqplotDataClick',                
	                    		 function (ev, seriesIndex, pointIndex, data) {    
	                             option=[];
	                             option['param']={"fn_paramYear":$("#embfn_paramYear").val(),"fn_paramArea":$("#embfn_paramArea").val(),"fn_paramOrg":$("#embfn_paramOrg").val()};
	                             var cateparamOrgName = getCate("../../Model/Finance/fn_ratio_ie_fac_name.jsp",pointIndex,option);
	                           	 var cateparamOrgCode = getCate("../../Model/Finance/fn_ratio_ie_fac_code.jsp",pointIndex,option);
	                           	 
	                           	$(".Org").html(cateparamOrgName).val();
	                           	
	                           	$("#Chart_fn_ratio_ie").empty();
	                           	$("#Chart_fn_ratio_ie_fac_year").empty();
	                           	$("#Chart_fn_ratio_ie_dep").empty();
	                           	$("#Chart_fn_ratio_ie_dep_year").empty();
								 
	                           	fn_ratio_ie($("#embfn_paramYear").val(),$("#embfn_paramArea").val(),cateparamOrgCode,$("#embfn_paramDep").val());
								fn_ratio_ie_fac_year($("#embfn_paramYear").val(),$("#embfn_paramArea").val(),cateparamOrgCode,$("#embfn_paramDep").val());
								fn_ratio_ie_dep($("#embfn_paramYear").val(),$("#embfn_paramArea").val(),cateparamOrgCode,$("#embfn_paramDep").val());
								fn_ratio_ie_dep_year($("#embfn_paramYear").val(),$("#embfn_paramArea").val(),cateparamOrgCode,$("#embfn_paramDep").val());
								
								$(".detailChartdepie").show();
								
	                      	}
	                     );
					}
				});
				
				var fn_ratio_ie_fac_year = function(arfn_paramYear,arfn_paramArea,arfn_paramOrg){
					$.ajax({
						url: "../../Model/Finance/fn_ratio_ie_fac_year.jsp",
						type: "get",
						dataType: "json",
						data:{"fn_paramYear":arfn_paramYear,"fn_paramArea":arfn_paramArea,"fn_paramOrg":arfn_paramOrg},
						success:function(data){
							if(data != ""){
								 option=[];					
								 option['themeCustom']=["#21d1eb","#0e8394","#eeb5c8","#cf3065","#8fc995","#54ad5d"];
								 option['barWidth']=10;
//								 option['pointLabels']=true;
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
			  					$("#Chart_fn_ratio_ie_fac_year_unit").show();
			  					$("#Chart_fn_ratio_ie_fac_year").css({"text-align":"left"});
								 barChart("Chart_fn_ratio_ie_fac_year",data,option);
							}else{
								$("#Chart_fn_ratio_ie_fac_year_unit").hide();
								$("#Chart_fn_ratio_ie_fac_year").css({"text-align":"center"});
								$("#Chart_fn_ratio_ie_fac_year").text('ไม่มีข้อมูล');
								
							}
						}
					});
				};
				fn_ratio_ie_fac_year($("#embfn_paramYear").val(),$("#embfn_paramArea").val(),$("#embfn_paramOrg").val());	
				
				var fn_ratio_ie_dep = function(arfn_paramYear,arfn_paramArea,arfn_paramOrg){
				$.ajax({
					url: "../../Model/Finance/fn_ratio_ie_dep.jsp",
					type: "get",
					dataType: "json",
					data:{"fn_paramYear":arfn_paramYear,"fn_paramArea":arfn_paramArea,"fn_paramOrg":arfn_paramOrg,"fn_paramDep":$("#embfn_paramDep").val()},
					success:function(data){
						if(data != ""){
							option=[];					
							 option['themeCustom']=["#0e8394","#cf3065","#54ad5d"];
							 option['barWidth']=10;
//							 option['pointLabels']=true;
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
		  					$("#Chart_fn_ratio_ie_dep_unit").show();
		  					$("#Chart_fn_ratio_ie_dep").css({"text-align":"left"});
							 barChart("Chart_fn_ratio_ie_dep",data,option);
						}else{
							$("#Chart_fn_ratio_ie_dep_unit").hide();
							$("#Chart_fn_ratio_ie_dep").css({"text-align":"center"});
							$("#Chart_fn_ratio_ie_dep").text('ไม่มีข้อมูล');
						}
						
	                    $('#Chart_fn_ratio_ie_dep').bind('jqplotDataClick',                
	                    	function (ev, seriesIndex, pointIndex, data) {    
	                        	//option=[];
	                        	option['param']= {"fn_paramYear":arfn_paramYear,"fn_paramArea":arfn_paramArea,"fn_paramOrg":arfn_paramOrg,"fn_paramDep":$("#embfn_paramDep").val()};
	                        	var cateparamDepCode = getCate("../../Model/Finance/fn_ratio_ie_dep_code.jsp",pointIndex,option);
	                        	
	                        	$.ajax({
	                				url: "../../Model/Parameter/fn_paramDepName.jsp",
	                				type: "get",
	                				dataType: "json",
	                				data:{"fn_paramDep":cateparamDepCode},
	                				success:function(data){
	                					 $(".Dep").html(data).val();
	                				}
	                			});
	                           	
	                           	$("#Chart_fn_ratio_ie").empty();
	                           	$("#Chart_fn_ratio_ie_dep_year").empty();
								 
								fn_ratio_ie($("#embfn_paramYear").val(),$("#embfn_paramArea").val(),$("#embfn_paramOrg").val(),cateparamDepCode);
								fn_ratio_ie_dep_year(arfn_paramYear,arfn_paramArea,arfn_paramOrg,cateparamDepCode);
	                      	}
	                     );
						
					}
				});
			};
			fn_ratio_ie_dep($("#embfn_paramYear").val(),$("#embfn_paramArea").val(),$("#embfn_paramOrg").val(),$("#embfn_paramDep").val());
				
			var fn_ratio_ie_dep_year = function(arfn_paramYear,arfn_paramArea,arfn_paramOrg,arfn_paramDep){
				$.ajax({
					url: "../../Model/Finance/fn_ratio_ie_dep_year.jsp",
					type: "get",
					dataType: "json",
					data:{"fn_paramYear":arfn_paramYear,"fn_paramArea":arfn_paramArea,"fn_paramOrg":arfn_paramOrg,"fn_paramDep":arfn_paramDep},
					success:function(data){
						if(data != ""){
							 option=[];					
							 option['themeCustom']=["#21d1eb","#0e8394","#eeb5c8","#cf3065","#8fc995","#54ad5d"];
							 option['barWidth']=10;
//							 option['pointLabels']=true;
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
		  					 $("#Chart_fn_ratio_ie_dep_year_unit").show();
		  					 $("#Chart_fn_ratio_ie_dep_year").css({"text-align":"left"});
							 barChart("Chart_fn_ratio_ie_dep_year",data,option); 
						}else{
							$("#Chart_fn_ratio_ie_dep_year_unit").hide();
							$("#Chart_fn_ratio_ie_dep_year").css({"text-align":"center"});
							$("#Chart_fn_ratio_ie_dep_year").text('ไม่มีข้อมูล');
						}
					}
				});
			};
			fn_ratio_ie_dep_year($("#embfn_paramYear").val(),$("#embfn_paramArea").val(),$("#embfn_paramOrg").val(),$("#embfn_paramDep").val());
			}
		});
	});
});