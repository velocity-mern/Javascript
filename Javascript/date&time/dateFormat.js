const d1 = new Date();
console.log("d1", d1);

console.log(d1.toDateString());
console.log(d1.toISOString());

console.log(d1.toLocaleDateString()); // dd/mm/yyyy
console.log(d1.toLocaleDateString("en-US")); // yyyy/mm/dd (us)

console.log(d1.toLocaleString());
console.log(d1.toLocaleString("en-US"));
