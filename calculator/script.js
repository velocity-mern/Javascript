let display = document.getElementById("display");

function appendValue(value) {
  console.log(value);
  display.value += value;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "#Error";
  }
}

function clearScreen() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}
