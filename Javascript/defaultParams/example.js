function add(a, b = 0) {
  //   if (!b) {
  //     b = 0;
  //   }
  console.log("b", b);
  console.log("a", a);
  return a + b;
}

console.log(add(10, 20));

let userName; //= "Karn";

function showName(userName = "Gaest") {
  console.log("welcome " + userName);
}

showName(userName);
