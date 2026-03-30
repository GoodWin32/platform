function sum(a, b) {
  return a + b;
}

if (sum(2, 2) !== 4) {
  throw new Error("Test failed");
}

console.log("Test passed");