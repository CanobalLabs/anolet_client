module.exports = function (vm) {
    // setInterval
    var _setInterval = require("../../api/setInterval/setInterval")(vm)
    vm.setProp(vm.global, "setInterval", _setInterval);
        
    /// _garbageCollection
    _setInterval.dispose();
}