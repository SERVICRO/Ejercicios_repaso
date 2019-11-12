"use strict";

const nums1 = [0, 1, 0, 0, 0, 0, 1, 0, 3, 0, 1, 0, 12];

function moveZeros(nums) {
  const zeros = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      i = i - 1;
      zeros.push(0);
    }
  }
  nums = nums.concat(zeros);
  return nums;
}
console.log(moveZeros(nums1));
