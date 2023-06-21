// Reverses a given string
function reverse(str) {
  // Split the string into an array of characters, reverse the order, and join them back into a string
  return str.split("").reverse().join("");
}

// Checks if a given string is a palindrome
function palindrome(str) {
  // Check if the string is equal to its reversed version using the reverse() function defined above
  return str === reverse(str);
}

module.exports = { reverse, palindrome };
