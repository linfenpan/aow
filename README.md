# 关于 aow

测试版本已完成，总体上，偏向 grunt 的配置风格，但是，用起来，并不友好

下版本，参考 fis3 的风格，重新编写吧...


# 下版本假想例子

1. 文件匹配
``` javascript
    // 查找出所有 js 文件
    // 每个脚本，执行任务 hash，并且使用插件 fixmd5 加工
    // 该任务，属于 dev 组
    aow.match("**/*.js", {
        hash: true,
		compress: true,
        plugins: ["fixmd5"]
    });
	aow.match(["js/lib/*.js", "js/plugins/*.js"], {
		concat: "js/all.js"
	});
	
	// 目标路径
	aow.setTargetPath("../dist");
	// 设置默认任务的 全局配置
	aow.setDefault({
		hash: true,
		compress: true
	});
	
	var deploy = aow.task("deploy", "../deploy");
	deploy.match("**/*.css", {
		hash: true,
		plugins: ["compress"]
	});
	
```

2. 如果让外部可用，需要提供一套 fs 的操作
   方便资源更变时，map对象的更新
fs.move
fs.copy
fs.remove
fs.rename
	var stat = fs.stat;
	stat.isFile();
	stat.isDirectory();
	stat.isBlockDevice();
fs.read
fs.write
fs.append

3. 通过命令，可指定任务
aow -t deploy
