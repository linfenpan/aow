'use strict';

// 改写全局的 aow 变量
global.aow = require("../index");

// 尝试运行 aow-config.js
var commander = require('commander');
var events = require('events');
var path = require('path');
var fs = require('fs');
var parser = {
    list: function(val){
        return val.trim() ? val.split(",") : null;
    }
};
var runCodeEvent = new events.EventEmitter();
runCodeEvent.once('before', function(aow){
    if(commander.dest){
        console.log("设置了dest")
    }
    aow.init();
});
runCodeEvent.once('after', function(aow){
    if(commander.run){
        aow.run(commander.run);
    }
    if(commander.task){
        commander.task.forEach(function(name){
            aow.runTask(name);
        });
    }
    if(commander.group){
        aow.runGroup(commander.group);
    }
});

// 命令配置
commander
    .usage('[options] <file..>')
    .option('-r, --run <list>', '执行配置', parser.list)
    .option('-g, --group <list>', '执行配置组', parser.list)
    .option('-t, --task <list>', '执行任务', parser.list)
    .parse(process.argv);

if(true){
    let code = path.join(process.cwd(), "aow-config.js");
    if(fs.existsSync(code)){
        runCodeEvent.emit("before", aow);
        require(code);
        runCodeEvent.emit("after", aow);
    }else{
        console.log(`请在当前目录下，创建: aow-config.js`.warn);
    }
}
