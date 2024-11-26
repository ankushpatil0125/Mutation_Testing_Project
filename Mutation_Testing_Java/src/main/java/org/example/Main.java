package org.example;

import java.util.*;

public class Main {

    // MATH UTILITIES ---------------------------------------

    /**
     * Function to calculate the factorial of a number.
     */
    public static long factorial(int n) {
        if (n < 0) throw new IllegalArgumentException("Factorial is undefined for negative numbers.");
        long fact = 1;
        for (int i = 1; i <= n; i++) {
            fact *= i;
        }
        return fact;
    }

    /**
     * Function to calculate the greatest common divisor (GCD) of two numbers.
     * Uses the Euclidean algorithm.
     */
    public static int gcd(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return Math.abs(a);
    }

    /**
     * Function to calculate the nth Fibonacci number.
     */
    public static long fibonacci(int n) {
        if (n < 0) throw new IllegalArgumentException("Fibonacci is undefined for negative indices.");
        if (n == 0) return 0;
        if (n == 1) return 1;
        long a = 0, b = 1;
        for (int i = 2; i <= n; i++) {
            long temp = a + b;
            a = b;
            b = temp;
        }
        return b;
    }

//    /**
//     * Function to check if a number is prime.
//     * @param n The number.
//     * @return True if prime, false otherwise.
//     */
//    public static boolean isPrime(int n) {
//        if (n <= 1) return false;
//        for (int i = 2; i <= Math.sqrt(n); i++) {
//            if (n % i == 0) return false;
//        }
//        return true;
//    }

    /**
     * Function to calculate the power of a number using recursion.
     */
    public static long power(int base, int exp) {
        if (exp < 0) throw new IllegalArgumentException("Exponent cannot be negative.");
        if (exp == 0) return 1;
        return base * power(base, exp - 1);
    }
    /**
     * Function to calculate the Least Common Multiple (LCM) of two numbers.
     */
    public static int lcm(int a, int b) {
        return (a / gcd(a, b)) * b;
    }
    /**
     * Function to find all divisors of a number.
     */
    public static int[] findDivisors(int n) {
        if (n <= 0) {
            throw new IllegalArgumentException("Number must be greater than 0");
        }
        List<Integer> divisors = new ArrayList<>();
        for (int i = 1; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                divisors.add(i); // Add divisor
                if (i != n / i) {
                    divisors.add(n / i); // Add the complement divisor
                }
            }
        }
        Collections.sort(divisors); // Sort the divisors in ascending order
        return divisors.stream().mapToInt(i -> i).toArray(); // Convert list to array
    }

    /**
     * Function to check if a number is a perfect number..
     */
    public static boolean isPerfectNumber(int n) {
        if (n <= 1) return false;
        int sum = 1;
        for (int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                sum += i;
                if (i != n / i) sum += n / i;
            }
        }
        return sum == n;
    }
    /**
     * Function to find the largest prime factor of a number.
     */
    public static int largestPrimeFactor(int n) {
        if (n <= 1) {
            throw new IllegalArgumentException("Number must be greater than 1.");
        }
        int largest = -1;

        // Divide n by 2 until it is odd
        while (n % 2 == 0) {
            largest = 2;
            n /= 2;
        }

        // Now check for odd factors
        for (int i = 3; i <= Math.sqrt(n); i += 2) {
            while (n % i == 0) {
                largest = i;
                n /= i;
            }
        }

        // If n is still a prime number greater than 2
        if (n > 2) {
            largest = n;
        }

        return largest;
    }

