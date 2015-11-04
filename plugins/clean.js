"user strict";
// 文件的简单复制
var path = require("path");
exports.name = "clean";
exports.options = {
    matchDir: true
}
exports.plugin = function(target, list, options){
    var fs = this.fs;
    var log = this.log;
    list.forEach(function(file){
        if(fs.existsSync(file)){
            fs.removeSync(file);
            log("del:" + file);
        }
    });
};
