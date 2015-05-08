

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
		
		$("a[href='#tabs5-1']").trigger("click");
	},50);
	
	$("a[href='#tabs5-1']").click(function(){	
		
		$.ajax({
			url : "p_new_student_by_school_region.html",
			type:"get",
			async:false,
			datetype:"html",
			success:function(data){
				$("#tabs5-1").html(data);
				$.ajax({
					url: "../../Model/NewStudent/p_new_student_by_school_region.jsp",
					type: "get",
					dataType: "json",
					data:{"paramYear":$("#embparamYearList").val(), "paramSemesterNew":$("#embparamSemesterNewList").val(),"paramEduLevel":$("#embparamEducationList").val()},
					success:function(data){	
						
						//console.log(data);
						if(data != ""){
							option=[];
		                     option['mapType']="th_mill_region_th";
		                     option['theme']=theme;
		                     option['initial']="#808080";
		                     option['selected']="#F4A582";
		                     option['scale']="['#FFFF99', '#FF0000']";
		                     option['pointLabelsColor']="#000000";
		                     option['clickable']=true;
							 map("Chart_p_new_student_by_school_region",data,option);
						}else{
							$("#mapcolorRegion").hide();
							$("#Chart_p_new_student_by_school_region").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"230px"});
							$("#Chart_p_new_student_by_school_region").text('ปีการศึกษาหรือเทอมที่เลือก "ยังไม่มีข้อมูล"');
						}
						 
						 
						 var provinceRegion=new Array();
						 
						 provinceRegion["TH-1"]="TH-BK";
			                provinceRegion["TH-60"]="TH-XC";
			                provinceRegion["TH-24"]="TH-PM";
			                provinceRegion["TH-29"]="TH-PM";
			                provinceRegion["TH-33"]="TH-XC";
			                provinceRegion["TH-72"]="TH-XC";
			                provinceRegion["TH-52"]="TH-XC";
			                provinceRegion["TH-65"]="TH-XC";
			                provinceRegion["TH-10"]="TH-XC";
			                provinceRegion["TH-64"]="TH-XC";
			                provinceRegion["TH-9"]="TH-XE";
			                provinceRegion["TH-50"]="TH-XE";
			                provinceRegion["TH-7"]="TH-XE";
			                provinceRegion["TH-16"]="TH-XE";
			                provinceRegion["TH-8"]="TH-XE";
			                provinceRegion["TH-31"]="TH-XE";
			                provinceRegion["TH-18"]="TH-XE";
			                provinceRegion["TH-63"]="TH-XE";
			                provinceRegion["TH-21"]="TH-XNE";
			                provinceRegion["TH-28"]="TH-XNE";
			                provinceRegion["TH-69"]="TH-XNE";
			                provinceRegion["TH-56"]="TH-XNE";
			                provinceRegion["TH-76"]="TH-XNE";
			                provinceRegion["TH-47"]="TH-XNE";
			                provinceRegion["TH-11"]="TH-XNE";
			                provinceRegion["TH-77"]="TH-XNE";
			                provinceRegion["TH-27"]="TH-XNE";
			                provinceRegion["TH-71"]="TH-XNE";
			                provinceRegion["TH-6"]="TH-XNE";
			                provinceRegion["TH-73"]="TH-XNE";
			                provinceRegion["TH-55"]="TH-XNE";
			                provinceRegion["TH-70"]="TH-XNE";
			                provinceRegion["TH-43"]="TH-XNE";
			                provinceRegion["TH-48"]="TH-XNE";
			                provinceRegion["TH-4"]="TH-XNE";
			                provinceRegion["TH-57"]="TH-XNE";
			                provinceRegion["TH-20"]="TH-XNE";
			                provinceRegion["TH-44"]="TH-XNE";
			                provinceRegion["TH-14"]="TH-XN";
			                provinceRegion["TH-54"]="TH-XN";
			                provinceRegion["TH-53"]="TH-XN";
			                provinceRegion["TH-75"]="TH-XN";
			                provinceRegion["TH-40"]="TH-XN";
			                provinceRegion["TH-26"]="TH-XN";
			                provinceRegion["TH-41"]="TH-XN";
			                provinceRegion["TH-13"]="TH-XN";
			                provinceRegion["TH-45"]="TH-XN";
			                provinceRegion["TH-23"]="TH-XN";
			                provinceRegion["TH-74"]="TH-XN";
			                provinceRegion["TH-5"]="TH-XN";
			                provinceRegion["TH-17"]="TH-XN";
			                provinceRegion["TH-66"]="TH-XN";
			                provinceRegion["TH-37"]="TH-XN";
			                provinceRegion["TH-36"]="TH-XN";
			                provinceRegion["TH-39"]="TH-XN";
			                provinceRegion["TH-51"]="TH-XW";
			                provinceRegion["TH-3"]="TH-XW";
			                provinceRegion["TH-67"]="TH-XW";
			                provinceRegion["TH-19"]="TH-PM";
			                provinceRegion["TH-62"]="TH-PM";
			                provinceRegion["TH-61"]="TH-XW";
			                provinceRegion["TH-38"]="TH-XW";
			                provinceRegion["TH-30"]="TH-XW";
			                provinceRegion["TH-22"]="TH-XS";
			                provinceRegion["TH-2"]="TH-XS";
			                provinceRegion["TH-34"]="TH-XS";
			                provinceRegion["TH-42"]="TH-XS";
			                provinceRegion["TH-68"]="TH-XS";
			                provinceRegion["TH-49"]="TH-XS";
			                provinceRegion["TH-12"]="TH-XS";
			                provinceRegion["TH-58"]="TH-XS";
			                provinceRegion["TH-59"]="TH-XS";
			                provinceRegion["TH-15"]="TH-XS";
			                provinceRegion["TH-35"]="TH-XS";
			                provinceRegion["TH-32"]="TH-XS";
			                provinceRegion["TH-46"]="TH-XS";
			                provinceRegion["TH-25"]="TH-XS";
			                //Map Province Region End
			               //alert("test");
			                
			                $(".jvectormap-element").on("click",function(){
			                    var provinceCode=$("#mapCode").text();
			                        
			                        //alert(provinceRegion[""+provinceCode+""]);
			                        p_new_student_by_school_table_region(provinceRegion[""+provinceCode+""]);
									p_new_student_by_school_region_head(provinceRegion[""+provinceCode+""]);
									p_new_student_by_school_region_head_a(provinceRegion[""+provinceCode+""]);
									p_new_student_by_school_region_head_b(provinceRegion[""+provinceCode+""]);
			                });
						 
			               
						}
					});
				
				$.ajax({
					url: "../../Model/NewStudent/p_new_student_by_school_edu.jsp",
					type: "get",
					dataType: "json",
					data:{"paramEduLevel":$("#embparamEducationList").val()},
					success:function(data){		
						//console.log(data);
						//alert(data);
						$(".edu").html(data).val();
						}
					});
				
				$.ajax({
					url: "../../Model/NewStudent/p_new_student_by_school_region_head_c.jsp",
					type: "get",
					dataType: "json",
					data:{"paramYear":$("#embparamYearList").val(), "paramSemesterNew":$("#embparamSemesterNewList").val(),"paramEduLevel":$("#embparamEducationList").val()},
					success:function(data){		
						//console.log(data);
						//alert(data);
						$(".total_new_student").html(data).val();
						}
					});
				
				var p_new_student_by_school_table_region = function(regionCode){
				$.ajax({
					url: "../../Model/NewStudent/p_new_student_by_school_table_region.jsp",
					type: "get",
					dataType: "json",
					data:{"paramYear":$("#embparamYearList").val(), "paramSemesterNew":$("#embparamSemesterNewList").val(),"paramEduLevel":$("#embparamEducationList").val(),"paramREG":regionCode},
					success:function(data){		
						if(data != ""){
							option=[];
							 option['title']=["ลำดับ","โรงเรียน","Admission","รับตรง","กลุ่มเฉพาะ","เข้าศึกษากรณีพิเศษ","รวม"];
							 option['contentType']=["","String","Number","Number","Number","Number","Number"];
							 option['colsWidth']=["50","120","80","70","80","130","50"];
	                         option['height']='473';
	                         option["runNumber"]=true;
	                         option['text-align']='left';
							 table("Chart_p_new_student_by_school_table_region",data,option);
							 $("#Chart_p_new_student_by_school_table_region").css({"margin-top":"0px","font-weight":"normal"});
						}else{
							$("#Chart_p_new_student_by_school_table_region").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"200px"});
							$("#Chart_p_new_student_by_school_table_region").text('ปีการศึกษาหรือเทอมที่เลือก "ยังไม่มีข้อมูล"');
						}
						//console.log(data);
						 
						}
					});
				};
				p_new_student_by_school_table_region("All");
					
					
				var p_new_student_by_school_region_head = function(regionCode){
				$.ajax({
				url: "../../Model/NewStudent/p_new_student_by_school_region_head.jsp",
				type: "get",
				dataType: "json",
				data:{"paramYear":$("#embparamYearList").val(), "paramSemesterNew":$("#embparamSemesterNewList").val(),"paramEduLevel":$("#embparamEducationList").val(),"paramREG":regionCode},
				success:function(data){		
					//console.log(data);
					//alert(data);
					$("#region").html(data).val();
					}
				});
				};
				p_new_student_by_school_region_head("All");
				
				var p_new_student_by_school_region_head_a = function(regionCode){
				$.ajax({
					url: "../../Model/NewStudent/p_new_student_by_school_region_head_a.jsp",
					type: "get",
					dataType: "json",
					data:{"paramYear":$("#embparamYearList").val(), "paramSemesterNew":$("#embparamSemesterNewList").val(),"paramEduLevel":$("#embparamEducationList").val(),"paramREG":regionCode},
					success:function(data){		
						//console.log(data);
						//alert(data);
						$("#region_total").html(data).val();
						}
					});
				};
				p_new_student_by_school_region_head_a("All");
				
				var p_new_student_by_school_region_head_b = function(regionCode){
				$.ajax({
					url: "../../Model/NewStudent/p_new_student_by_school_region_head_b.jsp",
					type: "get",
					dataType: "json",
					data:{"paramYear":$("#embparamYearList").val(), "paramSemesterNew":$("#embparamSemesterNewList").val(),"paramEduLevel":$("#embparamEducationList").val(),"paramREG":regionCode},
					success:function(data){		
						//console.log(data);
						//alert(data);
						$("#region_pa").html(data).val();
						}
					});
				};
				p_new_student_by_school_region_head_b("All");
				
				}
			});
		});
	
	$("a[href='#tabs5-2']").click(function(){
		$.ajax({
			url : "p_new_student_by_school_province.html",
			type:"get",
			async:false,
			datetype:"html",
			success:function(data){
				$("#tabs5-2").html(data);
				
				$.ajax({
					url: "../../Model/NewStudent/p_new_student_by_school.jsp",
					type: "get",
					dataType: "json",
					data:{"paramYear":$("#embparamYearList").val(), "paramSemesterNew":$("#embparamSemesterNewList").val(),"paramEduLevel":$("#embparamEducationList").val()},
					success:function(data){		
						if(data != ""){
							option=[];
		                     option['mapType']="th_mill_en";
		                     option['theme']=theme;
		                     option['initial']="#808080";
		                     option['selected']="#000000";
		                     option['scale']="['#FFFF99', '#FF0000']";
		                     option['pointLabelsColor']="#000000";
		                     option['clickable']=true;
							 map("Chart_p_new_student_by_school",data,option);	
						}else{	
							$("#mapcolorProvince").hide();
							$("#Chart_p_new_student_by_school").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"230px"});
							$("#Chart_p_new_student_by_school").text('ปีการศึกษาหรือเทอมที่เลือก "ยังไม่มีข้อมูล"');
						}
						 				
						 
						 $(".jvectormap-element").on("click",function(){
						 
                         //alert($("#mapCode").text());
                         p_new_student_by_school_table_province($("#mapCode").text());
						 p_new_student_by_school_province_head($("#mapCode").text());
						 p_new_student_by_school_province_head_a($("#mapCode").text());
						 p_new_student_by_school_province_head_b($("#mapCode").text());
						 
						});
					}
				});
				
				
				var p_new_student_by_school_table_province = function(provinceCode){
				$.ajax({
					url: "../../Model/NewStudent/p_new_student_by_school_table_province.jsp",
					type: "get",
					dataType: "json",
					data:{"paramYear":$("#embparamYearList").val(), "paramSemesterNew":$("#embparamSemesterNewList").val(),"paramEduLevel":$("#embparamEducationList").val(),"paramProvince":provinceCode},
					success:function(data){		
						if(data != ""){
							//console.log(data);
							 option=[];
							 option['title']=["ลำดับ","โรงเรียน","Admission","รับตรง","กลุ่มเฉพาะ","เข้าศึกษากรณีพิเศษ","รวม"];
							 option['contentType']=["","String","Number","Number","Number","Number","Number"];
							 option['colsWidth']=["50","120","80","70","80","130","50"];
	                         option['height']='473';
	                         option["runNumber"]=true;
	                         option['text-align']='left';
							 table("Chart_p_new_student_by_school_table_province",data,option);
							 $("#Chart_p_new_student_by_school_table_province").css({"margin-top":"0px","font-weight":"normal"});
						}else{
							$("#Chart_p_new_student_by_school_table_province").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"200px"});
							$("#Chart_p_new_student_by_school_table_province").text('ปีการศึกษาหรือเทอมที่เลือก "ยังไม่มีข้อมูล"');
						}
						
						}
					});
				};
				p_new_student_by_school_table_province("All");
				
				var p_new_student_by_school_province_head = function(provinceCode){
				$.ajax({
				url: "../../Model/NewStudent/p_new_student_by_school_province_head.jsp",
				type: "get",
				dataType: "json",
				data:{"paramYear":$("#embparamYearList").val(), "paramSemesterNew":$("#embparamSemesterNewList").val(),"paramEduLevel":$("#embparamEducationList").val(),"paramProvince":provinceCode},
				success:function(data){		
					//console.log(data);
					//alert(data);
					$("#province").html(data).val();
					}
				});
				};
				p_new_student_by_school_province_head("All");
				
				var p_new_student_by_school_province_head_a = function(provinceCode){
				$.ajax({
					url: "../../Model/NewStudent/p_new_student_by_school_province_head_a.jsp",
					type: "get",
					dataType: "json",
					data:{"paramYear":$("#embparamYearList").val(), "paramSemesterNew":$("#embparamSemesterNewList").val(),"paramEduLevel":$("#embparamEducationList").val(),"paramProvince":provinceCode},
					success:function(data){		
						//console.log(data);
						//alert(data);
						$("#province_total").html(data).val();
						}
					});
				};
				p_new_student_by_school_province_head_a("All");
				
				var p_new_student_by_school_province_head_b = function(provinceCode){
				$.ajax({
					url: "../../Model/NewStudent/p_new_student_by_school_province_head_b.jsp",
					type: "get",
					dataType: "json",
					data:{"paramYear":$("#embparamYearList").val(), "paramSemesterNew":$("#embparamSemesterNewList").val(),"paramEduLevel":$("#embparamEducationList").val(),"paramProvince":provinceCode},
					success:function(data){		
						//console.log(data);
						//alert(data);
						$("#province_pa").html(data).val();
						}
					});
				};
				p_new_student_by_school_province_head_b("All");
				
				$.ajax({
					url: "../../Model/NewStudent/p_new_student_by_school_edu.jsp",
					type: "get",
					dataType: "json",
					data:{"paramEduLevel":$("#embparamEducationList").val()},
					success:function(data){		
						//console.log(data);
						//alert(data);
						$(".edu").html(data).val();
						}
					});
				
				$.ajax({
					url: "../../Model/NewStudent/p_new_student_by_school_region_head_c.jsp",
					type: "get",
					dataType: "json",
					data:{"paramYear":$("#embparamYearList").val(), "paramSemesterNew":$("#embparamSemesterNewList").val(),"paramEduLevel":$("#embparamEducationList").val()},
					success:function(data){		
						//console.log(data);
						//alert(data);
						$(".total_new_student").html(data).val();
						}
					});
				
				}
			});
		});
	
});