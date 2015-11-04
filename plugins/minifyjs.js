'use strict';
var uglify = require("uglify-js");
exports.name = "minifyjs";
exports.plugin = function(target, list, options){
    var fs = this.fs;
    list.forEach(function(file){
        var code = uglify.minify(file, options).code;
        fs.outputFileSync(file, code);
    });
};
