
module.exports = function(videoName, figcaption) {

	// delete whitespaces from caption
	var figCapt = (figcaption.trim() !== "")? true:false;


	// set margin :D
	var setMargin = (figCapt)? 'm-b-8':'m-b-5';


	// regular <picture>
	var video =  '<figure class="'+setMargin+'">';
		video += '<video class="lazyload" autoplay muted loop playsinline preload="metadata">';
		video += '<source src="assets/videos/'+videoName+'.mp4" type="video/mp4">';
		video += '</video>';
		video += (figCapt)? '<figcaption class="m-t-3 text-center">'+figcaption+'</figcaption>':'';
		video += '</figure>';



    // get picture and reveal
   	return  video;

}