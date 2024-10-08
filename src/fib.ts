// util function that computes the fibonacci numbers
export default function fibonacci(n) {
  if (n < 0) {
    return -1;
  } else if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  }

  return (fibonacci(n - 1) as number) + (fibonacci(n - 2) as number);
}
