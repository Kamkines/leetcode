var numberGame = function(nums) {
    let newArr = [];
    let tempArr = [];
    while(nums.length){
        let minValue = Math.min(...nums);
        let minValueIndex = nums.indexOf(minValue);
        tempArr.push(minValue);

        if(tempArr.length == 2){
            newArr.push(tempArr.sort((a, b) => b - a));
            tempArr = [];
        }

        nums.splice(minValueIndex, 1);
    }

    console.log(newArr.flat())
};


// var numberGame = function(nums) {

//     nums = nums.sort((a,b)=>b-a) сортировка от большего к меньшему, т.е. [7,6,5,4,3,2]
//     const arr = []

//     while(nums.length){
//         let one = nums.pop() убираем первое число с конца, в первой итерации это 2 
//         let two = nums.pop() убираем первое число с конца, в первой итерации это 3 
//         arr.push(two) вкладываем в новый массив сначала, в первой итерации 3 
//         arr.push(one) вкладываем в новый массив, в первой итерации  2
//     }
//     return arr
// };


// example

numberGame([5,4,2,3,7,6])

