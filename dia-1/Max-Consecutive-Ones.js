"use strict";

const nums1 = [1, 1, 0, 1, 1, 1];
const nums2 = [
  1,
  1,
  1,
  0,
  1,
  0,
  1,
  1,
  1,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1
];

function findMaxConsecutives(nums) {
  let temp = 0;
  let mayor = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      temp++;
      if (temp > mayor) {
        mayor = temp;
      }
    }
    if (nums[i] === 0) {
      temp = 0;
    }
  }
  return mayor;
}

console.log(findMaxConsecutives(nums2));
