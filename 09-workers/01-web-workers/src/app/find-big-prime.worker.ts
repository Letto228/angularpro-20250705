/// <reference lib="webworker" />

function findBigPrime() {
  let start = Math.floor(Math.random() * 1000000000);
  let is_prime = false;
  while (!is_prime) {
    is_prime = test_prime(start);
    start++;
  }
  return start;
}

function test_prime(n: number) {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (var x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
}

addEventListener('message', ({ data }) => {
  // const response = `worker response to ${data}`;

  const value = findBigPrime();

  postMessage(value);
});
