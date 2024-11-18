/**
 * --- PROBLEM DESCRIPTION ---
 * 1.2 Check Permutation: Given two strings, write a method to decide if one is a permutation of the other. 
 */
/*

/**
 * --- SOLUTION ---
 * Try to build string 2 from 1.
 */

const checkPermutation = (string1, string2) => {
  if (string1.length != string2.length) return false;
  for (let i = 0; i < string1.length; i++) {
    for (let j = 0; j < string2.length; j++) {
      if (string1[i] === string2[j]) {
        string2 = string2.substring(0,j) + string2.substring(j+1,string2.length);
        if(string2.length === 0) return true
      }
    }
  }
  return false;
}


/* --- TEST CASES --- */
console.log(checkPermutation("abc", "cab")) //true
console.log(checkPermutation("abcd", "abce")) //false
 
/**
 * --- EXPLANATION ---
 * Using the nested for loop avoids the need to calculate all possible permutations which would have time complexity of O((N^2)(N!)), we reduce time complexity to O(N^2)
 */
