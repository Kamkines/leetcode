var countBits = function(n) {
    let ans = [];

    for (let i = 0; n + 1 > i; i++){
        let temp = i.toString(2);
        let lengthTemp = temp.split("").filter(item => {
            return item == '1'
        }).length
        ans.push(lengthTemp);
    }

    console.log(ans)
};

// example

countBits(5)