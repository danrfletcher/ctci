/**
 * --- PROBLEM DESCRIPTION ---
 * Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures? 
 */
/*

/**
 * --- INITIAL SOLUTION ---
 * Iterate through string, create bucket for each new character, add 1 to the count each time it is encountered.
 */

const characters = Map();

const isUnique = (string) => {
    string.forEach(char => characters.has(char) ? false : characters.set(char.toString(), {count: 1}));
	return true;
}

/**
 * --- EXPLANATION ---
 * The above solution has runtime O(N), which is the best possible outcome given the requirement that the algorithm check the string for duplicate characters.
 */

