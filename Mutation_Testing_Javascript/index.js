// MATH UTILITIES ---------------------------------------
// Function to calculate the factorial of a number.
function factorial(n) {
    if (n < 0) throw new Error("Factorial is undefined for negative numbers.");
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}
// Function to calculate the greatest common divisor (GCD) of two numbers.
function gcd(a, b) {
    if (a === 0 && b === 0) {
        throw new Error('GCD is undefined for both zero.');
    }
    return b === 0 ? Math.abs(a) : gcd(b, a % b);
}
// Function to calculate the nth Fibonacci number.
function fibonacci(n) {
    if (n < 0) throw new Error("Fibonacci is undefined for negative indices.");
    if (n === 0) return 0;
    if (n === 1) return 1;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}
// // Function to check if a number is prime.
// function isPrime(n) {
//     if (n <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) return false;
//     }
//     return true;
// }
// Function to calculate the power of a number using recursion.
function power(base, exp) {
    if (exp === 0) return 1;
    if (exp < 0) return 1 / power(base, -exp);
    return base * power(base, exp - 1);
}
// Function to calculate the Least Common Multiple (LCM) of two numbers.
// Function to calculate LCM of two numbers
function lcm(a, b) {
    if (a === 0 || b === 0) return 0; // LCM of 0 and any number is 0
    return Math.abs(a * b) / gcd(a, b); // LCM formula using GCD
  }
