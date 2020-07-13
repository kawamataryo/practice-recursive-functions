export const fibonacci = (n: number, memo: number[] = []): number => {
  if (n < 2) {
    return n;
  }
  if (memo[n]) {
    return memo[n]
  }
  return memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
};
