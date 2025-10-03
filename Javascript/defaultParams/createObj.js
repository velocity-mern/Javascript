const name = "Karn";
const city = "New Delhi";
const isEmployee = true;
const age = 40;

const obj = {
  name: name,
  city: city,
  isEmployee: isEmployee,
};

const obj2 = {
  name,
  city: "Mumbai",
  age,
};
console.log("obj", obj);
console.log("obj2", obj2);
