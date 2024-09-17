const findPalindrome = (str) => {
    let right = str.length - 1;
    let left = 0;
    while(right >= left){
        if(str[right] !== str[left]){
            return false
        }
     left++;
     right--;
    }
    return true

}

console.log(findPalindrome('madam'))

const isPalindrome = (x) => {
    let str = x.toString();
    console.log(str)
    let left = 0;
    let right = str.length - 1;
    while (right >= left) {
        if (str[right] !== str[left]) {
            return false;
        }
        left++
        right--
    }

    return true
}
console.log(isPalindrome(10))