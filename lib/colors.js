"use strict";
var colors = require('colors');
// 设置 log 的主题
colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red',
    log: "green"
});

function log(str){
    console.log(str);
};
log.warn = function(str){
    console.log(`${str}`.warn.bold);
};
log.error = function(str){
    console.log(`${str}`.error.bold);
};
log.info = function(str){
    console.log(`${str}`.info.bold);
};
// 进度条
var pbar = require("progress");
log.getProgress = function(total){
    var bar = new pbar(":percent [:bar]", {total: total, width:10, clear: false});
    return bar;
};
module.exports = log;
