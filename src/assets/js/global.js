
import $ from 'jquery';



// Menu, switch icons

$('.title-bar button').click(function() {

		$(this).addClass('hide');


		if($(this).hasClass('icon-menu')) {


				$('.title-bar button.icon-close').removeClass('hide');


				$('html, body').addClass('scroll-off');


				$('.top-bar').addClass('show');


		}

		else {


				$('.title-bar button.icon-menu').removeClass('hide');


				$('html, body').removeClass('scroll-off');


				// Remove fix class "show"
				$('.top-bar').removeClass('show').removeAttr('style');


		}

});


// if page == 'index' and click on contact link, just hide menu and scroll to #contact section


$('.link-contact').click(function() {

		if($('html, body').hasClass('scroll-off')) {


				$('.title-bar button.icon-menu').removeClass('hide');
				$('.title-bar button.icon-close').addClass('hide');


				$('html, body').removeClass('scroll-off');


				// Remove fix class "show"
				$('.top-bar').removeClass('show').css({"display":"none"});


		}

});


// Lock / Unlock scroll - change browser size

$(window).on('changed.zf.mediaquery', function(event, newSize, oldSize) {


		if (Foundation.MediaQuery.atLeast('large') && $('html, body').hasClass('scroll-off')) {

				$('html, body').removeClass('scroll-off');

				$('.top-bar').removeClass('show');

				$('.title-bar button.icon-menu').removeClass('hide');

				$('.title-bar button.icon-close').addClass('hide');


				//console.log("Zmena na Desktop, odblokovanie scrollovania");


		}


});


// Click to hide active modal

$('.reveal').click(function(){

	$(this).foundation('close');

});





