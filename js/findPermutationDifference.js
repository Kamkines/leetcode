var findPermutationDifference = function(s, t) {
    let count = 0;
    for(let i = 0; s.length > i; i++){
        count += Math.abs(s.indexOf(s[i]) - t.indexOf(s[i]));
    }
    console.log(count)
};


// example
findPermutationDifference(s = "abc", t = "bac")