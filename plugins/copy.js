"use strict";
// 文件的简单复制
var path = require("path");
/**
    options: {
        expand: 保持拷贝的目录
    }
*/
exports.name = "copy";
exports.plugin = function(target, list, options){
    // console.log(target, list, options);
    var fs = this.fs;
    var toPath = path.join(options.cwd, target.path);
    if(target.isFile){
        toPath = path.dirname(toPath);
    }
    // 需要把 target 的文件移除
    if(target){
        let reg = this.matcher.parse(path.normalize(target.path), {matchStart: true});
        list = list.filter(function(file){
            var rel = path.relative(options.cwd, file);
            return !reg.test(rel);
        });
    }

    var expand = !!options.expand;
    fs.ensureDirSync(toPath);
	list.forEach(function(item){
		// copySync 只能 文件夹 -> 文件夹
		// 文件 -> 文件
        var t = path.join(toPath, expand ? path.relative(options.cwd, item) : path.basename(item));
        fs.copySync(item, t);
        this.log(`from:${item}\nto  :${t}`);
    }.bind(this));

    this.log("\n");
};
