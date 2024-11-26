
const {
    factorial,
    lcm,
    gcd,
    fibonacci,
    power,
    findDivisors,
    isPerfectNumber,
    largestPrimeFactor,
    sieveOfEratosthenes,
    isArmstrongNumber,
    bubbleSort,
    findMax,
    reverseString,
    binarySearch,
    isPalindrome,
    areAnagrams,
    knapsack,
    bfs,
    dijkstra,
    lcs,
    lis,
    kruskal,
    prim,
    rabinKarp,
    KMPSearch,
} = require('./index');
describe('Math Utilities Tests', () => {
    // Factorial Tests
    test('factorial of 0 should be 1', () => {
        expect(factorial(0)).toBe(1);
    });
    test('factorial of 5 should be 120', () => {
        expect(factorial(5)).toBe(120);
    });
    test('factorial of negative number should throw error', () => {
        expect(() => factorial(-1)).toThrow('Factorial is undefined for negative numbers.');
    });
    test('factorial of 20 should be 2432902008176640000', () => {
        expect(factorial(20)).toBe(2432902008176640000);
    });
    // GCD Tests
    test('GCD of 28 and 35 should be 7', () => {
        expect(gcd(28, 35)).toBe(7);
    });
    test('GCD of 0 and 35 should be 35', () => {
        expect(gcd(0, 35)).toBe(35);
    });
    test('GCD of two zero values should throw error', () => {
        expect(() => gcd(0, 0)).toThrow('GCD is undefined for both zero.');
    });
    test('GCD of -28 and 35 should be 7', () => {
        expect(gcd(-28, 35)).toBe(7);
    });
    // Fibonacci Tests
    test('Fibonacci of 10 should be 55', () => {
        expect(fibonacci(10)).toBe(55);
    });
    test('Fibonacci of negative index should throw error', () => {
        expect(() => fibonacci(-1)).toThrow('Fibonacci is undefined for negative indices.');
    });
    // Power Tests
    test('2 raised to power 3 should be 8', () => {
        expect(power(2, 3)).toBe(8);
    });
    test('2 raised to power -3 should be 0.125', () => {
        expect(power(2, -3)).toBe(0.125);
    });
    test('2 raised to power 0 should be 1', () => {
        expect(power(2, 0)).toBe(1);
    });
    // LCM Tests
    test('LCM of 4 and 6 should be 12', () => {
        expect(lcm(4, 6)).toBe(12);
    });
    test('LCM of 0 and 6 should be 0', () => {
        expect(lcm(0, 6)).toBe(0);
    });
    test('LCM of 4 and 0 should be 0', () => {
        expect(lcm(4, 0)).toBe(0);
    });
    // Divisors Tests
    test('Divisors of 28 should be [1, 2, 4, 7, 14, 28]', () => {
        expect(findDivisors(28)).toEqual([1, 2, 4, 7, 14, 28]);
    });
    test('Divisors of 1 should be [1]', () => {
        expect(findDivisors(1)).toEqual([1]);
    });
    test('Divisors of 0 should throw error', () => {
        expect(() => findDivisors(0)).toThrow('Number must be greater than 0');
    });
    test('Divisors of prime number 7 should be [1, 7]', () => {
        expect(findDivisors(7)).toEqual([1, 7]);
    });
    // Perfect Number Tests
    test('6 is a perfect number', () => {
        expect(isPerfectNumber(6)).toBe(true);
    });
    test('28 is a perfect number', () => {
        expect(isPerfectNumber(28)).toBe(true);
    });
    test('7 is not a perfect number', () => {
        expect(isPerfectNumber(7)).toBe(false);
    });
    // Largest Prime Factor Tests
    test('Largest prime factor of 60 should be 5', () => {
        expect(largestPrimeFactor(60)).toBe(5);
    });
    test('Largest prime factor of 97 should be 97', () => {
        expect(largestPrimeFactor(97)).toBe(97);
    });
    test('Largest prime factor of 1 should throw error', () => {
        expect(() => largestPrimeFactor(1)).toThrow('Number must be greater than 1.');
    });
    // Sieve of Eratosthenes Tests
    test('Primes up to 30 should be [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]', () => {
        expect(sieveOfEratosthenes(30)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
    });
    test('Primes up to 2 should be [2]', () => {
        expect(sieveOfEratosthenes(2)).toEqual([2]);
    });
    test('Primes up to 1 should return an empty array', () => {
        expect(sieveOfEratosthenes(1)).toEqual([]);
    });
    //Armstrong test
    test('153 is an Armstrong number', () => {
        expect(isArmstrongNumber(153)).toBe(true);
    });
    test('9474 is an Armstrong number', () => {
        expect(isArmstrongNumber(9474)).toBe(true);
    });
    test('123 is not an Armstrong number', () => {
        expect(isArmstrongNumber(123)).toBe(false);
    });
    test('Single digit numbers (like 5) are always Armstrong numbers', () => {
        expect(isArmstrongNumber(5)).toBe(true);
    });
    test('0 is an Armstrong number', () => {
        expect(isArmstrongNumber(0)).toBe(true);
    });
    test('Negative numbers cannot be Armstrong numbers', () => {
        expect(isArmstrongNumber(-153)).toBe(false);
    });
});
describe('DSA Functions Tests', () => {
    // Reverse String Tests
    test('Reverse of "hello" should be "olleh"', () => {
        expect(reverseString('hello')).toBe('olleh');
    });
    test('Reverse of empty string should be ""', () => {
        expect(reverseString('')).toBe('');
    });
    // Find Maximum Element Tests
    test('Maximum element in [1, 2, 3, 4, 5] should be 5', () => {
        expect(findMax([1, 2, 3, 4, 5])).toBe(5);
    });
    test('Maximum element in [-10, -20, -30] should be -10', () => {
        expect(findMax([-10, -20, -30])).toBe(-10);
    });
    test('Find max in empty array should throw error', () => {
        expect(() => findMax([])).toThrow('Array must not be empty');
    });
    // Bubble Sort Tests
    test('Bubble sort of [4, 2, 3, 1] should return [1, 2, 3, 4]', () => {
        expect(bubbleSort([4, 2, 3, 1])).toEqual([1, 2, 3, 4]);
    });
    test('Bubble sort of [1] should return [1]', () => {
        expect(bubbleSort([1])).toEqual([1]);
    });
    test('Bubble sort of empty array should return []', () => {
        expect(bubbleSort([])).toEqual([]);
    });
    // Binary Search Tests
    test('Index of 5 in array [1, 3, 5, 7, 9] should be 2', () => {
        const arr = [1, 3, 5, 7, 9];
        expect(binarySearch(arr, 5)).toBe(2);
    });
    test('Index of 10 in array [1, 3, 5, 7, 9] should be -1', () => {
        const arr = [1, 3, 5, 7, 9];
        expect(binarySearch(arr, 10)).toBe(-1);
    });
    test('Binary search with empty array should return -1', () => {
        const arr = [];
        expect(binarySearch(arr, 10)).toBe(-1);
    });
    test('Binary search on large array should return correct index', () => {
        const arr = Array.from({ length: 1000 }, (_, i) => i);
        expect(binarySearch(arr, 999)).toBe(999);
    });
    //Palindrome test cases
    test('isPalindrome - Racecar is a palindrome', () => {
        expect(isPalindrome('Racecar')).toBe(true);
    });
    test('isPalindrome - Hello is not a palindrome', () => {
        expect(isPalindrome('Hello')).toBe(false);
    });
    test('isPalindrome - Empty string is a palindrome', () => {
        expect(isPalindrome('')).toBe(true);
    });
    //Anagrams test
    test('"listen" and "silent" are anagrams', () => {
        expect(areAnagrams('listen', 'silent')).toBe(true);
    });
    test('"triangle" and "integral" are anagrams', () => {
        expect(areAnagrams('triangle', 'integral')).toBe(true);
    });
    test('"apple" and "pale" are not anagrams', () => {
        expect(areAnagrams('apple', 'pale')).toBe(false);
    });
    test('"Dormitory" and "Dirty Room" are anagrams (ignoring spaces and case)', () => {
        expect(areAnagrams('Dormitory', 'Dirty Room')).toBe(true);
    });
    test('Empty strings are considered anagrams', () => {
        expect(areAnagrams('', '')).toBe(true);
    });
    test('"abc" and "abcd" are not anagrams (different lengths)', () => {
        expect(areAnagrams('abc', 'abcd')).toBe(false);
    });
    //Knapsack
    test('Knapsack: exact fit', () => {
        const weights = [1, 2, 3];
        const values = [10, 15, 40];
        const capacity = 5;
        expect(knapsack(weights, values, capacity)).toBe(55);
    });
    test('Knapsack: no items fit', () => {
        const weights = [10, 20, 30];
        const values = [60, 100, 120];
        const capacity = 5;
        expect(knapsack(weights, values, capacity)).toBe(0);
    });
    //BFS Traversal Test
    test('BFS: traversal of graph', () => {
        const graph = {
            A: ['B', 'C'],
            B: ['A', 'D', 'E'],
            C: ['A', 'F'],
            D: ['B'],
            E: ['B', 'F'],
            F: ['C', 'E'],
        };
        expect(bfs(graph, 'A')).toEqual(['A', 'B', 'C', 'D', 'E', 'F']);
    });
    test('BFS: single node graph', () => {
        const graph = { A: [] };
        expect(bfs(graph, 'A')).toEqual(['A']);
    });
    //Dijkstra alg Test
    test('Dijkstra: shortest path in a small graph', () => {
        const graph = {
            A: { B: 1, C: 4 },
            B: { A: 1, C: 2, D: 6 },
            C: { A: 4, B: 2, D: 3 },
            D: { B: 6, C: 3 },
        };
        expect(dijkstra(graph, 'A')).toEqual({ A: 0, B: 1, C: 3, D: 6 });
    });
    test('Dijkstra: unreachable nodes', () => {
        const graph = {
            A: { B: 1 },
            B: { A: 1 },
            C: {},
        };
        expect(dijkstra(graph, 'A')).toEqual({ A: 0, B: 1, C: Infinity });
    });
    //LCS Test
    test('LCS of "ABCBDAB" and "BDCABB" is 4', () => {
        expect(lcs("ABCBDAB", "BDCABB")).toBe(4);
    });
    //LIS test
    test('LIS of [10, 22, 9, 33, 21, 50, 41, 60, 80] is 6', () => {
        expect(lis([10, 22, 9, 33, 21, 50, 41, 60, 80])).toBe(6);
    });
    //Kruskals Test
    test('Kruskal’s algorithm finds MST for given graph', () => {
        const vertices = 4;
        const edges = [
            { u: 0, v: 1, weight: 10 },
            { u: 0, v: 2, weight: 6 },
            { u: 0, v: 3, weight: 5 },
            { u: 1, v: 3, weight: 15 },
            { u: 2, v: 3, weight: 4 },
        ];
        expect(kruskal(vertices, edges)).toEqual([
            { u: 2, v: 3, weight: 4 },
            { u: 0, v: 3, weight: 5 },
            { u: 0, v: 1, weight: 10 },
        ]);
    });
    //Prims Test
    test('Prim’s algorithm finds MST for given graph', () => {
        const graph = [
            [0, 5, 7, 9, 0],
            [5, 0, 10, 0, 0],
            [7, 10, 0, 1, 0],
            [9, 0, 1, 0, 2],
            [0, 0, 0, 2, 0],
        ];
        expect(prim(graph, 0)).toEqual([
            [0, 1, 5],
            [0, 2, 7],
            [2, 3, 1],
            [3, 4, 2],
        ]);
    });
    //Rabin-Karp Test
    test('Rabin-Karp finds pattern in text', () => {
        expect(rabinKarp("ABAAABCD", "ABC")).toEqual([4]);
    });
    //KMP Test
    test('KMP finds pattern in text', () => {
        expect(KMPSearch("ABABABAC", "ABAB")).toEqual([0, 2]);
    });
});
// describe('Integration Testing for Math and DSA Utilities', () => {
//     // Factorial and Fibonacci
//     test('Factorial and Fibonacci integration', () => {
//         const fact = factorial(5); // 120
//         const fib = fibonacci(5); // 5
//         expect(fact / fib).toBe(24); // Testing relation between factorial and Fibonacci
//     });
//     // GCD and LCM
//     test('GCD and LCM integration', () => {
//         const a = 12, b = 18;
//         const gcdResult = gcd(a, b); // 6
//         const lcmResult = lcm(a, b); // 36
//         expect((gcdResult * lcmResult) / (a * b)).toBe(1); // Validate property: gcd(a, b) * lcm(a, b) = a * b
//     });
//     // Knapsack and Array Utilities
//     test('Knapsack problem', () => {
//         const weights = [2, 3, 4];
//         const values = [4, 5, 6];
//         const capacity = 5;
//         const maxProfit = knapsack(weights, values, capacity); // 9
//         expect(maxProfit).toBe(9); // Validate the result
//     });
//     // Graph Algorithms
//     test('Kruskal and Dijkstra integration', () => {
//         const vertices = 4;
//         const edges = [
//             { u: 0, v: 1, weight: 10 },
//             { u: 0, v: 2, weight: 6 },
//             { u: 0, v: 3, weight: 5 },
//             { u: 1, v: 3, weight: 15 },
//             { u: 2, v: 3, weight: 4 }
//         ];
//         const mst = kruskal(vertices, edges); // Minimum spanning tree
//         expect(mst.reduce((sum, edge) => sum + edge.weight, 0)).toBe(19); // Check MST weight
//         const graph = {
//             A: { B: 1, C: 4 },
//             B: { A: 1, C: 2, D: 6 },
//             C: { A: 4, B: 2, D: 3 },
//             D: { B: 6, C: 3 }
//         };
//         const shortestPaths = dijkstra(graph, 'A'); // { A: 0, B: 1, C: 3, D: 6 }
//         expect(shortestPaths.D).toBe(6); // Validate shortest path to D
//     });
//     // String Matching Algorithms
//     test('Rabin-Karp and KMP integration', () => {
//         const text = "abracadabra";
//         const pattern = "abra";
//         const rabinMatches = rabinKarp(text, pattern); // [0, 7]
//         const kmpMatches = KMPSearch(text, pattern); // [0, 7]
//         expect(rabinMatches).toEqual(kmpMatches); // Validate both algorithms yield the same result
//     });
//     // Miscellaneous - Divisors and Perfect Numbers
//     test('Divisors and Perfect Number integration', () => {
//         const divisors = findDivisors(28); // [1, 2, 4, 7, 14, 28]
//         const isPerfect = isPerfectNumber(28); // true
//         expect(isPerfect).toBe(true); // Validate perfect number
//         expect(divisors.reduce((sum, d) => d !== 28 ? sum + d : sum, 0)).toBe(28); // Sum of divisors excluding 28
//     });
// });
// describe('Integration Testing for Math and DSA Utilities', () => {
//     // Factorial and Fibonacci
//     test('Factorial and Fibonacci integration', () => {
//         const fact = factorial(5); // 120
//         const fib = fibonacci(5); // 5
//         expect(fact / fib).toBe(24); // Testing relation between factorial and Fibonacci
//     });
//     // GCD and LCM
//     test('GCD and LCM integration', () => {
//         const a = 12, b = 18;
//         const gcdResult = gcd(a, b); // 6
//         const lcmResult = lcm(a, b); // 36
//         expect((gcdResult * lcmResult) / (a * b)).toBe(1); // Validate property: gcd(a, b) * lcm(a, b) = a * b
//     });
//     // Knapsack and Array Utilities
//     test('Knapsack problem', () => {
//         const weights = [2, 3, 4];
//         const values = [4, 5, 6];
//         const capacity = 5;
//         const maxProfit = knapsack(weights, values, capacity); // 9
//         expect(maxProfit).toBe(9); // Validate the result
//     });
//     // Graph Algorithms
//     test('Kruskal and Dijkstra integration', () => {
//         const vertices = 4;
//         const edges = [
//             { u: 0, v: 1, weight: 10 },
//             { u: 0, v: 2, weight: 6 },
//             { u: 0, v: 3, weight: 5 },
//             { u: 1, v: 3, weight: 15 },
//             { u: 2, v: 3, weight: 4 }
//         ];
//         const mst = kruskal(vertices, edges); // Minimum spanning tree
//         expect(mst.reduce((sum, edge) => sum + edge.weight, 0)).toBe(19); // Check MST weight
//         const graph = {
//             A: { B: 1, C: 4 },
//             B: { A: 1, C: 2, D: 6 },
//             C: { A: 4, B: 2, D: 3 },
//             D: { B: 6, C: 3 }
//         };
//         const shortestPaths = dijkstra(graph, 'A'); // { A: 0, B: 1, C: 3, D: 6 }
//         expect(shortestPaths.D).toBe(6); // Validate shortest path to D
//     });
//     // String Matching Algorithms
//     test('Rabin-Karp and KMP integration', () => {
//         const text = "abracadabra";
//         const pattern = "abra";
//         const rabinMatches = rabinKarp(text, pattern); // [0, 7]
//         const kmpMatches = KMPSearch(text, pattern); // [0, 7]
//         expect(rabinMatches).toEqual(kmpMatches); // Validate both algorithms yield the same result
//     });
//     // Prime Validation and Largest Prime Factor
//     test('Prime numbers and largest prime factor integration', () => {
//         const primes = sieveOfEratosthenes(50); // Primes up to 50
//         expect(primes).toContain(47); // Ensure 47 is a prime
//         const largestFactor = largestPrimeFactor(13195); // Largest prime factor of 13195
//         expect(primes).toContain(largestFactor); // Ensure the largest factor is prime
//     });
//     // Sorting and Searching Combination
//     test('Bubble Sort and Binary Search integration', () => {
//         const array = [4, 2, 7, 1, 9, 3];
//         const sortedArray = bubbleSort(array); // [1, 2, 3, 4, 7, 9]
//         const searchResult = binarySearch(sortedArray, 7); // Index of 7
//         expect(searchResult).toBe(4); // Validate search result
//     });
//     // Palindrome, Anagrams, and String Utilities
//     test('Palindrome and Anagrams integration', () => {
//         const string1 = "racecar";
//         const string2 = "carrace";
//         expect(isPalindrome(string1)).toBe(true); // Validate palindrome
//         expect(areAnagrams(string1, string2)).toBe(true); // Validate anagrams
//     });
//     // LCS and LIS Integration
//     test('LCS and LIS integration', () => {
//         const seq1 = "ABCBDAB";
//         const seq2 = "BDCABB";
//         const lcsLength = lcs(seq1, seq2); // Longest common subsequence
//         expect(lcsLength).toBe(4); // Validate LCS length
//         const array = [10, 22, 9, 33, 21, 50, 41, 60, 80];
//         const lisLength = lis(array); // Longest increasing subsequence
//         expect(lisLength).toBe(6); // Validate LIS length
//     });
   
//     // Miscellaneous - Divisors and Perfect Numbers
//     test('Divisors and Perfect Number integration', () => {
//         const divisors = findDivisors(28); // [1, 2, 4, 7, 14, 28]
//         const isPerfect = isPerfectNumber(28); // true
//         expect(isPerfect).toBe(true); // Validate perfect number
//         expect(divisors.reduce((sum, d) => d !== 28 ? sum + d : sum, 0)).toBe(28); // Sum of divisors excluding 28
//     });
// });