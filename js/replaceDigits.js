var replaceDigits = function(s) {
    let newS = '';
    for(let i=0;s.length > i; i++){
        if(!isNaN(s[i])){
            let temp = newS.charCodeAt(newS.length - 1) + parseInt(s[i]);
            console.log(String.fromCharCode(temp))
            newS += String.fromCharCode(temp);
        }
        else{
            newS += s[i]
        }
    }

    console.log(newS)
};

// example
replaceDigits(s = "a1b2c3d4e")