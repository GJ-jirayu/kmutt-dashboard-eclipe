$(document).ready(function(){
	
	var addClassAsOfTabs = function(childNo){
		$("div#tabs ul").each(function(){
			$("li",this).removeClass("TabsActive");
			$("li",this).eq(childNo).addClass("TabsActive");
		});
	};
	
// -------------tabs-1.html-------------
	$("a[href='#tabs-5']").on("click",function(){
		//alert('show');
		$(".ParamLeftSub").hide();
		
		$("#ParamYear").show();
		$("#ParamSem").show();
		$("#ParamEdu").show();
		
		addClassAsOfTabs(4);
	$.ajax({
		url : "p_new_student_by_school.html",
		type:"get",
		async:false,
		datetype:"html",
		success:function(data){
			$("#tabs-5").html(data);
			}
		});
	});
});