module.exports = function(vm) {
    return vm.newFunction("error", (...args) => {
        const nativeArgs = args.map(vm.dump);
        console.oldError("%c[UGC Client]", "color:blue", ...nativeArgs);
    });
}