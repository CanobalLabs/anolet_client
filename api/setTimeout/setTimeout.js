module.exports = function(vm) {
    return vm.newFunction("setTimeout", (...args) => {
        const nativeArgs = args.map(vm.dump);
        return vm.newNumber(setTimeout(...nativeArgs));
    });
}