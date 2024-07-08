var checkIfPangram = function (sentence) {
    let seen = new Set();

    for (let item of sentence) {
        seen.add(item)
    }
    
    if (seen.size == 26) {
        return true
    }
    else {
        return false
    }
};

// example

checkIfPangram(sentence = "thequickbrownfoxjumpsoverthelazydog")