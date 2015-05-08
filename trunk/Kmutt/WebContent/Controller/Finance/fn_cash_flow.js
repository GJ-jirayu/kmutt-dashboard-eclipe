	
	function a(){
			$.ajax({
				url: "../../Model/Finance/fn_cash_flow.jsp",
				type: "get",
				dataType: "json",
				data:{"fn_paramYear":$("#embfn_paramYear").val(),"fn_paramMonth":$("#embfn_paramMonth").val()},
				success:function(data){
					
				console.log(data);
				
				if(data != ""){
					$("#hi").hide();
					$("#column1").show();
					$("#column2").show();
					$("#tb").show();
					
				$("#table_fn").empty();
					
				var paMonth = $("#embfn_paramMonth").val();
				var paMonthName = '';
				var paMonthLastName = '';
				
				var rs = data;	
				var htmlTableCashFlow="";
				var paYear = $("#embfn_paramYear").val();
				var paYearLast = paYear - 1;
				var paYearLast2 = paYear - 2;
				var paYearSub = paYear.substring(2, 4);
				var paYearLastSub = paYearSub - 1;
				var paYearLastSub2 = paYearLastSub - 1;
				var paLastMonthYear = "";
				var paY = "";
				var paLY = "";
				var paMonthNum = '';
				
				if ( paMonthLastName == "ก.ย."){
					paLastMonthYear = paYearSub - 1;
				}else{
					paLastMonthYear  = paYearSub ;
				}	
				
				$(".Year").html(paYear).val();
				$(".LYear").html(paYearLast).val();
				$(".LLYear").html(paYearLast2).val();
				
				if(paMonth == '1'){
					paMonthName = 'ต.ค.';
					paMonthLastName = 'ก.ย.';
					paMonthNo = '31';
					paMonthLastNo = '30';
					paY = paYearLastSub;
					paLYL = paYearLastSub;
					paLY = paYearLastSub-1;
					paMonthNum = '1';
				}else if(paMonth == '2'){
					paMonthName = 'พ.ย.';
					paMonthLastName = 'ต.ค.';
					paMonthNo = '30';
					paMonthLastNo = '31';
					paY = paYearLastSub;
					paLYL = paYearLastSub;
					paLY = paYearLastSub;
					paMonthNum = '2';
				}else if(paMonth == '3'){
					paMonthName = 'ธ.ค.';
					paMonthLastName = 'พ.ย.';
					paMonthNo = '31';
					paMonthLastNo = '30';
					paY = paYearLastSub;
					paLYL = paYearLastSub;
					paLY = paYearLastSub;
					paMonthNum = '3';
				}else if(paMonth == '4'){
					paMonthName = 'ม.ค.';
					paMonthLastName = 'ธ.ค.';
					paMonthNo = '31';
					paMonthLastNo = '31';
					paY = paLastMonthYear;
					paLYL = paYearLastSub;
					paLY = paYearLastSub;
					paMonthNum = '4';
				}else if(paMonth == '5'){
					paMonthName = 'ก.พ.';
					paMonthLastName = 'ม.ค.';
					paMonthNo = '28';
					paMonthLastNo = '31';
					paY = paLastMonthYear;
					paLYL = paYearLastSub+1;
					paLY = paYearLastSub;
					paMonthNum = '5';
				}else if(paMonth == '6'){
					paMonthName = 'มี.ค.';
					paMonthLastName = 'ก.พ.';
					paMonthNo = '31';
					paMonthLastNo = '28';
					paY = paLastMonthYear;
					paLYL = paYearLastSub+1;
					paLY = paYearLastSub;
					paMonthNum = '6';
				}else if(paMonth == '7'){
					paMonthName = 'เม.ย.';
					paMonthLastName = 'มี.ค.';
					paMonthNo = '30';
					paMonthLastNo = '31';
					paY = paLastMonthYear;
					paLYL = paYearLastSub+1;
					paLY = paYearLastSub;
					paMonthNum = '7';
				}else if(paMonth == '8'){
					paMonthName = 'พ.ค.';
					paMonthLastName = 'เม.ย.';
					paMonthNo = '31';
					paMonthLastNo = '30';
					paY = paLastMonthYear;
					paLYL = paYearLastSub+1;
					paLY = paYearLastSub;
					paMonthNum = '8';
				}else if(paMonth == '9'){
					paMonthName = 'มิ.ย.';
					paMonthLastName = 'พ.ค.';
					paMonthNo = '30';
					paMonthLastNo = '31';
					paY = paLastMonthYear;
					paLYL = paYearLastSub+1;
					paLY = paYearLastSub;
					paMonthNum = '9';
				}else if(paMonth == '10'){
					paMonthName = 'ก.ค.';
					paMonthLastName = 'มิ.ย.';
					paMonthNo = '31';
					paMonthLastNo = '30';
					paY = paLastMonthYear;
					paLYL = paYearLastSub+1;
					paLY = paYearLastSub;
					paMonthNum = '10';
				}else if(paMonth == '11'){
					paMonthName = 'ส.ค.';
					paMonthLastName = 'ก.ค.';
					paMonthNo = '31';
					paMonthLastNo = '31';
					paY = paLastMonthYear;
					paLYL = paYearLastSub+1;
					paLY = paYearLastSub;
					paMonthNum = '11';
				}else if(paMonth == '12'){
					paMonthName = 'ก.ย.';
					paMonthLastName = 'ส.ค.';
					paMonthNo = '30';
					paMonthLastNo = '31';
					paY = paLastMonthYear;
					paLYL = paYearLastSub+1;
					paLY = paYearLastSub;
					paMonthNum = '12';
				}else{
					paMonthName = '';
					paMonthLastName = '';
				}
				
				htmlTableCashFlow+="<table  id='finance_tb1'  width='790' cellpadding='1px' cellspacing='1px' >";
				htmlTableCashFlow+="<thead>";
				
					htmlTableCashFlow+="<tr>";
						htmlTableCashFlow+="<th width='550'>";
							htmlTableCashFlow+="รายการ";
						htmlTableCashFlow+="</th>";

						htmlTableCashFlow+="<th width='120'>";
//							htmlTableCashFlow+="ปี  "+paYear+"";
							htmlTableCashFlow+=""+paMonthNum+" เดือน";
							
						htmlTableCashFlow+="</th>";

						htmlTableCashFlow+="<th width='120'>";
							//htmlTableCashFlow+="ปี "+paYearLast+"";
						htmlTableCashFlow+="12 เดือน";
						htmlTableCashFlow+="</th>";
					htmlTableCashFlow+="</tr>";
					
					htmlTableCashFlow+="<tr>";
						htmlTableCashFlow+="<th>";
							htmlTableCashFlow+="";
						htmlTableCashFlow+="</th>";

						htmlTableCashFlow+="<th>";
//							htmlTableCashFlow+= "1 ต.ค"+" "+paYearLastSub+"<br/>"+paMonthNo+" "+paMonthName+" "+paY;
							htmlTableCashFlow+= "ณ "+paMonthNo+" "+paMonthName+" "+paY;
						htmlTableCashFlow+="</th>";

						htmlTableCashFlow+="<th>";
//							htmlTableCashFlow+= "1 ต.ค"+" "+paYearLastSub2+"<br/>30 ก.ย"+" "+paYearLastSub;
							htmlTableCashFlow+= "ณ 30 ก.ย"+" "+paYearLastSub;
						htmlTableCashFlow+="</th>";
					htmlTableCashFlow+="</tr>";	
					
				htmlTableCashFlow+="</thead>";
				
				htmlTableCashFlow+="<tbody>";
				
				$.each(rs,function(index,indexEntry){			

				var account_name = indexEntry[0];
				var level = indexEntry[2];
				var parent_key = indexEntry[3];
				var currentAmt = indexEntry[4];
				var pYearAmt = indexEntry[5];
				var levelline = indexEntry[6];
				
					htmlTableCashFlow+="<tr>";
						htmlTableCashFlow+="<td><div class='level"+level+" parent_key"+parent_key+"'  id='account_key"+level+""+levelline+" '>"+account_name+"</div></td>";

						htmlTableCashFlow+="<td>";
							htmlTableCashFlow+= currentAmt;
						htmlTableCashFlow+="</td>";
						
							htmlTableCashFlow+="<td>"+pYearAmt+"</td>";
						htmlTableCashFlow+="</tr>";
				});
				htmlTableCashFlow+="</tbody>";
			htmlTableCashFlow+="</table>";
			
			$("#table_fn_cash_flow").html(htmlTableCashFlow);
			
			//#######################Menagement Tab1 Start ######################
			
			$("table#finance_tb1 thead tr  th").css({"background":"#99ccff  ","padding-left":"5px","padding-right":"5px","color":"black","padding":"2px"});
			$("table#finance_tb1 tbody tr  td .level1").css({"text-align":"left"});
			$("table#finance_tb1 tbody tr  td .level1").parent().nextAll().andSelf().css({"text-align":"right","background":"#99ccff ","font-weight":"bold"});
			$("table#finance_tb1 thead tr:eq(0) th").css({"background":"#008EC3 ","padding-left":"5px","padding-right":"5px","color":"white","padding":"2px"});
			$("table#finance_tb1 thead tr:eq(1) th").css({"background":"#008EC3 ","padding-left":"5px","padding-right":"5px","color":"white","padding":"2px"});
			$(".level2").css({"font-weight":"bold","padding-left":"10px"});
			$(".level2").parent().nextAll().andSelf().css({"background":"#a9e4f4 "});
			$(".level2").parent().nextAll().css({"text-align":"right","font-weight":"bold","background":"#a9e4f4 "});
			$(".level3").css({"padding-left":"20px"});
			$(".level3").parent().nextAll().css({"text-align":"right"});
			$("table#finance_tb1 tbody tr:odd").css({"background":"#ecf8fb"});
			$(".summary").parent().nextAll().andSelf().css({"background":"#99ccff","padding":"5px"});
			$("table#finance_tb1").css({"border":"1px solid #a9e4f4"});
			
			//#######################Menagement Tab1 Start ######################
				}else{
					$("#column1").hide();
					$("#column2").hide();
					$("#tb").hide();
					$("#hi").show();
				}
			}
		});
	};
