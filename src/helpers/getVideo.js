
module.exports = function(videoName, posterName, posterFormat, figcaption) {

	// | medium => 700 | large => 900 | 

	var path = 'assets/img/';


	// available picture sizes for video portret
	var	mediumPoster = path+posterName+'-video-medium@2x.'+posterFormat+' [(max-width: 768px)]',
		largePoster  = path+posterName+'-video-large@2x.'+posterFormat;


	// delete whitespaces from caption
	var figCapt = (figcaption.trim() !== "")? true:false;


	// set margin :D
	var setMargin = (figCapt)? 'm-b-8':'m-b-5';


	// set transparent poster for video
	var videoPoster = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';


	// regular <picture>
	var video =  '<figure class="'+setMargin+'">';
		video += '<div class="lazyload video" data-bgset="'+mediumPoster+' | '+largePoster+'">';
		video += '<video controls muted preload="metadata" poster="'+videoPoster+'">';
		video += '<source src="assets/videos/'+videoName+'.mp4" type="video/mp4">';
		video += '</video>';
		video += '</div>';
		video += (figCapt)? '<figcaption class="m-t-3 text-center">'+figcaption+'</figcaption>':'';
		video += '</figure>';



    // get picture and reveal
   	return  video;

}