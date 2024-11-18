/**
 * --- PROBLEM DESCRIPTION ---
 * Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures? 
 */
/*

/**
 * --- INITIAL SOLUTION ---
 * Iterate through string, create bucket for each new character, add 1 to the count each time it is encountered.
 */

const isUnique = (string) => {
    const characters = Map();
    return string.forEach(char => characters.has(char) ? false : characters.set(char, true)) || true;
}

/**
 * --- EXPLANATION ---
 * The above solution has time complexity O(N), which is the best possible outcome given the requirement that the algorithm check the string for duplicate characters.
 * Above solution also has space complexity O(N) as it uses 1 additional data structure to store characters in the string.
 */

/**
 * --- EXTENDED SOLUTION ---
 * Without using additional data structures.
 */

const isUniqueNoExtraData = (string) => {
    const characters = Map();
    return string.forEach(charPointer1 => string.forEach((charPointer2) => {
        if (charPointer1 === charPointer2) return true;
    })) || true;
}
