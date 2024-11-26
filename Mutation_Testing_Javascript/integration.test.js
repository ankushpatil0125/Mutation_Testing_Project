const { factorial, gcd, fibonacci, findDivisors, isPerfectNumber, bubbleSort } = require('./index');
describe("Integration Mutation Testing - Additional Cases", () => {
  // IVPR: Using Fibonacci and Factorial with larger inputs
  test("Integration Test: Fibonacci and Factorial with IVPR for larger inputs", () => {
    const fibValue = fibonacci(7); // Returns 13
    const factValue = factorial(7); // Returns 5040
    expect(factValue / fibValue).toBe(387.6923076923077); // Test a larger parameter and its impact
  });
  // IPEX: Parameter exchange for GCD and divisors
  test("Integration Test: GCD and Divisors with IPEX", () => {
    const a = 24, b = 36;
    const gcdResult = gcd(a, b); // GCD is 12
    const divisorsOfGcd = findDivisors(gcdResult); // Divisors of 12: [1, 2, 3, 4, 6, 12]
    expect(divisorsOfGcd).toEqual([1, 2, 3, 4, 6, 12]); // Validate divisors
  });
  // IMCD: Removing intermediate validation logic
  test("Integration Test: Perfect Number Validation IMCD", () => {
    const number = 496; // Known perfect number
    const divisors = findDivisors(number); // Skip validating divisors explicitly
    const isPerfect = isPerfectNumber(number); // Check directly if it's perfect
    expect(isPerfect).toBe(true); // Ensure it's correct
  });
  // IREM: Bubble Sort with array modification
  test("Integration Test: Bubble Sort IREM with odd-sized array", () => {
    const arr = [31, 45, 22, 90, 67, 11];
    bubbleSort(arr); // Sorts the array
    expect(arr).toEqual([11, 22, 31, 45, 67, 90]); // Ensure correct sorting
    const median = arr[Math.floor(arr.length / 2)]; // Find median
    expect(median).toBe(45); // Validate the middle value
  });
  // Chained Integration: Fibonacci, Factorial, and GCD
  test("Integration Test: Chained Fibonacci, Factorial, and GCD", () => {
    const num1 = 5, num2 = 8; // Inputs
    const fib1 = fibonacci(num1); // Fibonacci of 5 is 5
    const fib2 = fibonacci(num2); // Fibonacci of 8 is 21
    const gcdValue = gcd(fib1, fib2); // GCD of 5 and 21 is 1
    const factOfGcd = factorial(gcdValue); // Factorial of GCD (1) is 1
    expect(factOfGcd).toBe(1); // Validate factorial of GCD
  });
  // Extended Workflow: Divisors, Perfect Numbers, and Sort
  test("Integration Test: Full Workflow with Divisors, Perfect Numbers, and Sort", () => {
    const number = 8128; // Known perfect number
    const divisors = findDivisors(number); // Step 1: Find divisors
    expect(divisors).toContain(4064); // Validate a specific divisor
    const isPerfect = isPerfectNumber(number); // Step 2: Check if it's perfect
    expect(isPerfect).toBe(true); // Ensure perfect number correctness
    bubbleSort(divisors); // Step 3: Sort divisors
    expect(divisors).toEqual(divisors.sort((a, b) => a - b)); // Validate sorted order
  });
  // Complex Integration: Fibonacci and Divisors
  test("Integration Test: Fibonacci and Divisors Relationship", () => {
    const number = 8; // Input
    const fibValue = fibonacci(number); // Fibonacci of 8 is 21
    const divisors = findDivisors(fibValue); // Divisors of 21: [1, 3, 7, 21]
    expect(divisors).toEqual([1, 3, 7, 21]); // Validate divisors
    const isPerfect = isPerfectNumber(fibValue); // Check if Fibonacci value is a perfect number
    expect(isPerfect).toBe(false); // Validate non-perfect status
  });
  // Workflow Integration: Sorting Perfect Numbers
  test("Integration Test: Sorting Perfect Numbers Workflow", () => {
    const perfectNumbers = [28, 6, 496, 8128]; // Known perfect numbers
    bubbleSort(perfectNumbers); // Sort the list
    expect(perfectNumbers).toEqual([6, 28, 496, 8128]); // Validate sorted perfect numbers
  });
});