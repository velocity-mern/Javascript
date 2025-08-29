// async javascript using promise

// http - async

const responseFromServerPromise = fetch(
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&symbols=eth"
);

console.log("responseFromServerPromise", responseFromServerPromise);

responseFromServerPromise
  .then((result) => {
    result = result.json(); // giving a promise
    result.then((res) => {
      console.log("res", res);
    });
  })
  .catch((error) => {
    error = error.json();
    error.then((err) => {
      console.log("err", err);
    });
  });
