var countAsterisks = function (s) {
    let greenFlag = true, count = 0;
    for (let i = 0; i < s.length; i++) {
        if (greenFlag && s[i] == "*") {
            count++;
        };
        if (s[i] == "|") {
            greenFlag = !greenFlag
        };
    }
    return count
};

// example

countAsterisks("l|*e*et|c**o|*de|")