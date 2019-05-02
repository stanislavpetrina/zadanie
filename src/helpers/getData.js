
module.exports = function(page, options) {

	var data = this.projects[page];

	var render = options.fn(data);

	
	return render;

}