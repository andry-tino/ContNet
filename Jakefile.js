/**
 * Build system.
 */

(function () {
    var fs = require("fs");
    var path = require("path");
    var exec = require("child_process").execSync;

    var tsc = require("typescript");
    var sass = require("node-sass");

    // Utils
    var compiler = "tsc.js";
    var node = "node";
    var compilerExecPath = path.join(
        "node_modules",
        "typescript",
        "lib",
        compiler);

    // -----------------------------
    // Compile
    // -----------------------------

    desc("Builds the project and all source files.");
    task("default", function () {
        console.log("Building...");

        // 1. Compile TS files
        console.log("Compiling source...");
        compileBrowser();

        // 2. Compile SASS files
        console.log("Compiling styles...");
        compileSass();

        console.log("Build done!");
    });

    // -----------------------------
    // Clean
    // -----------------------------
    
    desc("Removes output files from source locations and cleans up folders");
    task("cleanup", function () {
        console.log("Cleaning up output folder...");

        deleteFolderRecursive("out/");

        console.log("Cleanup done!");
    });

    // -----------------------------
    // Private functions
    // -----------------------------
    
    function compileBrowser() {
        exec(node + " " + compilerExecPath + " " + "--project src");
    }

    function compileSass() {
        var result = sass.renderSync({
            file: path.join("src", "style", "application.scss"),
            outputStyle: "compressed", /* nested | compact | expanded | compressed */
            sourceMap: true
        });

        fs.writeFileSync(path.join("out", "style.css"), result.css);
    }

    function deleteFolderRecursive(pathToFolder, removeRoot) {
        if (!removeRoot) {
            removeRoot = true;
        }

        if (fs.existsSync(pathToFolder)) {
            fs.readdirSync(pathToFolder).forEach(function (file, index) {
                var curPath = path.join(pathToFolder, file);

                if (fs.lstatSync(curPath).isDirectory()) {
                    deleteFolderRecursive(curPath);
                } else {
                    fs.unlinkSync(curPath);
                }
            });

            // Empty folder, safe to delete
            if (removeRoot) {
                fs.rmdirSync(pathToFolder);
            }
        }
    }
})();