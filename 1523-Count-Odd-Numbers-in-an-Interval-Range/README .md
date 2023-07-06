# 1523. Count Odd Numbers in an Interval Range

This is the solution to the LeetCode problem **#1523 - Count Odd Numbers in an Interval Range**.

## Problem Description

Given two non-negative integers `low` and `high`, your task is to count the number of odd numbers between `low` and `high`, inclusive.

## Example

**Input:**
low = 3, high = 7

**Output:**
3

**Explanation:**
The odd numbers between 3 and 7 are [3, 5, 7].

**Input:**
low = 8, high = 10
**Output:**
1
**Explanation:**
The odd numbers between 8 and 10 are [9].

## Constraints

- 0 <= low <= high <= 10^9

## Approach

The provided code calculates the count of odd numbers using various conditions based on the parity of `low` and `high`. However, the code can be simplified and made more readable by removing unnecessary conditions and combining similar cases.

The time complexity of the solution is O(1), as the number of operations performed does not depend on the input size. Similarly, the space complexity is O(1) since the code uses a fixed amount of memory for variables and does not utilize any data structures that grow with the input size.
