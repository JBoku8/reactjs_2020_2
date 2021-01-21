function* generator() {
  console.log("პირველ yield-ამდე");
  const message = yield 1;
  //   ---
  console.log("Message", message);
  yield 2;
  //   ----
  yield 3;
  //   ---
  yield 4;
  //   ===
  console.log("მეხუთე yield-ამდე");
  yield 5;
}

const myNumbers = generator();
console.log(myNumbers.next());
console.log(myNumbers.next("Test args"));
// console.log(myNumbers.next());
// console.log(myNumbers.next());
// console.log(myNumbers.next());
// console.log(myNumbers.next());
