'use strict';
var CleanCSS = require('clean-css');
exports.name = "minifycss";
exports.plugin = function(target, list, options){
    var fs = this.fs;
    list.forEach(function(file){
        var code = new CleanCSS().minify(fs.readFileSync(file)).styles;
        fs.outputFileSync(file, code);
    });
};
