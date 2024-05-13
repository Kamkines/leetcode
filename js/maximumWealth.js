var maximumWealth = function(accounts) {
    let arrAccount = [];
    for(item of accounts){
        arrAccount.push(item.reduce((sum, num) => sum + num, 0))
    }
    console.log(Math.max(...arrAccount));
};

// example
maximumWealth([[1,5],[7,3],[3,5]])