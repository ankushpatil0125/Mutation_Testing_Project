package org.example;
import java.util.*;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
//import static org.example.Main.*;
class MainTest {

    @Test
    void testFactorial() {
        assertEquals(120, Main.factorial(5));
        assertEquals(1, Main.factorial(0));
        assertThrows(IllegalArgumentException.class, () -> Main.factorial(-1));
    }

    @Test
    void testGCD() {
        assertEquals(7, Main.gcd(35, 14));
        assertEquals(1, Main.gcd(17, 13));
        assertEquals(5, Main.gcd(0, 5));
    }

    @Test
    void testFibonacci() {
        assertEquals(55, Main.fibonacci(10));
        assertEquals(0, Main.fibonacci(0));
        assertEquals(1, Main.fibonacci(1));
        assertThrows(IllegalArgumentException.class, () -> Main.fibonacci(-5));
    }

//    @Test
//    void testIsPrime() {
//        assertTrue(Main.isPrime(29));
//        assertFalse(Main.isPrime(1));
//        assertFalse(Main.isPrime(4));
//    }

    @Test
    void testPower() {
        assertEquals(16, Main.power(2, 4));
        assertEquals(1, Main.power(5, 0));
        assertEquals(125, Main.power(5, 3));
        assertThrows(IllegalArgumentException.class, () -> Main.power(2, -1));
    }

    @Test
    void testLCM() {
        assertEquals(20, Main.lcm(4, 5));
        assertEquals(12, Main.lcm(3, 12));
    }
    // Divisors Tests
    @Test
    void testDivisorsOf28() {
        assertArrayEquals(new int[]{1, 2, 4, 7, 14, 28}, Main.findDivisors(28));
    }

    @Test
    void testDivisorsOf1() {
        assertArrayEquals(new int[]{1}, Main.findDivisors(1));
    }

    @Test
    void testDivisorsOfZero() {
        assertThrows(IllegalArgumentException.class, () -> Main.findDivisors(0), "Number must be greater than 0");
    }

    @Test
    void testDivisorsOfPrime7() {
        assertArrayEquals(new int[]{1, 7}, Main.findDivisors(7));
    }

    // Perfect Number Tests
    @Test
    void testIsPerfectNumber6() {
        assertTrue(Main.isPerfectNumber(6));
    }

    @Test
    void testIsPerfectNumber28() {
        assertTrue(Main.isPerfectNumber(28));
    }

    @Test
    void testIsPerfectNumber7() {
        assertFalse(Main.isPerfectNumber(7));
    }


//    @Test
//    void testPrimeFactorization() {
//        assertArrayEquals(new int[]{2, 3, 3}, Main.primeFactorization(18));
//        assertArrayEquals(new int[]{2, 2, 2}, Main.primeFactorization(8));
//        assertThrows(IllegalArgumentException.class, () -> Main.primeFactorization(1));
//    }

    @Test
    void testSieveOfEratosthenes() {
        assertArrayEquals(new int[]{2, 3, 5, 7}, Main.sieveOfEratosthenes(10));
        assertArrayEquals(new int[]{2, 3}, Main.sieveOfEratosthenes(4));
    }

    @Test
    void testBinarySearch() {
        int[] arr = {1, 3, 5, 7, 9};
        assertEquals(2, Main.binarySearch(arr, 5));
        assertEquals(-1, Main.binarySearch(arr, 10));
    }


//    @Test
//    void testReverseLinkedList() {
//        Main.ListNode head = new Main.ListNode(1);
//        head.next = new Main.ListNode(2);
//        head.next.next = new Main.ListNode(3);
//        Main.ListNode reversed = Main.reverseLinkedList(head);
//
//        assertEquals(3, reversed.val);
//        assertEquals(2, reversed.next.val);
//        assertEquals(1, reversed.next.next.val);
//        assertNull(reversed.next.next.next);
//    }

