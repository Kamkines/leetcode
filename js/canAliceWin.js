var canAliceWin = function(nums) {
    let unambiguous = 0;
    let multiValued = 0;
    nums.map(item => {
        if(item < 10){
            unambiguous += item
        }
        else{
            multiValued += item
        }
    });

    return unambiguous > multiValued || unambiguous < multiValued
};

// example

canAliceWin([5,5,5,25])