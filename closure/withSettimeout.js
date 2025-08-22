console.log("program started");

function a() {
  for (let i = 1; i <= 10; i++) {
    setTimeout(() => {
      console.log("i: ", i);
    }, i * 1000);
  }
}

a();
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
