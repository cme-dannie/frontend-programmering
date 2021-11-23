/* Because the variables/functions defined in calculation are loaded first in
our HTML, we can access them here. We've essentially created a library
of variables/functions in 'calculation.js' */
console.log(globalVariable);
console.log(add(1, 2));
console.log(subtract(10, 5));
console.log(divide(8, 4));
console.log(multiply(6, 6));