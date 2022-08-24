module.exports = function(vm) {
    return vm.newFunction("log", (...args) => {
        const nativeArgs = args.map(vm.dump);
        console.oldLog("%c[UGC Client]", "color:blue", ...nativeArgs);
    });
}