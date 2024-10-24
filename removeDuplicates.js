// 26. Remove Duplicates from Sorted Array

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.

// var removeDuplicates = function(nums) {
//     let arr = []
//    for(let i = 0 ; i < nums.length; i++){
//     if(arr.indexOf(nums[i])  === -1){
//       arr.push(nums[i])
//     }
//    }
//    console.log(arr,nums);
   
//  return  arr
// };

// removeDuplicates([0,0,1,1,1,2,2,3,3,4])
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0; // Handle empty array case

    let k = 1; // Pointer for the next unique element position

    for (let i = 1; i < nums.length; i++) {
      
        if (nums[i] !== nums[i - 1]) { // Check for a new unique element
            nums[k] = nums[i]; // Place it at the k-th position
            k++; // Increment the unique count
        }
        nums
    }

    return k; // Return the count of unique elements
};

// Example usage
let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let k = removeDuplicates(nums);
console.log(k); // Output: 5
console.log(nums.slice(0, k)); // Output: [0, 1, 2, 3, 4]
