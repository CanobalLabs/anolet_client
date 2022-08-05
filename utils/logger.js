const chalk = require("chalk")
module.exports = function (title, msg, color) {
    eval(`console.log(chalk.black.bg${color}(" ${title} ") + " " + "${msg}")`);
}