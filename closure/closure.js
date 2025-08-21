function parent() {
  var age = 20;
  var childName = "Amit"; // childName will act as lexical variable for child function
  return function child() {
    var age = 25;
    console.log(`hello from ${childName} and my age is`, age);
  };
  //   child(); // calling
}

var res = parent();
res();

// console.log(res);

// counter example

function outer() {
  var count = 0; // it will act as lexical variable for function inner
  count = 100;
  return function inner() {
    console.log(++count);
  };
}

outer()();

// use cases
// data encapsulatio
// memoise => javascript
// fuction curring

// function curring

add(4, 5); // 9
add(4)(5); // 9

function add(a) {
  return function inner(b) {
    return a + b;
  };
}

// a = 5;

console.log("add(5)", add(4)(5));
console.log("add(5)", add(4, 5));
