
aow.clean({
    files: ["./test/**"]
}, "dev");

aow.copy({
    "./test": {expand: true, files: ["**"]}
}, "dev");

aow.pmd5({
    options: {
        cwd: "./test/"
    },
    files: ["**", "!*.html", "!./(aow-config|project.min).js"]
}, "dev");


aow.setTask("dev", ["clean:dev", "copy:dev", "pmd5:dev"]);
