//14. Longest Common Prefix

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

var longestCommonPrefix = function(strs) {
    let outputStr = strs[0];
    if(outputStr.length === 0){
        return ''
    };

    for(let i = 1; i < strs.length; i++){
        if(strs[i].length === 0 ){
            return ''
        }
     let str = '';
    //  let iteratedItem =  outputStr.length <  strs[i].length ? outputStr : strs[i];
       for(let j = 0 ; j <  strs[i].length; j++){
        console.log(outputStr[j], strs[i][j],outputStr[j] == strs[i][j])
       if(outputStr[j] == strs[i][j]) {
        str += outputStr[j]
       }else{
        break
       }
       console.log(str)
     }
     outputStr = str;

    }
    return outputStr
};

console.log(longestCommonPrefix(["cir","ciar"]))