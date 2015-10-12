$(document).ready(function(){
		// Backstretch

var aboutHidden=false;
var locationHidden=true;
var contactusHidden=true;
$('#about').attr('disabled', true);
$('#about').addClass('clicked');
$('.google').appendTo('.mapspot');

$.backstretch("./images/mechanic1.jpg");

// ABOUT BUTTON

function disableButtons(){
		$('#about').attr('disabled', true);
		$('#location').attr('disabled', true);
		$('#contactus').attr('disabled', true);
}

function enableLocConBtn(){
			$('#location').attr('disabled', false);
			$('#contactus').attr('disabled', false);
}

function enableAboConBtn(){
			$('#about').attr('disabled', false);
			$('#contactus').attr('disabled', false);
}

function enableAboLocBtn(){
			$('#location').attr('disabled', false);
			$('#about').attr('disabled', false);
}

$('#about').click(function(){
	if(locationHidden===false){
		disableButtons();
		$('#location').removeClass('clicked');
		$('#location').addClass('hovereffect');
		$(this).removeClass('hovereffect');
		$(this).addClass('clicked');
		$('.garage-door').slideToggle(900).queue(function(next){
			$('.location').hide()
			$('.about').show();
			next();
		});
		$('.garage-door').delay(200).slideToggle(900).queue(function(next){
			enableLocConBtn();
			next();
		});
		aboutHidden=false;
		locationHidden=true;
	} else if (contactusHidden===false){
		disableButtons();
		$('#contactus').removeClass('clicked');
		$('#contactus').addClass('hovereffect');
		$(this).removeClass('hovereffect');
		$(this).addClass('clicked');
		$('.garage-door').slideToggle(900).queue(function(next){
			$('.contact-us').hide()
			$('.about').show();
			next();
		});
		$('.garage-door').delay(200).slideToggle(900).queue(function(next){
			enableLocConBtn();
			next();
		});
		aboutHidden=false;
		contactusHidden=true;
	}
})

// LOCATION BUTTON

$('#location').click(function(){
	if(aboutHidden===false){
		disableButtons();
		$('#about').addClass('hovereffect');
		$('#about').removeClass('clicked');
		$(this).addClass('clicked');
		$(this).removeClass('hovereffect');
		$('.garage-door').slideToggle(900).queue(function(next){
			$('.about').hide()
			$('.location').show();
			next();
		});
		$('.garage-door').delay(200).slideToggle(900).queue(function(next){
			enableAboConBtn();
			next();
		});
		locationHidden=false;
		aboutHidden=true;
	} else if (contactusHidden===false){
		disableButtons();
		$('#contactus').removeClass('clicked');
		$('#contactus').addClass('hovereffect');
		$(this).addClass('clicked');
		$(this).removeClass('hovereffect');
		$('.garage-door').slideToggle(900).queue(function(next){
			$('.contact-us').hide()
			$('.location').show();
			next();
		});
		$('.garage-door').delay(200).slideToggle(900).queue(function(next){
			enableAboConBtn()
			next();
		});
		locationHidden=false;
		contactusHidden=true;
	}
})



// CONTACT BUTTON

$('#contactus').click(function(){
	if(aboutHidden===false){
		disableButtons();
		$(this).addClass('clicked');
		$(this).removeClass('hovereffect');
		$('#about').removeClass('clicked');
		$('#about').addClass('hovereffect');
		$('.garage-door').slideToggle(900).queue(function(next){
			$('.about').hide()
			$('.contact-us').show();
			next();
		});	
		$('.garage-door').delay(200).slideToggle(900).queue(function(next){
			enableAboLocBtn();
			next();
		});
		contactusHidden=false;
		aboutHidden=true;
	} else if (locationHidden===false){
		disableButtons();
		$(this).addClass('clicked');
		$(this).removeClass('hovereffect');
		$('#location').removeClass('clicked');
		$('#location').addClass('hovereffect');
		$('.garage-door').slideToggle(900).queue(function(next){
			$('.location').hide()
			$('.contact-us').show();
			next();
		});
		$('.garage-door').delay(200).slideToggle(900).queue(function(next){
			enableAboLocBtn();
			next();
		});
		contactusHidden=false;
		locationHidden=true;
	}
})

//a hovers

$('#locationredirect').mouseover(function(){
	$('#location').addClass('hovered');
}).mouseout(function(){
	$('#location').removeClass('hovered');
})

$('#contactredirect').mouseover(function(){
	$('#contactus').addClass('hovered');
}).mouseout(function(){
	$('#contactus').removeClass('hovered');
})

//a clicks

$('#locationredirect').click(function(){
	locationFunction()
})

$('#contactredirect').click(function(){
	contactUsFunction()
})
//button functions

function locationFunction() {
		disableButtons();
		$('#about').addClass('hovereffect');
		$('#about').removeClass('clicked');
		$('#location').addClass('clicked');
		$('#location').removeClass('hovereffect');
		$('.garage-door').slideToggle(900).queue(function(next){
			$('.about').hide()
			$('.location').show();
			next();
		});
		$('.garage-door').delay(200).slideToggle(900).queue(function(next){
			enableAboConBtn();
			next();
		});
		locationHidden=false;
		aboutHidden=true;
}

function contactUsFunction(){
		disableButtons();
		$('#contactus').addClass('clicked');
		$('#contactus').removeClass('hovereffect');
		$('#about').removeClass('clicked');
		$('#about').addClass('hovereffect');
		$('.garage-door').slideToggle(900).queue(function(next){
			$('.about').hide()
			$('.contact-us').show();
			next();
		});	
		$('.garage-door').delay(200).slideToggle(900).queue(function(next){
			enableAboLocBtn();
			next();
		});
		contactusHidden=false;
		aboutHidden=true;
}


$('.testbtn').click(function(){
	$('.garage-door').slideToggle(1000);
})

})

