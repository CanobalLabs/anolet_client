module.exports = function (vm) {
    // setTimeout
    var _setTimeout = require("../../api/setTimeout/setTimeout")(vm)
    vm.setProp(vm.global, "setTimeout", _setTimeout);
        
    /// _garbageCollection
    _setTimeout.dispose();
}