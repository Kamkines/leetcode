var restoreString = function (s, indices) {
    let newString=[];
    let arrayS = s.split("");
    for (let i = 0; i < arrayS.length; i++) {
        newString[indices[i]] = arrayS[i];
    }
    return newString.join("");
};

// example

restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3])