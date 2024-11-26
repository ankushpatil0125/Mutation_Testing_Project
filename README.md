# Mutation Testing on DSA Problems

### Team Members:
- **Ankush Patil** (Roll Number: MT2023101)
- **Shatakshi Tiwari** (Roll Number: MT2023175)

### Course: CSE 731 - Software Testing  
### Instructor: Prof. Meenakshi D Souza

### Project Overview:
This project involves mutation testing on various Data Structure and Algorithm (DSA) problems using **PIT Mutation Testing** for Java and **Stryker Mutator** for JavaScript. The aim was to evaluate the effectiveness of test cases by generating mutants and analyzing how well the test cases kill these mutants.

### Tools Used:
1. **PIT Mutation Testing** (Java)  
   - Link: [https://pitest.org/](https://pitest.org/)
2. **Stryker Mutator** (JavaScript)  
   - Link: [https://stryker-mutator.io/](https://stryker-mutator.io/)

### Mutation Operators Used:
- **Unit Level**: Arithmetic Operator Mutation, Relational Operator Mutation, Logical Operator Mutation
- **Integration Level**: IVPR (Integration Parameter Variable Replacement), IPEX (Integration Parameter Exchange), IMCD (Integration Method Call Deletion)

### Project Structure:
- **Java Code**: Implemented core DSA problems and tested using PIT mutation framework.
- **JavaScript Code**: Implemented equivalent DSA problems and tested using Stryker mutator framework.
- **Test Cases**: Comprehensive unit and integration level test cases designed to target and kill mutants.

### Instructions:
1. **For Java**:  
   - Run `mvn org.pitest:pitest-maven:mutationCoverage` to generate mutation reports.
   - Test cases are designed using JUnit for coverage and mutation effectiveness.

2. **For JavaScript**:  
   - Run `npx stryker run` to execute mutation tests.
   - Jest test cases were written to cover various mutation scenarios.

### Results:
- **PIT Mutation Testing (Java)**:  
   - Line Coverage: 97%  
   - Mutation Score: 87%  
   - Mutants Killed: 230  
   - Total Mutants: 268  

- **Stryker Mutation Testing (JavaScript)**:  
   - Line Coverage: 84.48%  
   - Mutation Score: 81.05%  
   - Mutants Killed: 407  
