var countPrefixes = function(words, s) {
    let count = 0;
    for (let i = 0; words.length > i; i++){
        if(s.startsWith(words[i])){
            count++
        }
    }
    console.log(count)
};

// var countPrefixes = function(words, s) {
//     console.log(words.filter((word) => s.startsWith(word)).length)
// };

// example

countPrefixes(words = ["a","a"], s = "aa")