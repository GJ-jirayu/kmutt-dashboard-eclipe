var stackLineChart=function(chartId,data,option){
	
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
	   // console.log(obSeries);
	    
	    if(seriesArrayUnique.length==2){
	    	$.jqplot(chartId, obValue, callBarChart2());
	    }else if(seriesArrayUnique.length==3){
	    	$.jqplot(chartId, obValue, callBarChart3());
	    }else if(seriesArrayUnique.length==4){
	    	$.jqplot(chartId, obValue, callBarChart4());
	    }else if(seriesArrayUnique.length==5){
	    	$.jqplot(chartId, obValue, callBarChart5());
	    }else if(seriesArrayUnique.length==6){
	    	$.jqplot(chartId, obValue, callBarChart6());
	    }else if(seriesArrayUnique.length==7){
	    	$.jqplot(chartId, obValue, callBarChart7());
	    }else if(seriesArrayUnique.length==8){
	    	$.jqplot(chartId, obValue, callBarChart8());
	    }
	    
	    
	    function callBarChart2()
  	    {
  	        var optionsObj = {
  	        		stackSeries: true,
  	  	            seriesDefaults:{
  	  	                shadow: false,
  	  	                rendererOptions:{
  	  	                   barPadding: 0,
  	  	                   barMargin: 10,
  	  	                   barWidth: option['barWidth'],
  	  	               },
  	  	              pointLabels: { show: option['pointLabels'] },
  	  	            }, 
  	  	            
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
  	  	            
  	    	         series: [  
  	    	  	                {label:seriesArrayUnique[0],renderer:$.jqplot.BarRenderer},
  	    	  	                {label: seriesArrayUnique[1],renderer: $.jqplot.LineRenderer,disableStack : true,
	  	  		                    pointLabels: {
				                        show: true
				                    },
				                    //color: '#FF7D7D',
				                    markerOptions: {
				                        //size: 5, color: 'red'
				                    },	
  	    	  	                },
  	    	  	             ],
  	    	  	                
  	            title: option['title'],
  	            axes: {
  	                 xaxis: {
  	                    renderer: $.jqplot.CategoryAxisRenderer,
  	                    ticks: cate, 
  	                },
  	                yaxis: {
  	                    tickOptions: { 
  	                    	showMark: false, 
  	                    	formatString: dicimal,
  	                    	formatter: $.jqplot.euroFormatter 
  	                    	},
  	                    min:0,
  	                    max:option['max']
  	                },
  	            },
  	            axesDefaults: {
  	            	tickRenderer: $.jqplot.CanvasAxisTickRenderer,
  	                tickOptions: {
  	                  angle: option['cateRotate'],
  	                  fontSize: option['fontSize']
  	                }
  	            },
  	            seriesColors: theme,

  	            highlighter:{
  		            show:option['tooltip'],
  		            tooltipContentEditor:tooltipContentEditor
  		        },
  		        
  	        };
  	        return optionsObj; 
  	    };

	    function callBarChart3()
  	    {
  	        var optionsObj = {
  	        		stackSeries: true,
  	  	            seriesDefaults:{
  	  	                shadow: false,
  	  	                rendererOptions:{
  	  	                   barPadding: 0,
  	  	                   barMargin: 10,
  	  	                   barWidth: option['barWidth'],
  	  	               },
  	  	              pointLabels: { show: option['pointLabels'] },
  	  	            }, 
  	  	            
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
  	  	            
  	    	         series: [  
  	    	  	                {label:seriesArrayUnique[0],renderer:$.jqplot.BarRenderer},
  	    	  	                {label: seriesArrayUnique[1],renderer:$.jqplot.BarRenderer},
  	    	  	                {label: seriesArrayUnique[2],renderer: $.jqplot.LineRenderer,disableStack : true,
	  	  		                    pointLabels: {
				                        show: true
				                    },
				                    //color: '#FF7D7D',
				                    markerOptions: {
				                        //size: 5, color: 'red'
				                    },	
  	    	  	                },
  	    	  	             ],
  	    	  	                
  	            title: option['title'],
  	            axes: {
  	                 xaxis: {
  	                    renderer: $.jqplot.CategoryAxisRenderer,
  	                    ticks: cate, 
  	                },
  	                yaxis: {
  	                    tickOptions: { 
  	                    	showMark: false, 
  	                    	formatString: dicimal,
  	                    	formatter: $.jqplot.euroFormatter 
  	                    	},
  	                    min:0,
  	                    max:option['max']
  	                },
  	            },
  	            axesDefaults: {
  	            	tickRenderer: $.jqplot.CanvasAxisTickRenderer,
  	                tickOptions: {
  	                  angle: option['cateRotate'],
  	                  fontSize: option['fontSize']
  	                }
  	            },
  	            seriesColors: theme,

  	            highlighter:{
  		            show:option['tooltip'],
  		            tooltipContentEditor:tooltipContentEditor
  		        },
  		        
  	        };
  	        return optionsObj; 
  	    };
    	 
  	  function callBarChart4()
	    {
	        var optionsObj = {
	        		stackSeries: true,
	  	            seriesDefaults:{
	  	                shadow: false,
	  	                rendererOptions:{
	  	                   barPadding: 0,
	  	                   barMargin: 10,
	  	                   barWidth: option['barWidth'],
	  	               },
	  	              pointLabels: { show: option['pointLabels'] },
	  	            }, 
	  	            
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
	  	            
	    	         series: [  
	    	  	                {label:seriesArrayUnique[0],renderer:$.jqplot.BarRenderer},
	    	  	                {label: seriesArrayUnique[1],renderer:$.jqplot.BarRenderer},
	    	  	                {label: seriesArrayUnique[2],renderer:$.jqplot.BarRenderer},
	    	  	                {label: seriesArrayUnique[3],renderer: $.jqplot.LineRenderer,disableStack : true,
	  	  		                    pointLabels: {
				                        show: true
				                    },
				                    //color: '#FF7D7D',
				                    markerOptions: {
				                        //size: 5, color: 'red'
				                    },	
	    	  	                },
	    	  	             ],
	    	  	                
	            title: option['title'],
	            axes: {
	                 xaxis: {
	                    renderer: $.jqplot.CategoryAxisRenderer,
	                    ticks: cate, 
	                },
	                yaxis: {
	                    tickOptions: { 
	                    	showMark: false, 
	                    	formatString: dicimal,
	                    	formatter: $.jqplot.euroFormatter 
	                    	},
	                    min:0,
	                    max:option['max']
	                },
	            },
	            axesDefaults: {
	            	tickRenderer: $.jqplot.CanvasAxisTickRenderer,
	                tickOptions: {
	                  angle: option['cateRotate'],
	                  fontSize: option['fontSize']
	                }
	            },
	            seriesColors: theme,

	            highlighter:{
		            show:option['tooltip'],
		            tooltipContentEditor:tooltipContentEditor
		        },
		        
	        };
	        return optionsObj; 
	    };
  	    
    	 function callBarChart5()
  	    {
  	        var optionsObj = {
  	        		stackSeries: true,
  	  	            seriesDefaults:{
  	  	                shadow: false,
  	  	                rendererOptions:{
  	  	                   barPadding: 0,
  	  	                   barMargin: 10,
  	  	                   barWidth: option['barWidth'],
  	  	               },
  	  	              pointLabels: { show: option['pointLabels'] },
  	  	            }, 
  	  	            
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
  	  	            
  	    	         series: [  
  	    	  	                {label:seriesArrayUnique[0],renderer:$.jqplot.BarRenderer},
  	    	  	                {label: seriesArrayUnique[1],renderer:$.jqplot.BarRenderer},
  	    	  	                {label: seriesArrayUnique[2],renderer:$.jqplot.BarRenderer},
  	    	  	                {label: seriesArrayUnique[3],renderer:$.jqplot.BarRenderer},
  	    	  	                {label: seriesArrayUnique[4],renderer: $.jqplot.LineRenderer,disableStack : true,
	  	  		                    pointLabels: {
				                        show: true
				                    },
				                    //color: '#FF7D7D',
				                    markerOptions: {
				                        //size: 5, color: 'red'
				                    },	
  	    	  	                },
  	    	  	             ],
  	    	  	                
  	            title: option['title'],
  	            axes: {
  	                 xaxis: {
  	                    renderer: $.jqplot.CategoryAxisRenderer,
  	                    ticks: cate, 
  	                },
  	                yaxis: {
  	                    tickOptions: { 
  	                    	showMark: false, 
  	                    	formatString: dicimal,
  	                    	formatter: $.jqplot.euroFormatter 
  	                    	},
  	                    min:0,
  	                    max:option['max']
  	                },
  	            },
  	            axesDefaults: {
  	            	tickRenderer: $.jqplot.CanvasAxisTickRenderer,
  	                tickOptions: {
  	                  angle: option['cateRotate'],
  	                  fontSize: option['fontSize']
  	                }
  	            },
  	            seriesColors: theme,

  	            highlighter:{
  		            show:option['tooltip'],
  		            tooltipContentEditor:tooltipContentEditor
  		        },
  		        
  	        };
  	        return optionsObj;
  	    };
  	    
  	  function callBarChart6()
	    {
	        var optionsObj = {
	        		stackSeries: true,
	  	            seriesDefaults:{
	  	                shadow: false,
	  	                rendererOptions:{
	  	                   barPadding: 0,
	  	                   barMargin: 10,
	  	                   barWidth: option['barWidth'],
	  	               },
	  	              pointLabels: { show: option['pointLabels'] },
	  	            }, 
	  	            
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
	  	            
	    	         series: [  
	    	  	                {label:seriesArrayUnique[0],renderer:$.jqplot.BarRenderer},
	    	  	                {label: seriesArrayUnique[1],renderer:$.jqplot.BarRenderer},
	    	  	                {label: seriesArrayUnique[2],renderer:$.jqplot.BarRenderer},
	    	  	                {label: seriesArrayUnique[3],renderer:$.jqplot.BarRenderer},
	    	  	                {label: seriesArrayUnique[4],renderer:$.jqplot.BarRenderer},
	    	  	                {label: seriesArrayUnique[5],renderer: $.jqplot.LineRenderer,disableStack : true,
	  	  		                    pointLabels: {
				                        show: true
				                    },
				                    //color: '#FF7D7D',
				                    markerOptions: {
				                        //size: 5, color: 'red'
				                    },	
	    	  	                },
	    	  	             ],
	    	  	                
	            title: option['title'],
	            axes: {
	                 xaxis: {
	                    renderer: $.jqplot.CategoryAxisRenderer,
	                    ticks: cate, 
	                },
	                yaxis: {
	                    tickOptions: { 
	                    	showMark: false, 
	                    	formatString: dicimal,
	                    	formatter: $.jqplot.euroFormatter 
	                    	},
	                    min:0,
	                    max:option['max']
	                },
	            },
	            axesDefaults: {
	            	tickRenderer: $.jqplot.CanvasAxisTickRenderer,
	                tickOptions: {
	                  angle: option['cateRotate'],
	                  fontSize: option['fontSize']
	                }
	            },
	            seriesColors: theme,

	            highlighter:{
		            show:option['tooltip'],
		            tooltipContentEditor:tooltipContentEditor
		        },
		        
	        };
	        return optionsObj;
	    };
  	    
  	  function callBarChart7()
	    {
	        var optionsObj = {
	        		stackSeries: true,
	  	            seriesDefaults:{
	  	                shadow: false,
	  	                rendererOptions:{
	  	                   barPadding: 0,
	  	                   barMargin: 10,
	  	                   barWidth: option['barWidth'],
	  	               },
	  	              pointLabels: { show: option['pointLabels'] },
	  	            }, 
	  	            
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
	  	            
	    	         series: [  
	    	  	                {label:seriesArrayUnique[0],renderer:$.jqplot.BarRenderer},
	    	  	                {label: seriesArrayUnique[1],renderer:$.jqplot.BarRenderer},
	    	  	                {label: seriesArrayUnique[2],renderer:$.jqplot.BarRenderer},
	    	  	                {label: seriesArrayUnique[3],renderer:$.jqplot.BarRenderer},
	    	  	                {label: seriesArrayUnique[4],renderer:$.jqplot.BarRenderer},
	    	  	                {label: seriesArrayUnique[5],renderer:$.jqplot.BarRenderer},
	    	  	                {label: seriesArrayUnique[6],renderer: $.jqplot.LineRenderer,disableStack : true,
	  	  		                    pointLabels: {
				                        show: true
				                    },
				                    //color: '#FF7D7D',
				                    markerOptions: {
				                        //size: 5, color: 'red'
				                    },	
	    	  	                },
	    	  	             ],
	    	  	                
	            title: option['title'],
	            axes: {
	                 xaxis: {
	                    renderer: $.jqplot.CategoryAxisRenderer,
	                    ticks: cate, 
	                },
	                yaxis: {
	                    tickOptions: { 
	                    	showMark: false, 
	                    	formatString: dicimal,
	                    	formatter: $.jqplot.euroFormatter 
	                    	},
	                    min:0,
	                    max:option['max']
	                },
	            },
	            axesDefaults: {
	            	tickRenderer: $.jqplot.CanvasAxisTickRenderer,
	                tickOptions: {
	                  angle: option['cateRotate'],
	                  fontSize: option['fontSize']
	                }
	            },
	            seriesColors: theme,

	            highlighter:{
		            show:option['tooltip'],
		            tooltipContentEditor:tooltipContentEditor
		        },
		        
	        };
	        return optionsObj;
	        
	    };
	    
	    function callBarChart8()
	    {
	        var optionsObj = {
	        		stackSeries: true,
	  	            seriesDefaults:{
	  	                shadow: false,
	  	                rendererOptions:{
	  	                   barPadding: 0,
	  	                   barMargin: 10,
	  	                   barWidth: option['barWidth'],
	  	               },
	  	              pointLabels: { show: option['pointLabels'] },
	  	            }, 
	  	            
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
	  	            
	    	         series: [  
	    	  	                {label:seriesArrayUnique[0],renderer:$.jqplot.BarRenderer},
	    	  	                {label: seriesArrayUnique[1],renderer:$.jqplot.BarRenderer},
	    	  	                {label: seriesArrayUnique[2],renderer:$.jqplot.BarRenderer},
	    	  	                {label: seriesArrayUnique[3],renderer:$.jqplot.BarRenderer},
	    	  	                {label: seriesArrayUnique[4],renderer:$.jqplot.BarRenderer},
	    	  	                {label: seriesArrayUnique[5],renderer:$.jqplot.BarRenderer},
	    	  	                {label: seriesArrayUnique[6],renderer:$.jqplot.BarRenderer},
	    	  	                {label: seriesArrayUnique[7],renderer: $.jqplot.LineRenderer,disableStack : true,
	  	  		                    pointLabels: {
				                        show: true
				                    },
				                    //color: '#FF7D7D',
				                    markerOptions: {
				                        //size: 5, color: 'red'
				                    },	
	    	  	                },
	    	  	             ],
	    	  	                
	            title: option['title'],
	            axes: {
	                 xaxis: {
	                    renderer: $.jqplot.CategoryAxisRenderer,
	                    ticks: cate, 
	                },
	                yaxis: {
	                    tickOptions: { 
	                    	showMark: false, 
	                    	formatString: dicimal,
	                    	formatter: $.jqplot.euroFormatter 
	                    	},
	                    min:0,
	                    max:option['max']
	                },
	            },
	            axesDefaults: {
	            	tickRenderer: $.jqplot.CanvasAxisTickRenderer,
	                tickOptions: {
	                  angle: option['cateRotate'],
	                  fontSize: option['fontSize']
	                }
	            },
	            seriesColors: theme,

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
	
	
	