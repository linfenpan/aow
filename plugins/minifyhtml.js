'use strict';
var htmlMinify = require("html-minifier");
exports.name = "minifyhtml";
exports.plugin = function(target, list, options){
    var fs = this.fs;
    list.forEach(function(file){
        var code = htmlMinify.minify(fs.readFileSync(file).toString(), {
            removeComments: true,
            collapseWhitespace: true,
            minifyJS: {
                mangle: {
                    except: "require"
                }
            },
            minifyCSS: true
        });
        fs.outputFileSync(file, code);
    });
};
