var PM = require("../main");
PM.init({
    cwd: "../src"
});

PM.copy({
    options: {
        name: 1
    },
    "./test/dest/script": ["./script/*.js"],
    "./test/dest/css": ["./css/*.css"]
}, "static");

PM.minifyjs({
    options: {
        mangle: {
            except: "require"
        }
    },
    files: ["./test/dest/script/*.js", "!./test/dest/script/user.js"]
}, "static");

PM.minifycss({
    files: ["./test/dest/css/**"]
}, "static");


PM.pmd5({
    options: {
        length: 8,
        cwd: "./test/dest",
        fix: ["*"],
        pm: {
            basePath: "./"
        }
    },
    files: ["./css/*"]
});

PM.clean({
    files: ["./test/dest/css/*"]
});


PM.run("copy", "clean");
// 等价于
// PM.runGroup("static");
