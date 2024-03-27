var countMatches = function(items, ruleKey, ruleValue) {
    switch(ruleKey){
        case "type":
            console.log(
                items.filter(function(item){
                    return item[0] == ruleValue
                }).length
            )
            break;
        case "color":
            console.log(
                items.filter(function(item){
                    return item[1] == ruleValue
                }).length
            )
            break;
        case "name":
            console.log(
                items.filter(function(item){
                    return item[2] == ruleValue
                }).length
                )
            break;
    }
};


// example 
countMatches(items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone")