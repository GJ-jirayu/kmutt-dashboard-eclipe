function actual_plan_exp(targetexp){
	
	$(".Day").html(($("#fn_paramDay option:selected").text()));
	
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

	$.ajax({
		url: "../../Model/Finance/fn_actual_plan_exp.jsp",
		type: "get",
		dataType: "json",
		data:{"fn_paramDay":$("#embfn_paramDay").val(),"fn_paramArea":$("#embfn_paramArea").val(),"fn_paramOrg":$("#embfn_paramOrg").val(),"fn_paramDep":$("#embfn_paramDep").val()},
		success:function(data){
				
			if(data != ""){
				
				$("#budpay").show();
				
				var rs = data;
				var jsonObjExp = "";
				var htmlTableExp = "";
				
				htmlTableExp+="<table>";
					$.each(rs,function(index,indexEntry){
						
						var budget_amount = indexEntry[2];
					
						htmlTableExp+="<tr>";
							htmlTableExp+="<td>"+budget_amount+"</td>";
						htmlTableExp+="</tr>";
					});
				htmlTableExp+="</table>";
				$("#tableExp").html(htmlTableExp);
				
				jsonObjExp+="[";
					$.each(rs,function(index,indexEntry){
	
					var item_group_name = indexEntry[0];
					var per_actual_budget = indexEntry[1];
					
					if(index==0){
						jsonObjExp+="{";
							jsonObjExp+="\"title\":\""+item_group_name+"\",\"subtitle\":\""+per_actual_budget+""+"%"+"\",\"ranges\":[25,50,75,100],\"measures\":["+per_actual_budget+"],\"markers\":["+per_actual_budget+"]";
						jsonObjExp+="}";
					}else{
						jsonObjExp+=",{";
							jsonObjExp+="\"title\":\""+item_group_name+"\",\"subtitle\":\""+per_actual_budget+""+"%"+"\",\"ranges\":[25,50,75,100],\"measures\":["+per_actual_budget+"],\"markers\":["+per_actual_budget+"]";
						jsonObjExp+="}";
					}
					
					});
				jsonObjExp+="]";
				
				var objdata = eval ("(" + jsonObjExp + ")");
				
				/*
				var data = [
				            {title: "เงินเดือน ค่าจ้าง สวัสดิการ",subtitle: "80.80",ranges: [25, 50, 75,100],measures: [80.80],markers: [80.80]},
				            {title: "ค่าตอบแทน ใช้สอย วัสดุ",subtitle: "70",ranges: [25, 50, 75,100],measures: [70],markers: [70]},
				            {title: "ค่าสาธารณูปโภค",subtitle: "60",ranges: [25, 50, 75,100],measures: [60],markers: [60]},
				            {title: "อุดหนุน",subtitle: "50",ranges: [25, 50, 75,100],measures: [50],markers: [50]},
				            {title: "รายจ่ายอื่น",subtitle: "40",ranges: [25, 50, 75,100],measures: [40],markers: [40]},
				            {title: "ครุภัณฑ์",subtitle: "30",ranges: [25, 50, 75,100],measures: [30],markers: [30]},
				            {title: "อาคาร สิ่งก่อสร้าง",subtitle: "20",ranges: [25, 50, 75,100],measures: [20],markers: [20],}
				          ];
				console.log(data);
				*/
				targetexp.data(objdata);
				targetexp.render();
				
			}else{
				
			}
			
			actual_plan_rec(vis_rec);
			
		}
	});

};

			var dataexp = [
              {title:"เงินเดือน ค่าจ้าง สวัสดิการ",subtitle:"0%",ranges:[25,50,75,100],measures:[0],markers:[0]},
              {title:"ค่าตอบแทน ใช้สอย วัสดุ",subtitle:"0%",ranges:[25,50,75,100],measures:[0],markers:[0]},
              {title:"ค่าสาธารณูปโภค",subtitle:"0%",ranges:[25,50,75,100],measures:[0],markers:[0]},
              {title:"อุดหนุน",subtitle:"0%",ranges:[25,50,75,100],measures:[0],markers:[0]},
              {title:"รายจ่ายอื่น",subtitle:"0%",ranges:[25,50,75,100],measures:[0],markers:[0]},
              {title:"ครุภัณฑ์",subtitle:"0%",ranges:[25,50,75,100],measures:[0],markers:[0]},
              {title:"อาคาร สิ่งก่อสร้าง",subtitle:"0%",ranges:[25,50,75,100],measures:[0],markers:[0]}
            ];
