// 58. Length of Last Word

// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal 
// substring
//  consisting of non-space characters only.

 

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

var lengthOfLastWord = function(s) {
  let text = s.trimEnd();
    for(let i = text.length; i >= 0 ; i-- ){
       if(text[i] === ' ' && text[i -1] !== ''){
        
        
        return  text.length - 1 - i
      
       }else if(!text.includes(' ')) {
        return text.length
       }
      
    }
};

console.log(lengthOfLastWord("   fly me   to   the moon  "))