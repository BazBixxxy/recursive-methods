function fibonacci(n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// console.log(fibonacci(11)); // we return the next number/position in the sequence

n = 11;

for (let i = 0; i < n; i++) console.log(fibonacci(i)); // we loop through the sequence as we return and print each number in the sequence
