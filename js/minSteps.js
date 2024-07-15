var minSteps = function(s, t) {
    let count = new Array(26).fill(0); // вхождение букв
    let steps = 0;

    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - 97]++;
        count[t.charCodeAt(i) - 97]--;
    }

    for (let i = 0; i < 26; i++) {
        steps += Math.abs(count[i]);
    }

    return steps / 2;
};

// example

minSteps(s = "bab", t = "aba")