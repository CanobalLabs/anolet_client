module.exports = function(vm) {
    return vm.newFunction("atob", (...args) => {
        const nativeArgs = args.map(vm.dump);
        return vm.newString(atob(...nativeArgs));
    });
}