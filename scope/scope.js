// var a = 10; // global scope

function hello() {
  var a = 10;
  function inner() {
    console.log("inside inner", a);
  }

  inner();
  console.log("inside hello", a);
}

hello();
console.log("in global object", a);
