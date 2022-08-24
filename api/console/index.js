module.exports = function (vm) {
    // console
    var _console = require("../../api/console/console")(vm)
    vm.setProp(vm.global, "console", _console);
        // log
        var _consoleLog = require("../../api/console/log/log")(vm)
        vm.setProp(_console, "log", _consoleLog);
        // error
        var _consoleError = require("../../api/console/error/error")(vm)
        vm.setProp(_console, "error", _consoleError);
        // warn
        var _consoleWarn = require("../../api/console/warn/warn")(vm)
        vm.setProp(_console, "warn", _consoleWarn);
        
        /// _garbageCollection
        _console.dispose();
        _consoleLog.dispose();
        _consoleError.dispose();
        _consoleWarn.dispose();
}