    @Test
    void testArmstrongNumbers() {
        // Armstrong number tests
        assertTrue(Main.isArmstrongNumber(153), "153 is an Armstrong number");
        assertTrue(Main.isArmstrongNumber(9474), "9474 is an Armstrong number");

        // Non-Armstrong number test
        assertFalse(Main.isArmstrongNumber(123), "123 is not an Armstrong number");

        // Single digit numbers are Armstrong numbers
        assertTrue(Main.isArmstrongNumber(5), "Single digit numbers (like 5) are always Armstrong numbers");

        // Zero is considered an Armstrong number
        assertTrue(Main.isArmstrongNumber(0), "0 is an Armstrong number");

        // Negative numbers cannot be Armstrong numbers
        assertFalse(Main.isArmstrongNumber(-153), "Negative numbers cannot be Armstrong numbers");
    }

    @Test
    void testDijkstra() {
        int[][] graph = {
                {0, 10, 0, 0, 0},
                {10, 0, 5, 0, 0},
                {0, 5, 0, 20, 1},
                {0, 0, 20, 0, 2},
                {0, 0, 1, 2, 0}
        };
        int[] expectedDistances = {0, 10, 15, 18, 16}; // Adjust expectation here
        assertArrayEquals(expectedDistances, Main.dijkstra(graph, 0));
    }
    @Test
    public void testIsPalindrome() {
        // Testing with palindrome strings
        assertTrue(Main.isPalindrome("madam"));
        assertTrue(Main.isPalindrome("racecar"));

        // Testing with non-palindrome strings
        assertFalse(Main.isPalindrome("hello"));
        assertFalse(Main.isPalindrome("world"));
    }

    @Test
    public void testFindDivisors() {
        // Testing divisors for a number
        int[] divisors = Main.findDivisors(28);
        assertArrayEquals(new int[]{1, 2, 4, 7, 14, 28}, divisors);

        divisors = Main.findDivisors(36);
        assertArrayEquals(new int[]{1, 2, 3, 4, 6, 9, 12, 18, 36}, divisors);
    }

    @Test
    public void testIsPerfectNumber() {
        // Testing perfect numbers
        assertTrue(Main.isPerfectNumber(6));  // 6 is perfect (1 + 2 + 3 = 6)
        assertTrue(Main.isPerfectNumber(28)); // 28 is perfect (1 + 2 + 4 + 7 + 14 = 28)

        // Testing non-perfect numbers
        assertFalse(Main.isPerfectNumber(12));
        assertFalse(Main.isPerfectNumber(15));
    }

    @Test
    public void testLargestPrimeFactor() {
        // Testing the largest prime factor function
        assertEquals(7, Main.largestPrimeFactor(28));  // Prime factors of 28 are 2, 7
        assertEquals(5, Main.largestPrimeFactor(45));  // Prime factors of 45 are 3, 5
        assertEquals(13, Main.largestPrimeFactor(26)); // Prime factors of 26 are 2, 13
        assertEquals(37, Main.largestPrimeFactor(74)); // Prime factors of 74 are 2, 37
    }

    //Bubble Sort
    @Test
    void testBubbleSort() {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        Main.bubbleSort(arr);
        assertArrayEquals(new int[]{11, 12, 22, 25, 34, 64, 90}, arr);
    }

    @Test
    void testBubbleSortEmptyArray() {
        int[] arr = {};
        Main.bubbleSort(arr);
        assertArrayEquals(new int[]{}, arr);
    }


    //Max In Array
    @Test
    void testFindMax() {
        int[] arr = {1, 2, 3, 4, 5};
        assertEquals(5, Main.findMax(arr));
    }

    @Test
    void testFindMaxNegativeNumbers() {
        int[] arr = {-5, -2, -3, -1};
        assertEquals(-1, Main.findMax(arr));
    }

    @Test
    void testFindMaxEmptyArray() {
        int[] arr = {};
        assertThrows(IllegalArgumentException.class, () -> Main.findMax(arr));
    }


