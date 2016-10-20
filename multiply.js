function multiply(a, b){
  return a * b
}

// Test
function rng(min = (-15), max = 15) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
(function bnoden(A = 0, B = 0, C = 0, count = 0) {
    while (count < 4) {
        A = rng(), B = rng(), C = multiply(A, B)
        
        console.log(A + " times " + B + " equals " + C)
        count++;
    }
})();

// -_- コードの戦争 -_- bnoden