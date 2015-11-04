var PM = require("../index");
PM.init({
    cwd: "./src"
});

PM.copy({
    "./test": {expand: true, files: "**"}
}, "pack1");

PM.clean({
    files: "./test/**"
}, "pack1");

PM.pmd5({
    options: {
        fix: ["*"],
        cwd: "./test",
        pm: {
            basePath: "./"
        }
    },
    files: ["./css/*", "./script/*.js"]
}, "pack1");

PM.setTask("main", ["clean:pack1", "copy:pack1", "pmd5:pack1"]);
PM.runTask("main");
