$(document).ready(function() {
	$("#tabs").tabs();
	
//FnParamYear
	function cerateFnParamYear(){
		$.ajax({
			url:"../../Model/Parameter/fn_paramYear.jsp",
			type:"get",
			dataType:"json",
			async:false,
			success:function(data){
				var htmlFnParamYear="";
				htmlFnParamYear+="<select id=\"fn_paramYear\">";
				$.each(data,function(index,indexEntry){
					if(index==1){
						htmlFnParamYear+="<option selected=\"selected\">";
						htmlFnParamYear+=indexEntry[0];
						htmlFnParamYear+="</option>";
					}else{
						htmlFnParamYear+="<option>";
						htmlFnParamYear+=indexEntry;
						htmlFnParamYear+="</option>";	
					}					
				});
				htmlFnParamYear+="</select>";
				$("#fn_paramYearList").html(htmlFnParamYear);
				$("#fn_paramYear").kendoDropDownList();
			}
		});
	}
	cerateFnParamYear();
//FnParamYear
	
	//FnParamGetReportFilter
	function cerateFnParamGetReportFilter(){
		$.ajax({
			url:"../../Model/Parameter/fn_paramGetReportFilter.jsp",
			type:"get",
			dataType:"json",
			//data:{"paramUser": paramUser},
			async:false,
			success:function(data){
				
				var rs = data;
				
				$.each(rs,function(index,indexEntry){
					
					var area = indexEntry[0];
					var org = indexEntry[1];
					var dep = indexEntry[2];
					
					function cerateFnParamArea(paramFnArea){
						$.ajax({
							url:"../../Model/Parameter/fn_paramArea.jsp",
							type:"get",
							dataType:"json",
							data:{"paramFnArea": paramFnArea},
							async:false,
							success:function(data){
								var htmlFnParamArea="";
								htmlFnParamArea+="<select id=\"fn_paramArea\">";
								$.each(data,function(index,indexEntry){
									
									if(index==0){
										htmlFnParamArea+="<option selected=\"selected\" value=\""+indexEntry[0]+"\">";
										htmlFnParamArea+=indexEntry[1];
										htmlFnParamArea+="</option>";
									}else{
										htmlFnParamArea+="<option value=\""+indexEntry[0]+"\">";
										htmlFnParamArea+=indexEntry[1];
										htmlFnParamArea+="</option>";	
									}
									
								});
								htmlFnParamArea+="</select>";
								$("#fn_paramAreaList").html(htmlFnParamArea);
								$("#fn_paramArea").kendoDropDownList();
							}
						});
					}
					cerateFnParamArea(area);

					//FnParamOrg
					function cerateFnParamOrg(paramFnArea,paramFnOrg){
						$.ajax({
							url:"../../Model/Parameter/fn_paramOrg.jsp",
							type:"get",
							dataType:"json",
							data:{"paramFnArea": paramFnArea,"paramFnOrg": paramFnOrg},
							async:false,
							success:function(data){
								var htmlFnParamOrg="";
								htmlFnParamOrg+="<select id=\"fn_paramOrg\">";
								$.each(data,function(index,indexEntry){
								
									if(index==0){
										htmlFnParamOrg+="<option selected=\"selected\" value=\""+indexEntry[0]+"\">";
										htmlFnParamOrg+=indexEntry[1];
										htmlFnParamOrg+="</option>";
									}else{
										htmlFnParamOrg+="<option value=\""+indexEntry[0]+"\">";
										htmlFnParamOrg+=indexEntry[1];
										htmlFnParamOrg+="</option>";	
									}
									
								});
								htmlFnParamOrg+="</select>";
								$("#fn_paramOrgList").html(htmlFnParamOrg);
								$("#fn_paramOrg").kendoDropDownList();
							}
						});
					}
					cerateFnParamOrg(area,org);
				//FnParamOrg
					$("#fn_paramArea").change(function(){
						cerateFnParamOrg($(this).val(),'All');
						cerateFnParamDep($(this).val(),'All','All');
						$("#fn_paramOrg").change(function(){
							cerateFnParamDep('All',$(this).val(),'All');
						});
					});
					
					$("#fn_paramOrg").change(function(){
						cerateFnParamDep('All',$(this).val(),'All');
					});
					
				//FnParamDep
					function cerateFnParamDep(paramFnArea,paramFnOrg,paramFnDep){
						$.ajax({
							url:"../../Model/Parameter/fn_paramDep.jsp",
							type:"get",
							dataType:"json",
							data:{"paramFnArea": paramFnArea,"paramFnOrg": paramFnOrg,"paramFnDep": paramFnDep},
							async:false,
							success:function(data){
								var htmlFnParamDep="";
								htmlFnParamDep+="<select id=\"fn_paramDep\">";
								$.each(data,function(index,indexEntry){

									if(index==0){
										htmlFnParamDep+="<option selected=\"selected\" value=\""+indexEntry[0]+"\">";
										htmlFnParamDep+=indexEntry[1];
										htmlFnParamDep+="</option>";
									}else{
										htmlFnParamDep+="<option value=\""+indexEntry[0]+"\">";
										htmlFnParamDep+=indexEntry[1];
										htmlFnParamDep+="</option>";	
									}
									
								});
								htmlFnParamDep+="</select>";
								$("#fn_paramDepList").html(htmlFnParamDep);
								$("#fn_paramDep").kendoDropDownList();
							}
						});
					}
					cerateFnParamDep(area,org,dep);
				//FnParamDep
				});
			}
		});
	}
	cerateFnParamGetReportFilter();
//FnParamGetReportFilter
	
$("form#formAction").submit(function(){		
	$(".empParam").remove();	
	$("body").append("<input type=\"hidden\" id=\"embfn_paramYear\" 				name=\"embfn_paramYear\" 				class=\"empParam\" value="+$("#fn_paramYear").val()+">");
	$("body").append("<input type=\"hidden\" id=\"embfn_paramGetReportFilter\" 		name=\"embfn_paramGetReportFilter\" 	class=\"empParam\" value="+$("#fn_paramGetReportFilter").val()+">");
	$("body").append("<input type=\"hidden\" id=\"embfn_paramArea\" 				name=\"embfn_paramArea\" 				class=\"empParam\" value="+$("#fn_paramArea").val()+">");
	$("body").append("<input type=\"hidden\" id=\"embfn_paramOrg\" 					name=\"embfn_paramOrg\" 				class=\"empParam\" value="+$("#fn_paramOrg").val()+">");
	$("body").append("<input type=\"hidden\" id=\"embfn_paramDep\" 					name=\"embfn_paramDep\" 				class=\"empParam\" value="+$("#fn_paramDep").val()+">");
	//hidden
	$("div#tabs ul").each(function(){
		if($("li",this).eq(0).hasClass("TabsActive")){
			$("[href='#tabs-1']").trigger("click");
		}else if($("li",this).eq(1).hasClass("TabsActive")){
			$("[href='#tabs-2']").trigger("click");
		}else if($("li",this).eq(2).hasClass("TabsActive")){
			$("[href='#tabs-3']").trigger("click");
		}else{
			false;
		}

	});
	
return false;
});

setTimeout(function(){
	 $("#btnSubmit").trigger("click");
},500);

setTimeout(function(){
	$("a[href='#tabs-1']").trigger("click");
},800);

});