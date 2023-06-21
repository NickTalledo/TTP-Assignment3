// Finds two numbers in an array that add up to a given target
function twoSum(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

// Reverses a given string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Finds the length of the longest substring without repeating characters
function lengthOfLongestSubstring(s) {
  let max = 0; // Variable to store the maximum length of substring without repeating characters
  let start = 0; // Start index of the current substring
  let map = {}; // Mapping of characters to their last seen index

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] > start) {
      // If the current character has been seen before and its last occurrence is after the start index,
      // update the start index to skip the repeated character
      start = map[s[i]];
    }
    map[s[i]] = i; // Update the last seen index of the current character
    max = Math.max(max, i - start); // Calculate the length of the current substring and update the maximum length
  }
  return max;
}

// Finds the maximum area of water that can be contained between two vertical lines
function maxArea(height) {
  let left = 0; // Pointer at the leftmost line
  let right = height.length - 1; // Pointer at the rightmost line
  let max = 0; // Variable to store the maximum area

  while (left < right) {
    // Calculate the area between the two lines formed by the current pointers
    // The area is determined by the minimum height of the lines multiplied by the distance between them
    max = Math.max(max, Math.min(height[left], height[right]) * (right - left));

    // Move the pointer that corresponds to the smaller height
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
}

module.exports = { twoSum, reverseString, lengthOfLongestSubstring, maxArea };
