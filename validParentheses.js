//20. Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

var isValid = function(s) {
let pattersToRemove = ['()','{}','[]']
let found = true 
while(found){
   found = false;
   for(let pattern of pattersToRemove){
      let index = s.indexOf(pattern)
      console.log(index)
      if(index !== -1){
         s = s.slice(0, index) + s.slice(index + pattern.length)
         found = true
      }
   }
}
if(s === '') {
   return true 
}else {
   return false
}
};

console.log(isValid("({})"))