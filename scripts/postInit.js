#!/usr/bin/env node
const ora = require('ora');
const fs = require('fs');
const path = require('path');

const projectPath = process.cwd();
const spinner = ora('Executing post init script ');

const rename = (target, newName) => {
    const gitignoreFile = path.join(projectPath, target)
    if (fs.existsSync(gitignoreFile)) {
        fs.renameSync(gitignoreFile, path.join(projectPath, newName))
    }
};

new Promise((resolve) => {
    spinner.start();
    // do something
    rename('gitignore', '.gitignore');
    rename('env', '.env');
    resolve();
}).then(() => {
    spinner.succeed();
}).catch(() => {
    spinner.fail();
    throw new Error('Something went wrong during the post init script execution');
});
