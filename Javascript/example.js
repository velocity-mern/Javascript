console.log("helllo there");

function greet() {
  console.log("good morning");
}

greet();

setTimeout(() => {
  console.log("I am in settimeout, it will take some time to execute");
}, 5000);

fetch(
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&symbols=eth"
).then((result) => {
  result = result.json(); // giving a promise
  result.then((res) => {
    console.log("res", res);
  });
});

console.log("bye ");
