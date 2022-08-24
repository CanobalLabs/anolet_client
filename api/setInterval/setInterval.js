module.exports = function(vm) {
    try {
        return vm.newFunction("setInterval", (...args) => {
            const nativeArgs = args.map(vm.dump);
            console.log(nativeArgs)
            return vm.newNumber(setInterval(...nativeArgs));
        });
    } catch (e) {
        console.error(e);
    }
}