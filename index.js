// replace-ui-file
// Sample plug-in skeleton to extend hivepod functionality.
// using this plugin you could replace any file in the UI:
/*
	configure,
    extendExpress
*/
 
 var _options;
 
 function configure(configuration, options) {	
    _options = options;
}

function extendExpress(app) {
    for (var property in _options) {
        if (_options.hasOwnProperty(property)) {
            app.get(property, function (req, res) {
                res.redirect(_options[req.url]);
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
    configure: configure,	
	extendExpress : extendExpress
};