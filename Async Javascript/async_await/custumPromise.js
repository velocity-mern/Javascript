// sync
const custumPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    setTimeout(() => {
      resolve("Task completed successfully");
    }, 5000);
  } else {
    reject("Task failed");
  }
});

async function consumePromiseFunc() {
  try {
    console.log("starting....");

    const result = await custumPromise; // async call
    console.log("result in await", result);

    console.log("ending....");
  } catch (error) {
    console.log("error", error);
  }
}

consumePromiseFunc();

// custumPromise
//   .then((data) => {
//     console.log("Fullfiled Promise:", data);
//   })
//   .catch((error) => {
//     console.log("error:", error);
//   });
