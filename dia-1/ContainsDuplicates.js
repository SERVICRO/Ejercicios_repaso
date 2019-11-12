"use strict";

const nums1 = [1, 2, 3, 1];
const nums2 = [1, 2, 3, 4];

function containsDuplicate(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let k = i + 1; k < nums.length; k++) {
      if (nums[i] === nums[k]) {
        return true;
      }
    }
  }
  return false;
}

console.log(containsDuplicate(nums1));
