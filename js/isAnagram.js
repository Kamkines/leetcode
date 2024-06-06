var isAnagram = function (s, t) {
    if (s.length != t.length) {
        return false
    }

    const count = new Array(26).fill(0);

    for(let idx = 0; idx < s.length; idx++){
        count[s.charCodeAt(idx)-97]++;
    }
    for(let idx = 0; idx < t.length; idx++){
        count[t.charCodeAt(idx)-97]--;
    }

    for (let idx = 0; idx < 26; idx++) {
        if(count[idx] != 0)
            return false;
    }
    return true;
};

// example

isAnagram(s = "rat", t = "car")