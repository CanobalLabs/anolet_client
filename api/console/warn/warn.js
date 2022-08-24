module.exports = function(vm) {
    return vm.newFunction("warn", (...args) => {
        const nativeArgs = args.map(vm.dump);
        console.oldWarn("%c[UGC Client]", "color:blue", ...nativeArgs);
    });
}