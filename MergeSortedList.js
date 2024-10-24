// // 21. Merge Two Sorted Lists

// // You are given the heads of two sorted linked lists list1 and list2.

// // Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// // Return the head of the merged linked list

// let arr1  = [3,7];
// let arr2  = [1,2,3,4];



function mergeSortedLists(list1, list2) {
  let mergedList = [];
  let i = 0; // Pointer for list1
  let j = 0; // Pointer for list2

  // Compare elements of both lists
  while (i < list1.length && j < list2.length) {
      if (list1[i] < list2[j]) {
          mergedList.push(list1[i]);
          i++;
      } else if (list1[i] > list2[j]) {
          mergedList.push(list2[j]);
          j++;
      } else {
          // If both are equal, push both values to mergedList
          mergedList.push(list1[i]);
          mergedList.push(list2[j]);
          i++;
          j++;
      }
  }

  // If there are remaining elements in list1
  while (i < list1.length) {
      mergedList.push(list1[i]);
      i++;
  }

  // If there are remaining elements in list2
  while (j < list2.length) {
      mergedList.push(list2[j]);
      j++;
  }

  return mergedList;
}

// Example usage:
const list1 = [1, 3, 5, 7];
const list2 = [2, 3, 4, 6, 7];
const result = mergeSortedLists(list1, list2);
console.log(result); // Output: [1, 2, 3, 3, 4, 5, 6, 7, 7]
