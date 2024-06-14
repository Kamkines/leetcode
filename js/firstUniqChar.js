var firstUniqChar = function(s) {
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) == s.lastIndexOf(s[i])) {
            return i;
        }
    }
    return -1;
};

// var firstUniqChar = function(s) {
//     let indexChar = -1;
//     for(let i = 0; s.length > i; i++){
//         let tempVar = s.split('').filter((item) => s[i] == item).length;
//         if(tempVar == 1){
//             indexChar = i
//             break
//         }
//     }
//     console.log(indexChar)
// };

// example

firstUniqChar("leetcode")