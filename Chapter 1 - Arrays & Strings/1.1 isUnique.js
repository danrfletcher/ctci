/**
 * --- PROBLEM DESCRIPTION ---
 * 1.1. Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
 */
/*

/**
 * --- INITIAL SOLUTION ---
 * Iterate through string, create bucket for each new character, add 1 to the count each time it is encountered.
 */

const isUnique = (string) => {
  const characters = new Map();
  for (let char of string) {
    characters.has(char) ? false : characters.set(char, true);
  }
  return true;
};

/**
 * --- EXPLANATION ---
 * The above solution has time complexity O(N), which is the best possible outcome given the requirement that the algorithm check the string for duplicate characters.
 * Above solution also has space complexity O(N) as it uses 1 additional data structure to store characters in the string.
 */

/**
 * --- EXTENDED SOLUTION ---
 * Without using additional data structures.
 */

const isUniqueNoExtras = (string) => {
  for (let char of string) {
    for (let innerChar of string) {
      if (char === innerChar) false;
    }
  }
  return true;
};
