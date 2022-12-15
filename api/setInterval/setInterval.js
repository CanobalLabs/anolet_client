module.exports = function(vm) {
    try {
        return vm.newFunction("setTimeout", (vmFnHandle, timeoutHandle) => {
            // Make a copy because otherwise vmFnHandle does not live long enough to call after the timeout
            const vmFnHandleCopy = vmFnHandle.dup()
            const timeout = vm.dump(timeoutHandle)
            const timeoutID = setTimeout(() => {
            // callFunction(vmFnHandleCopy) will call the vm function
            // in the context of the vm
            // we pass vm.undefined because we need to pass something for the "this" argument
                vm.callFunction(vmFnHandleCopy, vm.undefined)
            }, timeout)
            return vm.newNumber(timeoutID);
       });
    } catch (e) {
        console.error(e);
    }
}
