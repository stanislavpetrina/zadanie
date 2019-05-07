
module.exports = function(picName, format, alt, figcaption) {

	var path = 'assets/img/';

	// | medium => 700 | large => 900 | 

	// available picture sizes
	var	mediumPic2x = path+picName+'-medium.'+format,
		largePic2x  = path+picName+'-large.'+format;



	// load set of responsive pictures

	var picSet = '<source media="(max-width: 768px)" data-srcset="'+mediumPic2x+'">';
		picSet += '<img data-toggle="'+picName+'" data-src="'+largePic2x+'" class="lazyload" alt="'+alt+'">';



	// delete whitespaces from caption
	var figCapt = (figcaption.trim() !== "")? true:false;


	// set margin :D
	var setMargin = (figCapt)? 'm-b-8':'m-b-5';


	// regular <picture>
	var pic =  '<figure class="'+setMargin+'">';
		pic += '<picture class="text-center zoom-in">';
		pic += picSet;
		pic += '</picture>';
		pic += (figCapt)? '<figcaption class="m-t-3 text-center">'+figcaption+'</figcaption>':'';
		pic += '</figure>';



    // Wrap pic to Reveal
    var reveal =  '<div class="full reveal p-4-medium zoom-out" id="'+picName+'" data-reveal data-v-offset="0">';
    	reveal += '<div class="content">';
    	reveal += '<div class="wrap p-y-5">';
    	reveal += '<picture class="text-center">';
    	reveal += picSet;
    	reveal += '</picture>';
    	reveal += '</div>';
    	reveal += '</div>';
    	reveal += '</div>';



    // Glue picture and reveal
    var picture = pic+reveal;


    // VYHODIT REVEAL(MODAL)


    // get picture and reveal
   	return  picture;

}