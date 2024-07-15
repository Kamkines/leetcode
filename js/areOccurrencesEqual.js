var areOccurrencesEqual = function(s) {
    let obj = {};
    for (let item of s){
        if(obj[item]){
            obj[item]++
        }
        else{
            obj[item] = 1
        }
    }
    const allVal = Object.values(obj);
    console.log(allVal.every(val => val === allVal[0]));
}

// example 

areOccurrencesEqual(s = "aaabb")