var diStringMatch = function(s) {
    let result = [];
    let inc = 0;
    let dec = s.length;
    let i = 0;
    while(result.length !== s.length+1){
        result[i] = s[i] === 'D'? dec--: inc++;
        i++;
    }
    return result;
};

// example

diStringMatch(s = "IDID")