const maxNumber =(arr) =>{
    let num = arr[0]
    let secondMax 
for (let i = 1; i < arr.length; i++) {
   if(arr[i] > num) {
    secondMax = num
    num = arr[i]
   }else if(arr[i] > secondMax){
    secondMax =arr[i]
   }
   secondMax
}
return num
}

console.log(maxNumber([3,5,7,9,56,45,32,55,24,54]))

var myarray = [1, 2, 5, 5,6,6,6,7,2];
var myarr =[];
for(var i = 0; i < myarray.length-1; i++){
  for(var j = i+1; j <myarray.length; j++){
if(myarray[i] === myarray[j]){
  myarr.push(myarray[j]);
}
  }
}
console.log(myarr)

function countIntegers(arr) {
    const countObject = {};
    let maxCount = null
    let maxNum = 0
    for (const num of arr) {
        if (countObject[num]) {
            countObject[num]++;
        } else {
            countObject[num] = 1;
        }
    }

    for (const key in countObject){
    if(countObject[key] > maxCount){
        maxCount = countObject[key];
        maxNum = key
    }
    }

    return `${maxNum} is ${maxCount} times`;
}

// Example usage
const numbers = [1, 2, 2, 3, 1, 4, 1, 2,2];
const result = countIntegers(numbers);
console.log(result); // Output: { '1': 3, '2': 3, '3': 1, '4': 1 }
