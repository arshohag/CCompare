$(document).ready(function(){
	//Accordian mobile nav
	var ww = screen.width;
	if(ww<992){
		 $('#nav-mobile li a').on('click', function(e){
		 	if(e.target.className == 'section-title'){
		 		e.preventDefault();
		 		var object = '.'+e.target.id+'List';
		 		if( $(object).is(':visible') ){
		 			$(object).slideUp();
		 			$(this).children().find('#'+e.target.id).children().first().hide();
		 			$(this).children().find('#'+e.target.id).children().last().show();
		 		}else{
		 			$('.section-links').slideUp();
		 			$(object).slideDown();
		 			$(this).children().find('#'+e.target.id).children().first().show();
		 			$(this).children().find('#'+e.target.id).children().last().hide();
		 		}
		 		
		 	}
		 	//
		 });
	}
	//Close Mobile Nav
	$(document).on('click','a.brand-logo-nav', function(e){ 
		if(e.target.className == 'zmdi zmdi-close'){ 
			$('.drag-target').trigger('click'); 
		}
	});
	$(document).on('click','a.search-mobile-btn', function(e){ 
		if(e.target.className == 'zmdi zmdi-search'){ 
			
			if($(this).hasClass('active')){
				$('.search-input').removeClass('show');
				$(this).removeClass('active');
			}else{
				$('.search-input').addClass('show');
				$(this).addClass('active');
			}
		}
	});

	//tab resize and fix width
	// var tabWidth = $("body").innerWidth();
	// $('.tab-nav').width(300);
	// console.log('tabWidth',tabWidth);

	
});