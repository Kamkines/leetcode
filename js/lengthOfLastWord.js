var lengthOfLastWord = function(s) {
    let array = s.split(" ").filter(function(item){
        return item != ""
    })

    console.log(array[array.length-1].length)
};


// example
lengthOfLastWord("   fly me   to   the moon  ")