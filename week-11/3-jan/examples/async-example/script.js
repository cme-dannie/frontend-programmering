console.log("Sync: We start the program here");

function makeCoffee() {
  console.log("Finished making coffee...");
}

function makeOatmeal() {
  console.log("Finished making oatmeal...");
}

function eatBreakfast() {
  console.log("Aw yeah, breakfast is ready. Let's eat!");
}

console.log("Let's start out by making some coffee, yes?");
setTimeout(makeCoffee, 1000);
console.log(
  "Ok, coffee is brewing. Let's start making oatmeal while we wait for it to finish, shall we?"
);
setTimeout(makeOatmeal, 2000);
console.log("Ok, I've started preparing the oatmeal as well.")
setTimeout(eatBreakfast, 3000);

console.log("Sync: We end the program after this line... or do we really?");


setTimeout(() => {
  console.log("Hey there!");
}, 1000);




