const fs = require("fs");

function replaceInFile(file, params1, params2) {
    let fileContent = fs.readFileSync(file, {encoding: "utf-8"});

    if(params2) {
        fileContent = fileContent.replace(params1, params2);
    } else {
        for(const p of params1) {
            fileContent = fileContent.replace(p[0], p[1]);
        }
    }

    fs.writeFileSync(file, fileContent, {encoding: "utf-8"});
}

module.exports = replaceInFile;
