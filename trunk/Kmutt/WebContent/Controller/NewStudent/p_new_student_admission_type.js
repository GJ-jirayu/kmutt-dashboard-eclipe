$(document).ready(function(){
	var addClassAsOfTabs = function(childNo){
		$("div#tabs ul").each(function(){
			$("li",this).removeClass("TabsActive");
			$("li",this).eq(childNo).addClass("TabsActive");
		});
	};
	
	var option = new Array();
	
// -------------tabs-1.html-------------
	$("a[href='#tabs-2']").click(function(){
		$(".ParamLeftSub").hide();
		
		$("#ParamYear").show();
		$("#ParamSem").show();
		$("#ParamEdu").show();
		
		addClassAsOfTabs(1);
	$.ajax({
		url : "p_new_student_admission_type.html",
		type:"get",
		async:false,
		datetype:"html",
		success:function(data){
			$("#tabs-2").html(data);

			$.ajax({
				url: "../../Model/NewStudent/p_new_student_by_faculty_and_admission_type.jsp",
				type: "get",
				dataType: "json",
				data:{"paramYear":$("#embparamYearList").val(), "paramSemesterNew":$("#embparamSemesterNewList").val() ,"paramEduLevel":$("#embparamEducationList").val()},
				success:function(data){
					console.log(data);
					if(data != ""){
						option=[];
						 
						 option['themeCustom']=["#e1d4a1","#828e46","#9e8c80","#00af50","#92d14f"];
						 
						 option['stackSeries']=true;
						 option['pointLabels']=true;
						 option['pointLabelsFont']='12px';
						 option['tooltipFontSize']='12px';
						 option['max']=100;
	  					 option['pointLabelsColor']="#000000";
	  					 option['location']='n';
	  					 option['placement']='outside';
	  					 option['clickable']=true;
	  					option['tooltip']=true;
	  					option['ticks'] = ['0', '20', '40', '60', '80', '100'];
						barChartHorizontal("Chart_p_new_student_by_faculty_and_admission_type",data,option);
					}else{
						$("#Chart_p_new_student_by_faculty_and_admission_type").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"140px"});
						$("#Chart_p_new_student_by_faculty_and_admission_type").text('ปีการศึกษาหรือเทอมที่เลือก "ยังไม่มีข้อมูล"');
					}
					 
					
					 //bind function click here start.
                    $('#Chart_p_new_student_by_faculty_and_admission_type').bind('jqplotDataClick',                
                    		 function (ev, seriesIndex, pointIndex, data) {   
                    	
                            	option=[];
                            	option['param']={"paramYear":$("#embparamYearList").val(), "paramSemesterNew":$("#embparamSemesterNewList").val() ,"paramEduLevel":$("#embparamEducationList").val()};
                            	
                            	var SeriesAdmissionType = getSeriesCode("../../Model/NewStudent/p_new_student_by_faculty_and_admission_type.jsp",seriesIndex,option); 
                            	console.log(SeriesAdmissionType);
                            	
                            	$(".AdmissionType").html(SeriesAdmissionType).val();
                            	
                            	$("#Chart_p_new_student_by_faculty_and_grade_range").empty();
                            	$("#Chart_p_new_student_by_faculty").empty();
                            	
                            	p_new_student_by_faculty_and_grade_range(SeriesAdmissionType);
                            	p_new_student_by_faculty(SeriesAdmissionType);
                            	p_new_student_by_paramadmitype(SeriesAdmissionType);

                      	}
                      );
                   //bind function click here end.
					}
				});
			
			var p_new_student_by_faculty_and_grade_range = function(AdmisType){
			$.ajax({
				url: "../../Model/NewStudent/p_new_student_by_faculty_and_grade_range.jsp",
				type: "get",
				dataType: "json",
				data:{"paramYear":$("#embparamYearList").val(), "paramSemesterNew":$("#embparamSemesterNewList").val() ,"paramEduLevel":$("#embparamEducationList").val(),"paramAdmisType":AdmisType},
				success:function(data){
					if(data != ""){
						 option=[];			
						 
						 //option['themeCustom']=["#33b8a5","#33a7d8","#3276b5","#8869ad","#b868ad","#e966ac"];
						 option['themeCustom']=["#3ac9b4","#50b4de","#438acb","#977cb8","#c17db7","#ee86bc"];
						 option['stackSeries']=true;
						 option['barWidth']=20;
						 option['pointLabels']=true;
						 option['pointLabelsFont']='12px';
						 option['tooltipFontSize']='12px';
						 option['max']=100;
	  					 option['pointLabelsColor']="#000000";
	  					 option['location']='n';
	  					 option['placement']='outside';
	  					option['tooltip']=true;
	  					option['ticks'] = ['0', '20', '40', '60', '80', '100'];
						 barChartHorizontal("Chart_p_new_student_by_faculty_and_grade_range",data,option);  
					}else{
						$("#Chart_p_new_student_by_faculty_and_grade_range").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"140px"});
						$("#Chart_p_new_student_by_faculty_and_grade_range").text('ปีการศึกษาหรือเทอมที่เลือก "ยังไม่มีข้อมูล"');
					}
										                 
					
					}
				});
			};
			p_new_student_by_faculty_and_grade_range("All");
			
			
			var p_new_student_by_faculty = function(AdmisType){
			$.ajax({
				url: "../../Model/NewStudent/p_new_student_by_faculty.jsp",
				type: "get",
				dataType: "json",
				data:{"paramYear":$("#embparamYearList").val(), "paramSemesterNew":$("#embparamSemesterNewList").val() ,"paramEduLevel":$("#embparamEducationList").val(),"paramAdmisType":AdmisType},
				success:function(data){
					
					if(data != ""){
						 option=[];
						 
						 //option['themeCustom']=["#0071c1","#01b0f1","#1d7a67","#00af50","#ffcce6","#ae00ae","#ffc68c","#ffc000","#79c6ff","#97e2ff","#66c6b3","#62ffa9","#e27e76","#cae9a7","#fb9a3b","#ffe082"];
						 option['themeCustom']=["#0071c1","#01b0f1","#1d7a67","#00af50","#ffcce6","#f491bc","#ffc68c","#ffc000","#79c6ff","#97e2ff","#66c6b3","#62ffa9","#e27e76","#cae9a7","#fb9a3b","#ffe082"];
						 option['showDataLabels']=true;
						 option['pointLabelsColor']="#000000";
						 option['tooltip']=true;
						 donutChart("Chart_p_new_student_by_faculty",data,option);		
					}else{
						$("#Chart_p_new_student_by_faculty").css({"text-align":"center","font-weight":"bold","width":"auto","height":"auto","margin-top":"140px"});
						$("#Chart_p_new_student_by_faculty").text('ปีการศึกษาหรือเทอมที่เลือก "ยังไม่มีข้อมูล"');
					}
							
					}
				});
			};
			p_new_student_by_faculty("All");
			
			var p_new_student_by_paramadmitype = function(AdmisType){
				$.ajax({
					url: "../../Model/NewStudent/p_new_student_by_paramadmitype.jsp",
					type: "get",
					dataType: "json",
					data:{"paramAdmisType":AdmisType},
					success:function(data){
						 $(".paramAdmis").html(data).val();
					}
				});
				};
				p_new_student_by_paramadmitype("All");
			
			}
		});
	
		
	});
});