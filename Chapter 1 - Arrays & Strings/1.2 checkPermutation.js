/**
 * --- PROBLEM DESCRIPTION ---
 * 1.2 Check Permutation: Given two strings, write a method to decide if one is a permutation of the other. 
 */
/*

/**
 * --- SOLUTION ---
 * Initial solution will be a brute force solution to check if one string is a permutation of another by calculating all permutations
 * 1. Calculate all permutations of 1st string
 * 2. Check if 2nd string is in array of permutations of 1st
 * string 1 is abc
 * permutations are:
 * abc
 * bac
 * cba
 * iterate through the string, lock each character in turn, calculate permutations using the rest of the letters in the string
 */

const checkPermutation = (string1, string2, charIndex = 0, permutations) => {
  let base = false;
  if (charIndex === string1.length - 1) base = true;
  if (base === false) {
    string1.split('').forEach((char, index) => {})
  } else {

  }

};


/* --- TEST CASES --- */


/**
 * --- EXPLANATION ---
 */
