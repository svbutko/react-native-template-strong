const fs = require("fs");

function addIntoFile(file, params1) {
    let fileContent = fs.readFileSync(file, {encoding: "utf-8"});

    if (!fileContent.includes(params1)) {
        fileContent = fileContent + params1;

        fs.writeFileSync(file, fileContent, {encoding: "utf-8"});
    }
}

module.exports = addIntoFile;
