var map = function(arr, fn) {
    let newArray = [];
    for(let i = 0; i < arr.length; i++){
        newArray.push(fn(arr[i],i));
    }
    return newArray
};

// Example 

arr = [10,20,30], fn = function constant() { return 42; }


map(arr,fn)