    //Reverse A string
    @Test
    void testReverseString() {
        String str = "Hello World";
        assertEquals("dlroW olleH", Main.reverseString(str));
    }

    @Test
    void testReverseEmptyString() {
        String str = "";
        assertEquals("", Main.reverseString(str));
    }

    @Test
    void testReverseSingleCharacterString() {
        String str = "A";
        assertEquals("A", Main.reverseString(str));
    }


    //AnagramCheckTest
    @Test
    void testAreAnagrams() {
        String str1 = "Listen";
        String str2 = "Silent";
        assertTrue(Main.areAnagrams(str1, str2));
    }

    @Test
    void testAreNotAnagrams() {
        String str1 = "Hello";
        String str2 = "World";
        assertFalse(Main.areAnagrams(str1, str2));
    }

    @Test
    void testAreAnagramsWithSpecialCharacters() {
        String str1 = "A gentleman";
        String str2 = "Elegant man!";
        assertTrue(Main.areAnagrams(str1, str2));
    }

    @Test
    void testAreAnagramsWithDifferentCases() {
        String str1 = "Dormitory";
        String str2 = "Dirty room";
        assertTrue(Main.areAnagrams(str1, str2));
    }


    //KnapsackTest
    @Test
    public void testKnapsack() {
        int[] weights = {1, 2, 3};
        int[] values = {10, 20, 30};
        int capacity = 5;

        int result = Main.knapsack(weights, values, capacity);
        assertEquals(50, result);  // Expected maximum value
    }


    //BFSTest
    @Test
    public void testBFS() {
        Map<Integer, List<Integer>> graph = new HashMap<>();
        graph.put(0, Arrays.asList(1, 2));
        graph.put(1, Arrays.asList(0, 3, 4));
        graph.put(2, Arrays.asList(0));
        graph.put(3, Arrays.asList(1));
        graph.put(4, Arrays.asList(1));

        List<Integer> result = Main.bfs(graph, 0);
        List<Integer> expected = Arrays.asList(0, 1, 2, 3, 4);
        assertEquals(expected, result);
    }

    //LCS
    @Test
    public void testLCS() {
        String X = "AGGTAB";
        String Y = "GXTXAYB";

        int result = Main.lcs(X, Y);
        assertEquals(4, result);  // Expected LCS length is 4
    }


    //LIS
    @Test
    public void testLIS() {
        int[] arr = {10, 22, 9, 33, 21, 50, 41, 60, 80};

        int result = Main.lis(arr);
        assertEquals(6, result);  // Expected LIS length is 6
    }


    //Prims
    @Test
    public void testPrim() {
        int[][] graph = {
                {0, 2, 0, 6, 0},
                {2, 0, 3, 8, 5},
                {0, 3, 0, 0, 7},
                {6, 8, 0, 0, 9},
                {0, 5, 7, 9, 0}
        };

        List<int[]> result = Main.prim(graph, 0);
        assertEquals(4, result.size());  // Should return 4 edges
    }


    //RabinKarp
    @Test
    public void testRabinKarp() {
        String text = "ABABDABACDABABCABAB";
        String pattern = "ABAB";

        List<Integer> result = Main.rabinKarp(text, pattern);
        List<Integer> expected = Arrays.asList(0, 10, 15);
        assertEquals(expected, result);  // Expected positions where pattern matches
    }


    //KMP
    @Test
    public void testKMPSearch() {
        String text = "ABABDABACDABABCABAB";
        String pattern = "ABAB";

        List<Integer> result = Main.KMPSearch(text, pattern);
        List<Integer> expected = Arrays.asList(0, 10, 15);
        assertEquals(expected, result);  // Expected positions where pattern matches
    }


    // Factorial and Fibonacci
    @Test
    void testFactorialAndFibonacciIntegration() {
        int factResult = (int) Main.factorial(5); // 120
        int fibResult = (int) Main.fibonacci(5); // 5
        assertEquals(24, factResult / fibResult); // Testing relation between factorial and Fibonacci
    }

