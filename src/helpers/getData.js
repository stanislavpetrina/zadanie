
module.exports = function(page, options) {

	var data = this.projects[page];

	var renders = options.fn(data);


	return renders;

}