// Function to find all divisors of a number.
function findDivisors(n) {
    if (n <= 0) {
        throw new Error("Number must be greater than 0");
    }
    let divisors = [];
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            divisors.push(i); // Add divisor
            if (i !== n / i) {
                divisors.push(n / i); // Add the complement divisor
            }
        }
    }
    divisors.sort((a, b) => a - b); // Sort the divisors in ascending order
    return divisors;
}
// Function to check if a number is a perfect number.
function isPerfectNumber(n) {
    if (n <= 1) return false;
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            sum += i;
            if (i !== n / i) sum += n / i;
        }
    }
    return sum === n;
}
// Function to find the largest prime factor of a number.
function largestPrimeFactor(n) {
    if (n < 2) {
        throw new Error('Number must be greater than 1.');
    }
    let factor = 2;
    while (factor <= Math.sqrt(n)) {
        if (n % factor === 0) {
            n /= factor;
        } else {
            factor++;
        }
    }
    return n;
}
// // Function to find the prime factors of a number.
// function primeFactorization(n) {
//     if (n <= 1) throw new Error("Number must be greater than 1.");
//     let factors = [];
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         while (n % i === 0) {
//             factors.push(i);
//             n /= i;
//         }
//     }
//     if (n > 1) factors.push(n);
//     return factors;
// }
// Function to generate all prime numbers up to a given limit using the Sieve of Eratosthenes.
function sieveOfEratosthenes(limit) {
    let isPrime = new Array(limit + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
    for (let i = 2; i * i <= limit; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= limit; j += i) {
                isPrime[j] = false;
            }
        }
    }
    return Array.from({ length: limit - 1 }, (_, i) => i + 2).filter(i => isPrime[i]);
}
//Check Armstrong Number
function isArmstrongNumber(num) {
    const digits = num.toString().split('').map(Number);
    return digits.reduce((sum, d) => sum + Math.pow(d, digits.length), 0) === num;
}
// DSA FUNCTIONS ---------------------------------------
//Bubble sort
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
//Max in Array
function findMax(arr) {
    if (arr.length === 0) throw new Error("Array must not be empty");
    return Math.max(...arr);
}
//Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}
//Palindrome Check
function isPalindrome(str) {
    const sanitized = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return sanitized === sanitized.split('').reverse().join('');
}
//Anagram Check
function areAnagrams(str1, str2) {
    const normalize = str => str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
}
// Binary Search Algorithm.
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
//Knapsack Problem
function knapsack(weights, values, capacity) {
    const n = weights.length;
    const dp = Array(n + 1).fill(0).map(() => Array(capacity + 1).fill(0));
    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(dp[i - 1][w], values[i - 1] + dp[i - 1][w - weights[i - 1]]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    return dp[n][capacity];
}
//BFS Traversal
function bfs(graph, startNode) {
    const visited = new Set();
    const queue = [startNode];
    const result = [];
    while (queue.length > 0) {
        const node = queue.shift();
        if (!visited.has(node)) {
            visited.add(node);
            result.push(node);
            queue.push(...graph[node].filter(neighbor => !visited.has(neighbor)));
        }
    }
    return result;
}
//Dijakstras Alg
function dijkstra(graph, startNode) {
    const distances = {};
    const visited = {};
    const priorityQueue = [];
    for (const node in graph) {
        distances[node] = Infinity;
    }
    distances[startNode] = 0;
    priorityQueue.push({ node: startNode, distance: 0 });
    while (priorityQueue.length > 0) {
        priorityQueue.sort((a, b) => a.distance - b.distance);
        const current = priorityQueue.shift();
        const currentNode = current.node;
        if (visited[currentNode]) continue;
        visited[currentNode] = true;
        for (const neighbor in graph[currentNode]) {
            const distance = graph[currentNode][neighbor];
            const newDistance = distances[currentNode] + distance;
            if (newDistance < distances[neighbor]) {
                distances[neighbor] = newDistance;
                priorityQueue.push({ node: neighbor, distance: newDistance });
            }
        }
    }
    return distances;
}
//lcs
function lcs(X, Y) {
    const m = X.length, n = Y.length;
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (X[i - 1] === Y[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[m][n];
}
//Longest Increasing Subsequence (LIS)
function lis(arr) {
    const n = arr.length;
    const dp = Array(n).fill(1);
    
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    return Math.max(...dp);
}
//Kruskal’s Algorithm (Minimum Spanning Tree)
class DisjointSet {
    constructor(n) {
        this.parent = Array(n).fill(0).map((_, idx) => idx);
        this.rank = Array(n).fill(0);
    }
    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }
    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        if (rootX !== rootY) {
            if (this.rank[rootX] > this.rank[rootY]) {
                this.parent[rootY] = rootX;
            } else if (this.rank[rootX] < this.rank[rootY]) {
                this.parent[rootX] = rootY;
            } else {
                this.parent[rootY] = rootX;
                this.rank[rootX]++;
            }
        }
    }
}
function kruskal(vertices, edges) {
    const ds = new DisjointSet(vertices);
    edges.sort((a, b) => a.weight - b.weight);
    const mst = [];
    for (const edge of edges) {
        const { u, v, weight } = edge;
        if (ds.find(u) !== ds.find(v)) {
            ds.union(u, v);
            mst.push(edge);
        }
    }
    return mst;
}
//Prims
function prim(graph, start) {
    const vertices = graph.length;
    const visited = new Array(vertices).fill(false);
    const result = [];
    const minEdge = new Array(vertices).fill(Infinity);
    const parent = new Array(vertices).fill(null);
    
    minEdge[start] = 0;
    
    for (let count = 0; count < vertices - 1; count++) {
      let u = -1;
      for (let i = 0; i < vertices; i++) {
        if (!visited[i] && (u === -1 || minEdge[i] < minEdge[u])) {
          u = i;
        }
      }
  
      visited[u] = true;
  
      for (let v = 0; v < vertices; v++) {
        if (graph[u][v] !== 0 && !visited[v] && graph[u][v] < minEdge[v]) {
          minEdge[v] = graph[u][v];
          parent[v] = u;
        }
      }
    }
  
    for (let i = 0; i < vertices; i++) {
      if (parent[i] !== null) {
        result.push([parent[i], i, graph[parent[i]][i]]);
      }
    }
  
    return result;
  }
  
//RabinKarp
function rabinKarp(text, pattern) {
    const result = [];
    const base = 256; // Size of the alphabet
    const prime = 101; // A prime number for hashing
    const m = pattern.length;
    const n = text.length;
    let patternHash = 0;
    let textHash = 0;
    let h = 1;
  
    for (let i = 0; i < m - 1; i++) {
      h = (h * base) % prime;
    }
  
    for (let i = 0; i < m; i++) {
      patternHash = (base * patternHash + pattern.charCodeAt(i)) % prime;
      textHash = (base * textHash + text.charCodeAt(i)) % prime;
    }
  
    for (let i = 0; i <= n - m; i++) {
      if (patternHash === textHash) {
        let match = true;
        for (let j = 0; j < m; j++) {
          if (text[i + j] !== pattern[j]) {
            match = false;
            break;
          }
        }
        if (match) result.push(i);
      }
  
      if (i < n - m) {
        textHash = (base * (textHash - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % prime;
        if (textHash < 0) textHash += prime;
      }
    }
  
    return result;
  }
  
function hash(str, length, d, q) {
    let h = 0;
    for (let i = 0; i < length; i++) {
        h = (h * d + str.charCodeAt(i)) % q;
    }
    return h;
}
function rehash(text, hText, i, m, d, q) {
    hText = (hText - text.charCodeAt(i) * Math.pow(d, m - 1)) * d + text.charCodeAt(i + m);
    return (hText + q) % q;
}
//KMP
function KMPSearch(text, pattern) {
    const lps = computeLPSArray(pattern);
    const result = [];
    let i = 0, j = 0;
    while (i < text.length) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }
        if (j === pattern.length) {
            result.push(i - j);
            j = lps[j - 1];
        } else if (i < text.length && pattern[j] !== text[i]) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }
    return result;
}
function computeLPSArray(pattern) {
    const lps = Array(pattern.length).fill(0);
    let length = 0;
    let i = 1;
    while (i < pattern.length) {
        if (pattern[i] === pattern[length]) {
            length++;
            lps[i] = length;
            i++;
        } else {
            if (length !== 0) {
                length = lps[length - 1];
            } else {
                i++;
            }
        }
    }
    return lps;
}
  
// // MAIN FUNCTION TO TEST --------------------------------
// console.log("Hello and welcome!");
// // Testing Math Utilities
// console.log("Factorial of 5:", factorial(5));
// console.log("GCD of 28 and 35:", gcd(28, 35));
// console.log("10th Fibonacci number:", fibonacci(10));
// console.log("Is 29 prime?", isPrime(29));
// console.log("2 raised to power 3:", power(2, 3));
// // Testing DSA Problems
// const arr = [1, 3, 5, 7, 9];
// console.log("Index of 5 in array:", binarySearch(arr, 5));
// // Testing Divisors
// console.log("Divisors of 28:", findDivisors(28));
// // Testing Perfect Number
// console.log("Is 6 a perfect number?", isPerfectNumber(6));
// // Testing Largest Prime Factor
// console.log("Largest prime factor of 56:", largestPrimeFactor(56));
// // Testing Prime Factorization
// console.log("Prime factorization of 56:", primeFactorization(56));
// // Testing Sieve of Eratosthenes
// console.log("Primes up to 30:", sieveOfEratosthenes(30));
// Export functions for testing
module.exports = {
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
};
