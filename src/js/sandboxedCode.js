import { getQuickJS } from "../../stack";
async function main() {
  const QuickJS = await getQuickJS();
  const vm = QuickJS.newContext();

  require("../../api/console/index")(vm);
  require("../../api/atob/index")(vm);
  require("../../api/btoa/index")(vm);
  require("../../api/setInterval/index")(vm);
  // require("../../api/setTimeout/index")(vm);

  const code = vm.evalCode(`
  var a = "hey";
    console.log("Rus didn't trip over server wires");
    console.warn("Rus almost tripped over server wires");
    console.error("Rus tripped over server wires");
    console.log(btoa(function(){ return a}));
     setInterval(function() {
      console.log("a");
    }, 2000);
  `);
  if (code.error) {
    let e = vm.dump(code.error);
    console.error("Uncaught " + e.name + ": " + e.message + "\n" + e.stack);
    code.error.dispose()
  }
  // vm.dispose();
}

main()
