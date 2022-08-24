module.exports = function (vm) {
    // btoa
    var _btoa = require("../../api/btoa/btoa")(vm)
    vm.setProp(vm.global, "btoa", _btoa);
        
    /// _garbageCollection
    _btoa.dispose();
}