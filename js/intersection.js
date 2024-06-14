var intersection = function (nums1, nums2) {
    let uniqNums1 = [...new Set(nums1)]; // убирает дубликаты, также есть способ через filter/indexOf и через reduce
    let uniqNums2 = [...new Set(nums2)]; // убирает дубликаты, также есть способ через filter/indexOf и через reduce
    let resultArr = uniqNums1.concat(uniqNums2); // uniqNums1.push(...uniqNums2); OR uniqNums1.concat(uniqNums2); OR [...uniqNums1, ...uniqNums2]
    
    const seen = new Set();
    const duplicates = new Set();

    resultArr.forEach((num) => {
        if (seen.has(num)) {
            duplicates.add(num);
        } else {
            seen.add(num);
        }
    });

    console.log(Array.from(duplicates))

};

//solution from leetcode
// const intersection = (nums1, nums2) => {
//     // Create sets from the arrays to efficiently perform set operations.
//     const set1 = new Set(nums1);
//     const set2 = new Set(nums2);

//     // Create a new set from the intersection of set1 and set2 using filter and has.
//     // Convert the resulting set back to an array using Array.from.
//     return Array.from(new Set([...set1].filter(x => set2.has(x))));
// };

// example 

intersection(nums1 = [1, 2, 2, 1], nums2 = [2, 2])