//    /**
//     * Function to find the prime factors of a number.
//     * @param n The number.
//     * @return Array of prime factors.
//     */
//    public static int[] primeFactorization(int n) {
//        if (n <= 1) throw new IllegalArgumentException("Number must be greater than 1.");
//        java.util.ArrayList<Integer> factors = new java.util.ArrayList<>();
//        for (int i = 2; i <= Math.sqrt(n); i++) {
//            while (n % i == 0) {
//                factors.add(i);
//                n /= i;
//            }
//        }
//        if (n > 1) factors.add(n);
//        return factors.stream().mapToInt(Integer::intValue).toArray();
//    }
    /**
     * Function to generate all prime numbers up to a given limit using the Sieve of Eratosthenes.
     */
    public static int[] sieveOfEratosthenes(int limit) {
        boolean[] isPrime = new boolean[limit + 1];
        Arrays.fill(isPrime, true);
        isPrime[0] = isPrime[1] = false;
        for (int i = 2; i * i <= limit; i++) {
            if (isPrime[i]) {
                for (int j = i * i; j <= limit; j += i) {
                    isPrime[j] = false;
                }
            }
        }
        return java.util.stream.IntStream.range(2, limit + 1).filter(i -> isPrime[i]).toArray();
    }

    //Armstrong NO
    public static boolean isArmstrongNumber(int num) {
        String numStr = Integer.toString(num);
        int length = numStr.length();
        int sum = 0;

        for (int i = 0; i < length; i++) {
            int digit = Character.getNumericValue(numStr.charAt(i));
            sum += (int) Math.pow(digit, length);
        }

        return sum == num;
    }

    // DSA FUNCTIONS ---------------------------------------
    //Bubble Sort
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap arr[j] and arr[j+1]
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

    //Find Max
    public static int findMax(int[] arr) {
        if (arr.length == 0) {
            throw new IllegalArgumentException("Array must not be empty");
        }
        int max = arr[0];
        for (int num : arr) {
            if (num > max) {
                max = num;
            }
        }
        return max;
    }

    //Rev a String
    public static String reverseString(String str) {
        StringBuilder reversed = new StringBuilder(str);
        return reversed.reverse().toString();
    }

    //areAnagrams
    public static boolean areAnagrams(String str1, String str2) {
        // Normalize by removing non-alphanumeric characters, converting to lowercase, and sorting
        String normalizedStr1 = normalize(str1);
        String normalizedStr2 = normalize(str2);

        return normalizedStr1.equals(normalizedStr2);
    }

    private static String normalize(String str) {
        return str.replaceAll("[^a-zA-Z0-9]", "")
                .toLowerCase()
                .chars()
                .sorted()
                .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
                .toString();
    }

    /**
     * Function to check if a string is a palindrome.
     */
    public static boolean isPalindrome(String str) {
        int left = 0, right = str.length() - 1;
        while (left < right) {
            if (str.charAt(left) != str.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    /**
     * Binary Search Algorithm.
     */
    public static int binarySearch(int[] arr, int target) {
        int left = 0, right = arr.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (arr[mid] == target) return mid;
            else if (arr[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return -1;
    }


    /**
     * Function to find the shortest path in a graph using Dijkstra's Algorithm.
     */
    public static int[] dijkstra(int[][] graph, int source) {
        int V = graph.length;
        int[] dist = new int[V];
        boolean[] visited = new boolean[V];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[source] = 0;

        for (int i = 0; i < V - 1; i++) {
            int u = minDistance(dist, visited);
            visited[u] = true;

            for (int v = 0; v < V; v++) {
                if (!visited[v] && graph[u][v] != 0 &&
                        dist[u] != Integer.MAX_VALUE &&
                        dist[u] + graph[u][v] < dist[v]) {
                    dist[v] = dist[u] + graph[u][v];
                }
            }
        }
        return dist;
    }

    /**
     * Helper function for Dijkstra's algorithm to find the vertex with the smallest distance.
     */
    private static int minDistance(int[] dist, boolean[] visited) {
        int min = Integer.MAX_VALUE, minIndex = -1;
        for (int v = 0; v < dist.length; v++) {
            if (!visited[v] && dist[v] <= min) {
                min = dist[v];
                minIndex = v;
            }
        }
        return minIndex;
    }

    //Knapsack
    public static int knapsack(int[] weights, int[] values, int capacity) {
        int n = weights.length;
        int[][] dp = new int[n + 1][capacity + 1];

        for (int i = 1; i <= n; i++) {
            for (int w = 1; w <= capacity; w++) {
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
    public static List<Integer> bfs(Map<Integer, List<Integer>> graph, int startNode) {
        Set<Integer> visited = new HashSet<>();
        Queue<Integer> queue = new LinkedList<>();
        List<Integer> result = new ArrayList<>();

        queue.offer(startNode);
        visited.add(startNode);

        while (!queue.isEmpty()) {
            int node = queue.poll();
            result.add(node);

            for (int neighbor : graph.get(node)) {
                if (!visited.contains(neighbor)) {
                    visited.add(neighbor);
                    queue.offer(neighbor);
                }
            }
        }

        return result;
    }

    //LCS
    public static int lcs(String X, String Y) {
        int m = X.length(), n = Y.length();
        int[][] dp = new int[m + 1][n + 1];

        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (X.charAt(i - 1) == Y.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }

        return dp[m][n];
    }


    //LIS
    public static int lis(int[] arr) {
        int n = arr.length;
        int[] dp = new int[n];
        Arrays.fill(dp, 1);

        for (int i = 1; i < n; i++) {
            for (int j = 0; j < i; j++) {
                if (arr[i] > arr[j]) {
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                }
            }
        }

        return Arrays.stream(dp).max().getAsInt();
    }


//    //Kruskals
//    class DisjointSet {
//        private int[] parent;
//        private int[] rank;
//
//        public DisjointSet(int n) {
//            parent = new int[n];
//            rank = new int[n];
//            for (int i = 0; i < n; i++) {
//                parent[i] = i;
//            }
//        }
//
//        public int find(int x) {
//            if (parent[x] != x) {
//                parent[x] = find(parent[x]);
//            }
//            return parent[x];
//        }
//
//        public void union(int x, int y) {
//            int rootX = find(x);
//            int rootY = find(y);
//
//            if (rootX != rootY) {
//                if (rank[rootX] > rank[rootY]) {
//                    parent[rootY] = rootX;
//                } else if (rank[rootX] < rank[rootY]) {
//                    parent[rootX] = rootY;
//                } else {
//                    parent[rootY] = rootX;
//                    rank[rootX]++;
//                }
//            }
//        }
//    }
//    public static List<Edge> kruskal(int vertices, List<Edge> edges) {
//        DisjointSet ds = new DisjointSet(vertices);
//        edges.sort(Comparator.comparingInt(e -> e.weight));
//
//        List<Edge> mst = new ArrayList<>();
//        for (Edge edge : edges) {
//            int u = edge.u;
//            int v = edge.v;
//
//            if (ds.find(u) != ds.find(v)) {
//                ds.union(u, v);
//                mst.add(edge);
//            }
//        }
//
//        return mst;
//    }
//
//    static class Edge {
//        int u, v, weight;
//
//        public Edge(int u, int v, int weight) {
//            this.u = u;
//            this.v = v;
//            this.weight = weight;
//        }
//    }

    //Prims
    public static List<int[]> prim(int[][] graph, int start) {
        int vertices = graph.length;
        boolean[] visited = new boolean[vertices];
        int[] minEdge = new int[vertices];
        Arrays.fill(minEdge, Integer.MAX_VALUE);
        int[] parent = new int[vertices];
        Arrays.fill(parent, -1);

        minEdge[start] = 0;
        List<int[]> result = new ArrayList<>();

        for (int count = 0; count < vertices - 1; count++) {
            int u = -1;
            for (int i = 0; i < vertices; i++) {
                if (!visited[i] && (u == -1 || minEdge[i] < minEdge[u])) {
                    u = i;
                }
            }

            visited[u] = true;
            for (int v = 0; v < vertices; v++) {
                if (graph[u][v] != 0 && !visited[v] && graph[u][v] < minEdge[v]) {
                    minEdge[v] = graph[u][v];
                    parent[v] = u;
                }
            }
        }

        for (int i = 0; i < vertices; i++) {
            if (parent[i] != -1) {
                result.add(new int[]{parent[i], i, graph[parent[i]][i]});
            }
        }

        return result;
    }

    //RabinKarp
    public static List<Integer> rabinKarp(String text, String pattern) {
        List<Integer> result = new ArrayList<>();
        int base = 256;  // Size of the alphabet
        int prime = 101; // A prime number for hashing
        int m = pattern.length();
        int n = text.length();
        int patternHash = 0;
        int textHash = 0;
        int h = 1;

        for (int i = 0; i < m - 1; i++) {
            h = (h * base) % prime;
        }

        for (int i = 0; i < m; i++) {
            patternHash = (base * patternHash + pattern.charAt(i)) % prime;
            textHash = (base * textHash + text.charAt(i)) % prime;
        }

        for (int i = 0; i <= n - m; i++) {
            if (patternHash == textHash) {
                boolean match = true;
                for (int j = 0; j < m; j++) {
                    if (text.charAt(i + j) != pattern.charAt(j)) {
                        match = false;
                        break;
                    }
                }
                if (match) result.add(i);
            }

            if (i < n - m) {
                textHash = (base * (textHash - text.charAt(i) * h) + text.charAt(i + m)) % prime;
                if (textHash < 0) textHash += prime;
            }
        }

        return result;
    }

    //KMP
    public static List<Integer> KMPSearch(String text, String pattern) {
        int[] lps = computeLPSArray(pattern);
        List<Integer> result = new ArrayList<>();
        int i = 0, j = 0;

        while (i < text.length()) {
            if (pattern.charAt(j) == text.charAt(i)) {
                i++;
                j++;
            }

            if (j == pattern.length()) {
                result.add(i - j);
                j = lps[j - 1];
            } else if (i < text.length() && pattern.charAt(j) != text.charAt(i)) {
                if (j != 0) {
                    j = lps[j - 1];
                } else {
                    i++;
                }
            }
        }
        return result;
    }

    private static int[] computeLPSArray(String pattern) {
        int[] lps = new int[pattern.length()];
        int length = 0;
        int i = 1;

        while (i < pattern.length()) {
            if (pattern.charAt(i) == pattern.charAt(length)) {
                length++;
                lps[i] = length;
                i++;
            } else {
                if (length != 0) {
                    length = lps[length - 1];
                } else {
                    i++;
                }
            }
        }
        return lps;
    }


    // MAIN FUNCTION TO TEST --------------------------------

    public static void main(String[] args) {
//        // TIP Press <shortcut actionId="ShowIntentionActions"/> with your caret at the highlighted text
//        // to see how IntelliJ IDEA suggests fixing it.
//        System.out.printf("Hello and welcome!\n");
//
//        for (int i = 1; i <= 5; i++) {
//            // TIP Press <shortcut actionId="Debug"/> to start debugging your code. We have set one <icon src="AllIcons.Debugger.Db_set_breakpoint"/> breakpoint
//            // for you, but you can always add more by pressing <shortcut actionId="ToggleLineBreakpoint"/>.
//            System.out.println("i = " + i);
//        }
//
//        // Testing Math Utilities
//        System.out.println("Factorial of 5: " + factorial(5));
//        System.out.println("GCD of 28 and 35: " + gcd(28, 35));
//        System.out.println("10th Fibonacci number: " + fibonacci(10));
////        System.out.println("Is 29 prime? " + isPrime(29));
//        System.out.println("2 raised to power 3: " + power(2, 3));
//
//        // Testing DSA Problems
//        int[] arr = {1, 3, 5, 7, 9};
//        System.out.println("Index of 5 in array: " + binarySearch(arr, 5));
//
//        // Testing Divisors
//        System.out.println("Divisors of 28: " + Arrays.toString(findDivisors(28)));
//
//        // Testing Perfect Number
//        System.out.println("Is 6 a perfect number? " + isPerfectNumber(6));
//
//        // Testing Largest Prime Factor
//        System.out.println("Largest prime factor of 56: " + largestPrimeFactor(56));
//
////        // Testing Prime Factorization
////        System.out.println("Prime factorization of 56: " + Arrays.toString(primeFactorization(56)));
//
//        // Testing Sieve of Eratosthenes
//        System.out.println("Primes up to 30: " + Arrays.toString(sieveOfEratosthenes(30)));
//        int num = 153; // Example number
//        if (isArmstrongNumber(num)) {
//            System.out.println(num + " is an Armstrong number.");
//        } else {
//            System.out.println(num + " is not an Armstrong number.");
//        }
//        // Testing DSA Problems
//        String str1 = "Listen";
//        String str2 = "Silent";
//        System.out.println("Are anagrams: " + areAnagrams(str1, str2));
//
//        System.out.println();
//        String str = "Hello World";
//        System.out.println("Reversed string: " + reverseString(str));
//
//        System.out.println();
//        int[] arr1 = {1, 2, 3, 4, 5};
//        System.out.println("Maximum element: " + findMax(arr1));
//        System.out.println();
//        int[] arr2 = {64, 34, 25, 12, 22, 11, 90};
//        bubbleSort(arr2);
//        System.out.println("Sorted array: " + Arrays.toString(arr2));
//
//        System.out.println();
////        int[] nums = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
////        System.out.println("Maximum Subarray Sum: " + maxSubarraySum(nums));
//
//        int[][] graph = {
//                {0, 10, 0, 0, 0},
//                {10, 0, 5, 0, 0},
//                {0, 5, 0, 20, 1},
//                {0, 0, 20, 0, 2},
//                {0, 0, 1, 2, 0}
//        };
//        int[] distances = dijkstra(graph, 0);
//        System.out.println("Shortest distances from source: " + Arrays.toString(distances));
    }
}
