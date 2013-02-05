$(document).ready(function(){
	// Variables
	sidebar_left_open = false;
	sidebar_right_open = false;

	$('.btn-menu').click(function(){
		if(sidebar_left_open){
			$('#corps').animate({left : '0'}, function(){ 
				$('#sidebar-left').css('display','none')
			});
			$('#corps').css('position','absolute');
			sidebar_left_open = false;
		}else{			
			$('#sidebar-left').css('display','block');
			$('#corps').animate({left : '200px'});
			$('#corps').css('position','fixed');
			sidebar_left_open = true;
		}
	});

	$('.btn-search').click(function(){
		if(sidebar_right_open){
			$('#corps').animate({left : '0'}, function(){ 
				$('#sidebar-right').css('display','none')
			});
			$('#corps').css('position','absolute');
			sidebar_right_open = false;
		}else{			
			$('#sidebar-right').css('display','block');
			$('#corps').animate({left : '-200px'});
			$('#corps').css('position','fixed');
			sidebar_right_open = true;
		}
	});
});	