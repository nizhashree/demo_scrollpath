(function( $ ) {
	var options = {};
	var methods = {
		init : function (options) {
			console.log("has been initialized");
		},
		zoomIn : function (options) {
			this.animate({
				fontSize:"2em",
			},"slow");
			return this;
		},
		zoomOut : function (options) {
			this.animate({
				fontSize:"16px"				
			},"slow");
			return this;
		}
	};
	$.fn.zooming = function (method) {
		if ( methods[method] ) {
			return methods[method].apply( this , Array.prototype.slice.call(arguments,1));
		}else if ( typeof method == 'object' || !method ) {
			return methods.init.apply( this , arguments);
		}else {
			$.error(method + "does not exist");
		}
	}
})( jQuery );
$(document).ready(init);
function automate(i){
		if(i>=11) return;
		else{
			target='desc'+i;
			$.fn.scrollPath("scrollTo", target, 1000, "easeInOutSine");
			if(target=='desc10'){
				$('.desc9').hide();
				$('.desc10').show();
			}
			if(target=='desc9'){
				$('.desc8').hide();
				$('.desc9').show();
			}
			if(target=='desc8'){
				$('.desc7').hide();
				$('.desc8').show();
			}
			if(target=='desc7'){
				$('.desc6').hide();
				$('.desc7').show();
			}
			if(target=='desc6'){
				$('.desc5').hide();
				$('.desc6').show();
			}
			if(target=='desc5'){
				$('.desc4').hide();
				$('.desc5').show();
			}
			if(target=='desc4'){
				$('.desc3').hide();
				$('.desc4').show();
			}
			if(target=='desc3'){
				$('.desc2').hide();
				$('.desc3').show();
			}
			if(target=='desc2'){
				$('.desc1').hide();
				$('.desc2').show();
			}
			if(target=='desc1'){
				$('.aboutME').hide();
				$('.desc1').show();
			}
			$('.'+target).css({'color':'white'});
			$('.'+target).css({'z-index':'2'});
			$('.'+target).delay(200).zooming('zoomIn').delay(2000);
			$('.'+target).zooming('zoomOut');
			i=parseInt(i)+1;
			setTimeout(function(){automate(i)},2500);
		}
	};
function init() {
	$.fn.scrollPath("getPath")
		.moveTo(400, 150, {name: "start"})
		.lineTo(200, 350, {
			name: "desc1"
		})
		.lineTo(400, 400, {
			name: "desc2"
		})
		.lineTo(600, 370, {
			name: "desc3"
		})
		.lineTo(520, 170, {
			name: "desc4"
		})
		.lineTo(680, 80, {
			name: "desc5"
		})
		.lineTo(380, 0, {
			name: "desc6"
		})
		.lineTo(280, 90, {
			name: "desc7"
		})
		.lineTo(100, 290, {
			name: "desc_8"
		})
		.rotate(2*Math.PI/2, {
			name: "desc8"
		})
		.lineTo(100, 560, {
			name: "desc9"
		})
		.rotate(3*Math.PI/2, {
			name: "desc10"
		})
	
	$(".wrapper").scrollPath({drawPath: true, wrapAround: true,scrollBar:false});
	//$(".sp-canvas").toggle();
	$('.aboutME').delay(200).zooming('zoomIn').delay(2000);
	$('.aboutME').zooming('zoomOut');
	setTimeout(function(){automate(1)},2500);	
}
	