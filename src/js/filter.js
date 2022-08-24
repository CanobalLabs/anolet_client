function logFilter(...args) {
    return console.oldLog("%c[Anolet Client]", "color:blue", ...args);
};
function warnFilter(...args) {
    return console.oldWarn("%c[Anolet Client]", "color:blue", ...args);
};
function errorFilter(...args) {
    return console.oldError("%c[Anolet Client]", "color:blue", ...args);
};

console.oldLog = console.log;
console.oldWarn = console.warn;
console.oldError = console.error;

console.log = logFilter;
console.warn = warnFilter;
console.error = errorFilter;

module.exports = "";
