var numberOfPairs = function (nums1, nums2, k) {
    const length1 = nums1.length;
    const length2 = nums2.length;
    let count = 0;
    for (let i = 0; length1 > i; i++) {
        for (let j = 0; length2 > j; j++) {
            let divNum = nums1[i] % (nums2[j] * k);
            if(divNum == 0){
                    count++
            }
        }
    }
    console.log(count)
};

// example
numberOfPairs(nums1 = [1,2,4,12], nums2 = [2,4], k = 3)