console.log("End");

setTimeout(() => {
  console.log(" Timeout 2");

  Promise.resolve().then(() => {
    console.log("Promise 2");
  });
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");

  setTimeout(() => {
    console.log("Timeout 1");
  }, 0);
});

console.log("Start");

//=================================
console.log(1);

console.log(2);

setTimeout(() => {
  console.log(3);
}, 0);

setTimeout(() => {
  console.log(4);
}, 100);

setTimeout(() => {
  console.log(5);
}, 0);

new Promise((resolve) => {
  console.log(6);

  resolve();
});

new Promise((resolve) => {
  setTimeout(() => {
    console.log(7);
    resolve();
  }, 0);
});

new Promise((resolve) => {
  setTimeout(() => {
    console.log(8);
    resolve();
  }, 100);
});

console.log(9);
