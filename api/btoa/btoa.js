module.exports = function(vm) {
    return vm.newFunction("btoa", (...args) => {
        const nativeArgs = args.map(vm.dump);
        return vm.newString(btoa(...nativeArgs));
    });
}