    // GCD and LCM integration
    @Test
    void testGcdAndLcmIntegration() {
        int a = 12, b = 18;
        int gcdResult = Main.gcd(a, b); // 6
        int lcmResult = Main.lcm(a, b); // 36
        assertEquals(1, (gcdResult * lcmResult) / (a * b)); // Validate gcd(a, b) * lcm(a, b) = a * b
    }

    // Knapsack and Array Utilities Integration
    @Test
    void testKnapsackAndArrayUtilities() {
        int[] weights = {2, 3, 4};
        int[] values = {4, 5, 6};
        int capacity = 5;
        int maxProfit = Main.knapsack(weights, values, capacity); // 9
        assertEquals(9, maxProfit); // Validate knapsack problem result
    }

    // String Matching Algorithms Integration (Rabin-Karp and KMP)
    @Test
    void testStringMatchingIntegration() {
        String text = "abracadabra";
        String pattern = "abra";

        List<Integer> rabinMatches = Main.rabinKarp(text, pattern);
        List<Integer> kmpMatches = Main.KMPSearch(text, pattern);

        assertEquals(rabinMatches, kmpMatches); // Validate both algorithms yield the same result
    }

    // Divisors and Perfect Numbers Integration
    @Test
    void testDivisorsAndPerfectNumbersIntegration() {
        int number = 28;
        int[] divisors = Main.findDivisors(number);
        boolean isPerfect = Main.isPerfectNumber(number);

        assertTrue(isPerfect); // Validate perfect number
        int sumOfDivisors = Arrays.stream(divisors).filter(d -> d != number).sum(); // Sum excluding the number itself
        assertEquals(number, sumOfDivisors); // Validate sum of divisors equals the number itself
    }

    // Sorting Algorithms and Max Value Integration
    @Test
    void testSortingAndMaxValueIntegration() {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        Main.bubbleSort(arr);
        int maxVal = Main.findMax(arr); // Should be 90 after sorting
        assertEquals(90, maxVal); // Validate max value
    }

    // Palindrome and Reverse String Integration
    @Test
    void testPalindromeAndReverseStringIntegration() {
        String str = "madam";
        String reversed = Main.reverseString(str);
        assertEquals(str, reversed); // Validate palindrome
    }

    // Knapsack and Max Value Integration
    @Test
    void testKnapsackAndMaxValueIntegration() {
        int[] weights = {1, 2, 3};
        int[] values = {10, 20, 30};
        int capacity = 5;
        int knapsackValue = Main.knapsack(weights, values, capacity);
        int maxValue = Main.findMax(new int[]{knapsackValue, 10, 5, 50});
        assertEquals(50, maxValue); // Validate max value after knapsack optimization
    }

    // LCS and LIS Integration
    @Test
    void testLcsAndLisIntegration() {
        String X = "AGGTAB";
        String Y = "GXTXAYB";
        int lcsResult = Main.lcs(X, Y); // Expected LCS length: 4
        assertEquals(4, lcsResult);

        int[] lisArray = {10, 22, 9, 33, 21, 50, 41, 60, 80};
        int lisResult = Main.lis(lisArray); // Expected LIS length: 6
        assertEquals(6, lisResult);
    }

    // BFS and Graph Integration
    @Test
    void testBfsAndGraphIntegration() {
        Map<Integer, List<Integer>> graph = new HashMap<>();
        graph.put(0, Arrays.asList(1, 2));
        graph.put(1, Arrays.asList(0, 3, 4));
        graph.put(2, Arrays.asList(0));
        graph.put(3, Arrays.asList(1));
        graph.put(4, Arrays.asList(1));

        List<Integer> bfsResult = Main.bfs(graph, 0);
        List<Integer> expectedBfs = Arrays.asList(0, 1, 2, 3, 4);
        assertEquals(expectedBfs, bfsResult); // Validate BFS traversal
    }



}