"use strict";
// a = 10;
// a.name = "this is name which is wrong way to add";
// console.log("a", a);

// function somefunction() {
//   "use strict";
//   console.log(this);
//   var b = 100;
//   console.log("b", b);
// }

// somefunction();

// console.log(this);

// const obj = { prop: 1, prop: 2 };

// console.log("obj", obj);

// package = "testing";
// console.log("package", package);

// Non-strict mode
// "use strict";
// function divideStrict(x, y) {
//   return x / y;
// }
// console.log(divideStrict(10, 0));

// "use strict";
// function sum(a, b, c) {
//   // In non-strict mode, duplicate parameter names are allowed
//   console.log(a); // Output: 2, because the last parameter value overrides the previous ones
// }
// sum(1, 2, 3);

var obj = {
  name: "John",
  age: 30,
  name: "Jane",
};

Array.prototype = null;

console.log(Array.prototype);
console.log(obj.name);
