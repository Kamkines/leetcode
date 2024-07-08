var countConsistentStrings = function(allowed, words) {
    let count = 0;
    for(let i = 0; words.length > i; i++){
        let temp = 0;
        words[i].split('').map((item)=>{
            if(allowed.includes(item)){
                temp++
            }
            else{
                temp--
            }
            
            if(temp == words[i].length){
                count++
            }
        })
    }
    console.log(count)
};

// example
countConsistentStrings(allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"])