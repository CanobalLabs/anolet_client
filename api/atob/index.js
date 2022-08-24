module.exports = function (vm) {
    // atob
    var _atob = require("../../api/atob/atob")(vm)
    vm.setProp(vm.global, "atob", _atob);
        
    /// _garbageCollection
    _atob.dispose();
}