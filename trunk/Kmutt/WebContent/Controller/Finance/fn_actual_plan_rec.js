function actual_plan_rec(targetrec){
	
	$.ajax({
		url: "../../Model/Finance/fn_actual_plan_rec.jsp",
		type: "get",
		dataType: "json",
		data:{"fn_paramDay":$("#embfn_paramDay").val(),"fn_paramArea":$("#embfn_paramArea").val(),"fn_paramOrg":$("#embfn_paramOrg").val(),"fn_paramDep":$("#embfn_paramDep").val()},
		success:function(data){
			
			if(data != ""){
				
			$("#budbe").show();
			
			var rs = data;
			var jsonObjRec = "";
			var htmlTablRec = "";
			
			htmlTablRec+="<table>";
				$.each(rs,function(index,indexEntry){

					var budget_amount = indexEntry[2];
					
					htmlTablRec+="<tr>";
						htmlTablRec+="<td>"+budget_amount+"</td>";
					htmlTablRec+="</tr>";
				});
			htmlTablRec+="</table>";
			$("#tableRec").html(htmlTablRec);	
			
			jsonObjRec+="[";
				$.each(rs,function(index,indexEntry){

					var item_group_name = indexEntry[0];
					var per_actual_budget = indexEntry[1];
			
					if(index==0){
						jsonObjRec+="{";
							jsonObjRec+="\"title\":\""+item_group_name+"\",\"subtitle\":\""+per_actual_budget+""+"%"+"\",\"ranges\":[25,50,75,100],\"measures\":["+per_actual_budget+"],\"markers\":["+per_actual_budget+"]";
						jsonObjRec+="}";
					}else{
						jsonObjRec+=",{";
							jsonObjRec+="\"title\":\""+item_group_name+"\",\"subtitle\":\""+per_actual_budget+""+"%"+"\",\"ranges\":[25,50,75,100],\"measures\":["+per_actual_budget+"],\"markers\":["+per_actual_budget+"]";
						jsonObjRec+="}";
					}
				});
			jsonObjRec+="]";
		
		var objdata = eval ("(" + jsonObjRec + ")");
			
			/*
			 var data = [
						{title: "เงินอุดหนุนทั่วไปจากรัฐ",subtitle: "65",ranges: [25, 50, 75,100],measures: [65],markers: [65]},
						{title: "ค่าบำรุง / ค่าธรรมเนียมการศึกษา",subtitle: "60",ranges: [25, 50, 75,100],measures: [60],markers: [60]},
						{title: "การบริหารสินทรัพย์",subtitle: "55",ranges: [25, 50, 75,100],measures: [55],markers: [55]},
						{title: "บริจาค",subtitle: "50",ranges: [25, 50, 75,100],measures: [50],markers: [50]},
						{title: "รายรับอื่นๆ",subtitle: "45",ranges: [25, 50, 75,100],measures: [45],markers: [45]},
						{title: "วิจัย",subtitle: "40",ranges: [25, 50, 75,100],measures: [40],markers: [40]},
						{title: "บริการวิชาการ",subtitle: "35",ranges: [25, 50, 75,100],measures: [35],markers: [35]}
			          ];
			*/
			targetrec.data(objdata);
			targetrec.render();
			
			}else{
				
			}
			
		}	
		
		
	});
};

            var datarec = [
              {title:"เงินอุดหนุนทั่วไปจากรัฐ",subtitle:"0%",ranges:[25,50,75,100],measures:[0],markers:[0]},
              {title:"ค่าบำรุง / ค่าธรรมเนียมการศึกษา",subtitle:"0%",ranges:[25,50,75,100],measures:[0],markers:[0]},
              {title:"การบริหารสินทรัพย์",subtitle:"0%",ranges:[25,50,75,100],measures:[0],markers:[0]},
              {title:"บริจาค",subtitle:"0%",ranges:[25,50,75,100],measures:[0],markers:[0]},
              {title:"รายรับอื่นๆ",subtitle:"0%",ranges:[25,50,75,100],measures:[0],markers:[0]},
              {title:"วิจัย",subtitle:"0%",ranges:[25,50,75,100],measures:[0],markers:[0]},
              {title:"บริการวิชาการ",subtitle:"0%",ranges:[25,50,75,100],measures:[0],markers:[0]}
            ];
