var selfDividingNumbers = function(left, right) {
    let arr = [];
    for(let i = left; right+1 > i; i++){
        if(i > 9){
            let number = String(i).split('');
            let flag = true;
            for(let y = 0; number.length > y; y++){
                if(i % Number(number[y]) != 0){
                    flag = false
                }
            }
            if(flag == true){
                arr.push(i)
            }
        }
        else{
            if(i % i == 0){
                arr.push(i)
            }
        }
    }
    console.log(arr)
};

// example

selfDividingNumbers(left = 47, right = 85)