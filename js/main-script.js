'use strict';	
	$(document).ready(function(){
	//----------- MENU SCROLLING SCRIPT -----------//
	var window_scroll = $(window);	
	if(window_scroll.scrollTop() > 200){
		$(".navbar").addClass("navbar-scroll");
	}else{
		$(".navbar").removeClass("navbar-scroll");
	}	
	window_scroll.on('scroll', function(){
		if(window_scroll.scrollTop() > 200){
			$(".navbar").addClass("navbar-scroll");
		}else{
			$(".navbar").removeClass("navbar-scroll");
		}
	});



	//----------- SCROLLING SCRIPT -----------//
	$(".navbar-nav a, #scroll-section a").on("click", function(e){		
		var anchor = $(this).attr("href");
		$('html, body').stop().animate({
                scrollTop: ($(anchor).offset().top - 100)
            }, 1300);
	});

	// The function which helps changing active class on menu when scrolling
	function addActive(){		
		$(".navbar-nav li").each(function(index){
			var currentSection = $(this).find("a").attr("href");
			if((window_scroll.scrollTop() > $(currentSection).offset().top - 150)){					
				$(this).addClass("active");
				$(".navbar-nav li").not(this).removeClass("active");					
			}
		});
	}

	var funfactTop = $("#information-number").offset().top - 600;	
	var countFinished = false;	
	var progressBarIncrease = $("#work-skills").offset().top - 400;
	//---------- SKILL PERCENTANCE -----------//
	if(window_scroll.scrollTop() > progressBarIncrease){
		$("#work-skills .progress-bar").removeClass("zero-progress-bar");			
	}	
	window_scroll.on("scroll", function(){
		addActive();
		//----------- FUNFACT SCRIPT -----------//	
		if(window_scroll.scrollTop() > funfactTop && countFinished == false){
			$('.number-count').countTo();				
			countFinished = true;
		}

		//---------- SKILL PERCENTANCE -----------//
		if(window_scroll.scrollTop() > progressBarIncrease){
			$("#work-skills .progress-bar").removeClass("zero-progress-bar");			
		}
		
	});

	addActive();
	//----------- SmoothScroll ------------//
	SmoothScroll({ animationTime: 600,stepSize:70})


	//----------- PORTFOLIO FILTER SCRIPT -----------//
	$("#portfolio-filter li").on("click", function(){		
		var category = $(this).attr("data-category");	
		$("#portfolio-filter li").removeClass("active");
		$(this).addClass("active");
		if(category == "all"){
			$("#portfolio-list .portfolio-item").css("opacity","1").css("transform","scale(1)");
		}else{
			$("#portfolio-list .portfolio-item[data-category='"+category+"']")
				.css("opacity","1").css("transform","scale(1)");			
			$("#portfolio-list .portfolio-item:not([data-category='"+category+"'])")
				.css("opacity",".3").css("transform","scale(.8)");			
		}
	});



	//----------- PORTFOLIO DETAIL SCRIPT -----------//
	$(".portfolio-item").on("click", function(){				
		var projectName = $(this).find(".project-name").text();
		var projectStack = $(this).find(".project-stack").text();
		var projectImage = $(this).find(".portfolio-img img").attr("src");
		var projectDate = $(this).find(".portfolio-description").attr("data-portfolio-date");
		var projectExplanation = $(this).find(".portfolio-description").attr("data-portfolio-explanation");

		$("#portfolio-detail .date-time").text(projectDate);
		$("#portfolio-detail .project-name").text(projectName);
		$("#portfolio-detail .project-stack").text(projectStack);
		$("#portfolio-detail .project-explanation").text(projectExplanation);
		$("#portfolio-detail .portfolio-img").attr("src", projectImage);
	});



	//----------- PORTFOLIO LOAD-MORE SCRIPT -----------//	
	$("#portfolio #load-more").on("click", function(){
		$("#portfolio-hidden .portfolio-item").css('display','block');
		$("#portfolio-hidden .portfolio-item").delay(150).queue(function(next){
			$(this).css("opacity","1");
			next();
		});
	});

});

	//----------- MENU TOGGLE SCRIPT -----------//	
	$(".navbar-toggle").on("click", function(){		
		if($(this).hasClass("toggle-open")){
			$("#menu-mobile span:nth-child(2)").css("transform","rotate(0deg) translateY(0px) translateX(0px)");
			$("#menu-mobile span:nth-child(3)").css("width","25px");
			$("#menu-mobile span:nth-child(4)").css("transform","rotate(0deg) translateY(0px) translateX(0px)");	
			$("#menu-mobile").removeClass("toggle-open");	
		}else{
	

			$("#menu-mobile span:nth-child(2)").css("transform","rotate(45deg) translateY(2px) translateX(2px)");
			$("#menu-mobile span:nth-child(3)").css("width","0px");
			$("#menu-mobile span:nth-child(4)").css("transform","rotate(-45deg) translateY(-8px) translateX(8px)");
			$("#menu-mobile").addClass("toggle-open");			
		}
	});
	//----------- LOADING SCRIPT -----------//
	$(window).on("load", function(){
	
		$("#loading-page").delay(900).fadeOut(400);
	});



