// replace-ui-file
// Sample plug-in skeleton to extend hivepod functionality.
// using this plugin you could replace any file in the UI:
/*
    extendExpress
*/
 
function extendExpress(app, options) {
    for (var property in options) {
        if (options.hasOwnProperty(property)) {
            app.get(property, function (req, res) {
                res.redirect(options[req.url]);
            });
        }
    }
}

module.exports = {
	//metadata ---
	name: 'replace-ui-file', 
	contractVersion: 'replace-ui-file-1.0',
	author: 'icinetic',

	//interface ---
	extendExpress : extendExpress
};