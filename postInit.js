#!/usr/bin/env node
const fs = require("fs");

fs.rename("gitignore", ".gitignore", function (err) {
    if (err) {
        throw err;
    } else {
        console.log("\nSuccessfully renamed gitignore");
    }
});

fs.rename("env", ".env", function (err) {
    if (err) {
        throw err;
    } else {
        console.log("Successfully renamed env");
    }
});
