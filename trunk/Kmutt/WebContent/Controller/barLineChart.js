var barLineChart=function(chartId,data,option){
	
	if(option['cateRotate']==""){
		option['cateRotate']=0;
	}
	// #############get id on hover for get id for use tooltip#########################
	$(".chart").hover(function(){
		//alert(this.id);
		$(".idChart").remove();
		$("body").append("<div class=\"idChart\" style=\"display:none\">"+this.id+"</div>");
	});

	
	if(option['themeCustom']!=undefined){
		theme=option['themeCustom'];
		//$(".theme").remove();
		$("body").append("<div id=theme"+chartId+" class=\"themeTooltip\" style=\"display:none\">"+option['themeCustom']+"</div>");
	}else{
	
		theme=option['theme'];
		//$(".theme").remove();
		$("body").append("<div id=theme"+chartId+" class=\"themeTooltip\" style=\"display:none\">"+option['theme']+"</div>");
	}
	// #############get id on hover for get id for use tooltip#########################
	if(option['pointLabelsDicimal']==true){
		dicimal="%.2f";
	}else{
		dicimal="%d";
	}
	//checkOption end
	Array.prototype.getUnique = function(){
		   var u = {}, a = [];
		   for(var i = 0, l = this.length; i < l; ++i){
		      if(u.hasOwnProperty(this[i])) {
		         continue;
		      }
		      a.push(this[i]);
		      u[this[i]] = 1;
		   }
		   return a;
		};
	
		var cateArray= new Array();
		var cateArrayUnique= new Array();
		var seriesArray=new Array();
		var seriesArrayUnique=new Array();
		var series="";		
		
		$.each(data,function(index,indexEntry){
			//alert(indexEntry[2]);
			
			cateArray[index]=indexEntry[0];
			seriesArray[index]=indexEntry[1];
		});
		cateArrayUnique=cateArray.getUnique();
		seriesArrayUnique=seriesArray.getUnique();
		
		series+="[";
		$.each(seriesArrayUnique,function(index,indexEntry){
			if(index==0){			
				series+="{label:'"+indexEntry+"'}";
			}else{
				if(index==seriesArrayUnique.length-1){
					series+=",{label:'"+indexEntry+",renderer:$.jqplot.BarRenderer'}";
				}else{
					series+=",{label:'"+indexEntry+"'}";
				}
			}
		});
		series+="]";
		
		//check value is empty is set 0
		var cateLength=cateArrayUnique.length-1;
		
		var slotArray= new Array();//get array all
		var slotArray2= new Array();//get array for data is not empty
		
		for(var i=0;i<seriesArrayUnique.length;i++){
			slotArray[i] = new Array();
			slotArray2[i] = new Array();
			
			for(var j=0;j<cateArrayUnique.length;j++){
				slotArray[i][j]=cateArrayUnique[j];
				//alert(cateArrayUnique[j]);
				$.each(data,function(index,indexEntry){
					if((cateArrayUnique[j]==indexEntry[0])&&(seriesArrayUnique[i]==indexEntry[1])){
						//alert(cateArrayUnique[j]+"-"+indexEntry[2]);
						slotArray2[i][j]=indexEntry[2];
					}
				});
			}
		}
		
		var value="";
		value+="[[";
		var checkUndefinedValue=0;
		for(var i=0;i<slotArray.length;i++){
					//alert(slotArray[i]);
				for(var j=0;j<slotArray[i].length;j++){
					if(slotArray2[i][j]==undefined){
						checkUndefinedValue=0; 
					}else{
						checkUndefinedValue=slotArray2[i][j];
					}
					
					if(i==0){
						if(j==0){
						value+=+checkUndefinedValue;
						}else{
						value+=","+checkUndefinedValue;	
						}
					}else{
						if(cateLength==cateArrayUnique.length-1){
							value+=",["+checkUndefinedValue;
						}else{
							value+=","+checkUndefinedValue;
						}
					}
					
					if(cateLength==0){
						value+="]";
						cateLength=cateArrayUnique.length;
					}
					cateLength--;
				}
		}
		value+="]";
		
	    var cate =cateArrayUnique;
	    var obValue=eval("("+value+")");
	    var obSeries=eval("("+series+")");
	    //alert(ticks);
	   // alert(obValue);
	    //console.log(obSeries);
	    var Planned=seriesArrayUnique[0];
	    var Actual=seriesArrayUnique[1];
	    
	    if(seriesArrayUnique.length==2){
	    	$.jqplot(chartId, obValue, callBarChart());
	    }else if(seriesArrayUnique.length==3){
	    	if(option['y2axis']==true){
	    		$.jqplot(chartId, obValue, callBarChart2y());
	    	}else{
	    		$.jqplot(chartId, obValue, callBarChart2());
	    	}
	    }
    	 
    	 function callBarChart()
    	    {
    	        var optionsObj = {
    	            title: option['title'],
    	            axes: {
    	                 xaxis: {
    	                    renderer: $.jqplot.CategoryAxisRenderer,
    	                    ticks: cate,
    	                },
    	                yaxis: {
    	                    tickOptions: { showMark: false, formatString: dicimal , formatter: $.jqplot.euroFormatter},
    	                    min:0,
    	                    max:option['max']
    	                },
    	            },
    	            axesDefaults: {
    	                tickOptions: {
    	                  angle: option['cateRotate'],
    	                }
    	            },
    	            seriesColors: theme,

    	            series: [
    	               {label:Planned,renderer:$.jqplot.BarRenderer},
    	                {label: Actual}
    	                ],

    	            legend: {
    	                show: true,
    	                renderer: $.jqplot.EnhancedLegendRenderer,
	                    location: option['location'] ,
	                    placement :option['placement'],
	                    marginTop : "10px",
	                    rendererOptions: {
	                        numberRows: 1
	                    }
    	                },

    	            seriesDefaults:{
    	                shadow: false,
    	                rendererOptions:{
    	                   barPadding: 0,
    	                   barMargin: 10,
    	                   barWidth: option['barWidth'],
    	                      
    	               },
    	               pointLabels: { 
    	            	   show: option['pointLabels'] 
    	               },

    	            }, 
    	            highlighter:{
    		            show:option['tooltip'],
    		            tooltipContentEditor:tooltipContentEditor
    		        },
    	        };
    	        return optionsObj;
    	    }
    	 
    	 function callBarChart2y()
 	    {
 	        var optionsObj = {
 	            title: option['title'],
 	           axes: {
                   xaxis: {
                	   renderer: $.jqplot.CategoryAxisRenderer,
                	   tickInterval: 15,
                	   ticks: cate,
                	   },
                   yaxis: {
	                    tickOptions: { 
	                    	showMark: false,
	                    	formatString: dicimal ,
	                    	formatter: $.jqplot.euroFormatter
	                    	},
	                    autoscale: true,
	                    min:0,
	                    max:option['max']
	                },
                   y2axis: {
                	   tickOptions: { 
                		   showMark: false,
                		   formatString: "%d\%" ,
                		   formatter: $.jqplot.euroFormatter
                		   },
                	   autoscale: true,
                	   min:0,
                       rendererOptions: {
                           alignTicks: true,
                       }
                	   }      
                 },
 	            
 	            axesDefaults: {
 	                tickOptions: {
 	                  angle: option['cateRotate'],
 	                  fontSize: option['fontSize']
 	                }
 	            },
 	            seriesColors: theme,

 	            legend: {
 	                show: true,
 	               renderer: $.jqplot.EnhancedLegendRenderer,
                   location: option['location'] ,
                   placement :option['placement'],
                   marginTop : "10px",
                   rendererOptions: {
                       numberRows: 1
                   }
 	                }, 
 	           seriesDefaults: {
 	        	   show: true,
 	        	   xaxis: 'xaxis', 
 	        	       rendererOptions:{
 	                   barPadding: 0,
 	                   barMargin: 10,
 	                   barWidth: option['barWidth'],
 	 	              
 	               },
 	              pointLabels: { 
 	            	  show: option['pointLabels'] 
 	               },
},
 	            highlighter:{
 		            show:option['tooltip'],
 		            tooltipContentEditor:tooltipContentEditor
 		        },
 		       series: [
 		                {label:seriesArrayUnique[0],renderer:$.jqplot.BarRenderer},
 	 	                {label: seriesArrayUnique[1],renderer:$.jqplot.BarRenderer},
 	 	                {label: seriesArrayUnique[2],yaxis: 'y2axis'}
 		       			],
 	        };
 	        return optionsObj;
 	    }
    	 
    	 function callBarChart2()
  	    {
  	        var optionsObj = {
  	            title: option['title'],
  	            axes: {
  	                 xaxis: {
  	                    renderer: $.jqplot.CategoryAxisRenderer,
  	                    ticks: cate, 
  	                },
  	                yaxis: {
  	                    tickOptions: { showMark: false, formatString: dicimal, formatter: $.jqplot.euroFormatter },
  	                    min:0,
  	                    max:option['max']
  	                },
  	            },
  	            axesDefaults: {
  	                tickOptions: {
  	                  angle: option['cateRotate'],
  	                  fontSize: option['fontSize']
  	                }
  	            },
  	            seriesColors: theme,

  	            series: [  
  	                {label:seriesArrayUnique[0],renderer:$.jqplot.BarRenderer},
  	                {label: seriesArrayUnique[1],renderer:$.jqplot.BarRenderer},
  	                {label: seriesArrayUnique[2]}
  	                ],

  	            legend: {
  	                show: true,
  	              renderer: $.jqplot.EnhancedLegendRenderer,
                  location: option['location'] ,
                  placement :option['placement'],
                  marginTop : "10px",
                  rendererOptions: {
                      numberRows: 1
                  }
  	                },

  	            seriesDefaults:{
  	                shadow: false,
  	                rendererOptions:{
  	                   barPadding: 0,
  	                   barMargin: 10,
  	                   barWidth: option['barWidth'],
  	 	              
  	               },
  	              pointLabels: { show: option['pointLabels'] },

  	            }, 
  	            highlighter:{
  		            show:option['tooltip'],
  		            tooltipContentEditor:tooltipContentEditor
  		        },
  		        
  	        };
  	        return optionsObj;
  	        
  	    };
  	 
    	 if(option['clickable']==true){
 		    
 		    $("#"+chartId).on('jqplotDataHighlight', function () {
 		    	   $("#"+chartId+" >.jqplot-event-canvas").css( 'cursor', 'pointer' );
 		    	});
 	    }
    	 if(option['background']==true){
    		 $("#"+chartId+">.jqplot-series-shadowCanvas").css({"background-image":"url(../images/bg2.png)"});
    	 }
    	 
    	 $("#"+chartId+">.jqplot-yaxis-tick").css({"color":"#000000"});
    	 $("#"+chartId+">.jqplot-point-label").css({"font-size":option['pointLabelsFont'],"color":option['pointLabelsColor']});
    	 $("#"+chartId+">.jqplot-point-label").css({
 	    	"-webkit-transform":"rotate("+option['pointLabelsRotate']+"deg)",
 	    	"-moz-transform":"rotate("+option['pointLabelsRotate']+"deg)",
 	    	"-transform":"rotate("+option['pointLabelsRotate']+"deg)",
 	    	"-ms-transform":"rotate("+option['pointLabelsRotate']+"deg)",
 	    	});
    	 
    	 $("#"+chartId+">.jqplot-highlighter-tooltip").css({"font-size":option['tooltipFontSize'],"color":"#000000"});
	};
	
	
	