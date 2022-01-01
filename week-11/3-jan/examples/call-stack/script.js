/* Let's check out this program in the debugger to see a visualization
of the call stack. Let's see how JS "puts the plates on the stack"
and then have them removed as they are finished.

Let's think about the fact that while something is running on this
stack, nothing else can execute.

This is the basics of how programs execute synchronously. */

function doSomethingElse() {
  console.log("Running doSomethingElse");
}

function doSomething() {
  console.log("Running doSomething");
  doSomethingElse();
}

function main() {
  console.log("Running main");
  doSomething();
}

main();
main();
