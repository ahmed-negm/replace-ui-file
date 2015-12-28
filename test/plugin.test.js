//Unit tests for replace-ui-file plugin
var expect = require('expect.js');
var plugin = require('../index');

describe('Plugin', function() {
    var options = {
        '/css/style.css': '/css/style2.css',
        '/i18n/literals.en-US.json': '/i18n/literals.es-ES.json'
    };
    var callbacks = {};
    var result;
    var appMock = {
        get: function(property, callback) {
            callbacks[property] = callback;
            
        }
    };
    var resMock = {
      redirect: function(value) {
          result = value;
      }  
    };
    
    it('extendExpress should replace the file based on options', function(done) {
        plugin.configure(null, options);
        plugin.extendExpress(appMock);
        
        for (var property in options) {
            if (options.hasOwnProperty(property)) {
                var callback = callbacks[property];
                expect(typeof callback).eql("function");
                callback({url: property}, resMock);
                expect(result).eql(options[property]);
            }
        }
        
        done();
    });
});